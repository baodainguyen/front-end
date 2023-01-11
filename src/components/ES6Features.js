import React, { Component, useEffect } from 'react'
import { useSelector, useDispatch  } from 'react-redux'
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { connect, Provider } from 'react-redux'

const featureSlice = createSlice({
    name: 'Feature',
    initialState: {
        FeatureName: 'Dai', ScopeFeatureName: 'NB'
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

class ES6Main extends Component{    
    constructor() {
        super();
        this.data = { 
            Features: getFeatures(),       // [{Name}]
            FeaturesES5: getFeaturesES5() ,   // [{Name, Example}]
            FeaturesES6: getFeaturesES6(),    // [{Name, Example}]
            ScopeFeatures: getScopeFeatures(),  // [{FeatureName, Name, Description}]
        };
        this.state = ES6Store.getState().reducer;
    }
    useEffect = () => {
        // this.mFeature = useSelector((state) => state.Feature);
        // console.log(`ES6Main`, this.mFeature)
        // return () => {
        //     this.mFeature
        // };
    }

    render(){
        console.log(ES6Store)
        console.log(ES6Store.getState().reducer)
        
        const {Features, ScopeFeatures} = this.data;
        const navFeatures = Features.map(s => {
            return {
                Name: s.Name, 
                ScopeFeatures: ScopeFeatures
                                .filter(sf => sf.FeatureName == s.Name)
                                .map(sf => sf.Name)
            }
        })
        return(
            <>
                <Head />
                <NavLeft Features={navFeatures} />
                <Content CurrentFeature={this.state}/>
            </>
        )
    }
}
class Head extends Component{
    render(){
        return(
            <section></section>
        )
    }
}
class NavLeft extends Component{
    render(){
        const {Features} = this.props;
        return(
            <nav>
                {Features.map((sf, i) => 
                    <NavItem Feature={sf} key={sf.Name + i}/>
                )}
            </nav>
        )
    }
}
class Content extends Component{
    
    render(){
        const stl = {border: '2px solid black'}
        const {FeatureName, ScopeFeatureName} = this.props.CurrentFeature
        return(
            <main style={stl}>
                <div>{FeatureName}</div>
                <div>{ScopeFeatureName}</div>
                <ContentESx />
            </main>
        )
    }
}
class NavItem extends Component{
    onclkShowContent = (scopeName) => {
        const {Name} = this.props.Feature;

        ES6Store.dispatch(setFeatureName(Name))
        ES6Store.dispatch(setScopeFeatureName(scopeName))
      console.log(`onclkShowContent`, ES6Store.getState().reducer)
      
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
  
    render(){
        const {FeatureName, ScopeFeatureName } = this.props;
        return(
            <article>
                <div>{FeatureName}</div>
                <div>{ScopeFeatureName}</div>
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
function getFeatures(){
    return [
        {Name: `Constants`},
        {Name: `Scoping`},
        {Name: `Arrow Functions`},
        //{Name: `Extended Parameter Handling`},
    ]
}
function getFeaturesES5(){
    return [
        {
            Name: `Constants`, 
            Example: `Object.defineProperty(typeof global === "object" ? global : window, "PI", {
                value:        3.141593,
                enumerable:   true,
                writable:     false,
                configurable: false
            })
            PI > 3.0;`
        },
        {
            Name: `Block-Scoped Variables`,
            Example: `var i, x, y;
            for (i = 0; i < a.length; i++) {
                x = a[i];
                …
            }
            for (i = 0; i < b.length; i++) {
                y = b[i];
                …
            }            
            var callbacks = [];
            for (var i = 0; i <= 2; i++) {
                (function (i) {
                    callbacks[i] = function() { return i * 2; };
                })(i);
            }
            callbacks[0]() === 0;
            callbacks[1]() === 2;
            callbacks[2]() === 4;`
        },
        {
            Name: `Block-Scoped Functions`,
            Example: `//  only in ES5 with the help of block-scope emulating
            //  function scopes and function expressions
            (function () {
                var foo = function () { return 1; }
                foo() === 1;
                (function () {
                    var foo = function () { return 2; }
                    foo() === 2;
                })();
                foo() === 1;
            })();`
        },
        {
            Name: `Expression Bodies`,
            Example: `odds  = evens.map(function (v) { return v + 1; });
            pairs = evens.map(function (v) { return { even: v, odd: v + 1 }; });
            nums  = evens.map(function (v, i) { return v + i; });`
        },
        {
            Name: `Statement Bodies`,
            Example: `nums.forEach(function (v) {
                if (v % 5 === 0)
                    fives.push(v);
             });`
        },
        {
            Name: `Lexical this`,
            Example: `//  variant 1
            var self = this;
            this.nums.forEach(function (v) {
                if (v % 5 === 0)
                    self.fives.push(v);
            });            
            //  variant 2
            this.nums.forEach(function (v) {
                if (v % 5 === 0)
                    this.fives.push(v);
            }, this);            
            //  variant 3 (since ECMAScript 5.1 only)
            this.nums.forEach(function (v) {
                if (v % 5 === 0)
                    this.fives.push(v);
            }.bind(this));`
        }
    ]
}
function getFeaturesES6(){
    return [
        {
            Name: `Constants`, 
            Example: `const PI = 3.141593
            PI > 3.0`
        },
        {
            Name: `Block-Scoped Variables`,
            Example: `for (let i = 0; i < a.length; i++) {
                let x = a[i]
                …
            }
            for (let i = 0; i < b.length; i++) {
                let y = b[i]
                …
            }            
            let callbacks = []
            for (let i = 0; i <= 2; i++) {
                callbacks[i] = function () { return i * 2 }
            }
            callbacks[0]() === 0
            callbacks[1]() === 2
            callbacks[2]() === 4`
        },
        {
            Name: `Block-Scoped Functions`,
            Example: `{
                function foo () { return 1 }
                foo() === 1
                {
                    function foo () { return 2 }
                    foo() === 2
                }
                foo() === 1
            }`
        },
        {
            Name: `Expression Bodies`,
            Example: `odds  = evens.map(v => v + 1)
            pairs = evens.map(v => ({ even: v, odd: v + 1 }))
            nums  = evens.map((v, i) => v + i)`
        },
        {
            Name: `Statement Bodies`,
            Example: `nums.forEach(v => {
                if (v % 5 === 0)
                    fives.push(v)
             })`
        },
        {
            Name: `Lexical this`,
            Example: `this.nums.forEach((v) => {
                if (v % 5 === 0)
                    this.fives.push(v)
            })`
        }
    ]
}
function getScopeFeatures(){
    return [
        {
            FeatureName: `Constants`, Name: `Constants`, 
            Description: `Support for constants (also known as "immutable variables"), i.e., variables which cannot be re-assigned new content. Notice: this only makes the variable itself immutable, not its assigned content (for instance, in case the content is an object, this means the object itself can still be altered).`
        },
        {
            FeatureName: `Scoping`, Name: `Block-Scoped Variables`, 
            Description: `Block-scoped variables (and constants) without hoisting.`
        },
        {
            FeatureName: `Scoping`, Name: `Block-Scoped Functions`, 
            Description: `Block-scoped function definitions.`
        },
        {
            FeatureName: `Arrow Functions`, Name: `Expression Bodies`, 
            Description: `More expressive closure syntax.`
        },
        {
            FeatureName: `Arrow Functions`, Name: `Statement Bodies`, 
            Description: `More expressive closure syntax.`
        },
        {
            FeatureName: `Arrow Functions`, Name: `Lexical this`, 
            Description: `More intuitive handling of current object context.`
        },
    ]
}