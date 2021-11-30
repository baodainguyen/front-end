import React, { Component } from 'react';
import { Container, Button, Row, Col, Carousel } from 'react-bootstrap';
import { DataSection01, DataSection02, DataSection03 } from '../global/Services';
import { DnbCard } from './BootstrapElements';
import { BackgroundLinear } from './Elements';
import { isEmpty } from '../global/Globals';

export class Home extends Component {
    render() {
        return (
            <>
                <Container className="my-5">
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
                        <h1 className="text-white pt-3 mb-3">{title}</h1>
                        <article className="overflow-hidden">
                            {slides.map((s, i) => {
                                return <div className="d-flex mb-3" onClick={() => { this.goToIndex(i) }} key={i}>
                                    <img
                                        className="d-block w-25 dhb-h48 me-3 mt-1 dnb-img-cover rounded"
                                        src={s.img} alt={s.title}
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
        this.state = Object.assign({}, DataSection03);
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
    }

    render() {
        const _head = this.state.head ? <h5>{this.state.head}</h5> : <></>;
        return (
            <>
                <h3>{this.state.title}</h3>
                {_head}
                <Row className="py-3">
                    {this.state.cards.map((card, i) => {

                        return <Col xs={12} md={6} lg={4} key={i}>
                            <DnbCard src={card.img}
                                cap={card.title}
                                subCap={card.head}
                                text={card.des}
                            />
                        </Col>
                    })}
                </Row>
            </>
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
        const _imgs = this.state.imgs;
        return (
            <Col lg={8} md={12}>
                <div className="position-relative w-100 dnb-card-group">
                    {_imgs.map((img, i) => {
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

