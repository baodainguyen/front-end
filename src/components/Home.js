import React, { Component } from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import { DataSection03 } from '../global/Services';
import { DnbCard } from './BootstrapElements';
import { getAverageRGB, getLuminanceFrom, getRgba } from '../global/Globals';
import { MobileArticle } from './Elements';
import Glide from '@glidejs/glide';
import '../../node_modules/@glidejs/glide/dist/css/glide.core.min.css';
import '../../node_modules/@glidejs/glide/dist/css/glide.theme.min.css';


export class Home extends Component {
    render() {
        return (
            <>
                <Container fluid className="bg-light py-3">
                    <Container>
                        <MobileArticle />
                    </Container>
                </Container>
                <Section03 />
                {/* <Container>
                    <Row>
                        <Col md={4}>
                            <h3>glidejs</h3>
                        </Col>
                        <Col md={8}><Section4 /></Col>
                    </Row>
                </Container> */}
                <ColSectionBase64 />
            </>
        )
    }
}
class Section4 extends Component {
    state = { bg: 'white' };
    componentDidMount() {
        var glide = new Glide('.glide', {
            type: 'carousel',
            perView: 4,
            startAt: 0,
            focusAt: 0,
            autoplay: 2100,
            breakpoints: {
                800: { perView: 2 }, 480: { perView: 1 }
            }
        }).mount();
        // glide.on('move.after', function(m) {
        //     console.log(m)
        // });
        glide.play();
    }
    setBg = (_bg, _w) => {
        this.setState({ bg: _bg });
        console.log(_w);
    }

