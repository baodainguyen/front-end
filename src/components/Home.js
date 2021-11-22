import React, { Component } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { RunServices, PageContent } from '../global/Services';
import { DnbCard } from './BootstrapElements';
import { isEmpty } from '../global/Globals';

export class Home extends Component {
    render() {
        return (
            <Container style={{marginTop: '30px'}}>
                <Row>
                    <Section01 />
                    <PreviewGrid />
                </Row>
                <Section02 />
            </Container>
        )
    }
}

class Section02 extends Component {

    render() {
        return (
            <Row>
                <Col xs={12} md={6} lg={4}>
                    <DnbCard src="https://assets.materialup.com/uploads/9dca95e3-c93d-4bfe-a020-c0eaeda2d185/preview.jpg"
                        cap="Card Title" 
                        subCap="Card Subtitle" 
                        text="Some quick example text to build on the card title and make up the bulk of the card's content." 
                    />
                </Col>
                <Col xs={12} md={6} lg={4}>
                <DnbCard src="https://assets.materialup.com/uploads/c0d7260d-a451-4fd6-b8d9-0ce73f4df484/attachment.png"
                        cap="Card Title" 
                        subCap="Card Subtitle" 
                        text="Some quick example text to build on the card title and make up the bulk of the card's content." 
                    />
                </Col>
                <Col xs={12} md={6} lg={4}>
                <DnbCard src="https://assets.materialup.com/uploads/7e165411-6dfc-4141-a0f2-b4361e931256/attachment.png"
                        cap="Card Title" 
                        subCap="Card Subtitle" 
                        text="Some quick example text to build on the card title and make up the bulk of the card's content." 
                    />
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <DnbCard src="https://assets.materialup.com/uploads/9dca95e3-c93d-4bfe-a020-c0eaeda2d185/preview.jpg"
                        cap="Card Title" 
                        subCap="Card Subtitle" 
                        text="Some quick example text to build on the card title and make up the bulk of the card's content." 
                    />
                </Col>
                <Col xs={12} md={6} lg={4}>
                <DnbCard src="https://assets.materialup.com/uploads/c0d7260d-a451-4fd6-b8d9-0ce73f4df484/attachment.png"
                        cap="Card Title" 
                        subCap="Card Subtitle" 
                        text="Some quick example text to build on the card title and make up the bulk of the card's content." 
                    />
                </Col>
                <Col xs={12} md={6} lg={4}>
                <DnbCard src="https://assets.materialup.com/uploads/7e165411-6dfc-4141-a0f2-b4361e931256/attachment.png"
                        cap="Card Title" 
                        subCap="Card Subtitle" 
                        text="Some quick example text to build on the card title and make up the bulk of the card's content." 
                    />
                </Col>
            </Row>
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
                <div style={{marginTop: '-90px'}}>
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
                <div className="position-relative w-100 dnb-card-group" style={{ backgroundColor: '#ffffff' }}>
                    {_imgs.map((img, i) => {
                        let _style = {
                            backgroundImage: `url(${img.url})`,
                            backgroundSize: 'cover'
                        };
                        let _class = `dnb-card rounded-3 dnb-card${i + 1}`
                        return <div className={_class} key={img.title}
                            style={_style}></div>
                    })}
                </div>
            </Col>
        );
    }
}
