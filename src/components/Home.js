import React, { Component } from 'react';
import { Container, Button, Row, Col, Carousel } from 'react-bootstrap';
import { DataSection01, DataSection02, DataSection03 } from '../global/Services';
import { DnbCard } from './BootstrapElements';
import { isEmpty, getAverageRGB, getLuminanceFrom } from '../global/Globals';

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
                <Section03 />
                <ColSectionBase64 />
            </>
        )
    }
}
//https://www.npmjs.com/package/@glidejs/glide
class Section02 extends Component {
    state = {
        activeIndex: 0,
        title: DataSection02.Text,
        slides: DataSection02.Slides,
        bg: 'rgb(91, 189, 254)', color: '#c6e8ff'
    };

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
    setAutoNext = () => {
        this.intervalID = setInterval(() => {
            const { slides } = this.state;
            var _aI = this.state.activeIndex;

            _aI = ++_aI % slides.length;
            this.setState({
                activeIndex: _aI,
                bg: slides[_aI].bg,
                color: slides[_aI].color
            });
        }, 5000);
    }
    goToIndex = (index) => {
        clearInterval(this.intervalID);
        this.setState({ activeIndex: index });
        this.setAutoNext();
    }
    onLoad = (e, index) => {
        const rgb = getAverageRGB(e);
        const { slides, activeIndex } = this.state;

        slides[index].bg = `rgb(${rgb.r},${rgb.g},${rgb.b})`;
        slides[index].color = getLuminanceFrom(rgb.r, rgb.g, rgb.b);
        if (index === activeIndex) {
            this.setState({
                bg: slides[index].bg,
                color: slides[index].color
            });
        }
    }

    render() {
        const { slides, title, activeIndex, bg, color } = this.state;
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
                    <section className="rounded-xl p-3 dnb-h600 overflow-hidden" style={{ backgroundColor: bg }} >
                        <h3 className="fontSFProD fw-bold pt-3 mb-3" style={{ color: color }}>{title}</h3>
                        <article className="overflow-hidden">
                            {slides.map((s, i) => {
                                var highLight = "w-75 fs-6 fw-bold";
                                if (i !== activeIndex) highLight += " opacity-50";
                                
                                return <div className="d-flex mb-3" onClick={() => { this.goToIndex(i) }} key={i}>
                                    <img src={s.img} alt={s.title}
                                        crossOrigin="anonymous" onLoad={e => { this.onLoad(e.target, i) }}
                                        className="d-block w-25 dhb-h48 me-3 mt-1 dnb-img-cover rounded"
                                    />
                                    <div className={highLight} style={{ color: color }}>{s.sub}</div>
                                </div>
                            })}
                        </article>
                    </section>
                </Col>
            </Row>
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
        var _cards01 = cards.slice(0, 3);
        var _cards02 = cards.slice(3);
        if (head && 767 < width && width < 992) {   // md={6}
            _cards01 = cards.slice(0, 4);
            _cards02 = cards.slice(4);
        }
        return (
            <Container className="my-5">
                <h3 className="fw-bold">{title}</h3>
                <Row className="py-3">
                    <ColSection03 cards={_cards01} />
                    {_head}
                    <ColSection03 cards={_cards02} />
                </Row>
            </Container>
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
    state = Object.assign({
        background: 'rgb(74, 181, 244)', color: 'black'
    }, DataSection03);

    onLoad = (e) => {
        var rgb = getAverageRGB(e);
        console.log(rgb)
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
                    <Row>
                        <Col lg="9" md="12">
                            <img src="https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1627654577989-RXF9XFY4M6BKXNUP9YB6/Art_of_Iris_Compiet_1+%2811%29.jpg"
                                className="dhb-h48 dnb-img-cover flex-shrink-2 rounded-3 p-0" style={{ 'width': '100%' }}
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

class Section01 extends Component {
    state = { text: DataSection01.Text };

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
    state = {
        imgs: DataSection01.Imgs
    };

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

