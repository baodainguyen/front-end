import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Card, Modal, Button } from 'react-bootstrap';
import { DnbButtonRoute } from './Elements';
import { Logo } from '../global/Files';
import { removeSpace } from '../global/Globals';

export class Navigator extends Component {

    render() {
        const _navs = this.props.list;

        return (
            <Navbar collapseOnSelect bg="light" variant="light" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand as={Link} to="/" href="#home">
                        <img style={{ display: 'inline-block', width: '54px' }} src={Logo} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"> </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/" href="#home">Home</Nav.Link>
                            {_navs.map((item) => {
                                const hasSub = !!item.sub1 || !!item.sub2;
                                if (hasSub) {
                                    return <div className="dnb-link-group" key={item.title}>
                                        <Nav.Link as={Link} to={`/${item.title}`} href={`#${removeSpace(item.title)}`}>{item.title}</Nav.Link>
                                        {!!item.sub1 ? <Nav.Link as={Link} to={`/${removeSpace(item.sub1)}`} href={`#${removeSpace(item.sub1)}`}>{item.sub1}</Nav.Link> : <></>}
                                        {!!item.sub2 ? <Nav.Link as={Link} to={`/${removeSpace(item.sub2)}`} href={`#${removeSpace(item.sub2)}`}>{item.sub2}</Nav.Link> : <></>}
                                    </div>
                                } else {
                                    return <Nav.Link as={Link} key={item.title} to={`/${removeSpace(item.title)}`} href={`#${removeSpace(item.title)}`}>{item.title}</Nav.Link>;
                                }
                            })}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export class DnbCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
        this.setShow = this.setShow.bind(this);
        this.setHide = this.setHide.bind(this);
    }
    setShow() {
        this.setState({ showModal: true });
    }
    setHide() {
        this.setState({ showModal: false });
    }

    render() {
        const { src, cap, subCap, text } = this.props;
        const cardTitle = cap ? <Card.Title className="h4">{cap}</Card.Title> : <></>;
        const cardSubtitle = subCap ? <Card.Subtitle className="mb-2 text-muted">{subCap}</Card.Subtitle> : <></>;
        const cardDescription = text ? <Card.Text>{text}</Card.Text> : <></>;

        return (
            <Card className="border-0 rounded-3 w-100 mb-5">
                {cardTitle}
                <Card.Img variant="top" src={src}
                    className="rounded-3 dnb-img-max-height300 dnb-img-cover"
                />
                <Card.Body className="ps-0 pe-0">
                    {cardSubtitle}
                    {cardDescription}
                    {/* <DnbButtonRoute linkTo="Contact">Go somewhere</DnbButtonRoute> */}
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
    constructor(props) {
        super(props);
        this.state = {
            id: `dnb-modal-component-${Date.now()}`,
            show: false
        };
        this.setShow = this.setShow.bind(this);
        this.setHide = this.setHide.bind(this);
    }
    setShow() {
        this.setState({ show: true });
    }
    setHide() {
        this.setState({ show: false });
    }

    render() {
        const { title, children } = this.props;
        return (
            <>
                <Button variant="primary" className="text-white"
                    onClick={this.setShow}>
                    Expand Image
                </Button>
                <Modal
                    show={this.state.show}
                    size="xl"
                    //fullscreen={true}
                    centered
                    onHide={this.setHide}
                    dialogClassName="modal-90w"
                    aria-labelledby={this.state.id}
                >
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

