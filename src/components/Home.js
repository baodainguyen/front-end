import React, { Component } from 'react';
import { DataSection03 } from '../global/Services';
import { DnbCard } from './BootstrapElements';
import { getAverageRGB, getLuminanceFrom, getRgba } from '../global/Globals';
import { MobileArticle, Footer } from './Elements';
import { colSlider } from 'col-slider';
import Glide from '@glidejs/glide';
import '../../node_modules/@glidejs/glide/dist/css/glide.core.min.css';
import '../../node_modules/@glidejs/glide/dist/css/glide.theme.min.css';

export class Home extends Component {
    componentDidMount() {
        const mainNav = document.querySelector(`#dnbApp > nav.sticky-top:first-child`);
        mainNav.style.display = ''
    }
    render() {
        return (
            <>
                <div className="container-fluid bg-light py-3">
                    <div className='container'>
                        <MobileArticle />
                    </div>
                </div>
                <Section03 />
                <ColSectionBase64 />
                <div className='container py-5'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h3>glidejs</h3>
                            <p>A dependency-free JavaScript ES6 slider and carousel. It’s lightweight, flexible and fast. Designed to slide. No less, no more</p>
                        </div>
                        <div className='col-md-10'><Section4 /></div>
                    </div>
                </div>
                <div className='container py-5'>
                    <div className='row'>
                        <div className='col-md-10'><Section5 /></div>
                        <div className='col-md-2'>
                            <h3>col-slider</h3>
                            <p>A dependency-free JavaScript ES6 slider in column style. It’s lightweight. Designed to slide.</p>
                            <a href='https://www.npmjs.com/package/col-slider'>npm package</a>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}
const aaa = [
    { src: 'https://live.staticflickr.com/65535/51699992153_d166c33ac6_b.jpg' },
    { src: 'https://live.staticflickr.com/65535/51728456656_7e4105ffc0.jpg' },
    { src: 'https://live.staticflickr.com/65535/51726236650_a390837dfb.jpg' },
    { src: 'https://live.staticflickr.com/65535/51725347106_0a289e0761.jpg' }
]
class Section5 extends Component {
    componentDidMount() {
        colSlider({
            slides: aaa, mainWidth: '80%'
        }).append('.dnbBody');
    }
    render() {
        return (<div className='dnbBody'></div>);
    }
}
class Section4 extends Component {

    componentDidMount() {
        new Glide('.glide', {
            type: 'carousel',
            perView: 4.5,
            startAt: 1,
            focusAt: 'center',
            autoplay: 2100,
            breakpoints: {
                1410: { perView: 3.5 }, 1080: { perView: 2.5 }, 810: { perView: 2.1 }
            }
        }).mount().play();
    }

    render() {

        return (
            <div className="glide">
                <div className="glide__track rounded-1" data-glide-el="track">
                    <ul className="glide__slides">
                        {aaa.map((a, i) => {
                            return <li className="glide__slide overflow-hidden rounded-1" key={`dnb-glide-${i}`}>
                                <ItemGlide img={a.src} index={i} />
                            </li>
                        })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}
class ItemGlide extends Component {

    render() {
        const { img } = this.props;
        return (
            <div style={{ backgroundImage: `url(${img})` }}
                className='dnb-glide-item d-flex align-items-center'>
                <img className="opacity-0" src={img} />
            </div>
        );
    }
}

class Section03 extends Component {
    state = Object.assign({}, DataSection03);

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
        const { title, head, cards } = this.state;
        const _head = head ? <h4 className="mt-3">{head}</h4> : <></>;
        var _cards01 = cards.slice(0, 2);
        var _cards02 = cards.slice(2);

        return (<>
            <ColSection03 cards={_cards01} title={title} />
            <div className="container my-2">
                <div className="row py-1">
                    {_head}
                    <ColSection04 cards={_cards02} />
                </div>
            </div>
        </>
        );
    }
}
class ColSection03 extends Component {
    state = { width: window.innerWidth }

    onResize = () => {
        this.setState({ width: window.innerWidth });
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
    }
    componentDidMount() {
        window.addEventListener('resize', this.onResize);
    }

    render() {
        const { title, cards } = this.props;
        const { width } = this.state;
        var height = 510, sub = 51;
        if (width < 992) {   // md={6}
            sub = -450
        }
        return (
            <div className='container-fluid px-0 py-3'>
                <div className='container'><h3 className="fw-bold">{title}</h3></div>
                <div className="row gx-0">
                    {cards.map((card, i) => {
                        return <ColSection03SideBg key={card + i}
                            isLeft={i % 2 == 0} card={card} height={`${height}px`} />
                    })}
                </div>
                <div className='container'
                    style={{ marginTop: `-${height - sub}px`, minHeight: `${height - sub}px`, maxHeight: `${height - sub}px` }}>
                    <div className='row'>
                        {cards.map((card, i) => {
                            return <ColSection03Side isLeft={i % 2 == 0} card={card} height={`${height - 100}px`} />
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
class ColSection03SideBg extends Component {
    state = { bg: 'rgb(0,0,0)' }
    onLoad = (e) => {
        const rgb = getAverageRGB(e);
        this.setState({
            bg: `rgb(${rgb.r},${rgb.g},${rgb.b})`
        });
    }
    render() {
        const { card, isLeft, height } = this.props;
        const { bg } = this.state;
        const view = isLeft ? <img src={card.img} onLoad={e => { this.onLoad(e.target) }} crossOrigin="anonymous" /> :
            <img src={card.img} onLoad={e => { this.onLoad(e.target) }} crossOrigin="anonymous" />;

        return (
            <div className='col-md-12 col-lg-6'>
                <div className='card border-0 rounded-0'
                    style={{ backgroundColor: bg, minHeight: height, maxHeight: height }}>
                    <div style={{ opacity: '0' }}>{view}</div>
                </div>
            </div>
        );
    }
}
class ColSection03Side extends Component {
    state = { color: 'rgb(255,255,255)' }
    onLoad = (e) => {
        const rgb = getAverageRGB(e);
        this.setState({
            color: getLuminanceFrom(rgb.r, rgb.g, rgb.b)
        });
    }
    render() {
        const { card, isLeft, height } = this.props;
        const { color } = this.state;
        const view = isLeft ? <>
            <div className='col-xs-3'>
                <h5>{card.title}</h5>
                <p>{card.des}</p>
            </div>
            <div className='col-xs-9 rounded-2 overflow-hidden mb-5 pb-5'>
                <img style={{ maxHeight: height }} className='rounded-2' src={card.img}
                    onLoad={e => { this.onLoad(e.target) }} crossOrigin="anonymous" />
            </div>
        </> : <>
            <div className='col-xs-9 rounded-2 overflow-hidden text-end'>
                <img style={{ maxHeight: height }} className='rounded-2' src={card.img}
                    onLoad={e => { this.onLoad(e.target) }} crossOrigin="anonymous" />
            </div>
            <div className='col-xs-3 text-end'>
                <h5>{card.title}</h5>
                <p>{card.des}</p>
            </div>
        </>;

        return (
            <div className='col-md-12 col-lg-6'>
                <div className='card border-0 rounded-0 h-100' style={{ backgroundColor: 'transparent' }}>
                    <div className='row g-2' style={{ color: color }}>
                        {view}
                    </div>
                </div>
            </div>
        );
    }
}
class ColSection04 extends Component {
    render() {
        const { cards } = this.props;
        return (
            <>
                {cards.map((card, i) => {
                    return <div className='col-md-6 col-xs-12 col-lg-4' key={card.title + i}>
                        <DnbCard className="dnb-cardview shadow-sm"
                            src={card.img}
                            cap={card.title}
                            subCap={card.head}
                            text={card.des} />
                    </div>
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
            <div className="container-fluid my-3" style={{ backgroundColor: background }}>
                <div className="container py-3">
                    <div className="row gx-0">
                        <div className='col-md-12 col-lg-9'>
                            <img src="https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1627654577989-RXF9XFY4M6BKXNUP9YB6/Art_of_Iris_Compiet_1+%2811%29.jpg"
                                className="dhb-h48 dnb-img-cover flex-shrink-2 rounded-3 p-0 w-100"
                                onLoad={e => { this.onLoad(e.target) }} crossOrigin="anonymous" />
                        </div>
                        <div className='col-md-12 col-lg-3'>
                            <div className="d-flex align-items-end">
                                <div className="ms-3 flex-grow-1" style={{ 'color': color }}>
                                    <h1 className="fw-bold">Start explorer with <span className="d-inline-block">Open source.</span></h1>
                                    <h6>Create your free account in minutes and join the millions of businesses using Open source.</h6>
                                    <button type="button" className="btn btn-primary text-white">Start a Open account</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


