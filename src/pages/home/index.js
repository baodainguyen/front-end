import React, { Component } from 'react';
import {AdvancedSearch, NavMenu, 
    StreamingNow, PopularThisWeek, TopTopic, 
    Categories, SpecialOffers} from './Components'
import './botstrap.min.css';
import './main.scss';

export class Ecma extends Component {
  componentDidMount() {
      const mainNav = document.querySelector(`#dnbApp > nav.sticky-top:first-child`);
      mainNav.style.display = 'none'
  }
    render(){
        const stlA1 = {width:'44px',height:'44px'};
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
          <div className="card flex-row align-items-center bg-light rounded-lg pt-3 pb-3 pl-3 mb-5 minw200">
            <img className="rounded" src="https://live.staticflickr.com/65535/51726236650_a390837dfb.jpg" 
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
              <div className="card-body text-center d-flex flex-column pl-1 pr-1">
                <div className="card-title flex-grow-1"><i className="fas fa-cog"></i></div>
                <div className="card-text"><strong>1800</strong>
                  <p>points</p>
                </div>
              </div>
            </div>
            <div className="card bg-warning rounded-lg box-h111">
              <div className="card-body text-center d-flex flex-column pl-1 pr-1">
                <div className="card-title flex-grow-1"><i className="far fa-comment-dots"></i></div>
                <div className="card-text"><strong>55%</strong>
                  <p>complete</p>
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
          <div className="mb-4 mt-n9">
            <StreamingNow />
            <PopularThisWeek />
          </div>
          <TopTopic />
        </div>
        <div className="dnb-per-1-3 col-xl-4 col-lg-4 col-md-12 col-wrap mt-0">
          <div className="mt-5">
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