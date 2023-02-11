import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { removeSpace } from '../global/Globals';

export class Navigator extends Component {

    render() {
        const { listmenu } = this.props;

        return (
            <nav className="navbar fontNotoSans dnb-navtop navbar-expand-md navbar-light bg-light sticky-top">
                <div className='container-fluid dnb-navigator'>
                    <NavLink className='dnb-logo' to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150"><path d="M 15 15 C 30 0 67.5 0 75 0 C 82.5 0 120 0 135 15 C 150 30 150 52.5 150 75 C 150 97.5 150 120 135 135 C 120 150 97.5 150 75 150 C 52.5 150 30 150 15 135 C 0 120 0 97.5 0 75 C 0 52.5 0 30 15 15" fill="rgba(8,154,239,1)"></path></svg>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#responsive-navbar-nav"
                        aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div id="responsive-navbar-nav" className='navbar-collapse collapse'>
                        <div className='nav'>
                            {listmenu.map((item, ii) => {
                                const { subs } = item
                                const keyMain = removeSpace(item.title) + ii
                                if (Array.isArray(subs) && subs.length) {
                                    return <div className="dnb-link-group" key={keyMain}>
                                        <NavLink className='nav-link' to={`/${removeSpace(item.title)}`}>{item.title}</NavLink>
                                        {subs.map((sub, i) => {
                                            const keySub = keyMain + removeSpace(sub) + i
                                            return <NavLink className='nav-link' to={`/${removeSpace(sub)}`}
                                                key={keySub}>{sub}</NavLink>
                                        })}
                                    </div>
                                } else {
                                    return <NavLink className='nav-link' key={keyMain} to={`/${removeSpace(item.title)}`}>{item.title}</NavLink>
                                }
                            })}
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export class DnbCard extends Component {
    state = { showModal: false };
    setShow = () => {
        this.setState({ showModal: true });
    }
    setHide = () => {
        this.setState({ showModal: false });
    }

    render() {
        const { src, cap, subCap, text, className } = this.props;
        const cardTitle = cap ? <div className="card-title fontSFProD fw-bold">{cap}</div> : <></>;
        const cardSubtitle = subCap ? <div className="card-subtitle mb-2 text-muted h6">{subCap}</div> : <></>;
        const cardDescription = text ? <p className='card-text'>{text}</p> : <></>;

        return (
            <div className={`card ${className} w-100 mb-4 rounded-lg overflow-hidden border-0`}
                style={{ backgroundImage: `url(${src})`, backgroundSize: 'cover' }}>
                <img src={src} className="card-img-top dnb-h396 rounded-1 dnb-img-cover opacity-0" />
                <div className="card-img-overlay bg-dark-o3 rounded-lg" />
                <div className="card-body position-absolute start-50 translate-middle-x w-fm2r mb-3 rounded-4 bg-white">
                    {cardTitle}
                    {cardSubtitle}
                    {cardDescription}
                    <DnbBtnModal title={cardSubtitle}>
                        <div className="w-100">
                            <img src={src} alt="img" style={{
                                _width: '100%',
                                get width() {
                                    return this._width;
                                },
                                set width(value) {
                                    this._width = value;
                                },
                            }} />
                        </div>
                    </DnbBtnModal>
                </div>
            </div>
        );
    }
}

class DnbBtnModal extends Component {
    state = {
        show: false
    }
    modalId = `dnb-modal-component-${Date.now()}`
    setShow = (e) => {
        this.setState({ show: true });
        e.preventDefault();
    }
    setHide = () => {
        this.setState({ show: false });
    }

    render() {
        const { title, children } = this.props
        const { show } = this.state
        const _id = this.modalId
        return (
            <>
                <a className="border-0 bg-transparent p-0 text-primary text-decoration-none"
                    onClick={this.setShow} data-bs-toggle="modal" data-bs-target={`#${_id}-container`}>
                    Expand Image
                </a>
                <div className="modal fade" tabindex="-1"
                    id={`${_id}-container`}
                    aria-labelledby={_id} aria-hidden="true"
                    style={{ display: show ? 'none' : '' }}>
                    <div className="modal-dialog modal-90w modal-xl modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className="modal-title h4" id={_id}>{title}</div>
                                <button type="button" className="btn-close" aria-label="Close"
                                    data-bs-dismiss="modal" onClick={this.setHide}></button>
                            </div>
                            <div className="modal-body">{children}</div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

