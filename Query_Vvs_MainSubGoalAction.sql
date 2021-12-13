use testStratsignerCom; Declare @ProjectId bigint = 23;
DECLARE @Main_Id Table (Id uniqueidentifier, SubmarketProductId uniqueidentifier); INSERT INTO @Main_Id Select Id, SubmarketProductId from MainGoal where ParentId is null And ProjectId = @ProjectId And DeletedBy = 0;
DECLARE @SubMP_Id Table (Id uniqueidentifier); INSERT INTO @SubMP_Id Select SubmarketProductId as Id from MainGoal where SubmarketProductId IN (SELECT distinct SubmarketProductId FROM @Main_Id where SubmarketProductId is not null);
DECLARE @Sub_Id Table (Id uniqueidentifier); INSERT INTO @Sub_Id Select Id from MainGoal where ParentId is not null And ProjectId = @ProjectId And DeletedBy = 0;
Declare @Act_Id Table (Id uniqueidentifier); INSERT INTO @Act_Id Select Id from Action Where ProjectId = @ProjectId And DeletedBy = 0 order by GoalId;
DECLARE @Prd_SubMrk_Id Table (ProductId bigint, SubMarketId bigint, SubMarketProductId uniqueidentifier); INSERT INTO @Prd_SubMrk_Id SELECT DISTINCT ProductId, SubMarketId, Id as SubMarketProductId from SubMarketProduct where Id IN (Select distinct * from @SubMP_Id) order by ProductId, SubMarketId;

SELECT distinct i.Id as ParentId, i.Name as ParentName, i.MIndex, ic.Id as IndependencyId, ic.Name as IndependencyName
	FROM Independency as i
	INNER JOIN Independency as ic ON ic.ParentId = i.Id And ic.DeletedBy = 0
	INNER JOIN IndependencyRegion ir ON ir.IndependencyId = ic.Id
	LEFT JOIN dbo.IndependencyAccount ia ON ia.IndependencyId = ic.Id
	where i.ParentId is null And i.ProjectId = @ProjectId And i.DeletedBy = 0 order by MIndex

select a.SubMarketProductId, bl.Id as LandId, bl.Name as LandName, bgr.Id as RegionId, bgr.Name as RegionName, cms.Id as MarketSegmentId, cms.Name as MarketSegmentName,
		c.Id as SubMarketId, c.Name as SubMarketName, b.Id as ProductId, b.Name as ProductName, bg.Id as ProductGroupId, bg.Name as ProductGroupName
	from @Prd_SubMrk_Id as a 
	LEFT Join Product as b ON a.ProductId = b.Id LEFT JOIN ProductGroup as bg ON b.ProductGroupId = bg.Id LEFT JOIN Region AS bgr ON bgr.Id = bg.RegionId INNER JOIN Land AS bl ON bl.Id = bgr.LandId
	LEFT Join SubMarket as c On a.SubMarketId = c.Id LEFT JOIN MarketSegmentRegion as cm ON cm.Id = c.MarketSegmentRegionId LEFT JOIN MarketSegment as cms ON cms.Id = cm.MarketSegmentId
	Where b.Id IN (Select distinct ProductId from @Prd_SubMrk_Id) OR c.Id IN (Select distinct SubMarketId from @Prd_SubMrk_Id); 

Select [SubMarketProductId] ,[IndependencyId] ,[Id] ,[Name] ,[Description] ,[Effect] ,[Purpose] ,[Arrived] ,[Budget] ,[Category] ,[Evaluation] ,[StartDate] ,[Date] ,[Field] ,[Visibility] ,[Finish] ,[MIndex] ,[Mdf] ,[MasterId] ,[IsCalendar] ,[MColor] ,[ApEvaluationTemplateId] ,[ApProductTemplateId] ,[ApSwotanalyseTemplateId] ,[ApEvaluationComment] ,[ApEvaluation] 
	from MainGoal where Id IN (Select Id From @Main_Id) And DeletedBy = 0 Order by SubMarketProductId desc, IndependencyId--, [MIndex];

Select [SubMarketProductId] ,[IndependencyId] ,[ParentId],[Id] ,[Name] ,[Description] ,[Effect] ,[Purpose] ,[Arrived] ,[Budget] ,[Category] ,[Evaluation] ,[StartDate] ,[Date] ,[Field] ,[Visibility] ,[Finish] ,[MIndex] ,[Mdf] ,[MasterId] ,[IsCalendar] ,[MColor] ,[ApEvaluationTemplateId] ,[ApProductTemplateId] ,[ApSwotanalyseTemplateId] ,[ApEvaluationComment] ,[ApEvaluation] 
	from MainGoal where Id IN (Select Id From @Sub_Id) And DeletedBy = 0 Order by SubMarketProductId desc, IndependencyId, ParentId--, [MIndex]

Select * from Action Where ProjectId = @ProjectId And DeletedBy = 0 order by GoalId