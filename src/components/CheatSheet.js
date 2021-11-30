import React, { Component } from 'react';
import { BootStrapJs, CheatSheetJs } from '../global/Globals';
import '../scss/cheatsheet.scss';

export class CheatSheet extends Component {
    render() {
        return (
            <>
                <Aside />
                <Content />
                <BootStrapJs />
                <CheatSheetJs />
            </>
        );
    }
}

class Aside extends Component {

    render() {
        return (
            <aside className="bd-aside sticky-xl-top text-muted align-self-start mb-3 mb-xl-5 px-2">
                <h3 className="pt-4 pb-3 mb-4 border-bottom">On this page</h3>
                <nav id="toc">
                    <ul className="list-unstyled">
                        <li className="my-2">
                            <button className="btn fs-3 d-inline-flex align-items-center collapsed" data-bs-toggle="collapse" aria-expanded="false"
                                data-bs-target="#contents-collapse" aria-controls="contents-collapse">Contents</button>
                            <ul className="list-unstyled ps-3 collapse" id="contents-collapse">
                                <li><a className="d-inline-flex align-items-center rounded" href="#typography">Typography</a></li>
                                <li><a className="d-inline-flex align-items-center rounded" href="#images">Images</a></li>
                                <li><a className="d-inline-flex align-items-center rounded" href="#tables">Tables</a></li>
                                <li><a className="d-inline-flex align-items-center rounded" href="#figures">Figures</a></li>
                            </ul>
                        </li>
                        <li className="my-2">
                            <button className="btn fs-3 d-inline-flex align-items-center collapsed" data-bs-toggle="collapse" aria-expanded="false"
                                data-bs-target="#forms-collapse" aria-controls="forms-collapse">Forms</button>
                            <ul className="list-unstyled ps-3 collapse" id="forms-collapse">
                                <li><a className="d-inline-flex align-items-center rounded" href="#overview">Overview</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </aside>
        );
    }
}

class ContentArticle extends Component {

    render() {
        const { title, children, id, urlTitle, url } = this.props;
        let _aTag = urlTitle ? <a className="d-flex align-items-center" href={url ? url : ''}>{urlTitle}</a> : <></>;
        return (
            <article className="my-3" id={id ? id : ''}>
                <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                    <h3>{title}</h3>
                    {_aTag}
                </div>
                <div>
                    {children}
                </div>
            </article>
        );
    }
}

