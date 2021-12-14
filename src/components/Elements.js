import React, { Component } from 'react';
import { Container, Button, Row, Col, Carousel, Form, Modal } from 'react-bootstrap';
import { getCookie, CookieKey, isEmail, getAverageRGB, getLuminanceFrom, getRgba } from '../global/Globals';
import { Logos } from '../global/Files';
import { RunServices, DataSection02 } from '../global/Services';

export class Footer extends Component {

    render() {
        return (
            <Container>
                <ListLang />
                <h2>Footer's Content</h2>

            </Container>
        )
    }
}
class ListLang extends Component {

    render() {
        return (
            <section >
                {Logos.map((item, i) => {
                    const { src, name } = item;
                    return <span key={`program-lang-${i}`}
                        className="d-inline-flex align-items-center bg-light me-3 mb-3 py-2 px-3 rounded-2 shadow-sm"
                    >
                        <img className="dnb-h30" src={src} alt={`${name} Logo`} />
                        {
                            name ? <span className="fs-5 ms-2 text-dark">{name}</span> : <></>
                        }
                    </span>
                })}
            </section>
        );
    }
}

export class Subcribe extends Component {
    state = {
        email: '', id: Date.now(),
        nofity: `We'll never share your email with anyone else.`
    };
    componentDidMount() {
        var _id = getCookie(CookieKey.Id);
        _id = +(_id);

        this.setState({ id: _id });
    }
    subcribeEmail = (e) => {
        e.preventDefault();
        const email = this.state.email;
        if (isEmail(email)) {
            const _id = this.state.id;
            const emailObj = {};
            emailObj[_id.toString()] = email;
            this.setState({ nofity: `Thank you for your submit!` });
            RunServices().setSubcribe(emailObj);
            return;
        }
        // alert
    }
    handleEmail = (e) => {
        let _email = e.target.value;
        this.setState({ email: _email });
        if (!isEmail(_email)) {
            this.setState({ nofity: `We'll never share your email with anyone else.` });
        }
    }

    render() {
        const _email = this.state.email;
        var isInvalid = _email != '' && !isEmail(_email);

        return (
            <Form onSubmit={this.subcribeEmail}>
                <Form.Group className="row g-3" controlId="formBasicEmail">
                    <div className="col-auto">
                        <Form.Control type="email" placeholder="Enter email"
                            className={isInvalid ? "is-invalid" : ""}
                            value={_email} onChange={this.handleEmail} />
                        <Form.Text className="text-muted">
                            {this.state.nofity}
                        </Form.Text>
                    </div>
                    <div className="col-auto">
                        <Button variant="primary" type="submit">
                            <strong className="text-white">Subcribe</strong>
                        </Button>
                    </div>
                </Form.Group>
            </Form>
        );
    }
}

export class MobileArticle extends Component {
    state = {
        showModal: false, currentModal: {},
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
        this.getGoTo(index);
        this.setAutoNext();
    }
    getGoTo = (i) => {
        clearInterval(this.intervalID);
        const { slides } = this.state;
        this.setState({
            activeIndex: i,
            bg: slides[i].bg,
            color: slides[i].color
        });
        return slides[i];
    }
    openModal = (index) => {
        const s = this.getGoTo(index);
        this.setState({
            showModal: true, currentModal: s
        });
    }
    onModalHide = () => {
        this.setState({ showModal: false });
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
        const { slides, title, activeIndex, bg, color, currentModal } = this.state;
        const _id = `dnb-modal-v-${Date.now()}`;
        return (
            <Row className="gx-1">
                <Col xl={9} lg={8} md={7} sm={6} xm={12}>
                    <section className="rounded-xl dnb-h600 overflow-hidden mb-5" >
                        <Carousel controls={false} indicators={false}
                            activeIndex={activeIndex}>
                            {slides.map((s, i) => {
                                const content = s.content !== '' ? <p dangerouslySetInnerHTML={{ __html: s.content }} /> : <></>;
                                const bgColor = s.content !== '' ? getRgba(bg, 0.81) : getRgba(bg, 0.36);
                                const clssTitle = s.content !== '' ? 'text-start rounded-3 p-3' : 'rounded-3 p-3';
                                return <Carousel.Item key={`dnb-carousel-${i}`}
                                    className='text-center w-100' style={{ backgroundColor: bg }}>
                                    <img src={s.img} alt={s.title}
                                        className="dnb-h600 dnb-img-cover" />
                                    <Carousel.Caption className={clssTitle}
                                        style={{ backgroundColor: bgColor, color: color }}>
                                        <h3>{s.title}</h3>
                                        <p>{s.sub}</p>
                                        {content}
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

                                return <div className="d-flex mb-3 dnb-pointer" key={i}>
                                    <img src={s.img} alt={s.title} onClick={() => { this.goToIndex(i) }}
                                        crossOrigin="anonymous" onLoad={e => { this.onLoad(e.target, i) }}
                                        className="d-block w-25 dhb-h48 me-3 mt-1 dnb-img-cover rounded" />
                                    <div className={highLight} style={{ color: color }} onClick={() => { this.openModal(i) }}>
                                        {s.sub}
                                    </div>
                                </div>
                            })}
                        </article>
                    </section>
                </Col>
                <Modal
                    show={this.state.showModal}
                    size="xl"
                    // fullscreen={true}
                    centered
                    onHide={this.onModalHide}
                    dialogClassName="modal-90w"
                    aria-labelledby={_id} >
                    <Modal.Header closeButton>
                        <Modal.Title id={_id}>
                            {currentModal.title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='text-center overflow-hidden'>
                            <img src={currentModal.img} alt={currentModal.title}
                                className="my-3 dnb-img-cover rounded" />
                        </div>
                        <p>{currentModal.sub}</p>
                        {currentModal.content !== '' ? <p dangerouslySetInnerHTML={{ __html: currentModal.content }} /> : <></>}
                    </Modal.Body>
                </Modal>
            </Row>
        );
    }
}
