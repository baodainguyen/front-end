import React, { Component } from 'react';
import {AdvancedSearch, NavMenu, NavUser,
    Presentation, TopTopic, 
    Categories, SpecialOffers} from './Components'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import './main.scss';

export class Ecma extends Component {
  componentDidMount = () => {
      const mainNav = document.querySelector(`#dnbApp .navbar.sticky-top`);
      mainNav.style.display = 'none'
  }
  render(){
        const stlA1 = {width:'60px',height:'60px'};
        return(            
<div className="container-fluid">
  <div className="row dnb-mobile-sticky-top" id="dnb-header">
    <div className="col-xl-2 col-lg-3 col-md-4 col-12 col-wrap pt-3 dnbLogo">
      <div className="text-primary">
        <h3>Ecma2</h3>
      </div>
    </div>
    <div className="col-xl-10 col-lg-9 col-md-8 col-12 col-wrap">
      <div className="row">
        <div className="col-xl-8 col-lg-8 col-md-12 col-wrap">
          <div></div>
        </div>
        <AdvancedSearch />
      </div>
    </div>
  </div>
  <div className="row mt-5" id="dnb-body">
    <div className="dnb-per-1-4 col-xl-2 col-lg-3 col-md-4 col-12 col-wrap dnb-viewmobile-1">
      <div className="dnb-mobile-sticky">
        <NavMenu />
        <div>
          <div className="card flex-row align-items-center bg-light rounded-3 border-0 ps-3 mb-5 minw200">
            <img className="rounded-3 dnb-img-cover" 
            src="https://live.staticflickr.com/65535/51726236650_a390837dfb.jpg" 
            alt="avatar" 
            style={stlA1} crossOrigin="anonymous"/>
            <div className="card-body pt-0 pb-0"><strong className="card-title m-0">Updated course</strong>
              <p className="card-text">by @carius</p>
            </div>
          </div>
        </div>
        <div>
          <div className="d-grid d-grid-lst mb-4">
            <div className="card bg-warning rounded-lg box-h111">
              <div className="card-body text-center d-flex flex-column ps-1 pe-1">
                <div className="card-title flex-grow-1"><i className="bi bi-gear fs-3" /></div>
                <div className="card-text"><strong>1800</strong>
                  <p>points</p>
                </div>
              </div>
            </div>
            <div className="card bg-warning rounded-lg box-h111">
              <div className="card-body text-center d-flex flex-column ps-1 pe-1">
                <div className="card-title flex-grow-1">
                  <i className="bi bi-award fs-3"></i>
                </div>
                <div className="card-text"><strong>55%</strong>
                  <p>compsete</p>
                </div>
              </div>
            </div>
            <div className="card rounded-lg minw200 box-h99 bg-img-ui text-white">
              <div className="card-body d-flex">
                <div className="card-title flex-grow-1"><strong>Author</strong></div>
                <div className="card-text d-flex justify-content-between">
                  <p className="text-right mb-0">+178 Posts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="dnb-per-3-4 col-xl-10 col-lg-9 col-md-8 col-12 col-wrap">
      <div className="row">
        <div className="dnb-per-1-2 col-xl-8 col-lg-8 col-md-12 col-wrap">
          <div className="dnb-subnav-present mb-4 mt-n9">
            <NavUser />
            <Presentation />
          </div>
          <TopTopic />
        </div>
        <div className="dnb-per-1-3 col-xl-4 col-lg-4 col-md-12 col-wrap mt-n5">
          <div className="mt-4">
            <Categories />
            <SpecialOffers />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        )
    }
}