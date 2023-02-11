import React, { Component } from 'react';
import { getCookie, CookieKey, isEmail, getAverageRGB, getLuminanceFrom, getRgba } from '../global/Globals';
import { Logos } from '../global/Files';
import { RunServices, DataSection02 } from '../global/Services';

export class Footer extends Component {

    render() {
        return (
            <div className='container'>
                <ListLang />
                <h2>Footer's Content</h2>

            </div>
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
                        className="d-inline-flex align-items-center bg-light me-3 mb-3 py-2 px-3 rounded-2 shadow-sm">
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
            <form onSubmit={this.subcribeEmail}>
                <div className="row g-3" controlId="formBasicEmail">
                    <div className="col-auto">
                        <input type="email" placeholder="Enter email"
                            className={`form-control${isInvalid ? ' is-invalid' : ''}`}
                            value={_email} onChange={this.handleEmail} />
                        <small className='text-muted form-text'>
                            {this.state.nofity}
                        </small>
                    </div>
                    <div className="col-auto">
                        <button className='btn btn-primary' type="submit">
                            <strong className="text-white">Subcribe</strong>
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

export class MobileArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false, currentModal: {},
            activeIndex: 0,
            title: DataSection02.Text,
            slides: DataSection02.Slides,
            bg: 'rgb(91, 189, 254)', color: '#c6e8ff'
        };
        this.modalId = `dnb-modal-v-${Date.now()}`
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
        const { slides, title, activeIndex, bg, color, currentModal, showModal } = this.state
        const _id = this.modalId
        return (
            <div className="row gx-1">
                <div className='col-xl-9 col-lg-8 col-md-7 col-sm-6 col-xm-12'>
                    <section className="rounded-xl dnb-h600 overflow-hidden mb-5" >
                        <div className="carousel slide" activeIndex={activeIndex} data-bs-ride="carousel">
                            <div className="carousel-inner">
                                {slides.map((s, i) => {
                                    const content = s.content !== '' ? <p dangerouslySetInnerHTML={{ __html: s.content }} /> : <></>;
                                    const bgColor = s.content !== '' ? getRgba(bg, 0.81) : getRgba(bg, 0.36);
                                    const clssTitle = s.content !== '' ? 'text-start rounded-3 p-3' : 'rounded-3 p-3';
                                    const clssActive = `carousel-item text-center w-100${i == activeIndex ? ' active' : ''}`
                                    return <div className={clssActive} data-bs-interval="5000"
                                        key={`dnb-carousel-${i}`} style={{ backgroundColor: bg }}>
                                        <img src={s.img} alt={s.title}
                                            className="dnb-h600 dnb-img-cover" />
                                        <div className={`carousel-caption ${clssTitle}`}
                                            style={{ backgroundColor: bgColor, color: color }}>
                                            <h3>{s.title}</h3>
                                            <p>{s.sub}</p>
                                            {content}
                                        </div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </section>
                </div>
                <div className='col-xl-3 col-lg-4 col-md-5 col-sm-6 col-xm-12'>
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
                                    <div className={highLight} style={{ color: color }}
                                        data-bs-toggle="modal" data-bs-target={`#${_id}-container`}
                                        onClick={() => { this.openModal(i) }}>
                                        {s.sub}
                                    </div>
                                </div>
                            })}
                        </article>
                    </section>
                </div>
                <div className="modal fade" tabindex="-1"
                    id={`${_id}-container`}
                    aria-labelledby={_id} aria-hidden="true"
                    style={{ display: showModal ? 'none' : '' }}>
                    <div className="modal-dialog modal-90w modal-xl modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className="modal-title h4" id={_id}>{currentModal.title}</div>
                                <button type="button" className="btn-close" aria-label="Close" data-bs-dismiss="modal"
                                    onClick={this.onModalHide}></button>
                            </div>
                            <div className="modal-body">
                                <div className="text-center overflow-hidden">
                                    <img src={currentModal.img} alt={currentModal.title}
                                        className="my-3 dnb-img-cover rounded" />
                                </div>
                                <p>{currentModal.sub}</p>
                                {currentModal.content !== '' ? <p dangerouslySetInnerHTML={{ __html: currentModal.content }} /> : <></>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
