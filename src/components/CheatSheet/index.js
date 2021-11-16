import React, { Component } from 'react';
import './cheatsheet.scss';

export class CheatSheet extends Component {

    render() {
        return (
            <>
                <Aside />
                <Content />
            </>
        );
    }
}

class Aside extends Component {

    render() {
        return (
            <aside className="bd-aside sticky-xl-top text-muted align-self-start mb-3 mb-xl-5 px-2">
                <h2 className="h6 pt-4 pb-3 mb-4 border-bottom">On this page</h2>
                <nav className="small" id="toc">
                    <ul className="list-unstyled">
                        <li className="my-2">
                            <button className="btn d-inline-flex align-items-center collapsed" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#contents-collapse" aria-controls="contents-collapse">Contents</button>
                            <ul className="list-unstyled ps-3 collapse" id="contents-collapse">
                                <li><a className="d-inline-flex align-items-center rounded" href="#typography">Typography</a></li>
                                <li><a className="d-inline-flex align-items-center rounded" href="#images">Images</a></li>
                                <li><a className="d-inline-flex align-items-center rounded" href="#tables">Tables</a></li>
                                <li><a className="d-inline-flex align-items-center rounded" href="#figures">Figures</a></li>
                            </ul>
                        </li>
                        <li className="my-2">
                            <button className="btn d-inline-flex align-items-center collapsed" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#forms-collapse" aria-controls="forms-collapse">Forms</button>
                            <ul className="list-unstyled ps-3 collapse" id="forms-collapse">
                                <li><a className="d-inline-flex align-items-center rounded" href="#overview">Overview</a></li>
                                <li><a className="d-inline-flex align-items-center rounded" href="#disabled-forms">Disabled forms</a></li>
                                <li><a className="d-inline-flex align-items-center rounded" href="#sizing">Sizing</a></li>
                                <li><a className="d-inline-flex align-items-center rounded" href="#input-group">Input group</a></li>
                                <li><a className="d-inline-flex align-items-center rounded" href="#floating-labels">Floating labels</a></li>
                                <li><a className="d-inline-flex align-items-center rounded" href="#validation">Validation</a></li>
                            </ul>
                        </li>
                        <li className="my-2">
                            <button className="btn d-inline-flex align-items-center collapsed" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#components-collapse" aria-controls="components-collapse">Components</button>
                            <ul className="list-unstyled ps-3 collapse" id="components-collapse">
                                <li><a className="d-inline-flex align-items-center rounded" href="#accordion">Accordion</a></li>
                                <li><a className="d-inline-flex align-items-center rounded" href="#alerts">Alerts</a></li>
                                <li><a className="d-inline-flex align-items-center rounded" href="#badge">Badge</a></li>
                                <li><a className="d-inline-flex align-items-center rounded" href="#breadcrumb">Breadcrumb</a></li>
                                <li><a className="d-inline-flex align-items-center rounded" href="#buttons">Buttons</a></li>
                                <li><a className="d-inline-flex align-items-center rounded" href="#button-group">Button group</a></li>
                                <li><a className="d-inline-flex align-items-center rounded" href="#card">Card</a></li>
                                <li><a className="d-inline-flex align-items-center rounded" href="#carousel">Carousel</a></li>
                                <li><a className="d-inline-flex align-items-center rounded" href="#dropdowns">Dropdowns</a></li>
                                <li><a className="d-inline-flex align-items-center rounded" href="#list-group">List group</a></li>
                                <li><a className="d-inline-flex align-items-center rounded" href="#modal">Modal</a></li>
                                <li><a className="d-inline-flex align-items-center rounded" href="#navs">Navs</a></li>
                                <li><a className="d-inline-flex align-items-center rounded" href="#navbar">Navbar</a></li>
                                <li><a className="d-inline-flex align-items-center rounded" href="#pagination">Pagination</a></li>
                                <li><a className="d-inline-flex align-items-center rounded" href="#popovers">Popovers</a></li>
                                <li><a className="d-inline-flex align-items-center rounded" href="#progress">Progress</a></li>
                                <li><a className="d-inline-flex align-items-center rounded" href="#scrollspy">Scrollspy</a></li>
                                <li><a className="d-inline-flex align-items-center rounded" href="#spinners">Spinners</a></li>
                                <li><a className="d-inline-flex align-items-center rounded" href="#toasts">Toasts</a></li>
                                <li><a className="d-inline-flex align-items-center rounded" href="#tooltips">Tooltips</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </aside>
        );
    }
}

