import React, { Component } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { RunServices, PageContent } from '../global/Services';
import { DnbCard } from './BootstrapElements';
import { isEmpty } from '../global/Globals';

export class Home extends Component {
    render() {
        return (
            <>
                <Container fluid className="bg-light pt-3">
                    <Container>
                        <Row>
                            <Section01 />
                            <PreviewGrid />
                        </Row>
                    </Container>
                </Container>
                <Container className="mt-5">
                    <Section02 />
                </Container>
            </>
        )
    }
}

class Section02 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: !PageContent.Section02 ? 'Section 02' : PageContent.Section02.title,
            head: !PageContent.Section02 ? '' : PageContent.Section02.head,
            cards: PageContent.Cards
        };
    }
    componentDidMount() {
        if (!PageContent.Section02) {
            RunServices().getSection02().then(data => {
                PageContent.Section02 = data;
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
