import React, { Component } from 'react';
import { Container, Button, Row, Col, Carousel } from 'react-bootstrap';
import { RunServices, PageContent } from '../global/Services';
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
                <Container fluid className="bg-light pt-7 pb-6">
                    <Container>
                        <Section02 />
                    </Container>
                </Container>
                <Container className="mt-5">
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
            activeIndex: 0, intervalID: undefined,
            title: !PageContent.Section02 ? 'Section 02' : PageContent.Section02.title,
            slides: !PageContent.Section02 ? [] : PageContent.Section02.slides
        };
        this.goToIndex = this.goToIndex.bind(this);
        this.setAutoNext = this.setAutoNext.bind(this);
    }
    componentDidMount() {
        if (!PageContent.Section02) {
            RunServices().getSection02().then(data => {
                PageContent.Section02 = data;
                this.setState({
                    title: data.title,
                    slides: data.slides
                });
            }).then(this.setAutoNext);
        }
    }
    setAutoNext() {
        const len = this.state.slides.length;
        const _iId = setInterval(() => {
            var _aI = this.state.activeIndex;
            _aI = ++_aI % len;
            this.setState({ activeIndex: _aI });
        }, 5000);
        this.setState({ intervalID: _iId });
    }
    goToIndex(index) {
        clearInterval(this.state.intervalID);
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
        this.state = {
            title: !PageContent.Section03 ? 'Section 03' : PageContent.Section03.title,
            head: !PageContent.Section03 ? '' : PageContent.Section03.head,
            cards: PageContent.Cards
        };
    }
    componentDidMount() {
        if (!PageContent.Section03) {
            RunServices().getSection03().then(data => {
                PageContent.Section03 = data;
                this.setState({
                    title: data.title,
                    head: data.head
                });
            });
        }
        if (PageContent.Cards.length < 1) {
            RunServices().getAllCard().then(cards => {
                PageContent.Cards = cards;
                this.setState({ cards: cards });
            });
        }
    }

    render() {
        const _head = this.state.head ? <h5>{this.state.head}</h5> : <></>;
        return (
            <>
                <h3>{this.state.title}</h3>
                {_head}
                <Row className="pt-3">
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
        this.state = {
            s01: PageContent.Section01 ? PageContent.Section01 : {}
        };
    }
    componentDidMount() {
        if (!PageContent.Section01) {
            RunServices().getSection01().then(data => {
                PageContent.Section01 = data;
                this.setState({ s01: data });
            });
        }
    }

    render() {
        const _s01 = this.state.s01;
        const actionBtn = isEmpty(_s01.abutton) ? <></> : <Button className="rounded-1" variant="dark">{_s01.abutton}</Button>
        return (
            <Col lg={4} md={12} className="d-flex align-items-center mb-5">
                <div style={{ marginTop: '-90px' }}>
                    <h5>{_s01.title}</h5>
                    <h3>{_s01.head}</h3>
                    <p>{_s01.des}</p>
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
            imgs: PageContent.PreviewImgs
        };
    }
    componentDidMount() {
        if (PageContent.PreviewImgs.length < 1) {
            RunServices().getPreviewImages().then(_imgs => {
                if (!_imgs || _imgs.length < 1) return;
                PageContent.PreviewImgs = _imgs;
                this.setState({ imgs: _imgs });
            });
        }
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
