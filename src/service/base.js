import { collection, getDocs, doc, getDoc, setDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
initializeApp({ apiKey: 'AIzaSyBEt6yngDEuwTHLZmR0GECQfUD9xNFKEwo', authDomain: 'front-end-2021.firebaseapp.com', projectId: 'front-end-2021' });
const db = getFirestore();

async function getCollection(collecName) {
    const querySnapshot = await getDocs(collection(db, collecName))
    return new Promise(resolve => {
        var lst = []
        querySnapshot.forEach((doc) => {
            lst.push(doc.data())
        });
        resolve(lst)
    })
}
async function getDocument(collecName, docName) {
    const ind = doc(db, collecName, docName)
    const _document = await getDoc(ind)
    return new Promise((resolve, reject) => {
        if (_document.exists()) {
            resolve(_document.data())
        } else {
            reject()
        }
    });
}

export function getSlider() {
    return getCollection(`slider`)
}

export function getBlogData() {
    const hardCode = [
        {
            title: `What Are Data Structures? {Classification & Types} | phoenixNAP KB`,
            auth: `phoenixNAP`,
            img: `https://phoenixnap.com/kb/wp-content/uploads/2022/10/data-structures-types-classification.png`
        },
        {
            title: `What is the Classification of Data Structure with Diagram`,
            auth: `Tutorialscan`,
            img: `https://live.staticflickr.com/65535/51726236650_a390837dfb.jpg`
        },
        {
            title: `Introduction to Data Structures and Algorithms | Studytonight`,
            auth: `Studytonight`,
            img: `https://live.staticflickr.com/65535/51728456656_7e4105ffc0.jpg`
        },
        {
            title: `A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.`,
            auth: `Dainb`,
            img: `https://live.staticflickr.com/65535/51761145941_091d74543c.jpg`
        },
        {
            title: `Introduction to Data Structures and Algorithms | 8`,
            auth: `Studytonight`,
            img: `https://live.staticflickr.com/65535/51725347106_0a289e0761.jpg`
        },
        {
            title: `Introduction to Data Structures and Algorithms | 3`,
            auth: `Studytonight`,
            img: `https://live.staticflickr.com/65535/51722748656_25256ece4a.jpg`
        },
        {
            title: `Introduction to Data Structures and Algorithms | 5`,
            auth: `Studytonight`,
            img: `https://live.staticflickr.com/65535/51722742296_3a27c6cfd0.jpg`
        },
        {
            title: `Introduction to Data Structures and Algorithms | 7`,
            auth: `Studytonight`,
            img: `https://live.staticflickr.com/65535/51699992153_d166c33ac6.jpg`
        },
        {
            title: `Introduction to Data Structures and Algorithms | 9`,
            auth: `Studytonight`,
            img: `https://live.staticflickr.com/65535/51700325044_fd76c51d8f.jpg`
        },
        {
            title: `End game`,
            auth: `Studytonight`,
            img: `https://live.staticflickr.com/65535/51743911796_d96b75c90c.jpg`
        }
    ]
    return getCollection(`blog_list_data`).then(lst => {
        return lst.concat(hardCode)
    })
}
export async function getBlogArticle(name) {
    const lstD = [
        {
            title: `What Are Data Structures? {Classification & Types} | phoenixNAP KB`,
            context: `Download
        Download Bootstrap to get the compiled CSS and JavaScript, source code, or include it with your favorite package managers like npm, RubyGems, and more.
        
        On this page
        Compiled CSS and JS
        Source files
        Examples
        CDN via jsDelivr
        Package managers
        npm
        yarn
        RubyGems
        Composer
        NuGet
        Compiled CSS and JS
        Download ready-to-use compiled code for Bootstrap v5.0.2 to easily drop into your project, which includes:
        
        Compiled and minified CSS bundles (see CSS files comparison)
        Compiled and minified JavaScript plugins (see JS files comparison)
        This doesn’t include documentation, source files, or any optional JavaScript dependencies like Popper.`
        },
        {
            title: `What is the Classification of Data Structure with Diagram`,
            context: `Source files
        Compile Bootstrap with your own asset pipeline by downloading our source Sass, JavaScript, and documentation files. This option requires some additional tooling:
        
        Sass compiler for compiling Sass source files into CSS files
        Autoprefixer for CSS vendor prefixing
        Should you require our full set of build tools, they are included for developing Bootstrap and its docs, but they’re likely unsuitable for your own purposes.`
        },
        {
            title: `Introduction to Data Structures and Algorithms | Studytonight`,
            context: `Package managers
        Pull in Bootstrap’s source files into nearly any project with some of the most popular package managers. No matter the package manager, Bootstrap will require a Sass compiler and Autoprefixer for a setup that matches our official compiled versions.
        
        npm
        Install Bootstrap in your Node.js powered apps with the npm package:
        
        Copy
        <prcode>npm install bootstrap
const bootstrap = require('bootstrap') 
or import bootstrap from 'bootstrap'</prcode>
will load all of Bootstrap’s plugins onto a bootstrap object. The bootstrap module itself exports all of our plugins. You can manually load Bootstrap’s plugins individually by loading the /js/dist/*.js files under the package’s top-level directory.
        Bootstrap’s package.json contains some additional metadata under the following keys:
        
        sass - path to Bootstrap’s main Sass source file
        style - path to Bootstrap’s non-minified CSS that’s been precompiled using the default settings (no customization)
        Get started with Bootstrap via npm with our starter project! Head to the twbs/bootstrap-npm-starter template repository to see how to build and customize Bootstrap in your own npm project. Includes Sass compiler, Autoprefixer, Stylelint, PurgeCSS, and Bootstrap Icons.
        yarn
        Install Bootstrap in your Node.js powered apps with the yarn package:
        
        Copy
        <prcode>yarn add bootstrap</prcode>
        RubyGems
        Install Bootstrap in your Ruby apps using Bundler (recommended) and RubyGems by adding the following line to your Gemfile:
        
        Copy
        <prcode>gem 'bootstrap', '~> 5.0.2'</prcode>
        Alternatively, if you’re not using Bundler, you can install the gem by running this command:
        
        Copy
        <prcode>gem install bootstrap -v 5.0.2</prcode>
        See the gem’s README for further details.
        
        Composer
        You can also install and manage Bootstrap’s Sass and JavaScript using Composer:
        
        Copy
        <prcode>composer require twbs/bootstrap:5.0.2</prcode>
        NuGet
        If you develop in .NET, you can also install and manage Bootstrap’s CSS or Sass and JavaScript using NuGet:
        
        Copy
        <prcode>Install-Package bootstrap</prcode>
        Copy
        <prcode>Install-Package bootstrap.sass</prcode>`
        },
        {
            title: `A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.`,
            context: `Contents
        Discover what’s included in Bootstrap, including our precompiled and source code flavors.
        
        On this page
        Precompiled Bootstrap
        CSS files
        JS files
        Bootstrap source code
        Precompiled Bootstrap
        Once downloaded, unzip the compressed folder and you’ll see something like this:
        
        Copy
        bootstrap/
        ├── css/
        │   ├── bootstrap-grid.css
        │   ├── bootstrap-grid.css.map
        │   ├── bootstrap-grid.min.css
        │   ├── bootstrap-grid.min.css.map
        │   ├── bootstrap-grid.rtl.css
        │   ├── bootstrap-grid.rtl.css.map
        │   ├── bootstrap-grid.rtl.min.css
        │   ├── bootstrap-grid.rtl.min.css.map
        │   ├── bootstrap-reboot.css
        │   ├── bootstrap-reboot.css.map
        │   ├── bootstrap-reboot.min.css
        │   ├── bootstrap-reboot.min.css.map
        │   ├── bootstrap-reboot.rtl.css
        │   ├── bootstrap-reboot.rtl.css.map
        │   ├── bootstrap-reboot.rtl.min.css
        │   ├── bootstrap-reboot.rtl.min.css.map
        │   ├── bootstrap-utilities.css
        │   ├── bootstrap-utilities.css.map
        │   ├── bootstrap-utilities.min.css
        │   ├── bootstrap-utilities.min.css.map
        │   ├── bootstrap-utilities.rtl.css
        │   ├── bootstrap-utilities.rtl.css.map
        │   ├── bootstrap-utilities.rtl.min.css
        │   ├── bootstrap-utilities.rtl.min.css.map
        │   ├── bootstrap.css
        │   ├── bootstrap.css.map
        │   ├── bootstrap.min.css
        │   ├── bootstrap.min.css.map
        │   ├── bootstrap.rtl.css
        │   ├── bootstrap.rtl.css.map
        │   ├── bootstrap.rtl.min.css
        │   └── bootstrap.rtl.min.css.map
        └── js/
            ├── bootstrap.bundle.js
            ├── bootstrap.bundle.js.map
            ├── bootstrap.bundle.min.js
            ├── bootstrap.bundle.min.js.map
            ├── bootstrap.esm.js
            ├── bootstrap.esm.js.map
            ├── bootstrap.esm.min.js
            ├── bootstrap.esm.min.js.map
            ├── bootstrap.js
            ├── bootstrap.js.map
            ├── bootstrap.min.js
            └── bootstrap.min.js.map
        This is the most basic form of Bootstrap: precompiled files for quick drop-in usage in nearly any web project. We provide compiled CSS and JS (bootstrap.*), as well as compiled and minified CSS and JS (bootstrap.min.*). source maps (bootstrap.*.map) are available for use with certain browsers' developer tools. Bundled JS files (bootstrap.bundle.js and minified bootstrap.bundle.min.js) include Popper.`
        },
        {
            title: `Introduction to Data Structures and Algorithms | 8`,
            context: `CSS files
        Bootstrap includes a handful of options for including some or all of our compiled CSS.
        
        CSS files	Layout	Content	Components	Utilities
        bootstrap.css
        bootstrap.rtl.css
        bootstrap.min.css
        bootstrap.rtl.min.css
        Included	Included	Included	Included
        bootstrap-grid.css
        bootstrap-grid.rtl.css
        bootstrap-grid.min.css
        bootstrap-grid.rtl.min.css
        Only grid system	—	—	Only flex utilities
        bootstrap-utilities.css
        bootstrap-utilities.rtl.css
        bootstrap-utilities.min.css
        bootstrap-utilities.rtl.min.css
        —	—	—	Included
        bootstrap-reboot.css
        bootstrap-reboot.rtl.css
        bootstrap-reboot.min.css
        bootstrap-reboot.rtl.min.css
        —	Only Reboot	—	—
        JS files
        Similarly, we have options for including some or all of our compiled JavaScript.
        
        JS files	Popper
        bootstrap.bundle.js
        bootstrap.bundle.min.js
        Included
        bootstrap.js
        bootstrap.min.js
        —
        Bootstrap source code
        The Bootstrap source code download includes the precompiled CSS and JavaScript assets, along with source Sass, JavaScript, and documentation. More specifically, it includes the following and more:
        
        Copy
        bootstrap/
        ├── dist/
        │   ├── css/
        │   └── js/
        ├── site/
        │   └──content/
        │      └── docs/
        │          └── 5.0/
        │              └── examples/
        ├── js/
        └── scss/
        The scss/ and js/ are the source code for our CSS and JavaScript. The dist/ folder includes everything listed in the precompiled download section above. The site/docs/ folder includes the source code for our documentation, and examples/ of Bootstrap usage. Beyond that, any other included file provides support for packages, license information, and development.`
        },
        {
            title: `Introduction to Data Structures and Algorithms | 3`,
            context: `Customize
        Learn how to theme, customize, and extend Bootstrap with Sass, a boatload of global options, an expansive color system, and more.
        
        Sass
        Utilize our source Sass files to take advantage of variables, maps, mixins, and functions.
        Options
        Customize Bootstrap with built-in variables to easily toggle global CSS preferences.
        Color
        Learn about and customize the color systems that support the entire toolkit.
        Components
        Learn how we build nearly all our components responsively and with base and modifier classes.
        CSS variables
        Use Bootstrap's CSS custom properties for fast and forward-looking design and development.
        Optimize
        Keep your projects lean, responsive, and maintainable so you can deliver the best experience.`
        },
        {
            title: `Introduction to Data Structures and Algorithms | 5`,
            context: `Overview
        There are multiple ways to customize Bootstrap. Your best path can depend on your project, the complexity of your build tools, the version of Bootstrap you’re using, browser support, and more.
        
        Our two preferred methods are:
        
        Using Bootstrap via package manager so you can use and extend our source files.
        Using Bootstrap’s compiled distribution files or jsDelivr so you can add onto or override Bootstrap’s styles.
        While we cannot go into details here on how to use every package manager, we can give some guidance on using Bootstrap with your own Sass compiler.
        
        For those who want to use the distribution files, review the getting started page for how to include those files and an example HTML page. From there, consult the docs for the layout, components, and behaviors you’d like to use.
        
        As you familiarize yourself with Bootstrap, continue exploring this section for more details on how to utilize our global options, making use of and changing our color system, how we build our components, how to use our growing list of CSS custom properties, and how to optimize your code when building with Bootstrap.`
        },
        {
            title: `Introduction to Data Structures and Algorithms | 7`,
            context: `CSPs and embedded SVGs
        Several Bootstrap components include embedded SVGs in our CSS to style components consistently and easily across browsers and devices. For organizations with more strict CSP configurations, we’ve documented all instances of our embedded SVGs (all of which are applied via background-image) so you can more thoroughly review your options.
        
        Accordion
        Close button (used in alerts and modals)
        Form checkboxes and radio buttons
        Form switches
        Form validation icons
        Select menus
        Carousel controls
        Navbar toggle buttons
        Based on community conversation, some options for addressing this in your own codebase include replacing the URLs with locally hosted assets, removing the images and using inline images (not possible in all components), and modifying your CSP. Our recommendation is to carefully review your own security policies and decide on the best path forward, if necessary.`
        },
        {
            title: `Introduction to Data Structures and Algorithms | 9`,
            context: `Breakpoints
        Breakpoints are customizable widths that determine how your responsive layout behaves across device or viewport sizes in Bootstrap.
        
        On this page
        Core concepts
        Available breakpoints
        Media queries
        Min-width
        Max-width
        Single breakpoint
        Between breakpoints
        Core concepts
        Breakpoints are the building blocks of responsive design. Use them to control when your layout can be adapted at a particular viewport or device size.
        
        Use media queries to architect your CSS by breakpoint. Media queries are a feature of CSS that allow you to conditionally apply styles based on a set of browser and operating system parameters. We most commonly use min-width in our media queries.
        
        Mobile first, responsive design is the goal. Bootstrap’s CSS aims to apply the bare minimum of styles to make a layout work at the smallest breakpoint, and then layers on styles to adjust that design for larger devices. This optimizes your CSS, improves rendering time, and provides a great experience for your visitors.`
        },
        {
            title: `End game`,
            context: `Media queries
        Since Bootstrap is developed to be mobile first, we use a handful of media queries to create sensible breakpoints for our layouts and interfaces. These breakpoints are mostly based on minimum viewport widths and allow us to scale up elements as the viewport changes.
        
        Min-width
        Bootstrap primarily uses the following media query ranges—or breakpoints—in our source Sass files for our layout, grid system, and components.`
        }
    ]
    return getDocument(`blog_list_content`, name).then(data => {
        return data
    }, () => {
        const art = lstD.find(a => a.title == name)
        return new Promise(res => {
            res(art)
        })
    })
}