    render() {
        const { bg } = this.state;
        return (
            <div className="glide" style={{ backgroundColor: bg }}>
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                        <li className="glide__slide overflow-hidden">
                            <ItemGlide img="https://live.staticflickr.com/65535/51699992153_d166c33ac6_b.jpg"
                                setParentBg={this.setBg} />
                        </li>
                        <li className="glide__slide overflow-hidden">
                            <ItemGlide img="https://live.staticflickr.com/65535/51728456656_7e4105ffc0.jpg"
                                setParentBg={this.setBg} />
                        </li>
                        <li className="glide__slide overflow-hidden">
                            <ItemGlide img="https://live.staticflickr.com/65535/51726236650_a390837dfb.jpg"
                                setParentBg={this.setBg} />
                        </li>
                        <li className="glide__slide overflow-hidden">
                            <ItemGlide img="https://live.staticflickr.com/65535/51725347106_0a289e0761.jpg"
                                setParentBg={this.setBg} />
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
class ItemGlide extends Component {
    state = { bg: '#4ab5f4' };
    onLoad = (e) => {
        var rgb = getAverageRGB(e);
        const background = `rgb(${rgb.r},${rgb.g},${rgb.b})`;
        this.setState({ bg: background });
        this.props.setParentBg(background, e.width);
    }
    render() {
        const { bg } = this.state;
        const { img } = this.props;
        return (
            <div className='dnb-glide-item rounded-1 overflow-hidden d-flex align-items-center' style={{ backgroundColor: bg }}>
                <img className="w-100 h-100" onLoad={e => { this.onLoad(e.target) }}
                    src={img} crossOrigin="anonymous" />
            </div>
        );
    }
}

class Section03 extends Component {
    state = Object.assign({
        width: window.innerWidth
    }, DataSection03);

    componentDidMount() {
        DataSection03.getText().then(data => {
            this.setState({
                title: data.title,
                head: data.head
            });
        });
        DataSection03.getAllCards().then(cards => {
            this.setState({ cards: cards });
        });
        window.addEventListener('resize', this.onResize);
    }
    onResize = () => {
        this.setState({ width: window.innerWidth });
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
    }

    render() {
        const { title, head, cards, width } = this.state;
        const _head = head ? <h4 className="mt-3">{head}</h4> : <></>;
        var _cards01 = cards.slice(0, 2);
        var _cards02 = cards.slice(2);
        if (head && 767 < width && width < 992) {   // md={6}
            _cards01 = cards.slice(0, 4);
            _cards02 = cards.slice(4);
        }
        return (<>
            <ColSection03 cards={_cards01} title={title} />
            <Container className="my-5">
                <Row className="py-3">
                    {_head}
                    <ColSection04 cards={_cards02} />
                </Row>
            </Container>
        </>
        );
    }
}
class ColSection03 extends Component {
    render() {
        const { title, cards } = this.props;
        return (
            <Container fluid className='px-0 py-5'>
                <Container><h3 className="fw-bold">{title}</h3></Container>
                <Row className="gx-0">
                    {cards.map((card, i) => {
                        return <ColSection03Side isLeft={i % 2 == 0} card={card} />
                    })}
                </Row>
            </Container>
        );
    }
}
class ColSection03Side extends Component {
    state = {
        bg: 'rgb(0,0,0)', color: 'rgb(255,255,255)'
    }
    onLoad = (e) => {
        const rgb = getAverageRGB(e);
        const bg = `rgb(${rgb.r},${rgb.g},${rgb.b})`;
        const color = getLuminanceFrom(rgb.r, rgb.g, rgb.b);
        this.setState({
            bg: bg,
            color: color
        });
    }
    render() {
        const { card, isLeft } = this.props;
        const {bg, color} = this.state;
        const view = isLeft ? <>
            <Col md={3}></Col>
            <Col md={9} className='ms-n4'>
                <Row className='gx-0'>
                    <Col md={4}>
                        <h5>{card.title}</h5>
                        <p>{card.des}</p>
                    </Col>
                    <Col md={8} className='ms-4 me-n4'>
                        <img className='w-100' src={card.img} onLoad={e => { this.onLoad(e.target) }} crossOrigin="anonymous"/>
                    </Col>
                </Row>
            </Col>
        </> : <>
            <Col md={9}>
                <Row className='gx-0'>
                    <Col md={8}>
                        <img className='w-100' src="https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1627654577989-RXF9XFY4M6BKXNUP9YB6/Art_of_Iris_Compiet_1+%2811%29.jpg"
                        onLoad={e => { this.onLoad(e.target) }} crossOrigin="anonymous"/>
                    </Col>
                    <Col md={4}>
                        <h5>{card.title}</h5>
                        <p>{card.des}</p>
                    </Col>
                </Row>
            </Col>
            <Col md={3}></Col>
        </>;

        return (
            <Col xs={12} md={6} >
                <Card className='border-0 rounded-0' style={{backgroundColor: bg}}>
                    <Row className='g-0' style={{color: color}}>
                        {view}
                    </Row>
                </Card>
            </Col>
        );
    }
}
class ColSection04 extends Component {
    render() {
        const { cards } = this.props;
        return (
            <>
                {cards.map((card, i) => {
                    return <Col xs={12} md={6} lg={4} key={i}>
                        <DnbCard src={card.img}
                            cap={card.title}
                            subCap={card.head}
                            text={card.des} />
                    </Col>
                })}
            </>
        );
    }
}
class ColSectionBase64 extends Component {
    state = Object.assign({
        background: 'rgb(74, 181, 244)', color: 'black'
    }, DataSection03);

    onLoad = (e) => {
        var rgb = getAverageRGB(e);
        this.setState({
            background: `rgb(${rgb.r},${rgb.g},${rgb.b})`,
            color: getLuminanceFrom(rgb.r, rgb.g, rgb.b)
        });
    }
    render() {
        const { background, color } = this.state;

        return (
            <Container fluid className="my-3" style={{ backgroundColor: background }}>
                <Container className="py-3">
                    <Row className="gx-0">
                        <Col lg="9" md="12">
                            <img src="https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1627654577989-RXF9XFY4M6BKXNUP9YB6/Art_of_Iris_Compiet_1+%2811%29.jpg"
                                className="dhb-h48 dnb-img-cover flex-shrink-2 rounded-3 p-0 w-100"
                                onLoad={e => { this.onLoad(e.target) }} crossOrigin="anonymous" />
                        </Col>
                        <Col lg="3" md="12">
                            <div className="d-flex align-items-end">
                                <div className="ms-3 flex-grow-1" style={{ 'color': color }}>
                                    <h1 className="fw-bold">Start explorer with <span className="d-inline-block">Open source.</span></h1>
                                    <h6>Create your free account in minutes and join the millions of businesses using Open source.</h6>
                                    <Button variant="primary text-white">Start a Open account</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}


