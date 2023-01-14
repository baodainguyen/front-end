import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Nav } from 'react-bootstrap';

export class AdvancedSearch extends Component {
  render() {

    return (
      <div className="dnb-search col-xl-4 col-lg-4 col-md-12 col-wrap pt-3">
        <div className="mb-3 dnb-adv-search-box">
          <div className="input-group">
            <input className="form-control bg-light rounded border-0" type="text" placeholder="find something..." />
            <div className="input-group-append">
              <button className="btn btn-primary rounded text-white font-weight-bold pr-3 pl-3 ml-2"
                type="submit">Find</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export class NavMenu extends Component {
  render() {
    return (
      <nav className="navbar bg-light navbar-light rounded-lg mb-3">
        <ul className="navbar-nav">
          <li className="nav-item active"><Nav.Link as={Link} to="/" href="#home">
            <i className="bi bi-house-fill ml-3 text-primary"></i><strong className="ml-2">Home</strong>
          </Nav.Link></li>
          <li className="nav-item"><Nav.Link as={Link} to="/" href="#">
            <i className="bi bi-search ml-3"></i><strong className="ml-2">Discover</strong>
          </Nav.Link></li>
          <li className="nav-item"><Nav.Link as={Link} to="/" href="#">
            <i className="bi bi-chat-dots ml-3"></i><strong className="ml-2">Message</strong>
          </Nav.Link></li>
          <li className="nav-item"><Nav.Link as={Link} to="/" href="#">
            <i className="bi bi-gear ml-3"></i><strong className="ml-2">Settings</strong>
          </Nav.Link></li>
        </ul>
      </nav>
    )
  }
}
export class NavUser extends Component {

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-white pl-0">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Nav.Link as={Link} to="/" href="#home" className='pl-0'>
                <i className="bi bi-app"></i>
                <span className='ml-1'>Download App</span>
                <i className="bi bi-chevron-down ml-1"></i>
                <span className="sr-only">(current)</span>
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link as={Link} to="/" href="#home">
                Talk with us
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link as={Link} to="/" href="#home">
                Saved
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link as={Link} to="/" href="#home" className="disabled">
                Book yours
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link as={Link} to="/" href="#home" className="disabled">
                Book yours
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link as={Link} to="/" href="#home" className="disabled">
                <i className="bi bi-person-circle"></i>
                <span className='ml-1'>Sign in </span>
                <i className="bi bi-chevron-down"></i>
              </Nav.Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-primary text-white rounded font-weight-bold pr-3 pl-3 ml-2 disabled"
                type="submit">Sign up</button>
            </li>
          </ul>
        </nav>
      </>
    )
  }
}
export class StreamingNow extends Component {
  render() {
    const stlImg = { width: '46px', height: '46px', cursor: 'pointer' };
    return (
      <div>
        <div className="d-flex justify-content-between">
          <h4>Streaming Now</h4>
          <h4 className="fas fa-ellipsis-h"></h4>
        </div>
        <div className="mb-3">
          <img className="rounded-lg m-2" src="https://live.staticflickr.com/65535/51726236650_a390837dfb.jpg"
            style={stlImg} crossOrigin="anonymous" />
          <img className="rounded-lg m-2" src="https://live.staticflickr.com/65535/51725347106_0a289e0761.jpg"
            style={stlImg} crossOrigin="anonymous" />
          <img className="rounded-lg m-2" src="https://live.staticflickr.com/65535/51726236650_a390837dfb.jpg"
            style={stlImg} crossOrigin="anonymous" /></div>
      </div>
    )
  }
}
export class Presentation extends Component {
  render() {
    const stlImg = { width: '46px', height: '46px' };
    const stlOvY = { overflowY: 'hidden' }
    return (
      <div>
        <h2>Presentation</h2>
        <div className="dnb-wrap">
          <div className="dnb-slide-bound" style={stlOvY}>
            <div className="dnb-slide-wrap" style={{ overflowX: 'auto' }}>
              <div className="dnb-slider rounded-lg scrollbar-h0" style={{ overflowX: 'scroll' }}>
                <div className="d-flex flex-row">
                  <div className="card bg-warning rounded-lg box-264-396 mr-4 border-0 bg-img-ui">
                    <div className="card-body d-flex flex-column">
                      <div className="card-title flex-grow-1">
                        <div className="d-flex text-white"><img className="rounded mr-2"
                          src="https://live.staticflickr.com/65535/51728456656_7e4105ffc0.jpg"
                          style={stlImg} crossOrigin="anonymous" />
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
export class TopTopic extends Component {
  render() {
    return (
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
export class Categories extends Component {
  render() {
    return (
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
export class SpecialOffers extends Component {
  render() {
    return (
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