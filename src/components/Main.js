import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import fontawesome from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome } from '@fortawesome/fontawesome-free-solid';
import '../scss/main.scss';

export class Main extends Component {    
    render(){
        fontawesome.library.add(faSearch, faHome);
        return(
            <Container fluid> 
                <DnbHeader />
                <Row className="mt-1 mt-n1" id="dnb-body">
                    <Col xl={2} lg={3} md={4}  sm={12} className="dnb-per-1-4 col-12 col-wrap">
                        <div className="dnb-mobile-sticky">
                            <div class="d-flex flex-column ">
                                <a className="nav-link active" href="#"><FontAwesomeIcon icon={["fas", "home"]} className="text-primary"/><strong className="ml-3">Home</strong></a>
                                <a className="nav-link text-body" href="#"><FontAwesomeIcon icon={['fas', 'search']} /><strong className="ml-3">Discover</strong></a>
                                <a className="nav-link text-body" href="#"><FontAwesomeIcon icon="fas fa-comment-dots" /><strong className="ml-3">Message</strong></a>
                                <a className="nav-link text-body" href="#"><FontAwesomeIcon icon={['fas', 'cog']} /><strong className="ml-3">Settings</strong></a>
                            </div>
                            <div>
                                <div className="card flex-row align-items-center bg-light rounded-lg pt-3 pb-3 pl-3 mb-5 minw200">
                                    <FontAwesomeIcon icon="fas fa-user" style={{width: '36px', height: '36px', cursor: 'pointer'}}/>
                                    <div className="card-body pt-0 pb-0"><strong className="card-title m-0">Updated course</strong>
                                    <p className="card-text">by @carius</p>
                                    </div>
                                </div>
                            </div>
                            <DnbUserInfo />
                        </div>
                    </Col>
                    <Col xl={10} lg={9} md={8} sm={12} className="dnb-per-3-4 col-12 col-wrap">
                        <Row>
                            <Col xl={8} lg={8} md={12} className="dnb-per-1-2 col-wrap">
                                <div className="mb-4 mt-n9">
                                    <DnbStream />
                                    <DnbPopulation />
                                </div>
                                <DnbTopTopic />
                            </Col>
                            <Col xl={4} lg={4} md={12} className="dnb-per-1-3 col-wrap mt-0">
                                <div className="mt-5">
                                    <DnbCategory />
                                    <DnbOffers />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}

class DnbHeader extends Component {
    render(){
        return (
            <Row className="dnb-mobile-sticky-top" id="dnb-header">
                <Col xl={2} lg={3} md={4} sm={12} className="col-wrap pt-3 dnbLogo">
                    <div className="text-primary">
                        <h3>Ecma2</h3>
                    </div>
                </Col>
                <Col xl={10} lg={9} md={8} sm={12} className="col-12 col-wrap">
                    <Row>
                        <Col xl={8} lg={8} md={12} className="col-wrap">
                            <div></div>
                        </Col>
                        <Col xl={4} lg={4} md={12} className="dnb-search col-wrap pt-3">
                            <div>
                                <div className="d-flex justify-content-between">
                                <h4>Advanced Search</h4>
                                <h4 className="fas fa-ellipsis-h"></h4>
                                </div>
                                <div className="mb-3">
                                <div className="input-group">
                                    <input className="form-control bg-light rounded border-0" type="text" placeholder="find something..."/>
                                    <div className="input-group-append">
                                    <Button variant="primary" className="rounded font-weight-bold pr-3 pl-3 ml-2" type="submit">Find</Button>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}
class DnbUserInfo extends Component {
    render(){
        return (
            <div>
                <div className="d-grid d-grid-lst mb-4">
                    <Card className="bg-warning rounded-lg box-h111">
                        <Card.Body className="text-center d-flex flex-column pl-1 pr-1">
                            <Card.Title className="flex-grow-1"><i className="fas fa-cog"></i></Card.Title>
                            <Card.Text><strong>1800</strong>
                                <p>points</p>
                            </Card.Text>
                        </Card.Body>
                    </Card >
                    <Card className="bg-warning rounded-lg box-h111">
                        <Card.Body className="text-center d-flex flex-column pl-1 pr-1">
                            <Card.Title className="flex-grow-1"><i className="far fa-comment-dots"></i></Card.Title>
                            <Card.Text><strong>55%</strong>
                                <p>complete</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="rounded-lg minw200 box-h99 bg-img-ui text-white">
                        <Card.Body className="d-flex">
                            <Card.Title className="flex-grow-1"><strong>Author</strong></Card.Title>
                            <Card.Text className="d-flex justify-content-between">
                                <p className="text-right mb-0">+178 Posts</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}
class DnbStream extends Component {

    render(){
        fontawesome.library.add(faSearch, faHome);
        const stl = {width: '36px', height: '36px', cursor: 'pointer'};
        return (
            <div>
              <div className="d-flex justify-content-between">
                <h4>Streaming Now</h4>
                <h4 className="fas fa-ellipsis-h"></h4>
              </div>
              <div className="mb-3">
                <img className='rounded-lg m-2' src="https://live.staticflickr.com/65535/51726236650_a390837dfb.jpg"
                    style={stl} crossOrigin="anonymous"/>
                <img className='rounded-lg m-2' src="https://live.staticflickr.com/65535/51725347106_0a289e0761.jpg"
                    style={stl} crossOrigin="anonymous"/>
                <img className='rounded-lg m-2' src="https://live.staticflickr.com/65535/51726236650_a390837dfb.jpg"
                    style={stl} crossOrigin="anonymous"/>
              </div>
            </div>
        )
    }
}
class DnbPopulation extends Component {

    render(){
        const _a = <img className="rounded mr-2" 
        src={`https://live.staticflickr.com/65535/51728456656_7e4105ffc0.jpg`} 
        style={{width: '46px', height: '46px'}} crossOrigin="anonymous"/>;
        return (
            <div>
              <h2>Popular this week</h2>
              <div className="dnb-wrap">
                <div className="dnb-slide-bound" style={{overflowY: 'hidden'}}>
                  <div className="dnb-slide-wrap" style={{overflowX: 'auto'}}>
                    <div className="dnb-slider rounded-lg scrollbar-h0" style={{overflowX: 'scroll'}}>
                      <div className="d-flex flex-row">
                        <Card className="bg-warning rounded-lg box-264-396 mr-4 border-0 bg-img-ui">
                          <Card.Body className="d-flex flex-column">
                            <Card.Title className="flex-grow-1">
                              <div className="d-flex text-white">{_a}
                                <div className="d-flex flex-column flex-grow-1">
                                  <div className="d-flex justify-content-between">
                                    <Card.Text className="mb-0">Ui/Ux Design</Card.Text>
                                    <h6 className="align-self-end pt-2">187 mins</h6>
                                  </div>
                                  <p>28 lessions</p>
                                </div>
                              </div>
                            </Card.Title>
                            <Card.Text className="bg-light rounded p-3">
                              <p className="mb-0">Some text here class creates a grid of cards that are of equal height and width. The layout will automatically adjust as you insert more cards.</p>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                        <Card className="bg-warning rounded-lg box-264-396 mr-4 border-0">
                          <Card.Body>
                            <Card.Text>Some text here class creates a grid of cards that are of equal height and width. The layout will automatically adjust as you insert more cards.</Card.Text>
                          </Card.Body>
                        </Card>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}
class DnbTopTopic extends Component {
    render(){
        return (
            <div>
                <h2>Top topics</h2>
                <div>
                    <Row>
                        <Col xl={3} lg={6} md={6} className="mb-4">
                        <Card className="rounded-lg box-h99 bg-img-ui">
                            <Card.Body className="text-center p-2">
                            <Card.Text className="text-white">Topic 001: Make beautiful layer using css</Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col xl={3} lg={6} md={6} className="mb-4">
                        <Card className="rounded-lg box-h99 bg-warning">
                            <Card.Body className="text-center p-2">
                            <Card.Text className="text-white">Topic 001: Make beautiful layer using css</Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col xl={3} lg={6} md={6} className="mb-4">
                        <Card className="rounded-lg box-h99 bg-warning">
                            <Card.Body className="text-center p-2">
                            <Card.Text className="text-white">Topic 001: Make beautiful layer using css</Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col xl={3} lg={6} md={6} className="mb-4">
                        <Card className="rounded-lg box-h99 bg-warning">
                            <Card.Body className="text-center p-2">
                            <Card.Text className="text-white">Topic 001: Make beautiful layer using css</Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={3} lg={6} md={6} className="mb-4">
                        <Card className="rounded-lg box-h99 bg-img-ui">
                            <Card.Body className="text-center p-2">
                            <Card.Text className="text-white">Topic 001: Make beautiful layer using css</Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col xl={3} lg={6} md={6} className="mb-4">
                        <Card className="rounded-lg box-h99 bg-warning">
                            <Card.Body className="text-center p-2">
                            <Card.Text className="text-white">Topic 001: Make beautiful layer using css</Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col xl={3} lg={6} md={6} className="mb-4">
                        <Card className="rounded-lg box-h99 bg-warning">
                            <Card.Body className="text-center p-2">
                            <Card.Text className="text-white">Topic 001: Make beautiful layer using css</Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col xl={3} lg={6} md={6} className="mb-4">
                        <Card className="rounded-lg box-h99 bg-warning">
                            <Card.Body className="text-center p-2">
                            <Card.Text className="text-white">Topic 001: Make beautiful layer using css</Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
class DnbCategory extends Component {
    render(){
        return (
            <div className="mt-n4">
              <h2>Category</h2>
              <div className="d-grid d-grid-1st mb-4">
                <Card className="rounded-lg box-h198 bg-img-ui text-white">
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="flex-grow-1">
                      <div className="d-flex flex-column">
                        <div className="d-flex justify-content-between">
                          <Card.Text className="mb-0">Design pattern in js</Card.Text>
                          <h6 className="align-self-end pt-2">280 mins</h6>
                        </div>
                        <p>38 lessions</p>
                      </div>
                    </Card.Title>
                    <Card.Text className="d-flex justify-content-between">
                      <button className="btn bg-light rounded pl-3 pr-3 pt-2 pb-2"><span className="fas fa-play ml-1 mt-2 mb-2"></span></button>
                      <div className="align-self-center ml-2"><strong className="text-right mb-0">+178 Student enrolled</strong></div>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="bg-warning rounded-lg box-h198">
                  <Card.Body className="text-center">
                    <Card.Text>Some text here</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="bg-warning rounded-lg box-h198">
                  <Card.Body className="text-center">
                    <Card.Text>Some text here</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
        )
    }
}
class DnbOffers extends Component{
    render(){
        return (
            <div className="mb-3">
              <h2>Special Offers</h2>
              <div>
                <Card className="bg-warning rounded-lg box-h198">
                  <Card.Body className="text-center">
                    <Card.Text>Something in here</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
        )
    }
}