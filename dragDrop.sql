use testStratsignerCom; 
Declare @ProjectId bigint = 23; Declare @MIndexFrom int = 1391; declare @MIndexToAfter int = 1863;

Declare @aa Table (Id uniqueidentifier, MIndex int, s_Index int IDENTITY(1,1));
Insert into @aa select Id,  MIndex from Action 
	where ProjectId = @ProjectId and @MIndexFrom <= MIndex and MIndex <= @MIndexToAfter order by MIndex, CreatedDate;
Declare @ab Table (Id uniqueidentifier, MIndex int, s_Index int);
Declare @mCount int = (SELECT COUNT(*) FROM @aa);
insert into @ab select Id, MIndex, s_Index - 1 from @aa where MIndex <> @MIndexFrom;
insert into @ab select Id, MIndex, @mCount from @aa where MIndex = @MIndexFrom;

MERGE @ab as Target
USING @aa as Source
On Source.s_Index = Target.s_Index
WHEN MATCHED THEN UPDATE SET
	Target.MIndex = Source.MIndex;

select Id, MIndex, Name from Action where ProjectId = @ProjectId and @MIndexFrom <= MIndex and MIndex <= @MIndexToAfter order by MIndex;

Update a Set a.MIndex = b.MIndex 
From Action as a INNER JOIN @ab as b ON a.Id = b.Id
WHERE a.Id IN (SELECT Id from @ab);

select Id, MIndex, Name from Action where ProjectId = @ProjectId and @MIndexFrom <= MIndex and MIndex <= @MIndexToAfter order by MIndex;