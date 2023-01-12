import React, { Component, useEffect } from 'react'
import { useSelector  } from 'react-redux'
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import {getFeatures, getFeaturesES5, getFeaturesES6, getScopeFeatures} from '../global/ES6Service'

const featureSlice = createSlice({
    name: 'Feature',
    initialState: {
        FeatureName: 'Constants', ScopeFeatureName: 'Constants'
    },
    reducers: {
      setFeatureName: (state, action) => {
        state.FeatureName = action.payload
      },
      setScopeFeatureName: (state, action) => {
        state.ScopeFeatureName = action.payload
      },
    },
})
const { actions, reducer } = featureSlice;
const { setFeatureName, setScopeFeatureName } = actions

const ES6Store = configureStore({
  reducer: {reducer},
})

function ES6Main() {
    const Features = getFeatures()
    const ScopeFeatures = getScopeFeatures()
    const FeaturesES5 = getFeaturesES5()
    const FeaturesES6 = getFeaturesES6()
    const mFeature = useSelector((state) => state.reducer)
    useEffect(() => {
         console.log(`ES6Main`, mFeature)
    })
    
    const stlFlex = {display: 'flex', padding: '27px'}
    const stlArtcl = {border: '1px solid #e9e9e9', flexGrow: '1', padding: '9px'};
    return(
        <main style={stlFlex}>
            <NavLeft Features={Features.map(s => {
                return {
                    Name: s.Name, 
                    ScopeFeatures: ScopeFeatures
                                    .filter(sf => sf.FeatureName == s.Name)
                                    .map(sf => sf.Name)
                }
            })} />
            <article style={stlArtcl}>
                <Head Description={ScopeFeatures.filter(s => {
                    return s.FeatureName == mFeature.FeatureName && s.Name == mFeature.ScopeFeatureName
                })}/>
                <Content 
                    MFeatureES5={FeaturesES5.filter(s => {
                        return s.Name == mFeature.ScopeFeatureName
                    })}
                    MFeatureES6={FeaturesES6.filter(s => {
                        return s.Name == mFeature.ScopeFeatureName
                    })}
                />
            </article>
        </main>
    )
}
function Head(props){
    const mFeature = useSelector((state) => state.reducer)
    
    return(
        <section>
            <strong>{mFeature.FeatureName}</strong>
            <p>{mFeature.ScopeFeatureName}</p>
            <p>{props.Description.map(d => d.Description)}</p>
        </section>
    )
}
class NavLeft extends Component{
    render(){
        const stl = {padding: '12px 18px 9px 0', minWidth: '309px', maxHeight: 'calc(100vh - 150px)', overflowY: 'scroll'}
        const {Features} = this.props;
        return(
            <aside style={stl}>
                {Features.map((sf, i) => 
                    <NavItem Feature={sf} key={sf.Name + i}/>
                )}
            </aside>
        )
    }
}
class Content extends Component{
    
    render(){
        
        const stlGrid = {display: 'grid', gridTemplateColumns: 'auto auto', columnGap: '15px'}
        const lstFES5 = this.props.MFeatureES5;
        const lstFES6 = this.props.MFeatureES6;
        return(
            <section>
                <div style={stlGrid}>
                    <ContentESx Features={lstFES6} title="ECMAScript6"/>
                    <ContentESx Features={lstFES5} title="ECMAScript5"/>
                </div>
            </section>
        )
    }
}
class NavItem extends Component{
    onclkShowContent = (scopeName) => {
        const {Name} = this.props.Feature;
        ES6Store.dispatch(setFeatureName(Name))
        ES6Store.dispatch(setScopeFeatureName(scopeName))
    }
    render(){
        const {Name, ScopeFeatures} = this.props.Feature;
        return(
            <div className='esf-navitem'>
                <strong className='esf-navitem-ftname'>{Name}</strong>
                {ScopeFeatures.map((scopeName, i) => 
                    <p className='esf-navitem-name'
                        key={scopeName + i}
                        onClick={() => this.onclkShowContent(scopeName)}
                    >{scopeName}</p>)
                }
            </div>
        )
    }
}
class ContentESx extends Component{
    constructor(props) {
       super(props);
       this.textArea = React.createRef();
    }
    componentDidMount = () => {
        let txtA = this.textArea.current;
        txtA.style.height = `${txtA.scrollHeight+9}px`
    }
    componentDidUpdate = () => {
        let txtA = this.textArea.current;
        txtA.style.height = `${txtA.scrollHeight+9}px`
    }
    render(){
        const {Features, title} = this.props;
        const stlTxtArea = {width: '100%', minHeight: '96px', resize: 'none', padding: '15px 6px'}
        return(
            <article>
                <div>{title}</div>
                <textarea disabled style={stlTxtArea} 
                    ref={this.textArea}
                    value={Features.map(f => {
                        const exmp = f.Example;
                        return exmp
                    })}>                    
                </textarea>
            </article>
        )
    }
}
export class ES6Features extends Component {
    render(){
        return(
            <Provider store={ES6Store}><ES6Main /></Provider>
        )
    }
}