class Content extends Component {
    render() {
        return (
            <div className="bd-cheatsheet container-fluid bg-body">
                <section id="content">
                    <h2 className="sticky-xl-top fw-bold pt-3 pt-xl-5 pb-2 pb-xl-3">Contents</h2>
                    <ContentArticle title="test content article">
                        <div className="bd-example">
                            <p className="display-1">Test article component</p>
                            <p>Composition vs Inheritance React has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components. In this section, we will consider a few problems where developers new to React often reach for inheritance, and show how we can solve them with composition. Containment</p>
                        </div>
                    </ContentArticle>
                    <ContentArticle title="Typography" id="typography" urlTitle="Documentation" url="#typography">

                        <div className="bd-example">
                            <p className="display-1">Display 1</p>
                            <p className="display-2">Display 2</p>
                            <p className="display-3">Display 3</p>
                            <p className="display-4">Display 4</p>
                            <p className="display-5">Display 5</p>
                            <p className="display-6">Display 6</p>
                        </div>

                        <div className="bd-example">
                            <p className="h1">Heading 1</p>
                            <p className="h2">Heading 2</p>
                            <p className="h3">Heading 3</p>
                            <p className="h4">Heading 4</p>
                            <p className="h5">Heading 5</p>
                            <p className="h6">Heading 6</p>
                        </div>

                        <div className="bd-example">
                            <p className="lead">
                                This is a lead paragraph. It stands out from regular paragraphs.
                            </p>
                        </div>

                        <div className="bd-example">
                            <p>You can use the mark tag to <mark>highlight</mark> text.</p>
                            <p><del>This line of text is meant to be treated as deleted text.</del></p>
                            <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
                            <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
                            <p><u>This line of text will render as underlined.</u></p>
                            <p><small>This line of text is meant to be treated as fine print.</small></p>
                            <p><strong>This line rendered as bold text.</strong></p>
                            <p><em>This line rendered as italicized text.</em></p>
                        </div>

                        <div className="bd-example">
                            <blockquote className="blockquote">
                                <p>A well-known quote, contained in a blockquote element.</p>
                                <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                            </blockquote>
                        </div>

                        <div className="bd-example">
                            <ul className="list-unstyled">
                                <li>This is a list.</li>
                                <li>It appears completely unstyled.</li>
                                <li>Structurally, it's still a list.</li>
                                <li>However, this style only applies to immediate child elements.</li>
                                <li>Nested lists:
                                    <ul>
                                        <li>are unaffected by this style</li>
                                        <li>will still show a bullet</li>
                                        <li>and have appropriate left margin</li>
                                    </ul>
                                </li>
                                <li>This may still come in handy in some situations.</li>
                            </ul>
                        </div>

                        <div className="bd-example">
                            <ul className="list-inline">
                                <li className="list-inline-item">This is a list item.</li>
                                <li className="list-inline-item">And another one.</li>
                                <li className="list-inline-item">But they're displayed inline.</li>
                            </ul>
                        </div>
                    </ContentArticle>
                    <ContentArticle title="Images" id="images" urlTitle="Documentation" url="#images">
                        <div className="bd-example">
                            <svg className="bd-placeholder-img bd-placeholder-img-lg img-fluid" width="100%" height="250" xmlns="http://www.w3.org/2000/svg"
                                role="img" aria-label="Placeholder: Responsive image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96" /><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Responsive image</text></svg>
                        </div>
                        <div className="bd-example">
                            <svg className="bd-placeholder-img img-thumbnail" width="200" height="200" xmlns="http://www.w3.org/2000/svg" role="img"
                                aria-label="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera: 200x200" preserveAspectRatio="xMidYMid slice" focusable="false"><title>A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera</title><rect width="100%" height="100%" fill="#868e96" /><text x="50%" y="50%" fill="#dee2e6" dy=".3em">200x200</text></svg>
                        </div>
                    </ContentArticle>
                    <ContentArticle title="Tables" id="tables" urlTitle="Documentation" url="#tables">
                        <div className="bd-example">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td colspan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bd-example">
                            <table className="table table-dark table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td colspan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bd-example">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">Class</th>
                                        <th scope="col">Heading</th>
                                        <th scope="col">Heading</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Default</th>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                    </tr>

                                    <tr className="table-primary">
                                        <th scope="row">Primary</th>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                    </tr>
                                    <tr className="table-secondary">
                                        <th scope="row">Secondary</th>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                    </tr>
                                    <tr className="table-success">
                                        <th scope="row">Success</th>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                    </tr>
                                    <tr className="table-danger">
                                        <th scope="row">Danger</th>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                    </tr>
                                    <tr className="table-warning">
                                        <th scope="row">Warning</th>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                    </tr>
                                    <tr className="table-info">
                                        <th scope="row">Info</th>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                    </tr>
                                    <tr className="table-light">
                                        <th scope="row">Light</th>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                    </tr>
                                    <tr className="table-dark">
                                        <th scope="row">Dark</th>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bd-example">
                            <table className="table table-sm table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td colspan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </ContentArticle>
                    <ContentArticle title="Figures" id="figures" urlTitle="Documentation" url="#figures">
                        <div className="bd-example">
                            <figure className="figure">
                                <svg className="bd-placeholder-img figure-img img-fluid rounded" width="400" height="300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 400x300" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96" /><text x="50%" y="50%" fill="#dee2e6" dy=".3em">400x300</text></svg>

                                <figcaption className="figure-caption">A caption for the above image.</figcaption>
                            </figure>
                        </div>
                    </ContentArticle>
                </section>

                <section id="forms">
                    <h2 className="sticky-xl-top fw-bold pt-3 pt-xl-5 pb-2 pb-xl-3">Forms</h2>
                    <ContentArticle title="Overview" id="overview" urlTitle="Documentation" url="#overview">
                        <div className="bd-example">
                            <form>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                </div>
                                <fieldset className="mb-3">
                                    <legend>Radios buttons</legend>
                                    <div className="form-check">
                                        <input type="radio" name="radios" className="form-check-input" id="exampleRadio1" />
                                        <label className="form-check-label" for="exampleRadio1">Default radio</label>
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="radio" name="radios" className="form-check-input" id="exampleRadio2" />
                                        <label className="form-check-label" for="exampleRadio2">Another radio</label>
                                    </div>
                                </fieldset>
                                <div className="mb-3">
                                    <label className="form-label" for="customFile">Upload</label>
                                    <input type="file" className="form-control" id="customFile" />
                                </div>
                                <div className="mb-3 form-check form-switch">
                                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                                    <label className="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
                                </div>
                                <div className="mb-3">
                                    <label for="customRange3" className="form-label">Example range</label>
                                    <input type="range" className="form-range" min="0" max="5" step="0.5" id="customRange3" />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </ContentArticle>

                </section>

            </div>
        );
    }
}
