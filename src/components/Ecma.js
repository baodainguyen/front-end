import React, { Component } from 'react';
import fontawesome from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import { faSearch, faHome } from '@fortawesome/fontawesome-free-solid';
import '../scss/botstrap.min.css';
import '../scss/main.scss';
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
  <div className="row mt-1 mt-n1" id="dnb-body">
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
class AdvancedSearch extends Component{
    render(){

        return(
<div className="dnb-search col-xl-4 col-lg-4 col-md-12 col-wrap pt-3">
          <div>
            <div className="d-flex justify-content-between dnb-advance-search-head">
              <h4>Advanced Search</h4>
              <h4 className="fas fa-ellipsis-h"></h4>
            </div>
            <div className="mb-3 dnb-adv-search-box">
              <div className="input-group">
                <input className="form-control bg-light rounded border-0" type="text" placeholder="find something..."/>
                <div className="input-group-append">
                  <button className="btn btn-primary rounded font-weight-bold pr-3 pl-3 ml-2" type="submit">Find</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
    }
}
class NavMenu extends Component{
    render(){
        fontawesome.library.add(faSearch, faHome);
        return(
          <nav className="navbar bg-light navbar-light rounded-lg mb-3">
            <ul className="navbar-nav">
              <li className="nav-item active"><Nav.Link as={Link} to="/" href="#home">
                <FontAwesomeIcon icon={["fas", "home"]} className="ml-3 text-primary"/><strong className="ml-3">Home</strong>
              </Nav.Link></li>
              <li className="nav-item"><Nav.Link as={Link} to="/" href="#">
                <FontAwesomeIcon icon={["fas", "search"]} className="ml-3"/><strong className="ml-3">Discover</strong>
              </Nav.Link></li>
              <li className="nav-item"><Nav.Link as={Link} to="/" href="#">
                <FontAwesomeIcon icon={["fas", "fa-comment-dots"]} className="ml-3"/><strong className="ml-3">Message</strong>
              </Nav.Link></li>
              <li className="nav-item"><Nav.Link as={Link} to="/" href="#">
                <FontAwesomeIcon icon={["fas", "cog"]} className="ml-3"/><strong className="ml-3">Settings</strong>
              </Nav.Link></li>  
            </ul>
          </nav>
        )
    }
}
class StreamingNow extends Component {
    render(){
        const stlImg = {width:'46px', height:'46px', cursor:'pointer'};
        return(
            <div>
              <div className="d-flex justify-content-between">
                <h4>Streaming Now</h4>
                <h4 className="fas fa-ellipsis-h"></h4>
              </div>
              <div className="mb-3">
                <img className="rounded-lg m-2" src="https://live.staticflickr.com/65535/51726236650_a390837dfb.jpg" 
                style={stlImg} crossOrigin="anonymous"/>
                <img className="rounded-lg m-2" src="https://live.staticflickr.com/65535/51725347106_0a289e0761.jpg" 
                style={stlImg} crossOrigin="anonymous"/>
                <img className="rounded-lg m-2" src="https://live.staticflickr.com/65535/51726236650_a390837dfb.jpg" 
                style={stlImg} crossOrigin="anonymous"/></div>
            </div>
        )
    }
}
class PopularThisWeek extends Component{
    render(){
        const stlImg = {width:'46px',height:'46px'};
        const stlOvY = {overflowY: 'hidden'}
        return(
<div>
              <h2>Popular this week</h2>
              <div className="dnb-wrap">
                <div className="dnb-slide-bound" style={stlOvY}>
                  <div className="dnb-slide-wrap" style={{overflowX: 'auto'}}>
                    <div className="dnb-slider rounded-lg scrollbar-h0" style={{overflowX: 'scroll'}}>
                      <div className="d-flex flex-row">
                        <div className="card bg-warning rounded-lg box-264-396 mr-4 border-0 bg-img-ui">
                          <div className="card-body d-flex flex-column">
                            <div className="card-title flex-grow-1">
                              <div className="d-flex text-white"><img className="rounded mr-2" 
                              src="https://live.staticflickr.com/65535/51728456656_7e4105ffc0.jpg" 
                              style={stlImg} crossOrigin="anonymous"/>
                                <div className="d-flex flex-column flex-grow-1">
                                  <div className="d-flex justify-content-between">
                                    <h4 className="card-text mb-0">Ui/Ux Design</h4>
                                    <h6 className="align-self-end pt-2">187 mins</h6>
                                  </div>
                                  <p>28 lessions</p>
                                </div>
                              </div>
                            </div>
                            <div className="card-text bg-light rounded p-3">
                              <p className="mb-0">Some text here class creates a grid of cards that are of equal height and width. The layout will automatically adjust as you insert more cards.</p>
                            </div>
                          </div>
                        </div>
                        <div className="card bg-warning rounded-lg box-264-396 mr-4 border-0">
                          <div className="card-body">
                            <p className="card-text">Some text here class creates a grid of cards that are of equal height and width. The layout will automatically adjust as you insert more cards.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}
class TopTopic extends Component{
    render(){
        return(
          <div>
            <h2>Top topics</h2>
            <div>
              <div className="row">
                <div className="col-xl-3 col-lg-6 col-md-6 mb-4">
                  <div className="card rounded-lg box-h99 bg-img-ui">
                    <div className="card-body text-center p-2">
                      <p className="card-text text-white">Topic 001: Make beautiful layer using css</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 mb-4">
                  <div className="card bg-warning rounded-lg box-h99">
                    <div className="card-body text-center p-2">
                      <p className="card-text">Topic 002: Make beautiful layer using css</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 mb-4">
                  <div className="card bg-warning rounded-lg box-h99">
                    <div className="card-body text-center p-2">
                      <p className="card-text">Topic 333: Make beautiful layer using css</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 mb-4">
                  <div className="card bg-warning rounded-lg box-h99">
                    <div className="card-body text-center p-2">
                      <p className="card-text">Topic 888: Make beautiful layer using css</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-3 col-lg-6 col-md-6 mb-4">
                  <div className="card rounded-lg box-h99 bg-img-ui">
                    <div className="card-body text-center p-2">
                      <p className="card-text text-white">Topic 001: Make beautiful layer using css</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 mb-4">
                  <div className="card bg-warning rounded-lg box-h99">
                    <div className="card-body text-center p-2">
                      <p className="card-text">Topic 002: Make beautiful layer using css</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 mb-4">
                  <div className="card bg-warning rounded-lg box-h99">
                    <div className="card-body text-center p-2">
                      <p className="card-text">Topic 333: Make beautiful layer using css</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 mb-4">
                  <div className="card bg-warning rounded-lg box-h99">
                    <div className="card-body text-center p-2">
                      <p className="card-text">Topic 888: Make beautiful layer using css</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
class Categories extends Component{
    render(){
        return(
            <div className="mt-n4">
              <h2>Category</h2>
              <div className="d-grid d-grid-1st mb-4">
                <div className="card rounded-lg box-h198 bg-img-ui text-white">
                  <div className="card-body d-flex flex-column">
                    <div className="card-title flex-grow-1">
                      <div className="d-flex flex-column">
                        <div className="d-flex justify-content-between">
                          <h4 className="card-text mb-0">Design pattern in js</h4>
                          <h6 className="align-self-end pt-2">280 mins</h6>
                        </div>
                        <p>38 lessions</p>
                      </div>
                    </div>
                    <div className="card-text d-flex justify-content-between">
                      <button className="btn bg-light rounded pl-3 pr-3 pt-2 pb-2"><span className="fas fa-play ml-1 mt-2 mb-2"></span></button>
                      <div className="align-self-center ml-2"><strong className="text-right mb-0">+178 Student enrolled</strong></div>
                    </div>
                  </div>
                </div>
                <div className="card bg-warning rounded-lg box-h198">
                  <div className="card-body text-center">
                    <p className="card-text">Some text here</p>
                  </div>
                </div>
                <div className="card bg-warning rounded-lg box-h198">
                  <div className="card-body text-center">
                    <p className="card-text">Some text here</p>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}
class SpecialOffers extends Component {
    render(){
        return(
            <div className="mb-3">
              <h2>Special Offers</h2>
              <div>
                <div className="card bg-warning rounded-lg box-h198">
                  <div className="card-body text-center">
                    <p className="card-text">Something in here</p>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}