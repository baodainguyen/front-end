import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Card, Modal } from 'react-bootstrap';
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
        const cardTitle = cap ? <Card.Title className="fontSFProD fw-bold">{cap}</Card.Title> : <></>;
        const cardSubtitle = subCap ? <Card.Subtitle className="mb-2 text-muted">{subCap}</Card.Subtitle> : <></>;
        const cardDescription = text ? <Card.Text>{text}</Card.Text> : <></>;

        return (
            <Card className={`${className} w-100 mb-4 rounded-lg overflow-hidden border-0`}
                style={{ backgroundImage: `url(${src})`, backgroundSize: 'cover' }}>
                <Card.Img variant="top" src={src}
                    className="dnb-h396 rounded-1 dnb-img-cover opacity-0" />
                <Card.ImgOverlay className="bg-dark-o3 rounded-lg" />
                <Card.Body className="position-absolute start-50 translate-middle-x w-fm2r mb-3 rounded-4 bg-white">
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
                </Card.Body>
            </Card>
        );
    }
}

class DnbBtnModal extends Component {
    state = {
        id: `dnb-modal-component-${Date.now()}`,
        show: false
    };
    setShow = (e) => {
        this.setState({ show: true });
        e.preventDefault();
    }
    setHide = () => {
        this.setState({ show: false });
    }

    render() {
        const { title, children } = this.props;
        return (
            <>
                <a className="border-0 bg-transparent p-0 text-primary text-decoration-none"
                    onClick={this.setShow} href="">
                    Expand Image
                </a>
                <Modal
                    show={this.state.show}
                    size="xl"
                    //fullscreen={true}
                    centered
                    onHide={this.setHide}
                    dialogClassName="modal-90w"
                    aria-labelledby={this.state.id} >
                    <Modal.Header closeButton>
                        <Modal.Title id={this.state.id}>
                            {title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {children}
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}

