import React, { Component } from 'react';
import { Container, Button, Row, Col, Carousel } from 'react-bootstrap';
import { DataSection01, DataSection02, DataSection03 } from '../global/Services';
import { DnbCard } from './BootstrapElements';
import { BackgroundLinear } from './Elements';
import { isEmpty, getAverageRGB } from '../global/Globals';

export class Home extends Component {
    render() {
        return (
            <>
                <Container className="my-5 fontNotoSans">
                    <Row>
                        <Section01 />
                        <PreviewGrid />
                    </Row>
                </Container>
                <Container fluid className="bg-light py-7">
                    <Container>
                        <Section02 />
                    </Container>
                </Container>
                <Container className="my-5">
                    <Section03 />
                </Container>
                <Container fluid className="my-3">
                    <ColSectionBase64 />
                </Container>
            </>
        )
    }
}

class Section02 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            title: DataSection02.Text,
            slides: DataSection02.Slides
        };
        this.goToIndex = this.goToIndex.bind(this);
        this.setAutoNext = this.setAutoNext.bind(this);
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    componentDidMount() {
        DataSection02.get().then(data => {
            this.setState({
                title: data.title,
                slides: data.slides
            });
        }).finally(this.setAutoNext);
    }
    setAutoNext() {
        const len = this.state.slides.length;
        this.intervalID = setInterval(() => {
            var _aI = this.state.activeIndex;
            _aI = ++_aI % len;
            this.setState({ activeIndex: _aI });
        }, 5000);
    }
    goToIndex(index) {
        clearInterval(this.intervalID);
        this.setState({ activeIndex: index });
        this.setAutoNext();
    }

    render() {
        const { slides, title, activeIndex } = this.state;
        return (
            <Row>
                <Col xl={9} lg={8} md={7} sm={6} xm={12}>
                    <section className="rounded-xl dnb-h600 overflow-hidden mb-5" >
                        <Carousel controls={false} indicators={false}
                            activeIndex={activeIndex}>
                            {slides.map((s, i) => {
                                return <Carousel.Item key={`dnb-carousel-${i}`}>
                                    <img src={s.img} alt={s.title}
                                        className="d-block w-100 rounded-xl dnb-h600 dnb-img-cover rounded"
                                    />
                                    <Carousel.Caption>
                                        <h3>{s.title}</h3>
                                        <p>{s.sub}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            })}
                        </Carousel>
                    </section>
                </Col>
                <Col xl={3} lg={4} md={5} sm={6} xm={12}>
                    <BackgroundLinear className="rounded-xl p-3 dnb-h600 overflow-hidden" botLeftColor="5bbdfe" midColor="87cfff" topRightColor="c6e8ff" >
                        <h3 className="fontSFProD fw-bold text-white pt-3 mb-3">{title}</h3>
                        <article className="overflow-hidden">
                            {slides.map((s, i) => {
                                return <div className="d-flex mb-3" onClick={() => { this.goToIndex(i) }} key={i}>
                                    <img src={s.img} alt={s.title}
                                        className="d-block w-25 dhb-h48 me-3 mt-1 dnb-img-cover rounded"
                                    />
                                    <div className="w-75 text-white fs-6 fw-bold">{s.sub}</div>
                                </div>
                            })}
                        </article>
                    </BackgroundLinear>
                </Col>
            </Row>
        );
    }
}

class Section03 extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({
            width: window.innerWidth
        }, DataSection03);
    }
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
        var _cards01 = cards.slice(0, 3);
        var _cards02 = cards.slice(3);
        if (head && 767 < width && width < 992) {   // md={6}
            _cards01 = cards.slice(0, 4);
            _cards02 = cards.slice(4);
        }
        return (
            <>
                <h3 className="fw-bold">{title}</h3>
                <Row className="py-3">
                    <ColSection03 cards={_cards01} />
                    {_head}
                    <ColSection03 cards={_cards02} />
                </Row>
            </>
        );
    }
}
class ColSection03 extends Component {
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
    constructor(props) {
        super(props);
        this.state = Object.assign({
            background: 'rgb(74, 181, 244)'
        }, DataSection03);
    }
    onLoad = (e) => {
        var rgb = getAverageRGB(e);
        console.log(rgb)
        this.setState({ background: rgb });
    }
    render() {
        const { background } = this.state;

        return (
            <Row className="p-3 d-flex justify-content-center" style={{ backgroundColor: background }}>
                <img src="https://live.staticflickr.com/65535/51699992153_d166c33ac6_b.jpg"
                    className="w-25 dhb-h48 dnb-img-cover rounded p-0"
                    onLoad={e => { this.onLoad(e.target) }} crossOrigin="anonymous"
                />
            </Row>
        );
    }
}

class Section01 extends Component {
    constructor(props) {
        super(props);
        this.state = { text: DataSection01.Text };
    }
    componentDidMount() {
        DataSection01.getText().then(data => {
            this.setState({ text: data });
        });
    }

    render() {
        const { title, head, des, abutton } = this.state.text;
        const actionBtn = isEmpty(abutton) ? <></> : <Button className="rounded-1" variant="dark">{abutton}</Button>
        return (
            <Col lg={4} md={12} className="d-flex align-items-center mb-5">
                <div style={{ marginTop: '-90px' }}>
                    <h5>{title}</h5>
                    <h3>{head}</h3>
                    <p>{des}</p>
                    {actionBtn}
                </div>
            </Col>
        );
    }
}

class PreviewGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgs: DataSection01.Imgs
        };
    }
    componentDidMount() {
        DataSection01.getImgs().then(_imgs => {
            this.setState({ imgs: _imgs });
        });
    }

    render() {
        const { imgs } = this.state;
        return (
            <Col lg={8} md={12}>
                <div className="position-relative w-100 dnb-card-group">
                    {imgs.map((img, i) => {
                        let _style = {
                            backgroundImage: `url(${img.url})`,
                            backgroundSize: 'cover'
                        };
                        let _class = `dnb-card rounded-3 dnb-card${i + 1}`
                        return <div className={_class} key={`section-01-img-${i}`}
                            style={_style} title={img.title}></div>
                    })}
                </div>
            </Col>
        );
    }
}