class Content extends Component {
    render() {
        return (
            <div className="bd-cheatsheet container-fluid bg-body">
                <section id="content">
                    <h2 className="sticky-xl-top fw-bold pt-3 pt-xl-5 pb-2 pb-xl-3">Contents</h2>

                    <article className="my-3" id="typography">
                        <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                            <h3>Typography</h3>
                            <a className="d-flex align-items-center" href="">Documentation</a>
                        </div>

                        <div>
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
                        </div>
                    </article>
                    <article className="my-3" id="images">
                        <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                            <h3>Images</h3>
                            <a className="d-flex align-items-center" href="">Documentation</a>
                        </div>

                        <div>
                            <div className="bd-example">
                                <svg className="bd-placeholder-img bd-placeholder-img-lg img-fluid" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Responsive image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96" /><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Responsive image</text></svg>

                            </div>

                            <div className="bd-example">
                                <svg className="bd-placeholder-img img-thumbnail" width="200" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera: 200x200" preserveAspectRatio="xMidYMid slice" focusable="false"><title>A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera</title><rect width="100%" height="100%" fill="#868e96" /><text x="50%" y="50%" fill="#dee2e6" dy=".3em">200x200</text></svg>

                            </div>
                        </div>
                    </article>
                    <article className="my-3" id="tables">
                        <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                            <h3>Tables</h3>
                            <a className="d-flex align-items-center" href="">Documentation</a>
                        </div>

                        <div>
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
                        </div>
                    </article>
                    <article className="my-3" id="figures">
                        <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                            <h3>Figures</h3>
                            <a className="d-flex align-items-center" href="">Documentation</a>
                        </div>

                        <div>
                            <div className="bd-example">
                                <figure className="figure">
                                    <svg className="bd-placeholder-img figure-img img-fluid rounded" width="400" height="300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 400x300" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96" /><text x="50%" y="50%" fill="#dee2e6" dy=".3em">400x300</text></svg>

                                    <figcaption className="figure-caption">A caption for the above image.</figcaption>
                                </figure>
                            </div>
                        </div>
                    </article>
                </section>

                <section id="forms">
                    <h2 className="sticky-xl-top fw-bold pt-3 pt-xl-5 pb-2 pb-xl-3">Forms</h2>

                    <article className="my-3" id="overview">
                        <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                            <h3>Overview</h3>
                            <a className="d-flex align-items-center" href="">Documentation</a>
                        </div>

                        <div>
                            <div className="bd-example">
                                <form>
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                    </div>
                                    <fieldset className="mb-3">
                                        <legend>Radios buttons</legend>
                                        <div className="form-check">
                                            <input type="radio" name="radios" className="form-check-input" id="exampleRadio1"/>
                                            <label className="form-check-label" for="exampleRadio1">Default radio</label>
                                        </div>
                                        <div className="mb-3 form-check">
                                            <input type="radio" name="radios" className="form-check-input" id="exampleRadio2"/>
                                            <label className="form-check-label" for="exampleRadio2">Another radio</label>
                                        </div>
                                    </fieldset>
                                    <div className="mb-3">
                                        <label className="form-label" for="customFile">Upload</label>
                                        <input type="file" className="form-control" id="customFile"/>
                                    </div>
                                    <div className="mb-3 form-check form-switch">
                                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
                                        <label className="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
                                    </div>
                                    <div className="mb-3">
                                        <label for="customRange3" className="form-label">Example range</label>
                                        <input type="range" className="form-range" min="0" max="5" step="0.5" id="customRange3"/>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </article>
                    <article className="my-3" id="disabled-forms">
                        <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                            <h3>Disabled forms</h3>
                            <a className="d-flex align-items-center" href="#disabled-forms">Documentation</a>
                        </div>

                        <div>
                            <div className="bd-example">
                                <form>
                                    <fieldset disabled aria-label="Disabled fieldset example">
                                        <div className="mb-3">
                                            <label for="disabledTextInput" className="form-label">Disabled input</label>
                                            <input type="text" id="disabledTextInput" className="form-control" placeholder="Disabled input"/>
                                        </div>
                                        <div className="mb-3">
                                            <label for="disabledSelect" className="form-label">Disabled select menu</label>
                                            <select id="disabledSelect" className="form-select">
                                                <option>Disabled select</option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled/>
                                                <label className="form-check-label" for="disabledFieldsetCheck">
                                                Can't check this
                                                </label>
                                            </div>
                                        </div>
                                        <fieldset className="mb-3">
                                            <legend>Disabled radios buttons</legend>
                                            <div className="form-check">
                                                <input type="radio" name="radios" className="form-check-input" id="disabledRadio1" disabled/>
                                                <label className="form-check-label" for="disabledRadio1">Disabled radio</label>
                                            </div>
                                            <div className="mb-3 form-check">
                                                <input type="radio" name="radios" className="form-check-input" id="disabledRadio2" disabled/>
                                                <label className="form-check-label" for="disabledRadio2">Another radio</label>
                                            </div>
                                        </fieldset>
                                        <div className="mb-3">
                                            <label className="form-label" for="disabledCustomFile">Upload</label>
                                            <input type="file" className="form-control" id="disabledCustomFile" disabled/>
                                        </div>
                                        <div className="mb-3 form-check form-switch">
                                            <input className="form-check-input" type="checkbox" role="switch" id="disabledSwitchCheckChecked" checked disabled/>
                                            <label className="form-check-label" for="disabledSwitchCheckChecked">Disabled checked switch checkbox input</label>
                                        </div>
                                        <div className="mb-3">
                                            <label for="disabledRange" className="form-label">Disabled range</label>
                                            <input type="range" className="form-range" min="0" max="5" step="0.5" id="disabledRange"/>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </article>
                    <article className="my-3" id="sizing">
                        <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                            <h3>Sizing</h3>
                            <a className="d-flex align-items-center" href="#sizing">Documentation</a>
                        </div>

                        <div>
                            <div className="bd-example">
                                <div className="mb-3">
                                    <input className="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example"/>
                                </div>
                                <div className="mb-3">
                                    <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <input type="file" className="form-control form-control-lg" aria-label="Large file input example"/>
                                </div>
                            </div>

                            <div className="bd-example">
                                <div className="mb-3">
                                    <input className="form-control form-control-sm" type="text" placeholder=".form-control-sm" aria-label=".form-control-sm example"/>
                                </div>
                                <div className="mb-3">
                                    <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <input type="file" className="form-control form-control-sm" aria-label="Small file input example"/>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="my-3" id="input-group">
                        <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                            <h3>Input group</h3>
                            <a className="d-flex align-items-center" href="">Documentation</a>
                        </div>

                        <div>
                            <div className="bd-example">
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1">@</span>
                                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                    <span className="input-group-text" id="basic-addon2">@example.com</span>
                                </div>
                                <label for="basic-url" className="form-label">Your vanity URL</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
                                    <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">$</span>
                                    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"/>
                                    <span className="input-group-text">.00</span>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-text">With textarea</span>
                                    <textarea className="form-control" aria-label="With textarea"></textarea>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="my-3" id="floating-labels">
                        <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                            <h3>Floating labels</h3>
                            <a className="d-flex align-items-center" href="">Documentation</a>
                        </div>

                        <div>
                            <div className="bd-example">
                                <form>
                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                        <label for="floatingInput">Email address</label>
                                    </div>
                                    <div className="form-floating">
                                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                                        <label for="floatingPassword">Password</label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </article>
                    <article className="my-3" id="validation">
                        <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                            <h3>Validation</h3>
                            <a className="d-flex align-items-center" href="">Documentation</a>
                        </div>

                        <div>
                            <div className="bd-example">
                                <form className="row g-3">
                                    <div className="col-md-4">
                                        <label for="validationServer01" className="form-label">First name</label>
                                        <input type="text" className="form-control is-valid" id="validationServer01" value="Mark" required/>
                                        <div className="valid-feedback">
                                        Looks good!
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <label for="validationServer02" className="form-label">Last name</label>
                                        <input type="text" className="form-control is-valid" id="validationServer02" value="Otto" required/>
                                        <div className="valid-feedback">
                                        Looks good!
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <label for="validationServerUsername" className="form-label">Username</label>
                                        <div className="input-group has-validation">
                                            <span className="input-group-text" id="inputGroupPrepend3">@</span>
                                            <input type="text" className="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3" required/>
                                            <div className="invalid-feedback">
                                            Please choose a username.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label for="validationServer03" className="form-label">City</label>
                                        <input type="text" className="form-control is-invalid" id="validationServer03" required/>
                                        <div className="invalid-feedback">
                                        Please provide a valid city.
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <label for="validationServer04" className="form-label">State</label>
                                        <select className="form-select is-invalid" id="validationServer04" required>
                                            <option selected disabled value="">Choose...</option>
                                            <option>...</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Please select a valid state.
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <label for="validationServer05" className="form-label">Zip</label>
                                        <input type="text" className="form-control is-invalid" id="validationServer05" required/>
                                        <div className="invalid-feedback">
                                        Please provide a valid zip.
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-check">
                                            <input className="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required/>
                                            <label className="form-check-label" for="invalidCheck3">
                                            Agree to terms and conditions
                                            </label>
                                            <div className="invalid-feedback">
                                            You must agree before submitting.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary" type="submit">Submit form</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </article>
                </section>

                <section id="components">
                    <h2 className="sticky-xl-top fw-bold pt-3 pt-xl-5 pb-2 pb-xl-3">Components</h2>

                    <article className="my-3" id="accordion">
                        <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                            <h3>Accordion</h3>
                            <a className="d-flex align-items-center" href="">Documentation</a>
                        </div>

                        <div>
                            <div className="bd-example">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h4 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Accordion Item #1
                                            </button>
                                        </h4>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h4 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Accordion Item #2
                                            </button>
                                        </h4>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h4 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Accordion Item #3
                                            </button>
                                        </h4>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="my-3" id="alerts">
                        <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                            <h3>Alerts</h3>
                            <a className="d-flex align-items-center" href="">Documentation</a>
                        </div>

                        <div>
                            <div className="bd-example">

                                <div className="alert alert-primary alert-dismissible fade show" role="alert">
                                    A simple primary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>
                                <div className="alert alert-secondary alert-dismissible fade show" role="alert">
                                    A simple secondary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>
                                <div className="alert alert-success alert-dismissible fade show" role="alert">
                                    A simple success alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>
                                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                    A simple danger alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>
                                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                    A simple warning alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>
                                <div className="alert alert-info alert-dismissible fade show" role="alert">
                                    A simple info alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>
                                <div className="alert alert-light alert-dismissible fade show" role="alert">
                                    A simple light alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>
                                <div className="alert alert-dark alert-dismissible fade show" role="alert">
                                    A simple dark alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>
                            </div>

                            <div className="bd-example">
                                <div className="alert alert-success" role="alert">
                                    <h4 className="alert-heading">Well done!</h4>
                                    <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                                    <hr/>
                                    <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="my-3" id="badge">
                        <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                            <h3>Badge</h3>
                            <a className="d-flex align-items-center" href="">Documentation</a>
                        </div>

                        <div>
                            <div className="bd-example">
                                <p className="h1">Example heading <span className="badge bg-primary">New</span></p>
                                <p className="h2">Example heading <span className="badge bg-secondary">New</span></p>
                                <p className="h3">Example heading <span className="badge bg-success">New</span></p>
                                <p className="h4">Example heading <span className="badge bg-danger">New</span></p>
                                <p className="h5">Example heading <span className="badge bg-warning text-dark">New</span></p>
                                <p className="h6">Example heading <span className="badge bg-info text-dark">New</span></p>
                                <p className="h6">Example heading <span className="badge bg-light text-dark">New</span></p>
                                <p className="h6">Example heading <span className="badge bg-dark">New</span></p>
                            </div>

                            <div className="bd-example">

                                <span className="badge rounded-pill bg-primary">Primary</span>
                                <span className="badge rounded-pill bg-secondary">Secondary</span>
                                <span className="badge rounded-pill bg-success">Success</span>
                                <span className="badge rounded-pill bg-danger">Danger</span>
                                <span className="badge rounded-pill bg-warning text-dark">Warning</span>
                                <span className="badge rounded-pill bg-info text-dark">Info</span>
                                <span className="badge rounded-pill bg-light text-dark">Light</span>
                                <span className="badge rounded-pill bg-dark">Dark</span>
                            </div>
                        </div>
                    </article>
                    <article className="my-3" id="breadcrumb">
                        <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                            <h3>Breadcrumb</h3>
                            <a className="d-flex align-items-center" href="">Documentation</a>
                        </div>

                        <div>
                            <div className="bd-example">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item"><a href="#">Library</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Data</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </article>
                    <article className="my-3" id="buttons">
                        <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                            <h3>Buttons</h3>
                            <a className="d-flex align-items-center" href="">Documentation</a>
                        </div>

                        <div>
                            <div className="bd-example">

                                <button type="button" className="btn btn-primary">Primary</button>
                                <button type="button" className="btn btn-secondary">Secondary</button>
                                <button type="button" className="btn btn-success">Success</button>
                                <button type="button" className="btn btn-danger">Danger</button>
                                <button type="button" className="btn btn-warning">Warning</button>
                                <button type="button" className="btn btn-info">Info</button>
                                <button type="button" className="btn btn-light">Light</button>
                                <button type="button" className="btn btn-dark">Dark</button>

                                <button type="button" className="btn btn-link">Link</button>
                            </div>

                            <div className="bd-example">

                                <button type="button" className="btn btn-outline-primary">Primary</button>
                                <button type="button" className="btn btn-outline-secondary">Secondary</button>
                                <button type="button" className="btn btn-outline-success">Success</button>
                                <button type="button" className="btn btn-outline-danger">Danger</button>
                                <button type="button" className="btn btn-outline-warning">Warning</button>
                                <button type="button" className="btn btn-outline-info">Info</button>
                                <button type="button" className="btn btn-outline-light">Light</button>
                                <button type="button" className="btn btn-outline-dark">Dark</button>
                            </div>

                            <div className="bd-example">
                                <button type="button" className="btn btn-primary btn-sm">Small button</button>
                                <button type="button" className="btn btn-primary">Standard button</button>
                                <button type="button" className="btn btn-primary btn-lg">Large button</button>
                            </div>
                        </div>
                    </article>
                    <article className="my-3" id="button-group">
                        <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                            <h3>Button group</h3>
                            <a className="d-flex align-items-center" href="">Documentation</a>
                        </div>

                        <div>
                            <div className="bd-example">
                                <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                    <div className="btn-group me-2" role="group" aria-label="First group">
                                        <button type="button" className="btn btn-secondary">1</button>
                                        <button type="button" className="btn btn-secondary">2</button>
                                        <button type="button" className="btn btn-secondary">3</button>
                                        <button type="button" className="btn btn-secondary">4</button>
                                    </div>
                                    <div className="btn-group me-2" role="group" aria-label="Second group">
                                        <button type="button" className="btn btn-secondary">5</button>
                                        <button type="button" className="btn btn-secondary">6</button>
                                        <button type="button" className="btn btn-secondary">7</button>
                                    </div>
                                    <div className="btn-group" role="group" aria-label="Third group">
                                        <button type="button" className="btn btn-secondary">8</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="my-3" id="card">
                        <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                            <h3>Card</h3>
                            <a className="d-flex align-items-center" href="">Documentation</a>
                        </div>

                        <div>
                            <div className="bd-example">
                                <div className="row  row-cols-1 row-cols-md-2 g-4">
                                    <div className="col">
                                        <div className="card">
                                            <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96" /><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>

                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <a href="#" className="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                            <div className="card-header">
                                                Featured
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <a href="#" className="btn btn-primary">Go somewhere</a>
                                            </div>
                                            <div className="card-footer text-muted">
                                                2 days ago
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            </div>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item">An item</li>
                                                <li className="list-group-item">A second item</li>
                                                <li className="list-group-item">A third item</li>
                                            </ul>
                                            <div className="card-body">
                                                <a href="#" className="card-link">Card link</a>
                                                <a href="#" className="card-link">Another link</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                            <div className="row g-0">
                                                <div className="col-md-4">
                                                    <svg className="bd-placeholder-img" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96" /><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text></svg>

                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <h5 className="card-title">Card title</h5>
                                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="my-3" id="carousel">
                        <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                            <h3>Carousel</h3>
                            <a className="d-flex align-items-center" href="">Documentation</a>
                        </div>

                        <div>
                            <div className="bd-example">
                                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#555" dy=".3em">First slide</text></svg>

                                            <div className="carousel-caption d-none d-md-block">
                                                <h5>First slide label</h5>
                                                <p>Some representative placeholder content for the first slide.</p>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#666" /><text x="50%" y="50%" fill="#444" dy=".3em">Second slide</text></svg>

                                            <div className="carousel-caption d-none d-md-block">
                                                <h5>Second slide label</h5>
                                                <p>Some representative placeholder content for the second slide.</p>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#555" /><text x="50%" y="50%" fill="#333" dy=".3em">Third slide</text></svg>

                                            <div className="carousel-caption d-none d-md-block">
                                                <h5>Third slide label</h5>
                                                <p>Some representative placeholder content for the third slide.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="my-3" id="dropdowns">
                        <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                            <h3>Dropdowns</h3>
                            <a className="d-flex align-items-center" href="">Documentation</a>
                        </div>

                        <div>
                            <div className="bd-example">
                                <div className="btn-group w-100 align-items-center justify-content-between flex-wrap">
                                    <div className="dropdown">
                                        <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButtonSM" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown button
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonSM">
                                            <li><h6 className="dropdown-header">Dropdown header</h6></li>
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            <li><hr className="dropdown-divider"/></li>
                                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                                        </ul>
                                    </div>
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown button
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <li><h6 className="dropdown-header">Dropdown header</h6></li>
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            <li><hr className="dropdown-divider"/></li>
                                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                                        </ul>
                                    </div>
                                    <div className="dropdown">
                                        <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" id="dropdownMenuButtonLG" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown button
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonLG">
                                            <li><h6 className="dropdown-header">Dropdown header</h6></li>
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            <li><hr className="dropdown-divider"/></li>
                                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bd-example">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-primary">Primary</button>
                                    <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                                <div className="btn-group">
                                    <button type="button" className="btn btn-secondary">Secondary</button>
                                    <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                                <div className="btn-group">
                                    <button type="button" className="btn btn-success">Success</button>
                                    <button type="button" className="btn btn-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                                <div className="btn-group">
                                    <button type="button" className="btn btn-info">Info</button>
                                    <button type="button" className="btn btn-info dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                                <div className="btn-group">
                                    <button type="button" className="btn btn-warning">Warning</button>
                                    <button type="button" className="btn btn-warning dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                                <div className="btn-group">
                                    <button type="button" className="btn btn-danger">Danger</button>
                                    <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bd-example">
                                <div className="btn-group w-100 align-items-center justify-content-between flex-wrap">
                                    <div className="dropend">
                                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropendMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropend button
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropendMenuButton">
                                            <li><h6 className="dropdown-header">Dropdown header</h6></li>
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            <li><hr className="dropdown-divider"/></li>
                                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                                        </ul>
                                    </div>
                                    <div className="dropup">
                                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropupMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropup button
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropupMenuButton">
                                            <li><h6 className="dropdown-header">Dropdown header</h6></li>
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            <li><hr className="dropdown-divider"/></li>
                                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                                        </ul>
                                    </div>
                                    <div className="dropstart">
                                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropstartMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropstart button
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropstartMenuButton">
                                            <li><h6 className="dropdown-header">Dropdown header</h6></li>
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            <li><hr className="dropdown-divider"/></li>
                                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bd-example">
                                <div className="btn-group">
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownRightMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                            End-aligned menu
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownRightMenuButton">
                                            <li><h6 className="dropdown-header">Dropdown header</h6></li>
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><hr className="dropdown-divider"/></li>
                                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="my-3" id="list-group">
                        <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                            <h3>List group</h3>
                            <a className="d-flex align-items-center" href="">Documentation</a>
                        </div>

                        <div>
                            <div className="bd-example">
                                <ul className="list-group">
                                    <li className="list-group-item disabled" aria-disabled="true">A disabled item</li>
                                    <li className="list-group-item">A second item</li>
                                    <li className="list-group-item">A third item</li>
                                    <li className="list-group-item">A fourth item</li>
                                    <li className="list-group-item">And a fifth one</li>
                                </ul>
                            </div>

                            <div className="bd-example">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">An item</li>
                                    <li className="list-group-item">A second item</li>
                                    <li className="list-group-item">A third item</li>
                                    <li className="list-group-item">A fourth item</li>
                                    <li className="list-group-item">And a fifth one</li>
                                </ul>
                            </div>

                            <div className="bd-example">
                                <div className="list-group">
                                    <a href="#" className="list-group-item list-group-item-action">A simple default list group item</a>

                                    <a href="#" className="list-group-item list-group-item-action list-group-item-primary">A simple primary list group item</a>
                                    <a href="#" className="list-group-item list-group-item-action list-group-item-secondary">A simple secondary list group item</a>
                                    <a href="#" className="list-group-item list-group-item-action list-group-item-success">A simple success list group item</a>
                                    <a href="#" className="list-group-item list-group-item-action list-group-item-danger">A simple danger list group item</a>
                                    <a href="#" className="list-group-item list-group-item-action list-group-item-warning">A simple warning list group item</a>
                                    <a href="#" className="list-group-item list-group-item-action list-group-item-info">A simple info list group item</a>
                                    <a href="#" className="list-group-item list-group-item-action list-group-item-light">A simple light list group item</a>
                                    <a href="#" className="list-group-item list-group-item-action list-group-item-dark">A simple dark list group item</a>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="my-3" id="modal">
                        <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                            <h3>Modal</h3>
                            <a className="d-flex align-items-center" href="">Documentation</a>
                        </div>

                        <div>
                            <div className="bd-example">
                                <div className="d-flex justify-content-between flex-wrap">
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalDefault">
                                        Launch demo modal
                                    </button>
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdropLive">
                                        Launch static backdrop modal
                                    </button>
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenteredScrollable">
                                        Vertically centered scrollable modal
                                    </button>
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalFullscreen">
                                        Full screen
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="my-3" id="navs">
                        <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                            <h3>Navs</h3>
                            <a className="d-flex align-items-center" href="">Documentation</a>
                        </div>

                        <div>
                            <div className="bd-example">
                                <nav className="nav">
                                    <a className="nav-link active" aria-current="page" href="#">Active</a>
                                    <a className="nav-link" href="#">Link</a>
                                    <a className="nav-link" href="#">Link</a>
                                    <a className="nav-link disabled">Disabled</a>
                                </nav>
                            </div>

                            <div className="bd-example">
                                <nav>
                                    <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                                        <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
                                        <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
                                        <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
                                    </div>
                                </nav>
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                        <p><strong>This is some placeholder content the Home tab's associated content.</strong> Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
                                    </div>
                                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                        <p><strong>This is some placeholder content the Profile tab's associated content.</strong> Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
                                    </div>
                                    <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                        <p><strong>This is some placeholder content the Contact tab's associated content.</strong> Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bd-example">
                                <ul className="nav nav-pills">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Active</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled">Disabled</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </article>
                    <article className="my-3" id="navbar">
                        <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                            <h3>Navbar</h3>
                            <a className="d-flex align-items-center" href="navbar/">Documentation</a>
                        </div>

                        <div>
                            <div className="bd-example">
                                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                    <div className="container-fluid">
                                        <a className="navbar-brand" href="#">
                                            <img src="../assets/brand/bootstrap-logo-white.svg" width="38" height="30" className="d-inline-block align-top" alt="Bootstrap" loading="lazy"
                                                style={{filter: 'invert(1) grayscale(100%) brightness(200%)'}}/>
                                        </a>
                                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon"></span>
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                                <li className="nav-item">
                                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#">Link</a>
                                                </li>
                                                <li className="nav-item dropdown">
                                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Dropdown
                                                    </a>
                                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                                        <li><hr className="dropdown-divider"/></li>
                                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link disabled">Disabled</a>
                                                </li>
                                            </ul>
                                            <form className="d-flex">
                                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                                <button className="btn btn-outline-dark" type ="submit">Search</button>
                                            </form>
                                        </div>
                                    </div>
                                </nav>

                                <nav className="navbar navbar-expand-lg navbar-dark bg-primary mt-5">
                                    <div className="container-fluid">
                                        <a className="navbar-brand" href="#">
                                            <img src="../assets/brand/bootstrap-logo-white.svg" width="38" height="30" className="d-inline-block align-top" alt="Bootstrap" loading="lazy"/>
                                        </a>
                                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon"></span>
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarSupportedContent2">
                                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                                <li className="nav-item">
                                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#">Link</a>
                                                </li>
                                                <li className="nav-item dropdown">
                                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Dropdown
                                                    </a>
                                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
                                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                                        <li><hr className="dropdown-divider"/></li>
                                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link disabled">Disabled</a>
                                                </li>
                                            </ul>
                                            <form className="d-flex">
                                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                                <button className="btn btn-outline-light" type ="submit">Search</button>
                                            </form>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </article>
                    <article className="my-3" id="pagination">
                        <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                            <h3>Pagination</h3>
                            <a className="d-flex align-items-center" href="">Documentation</a>
                        </div>

                        <div>
                            <div className="bd-example">
                                <nav aria-label="Pagination example">
                                    <ul className="pagination pagination-sm">
                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item active" aria-current="page">
                                            <a className="page-link" href="#">2</a>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    </ul>
                                </nav>
                            </div>

                            <div className="bd-example">
                                <nav aria-label="Standard pagination example">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                            </a>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <div className="bd-example">
                                <nav aria-label="Another pagination example">
                                    <ul className="pagination pagination-lg flex-wrap">
                                        <li className="page-item disabled">
                                            <a className="page-link">Previous</a>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item active" aria-current="page">
                                            <a className="page-link" href="#">2</a>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">Next</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </article>
                    <article className="my-3" id="popovers">
                        <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                            <h3>Popovers</h3>
                            <a className="d-flex align-items-center" href="popovers/">Documentation</a>
                        </div>

                        <div>
                            <div className="bd-example">
                                <button type="button" className="btn btn-lg btn-danger" data-bs-toggle="popover" title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
                            </div>

                            <div className="bd-example">
                                <button type="button" className="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                                    Popover on top
                                </button>
                                <button type="button" className="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                                    Popover on end
                                </button>
                                <button type="button" className="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                                    Popover on bottom
                                </button>
                                <button type="button" className="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                                    Popover on start
                                </button>
                            </div>
                        </div>
                    </article>
                    <article className="my-3" id="progress">
                        <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                            <h3>Progress</h3>
                            <a className="d-flex align-items-center" href="">Documentation</a>
                        </div>

                        <div>
                            <div className="bd-example">
                                <div className="progress mb-3">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
                                </div>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-success w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                </div>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-info text-dark w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                                </div>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-warning text-dark w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-danger w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
                                </div>
                            </div>

                            <div className="bd-example">
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{width: '15%'}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style={{width: '40%'}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="my-3" id="scrollspy">
                        <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                            <h3>Scrollspy</h3>
                            <a className="d-flex align-items-center" href="">Documentation</a>
                        </div>

                        <div>
                            <div className="bd-example">
                                <nav id="navbar-example2" className="navbar navbar-light bg-light px-3">
                                    <a className="navbar-brand" href="#">Navbar</a>
                                    <ul className="nav nav-pills">
                                        <li className="nav-item">
                                            <a className="nav-link active" href="#scrollspyHeading1">First</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#scrollspyHeading2">Second</a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#scrollspyHeading3">Third</a></li>
                                                <li><a className="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
                                                <li><hr className="dropdown-divider"/></li>
                                                <li><a className="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                                <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example" tabIndex="0">
                                    <h4 id="scrollspyHeading1">First heading</h4>
                                    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                                    <h4 id="scrollspyHeading2">Second heading</h4>
                                    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                                    <h4 id="scrollspyHeading3">Third heading</h4>
                                    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                                    <h4 id="scrollspyHeading4">Fourth heading</h4>
                                    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                                    <h4 id="scrollspyHeading5">Fifth heading</h4>
                                    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="my-3" id="spinners">
                        <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                            <h3>Spinners</h3>
                            <a className="d-flex align-items-center" href="">Documentation</a>
                        </div>

                        <div>
                            <div className="bd-example">

                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <div className="spinner-border text-secondary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <div className="spinner-border text-success" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <div className="spinner-border text-danger" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <div className="spinner-border text-warning" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <div className="spinner-border text-info" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <div className="spinner-border text-light" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <div className="spinner-border text-dark" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>

                            <div className="bd-example">

                                <div className="spinner-grow text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <div className="spinner-grow text-secondary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <div className="spinner-grow text-success" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <div className="spinner-grow text-danger" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <div className="spinner-grow text-warning" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <div className="spinner-grow text-info" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <div className="spinner-grow text-light" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <div className="spinner-grow text-dark" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="my-3" id="toasts">
                        <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                            <h3>Toasts</h3>
                            <a className="d-flex align-items-center" href="">Documentation</a>
                        </div>

                        <div>
                            <div className="bd-example bg-dark p-5 align-items-center">
                                <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                                    <div className="toast-header">
                                        <svg className="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#007aff" /></svg>

                                        <strong className="me-auto">Bootstrap</strong>
                                        <small className="text-muted">11 mins ago</small>
                                        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                                    </div>
                                    <div className="toast-body">
                                        Hello, world! This is a toast message.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="mt-3 mb-5 pb-5" id="tooltips">
                        <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                            <h3>Tooltips</h3>
                            <a className="d-flex align-items-center" href="">Documentation</a>
                        </div>

                        <div>
                            <div className="bd-example tooltip-demo">
                                <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">Tooltip on top</button>
                                <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on end">Tooltip on end</button>
                                <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom">Tooltip on bottom</button>
                                <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" title="Tooltip on start">Tooltip on start</button>
                                <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">Tooltip with HTML</button>
                            </div>
                        </div>
                    </article>
                </section>
            </div>
        );
    }
}