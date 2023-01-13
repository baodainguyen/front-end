
export function getFeatures(){
    return [
        {Name: `Constants`},
        {Name: `Scoping`},
        {Name: `Arrow Functions`},
        {Name: `Extended Parameter Handling`},
        {Name: `Template Literals`},
        {Name: `Extended Literals`},
        {Name: `Enhanced Regular Expression`},
        {Name: `Enhanced Object Properties`},
        {Name: `Destructuring Assignment`},
    ]
}
export function getFeaturesES5(){
    return [
        {
            Name: `Constants`, 
            Example: `Object.defineProperty(typeof global === "object" ? global : window, "PI", \n{ \n   value:        3.141593,\n   enumerable:   true,\n   writable:     false,\n   configurable: false \n});\nPI > 3.0;`
        },
        {
            Name: `Block-Scoped Variables`,
            Example: `var i, x, y;
for (i = 0; i < a.length; i++) {
    x = a[i];
    …
}
for (i = 0; i < b.length; i++) {
    y = b[i];
    …
}            
var callbacks = [];
for (var i = 0; i <= 2; i++) {
    (function (i) {
        callbacks[i] = function() { return i * 2; };
    })(i);
}
callbacks[0]() === 0;
callbacks[1]() === 2;
callbacks[2]() === 4;`
        },
        {
            Name: `Block-Scoped Functions`,
            Example: `//  only in ES5 with the help of block-scope emulating
//  function scopes and function expressions
(function () {
    var foo = function () { return 1; }
    foo() === 1;
    (function () {
        var foo = function () { return 2; }
        foo() === 2;
    })();
    foo() === 1;
})();`
        },
        {
            Name: `Expression Bodies`,
            Example: `odds  = evens.map(function (v) { return v + 1; });
pairs = evens.map(function (v) { return { even: v, odd: v + 1 }; });
nums  = evens.map(function (v, i) { return v + i; });`
        },
        {
            Name: `Statement Bodies`,
            Example: `nums.forEach(function (v) {
    if (v % 5 === 0)
        fives.push(v);
});`
        },
        {
            Name: `Lexical this`,
            Example: `//  variant 1
var self = this;
this.nums.forEach(function (v) {
    if (v % 5 === 0)
        self.fives.push(v);
});            
//  variant 2
this.nums.forEach(function (v) {
    if (v % 5 === 0)
        this.fives.push(v);
}, this);            
//  variant 3 (since ECMAScript 5.1 only)
this.nums.forEach(function (v) {
    if (v % 5 === 0)
        this.fives.push(v);
}.bind(this));`
        },
        {
            Name: `Default Parameter Values`,
            Example: `function f (x, y, z) {
    if (y === undefined)
        y = 7;
    if (z === undefined)
        z = 42;
    return x + y + z;
};
f(1) === 50;`
        },
        {
            Name: `Rest Parameter`,
            Example: `function f (x, y) { \n    var a = Array.prototype.slice.call(arguments, 2); \n    return (x + y) * a.length; \n}; \nf(1, 2, "hello", true, 7) === 9;`
        },
        {
            Name: `Spread Operator`,
            Example: `var params = [ "hello", true, 7 ];
var other = [ 1, 2 ].concat(params); // [ 1, 2, "hello", true, 7 ]            
function f (x, y) {
    var a = Array.prototype.slice.call(arguments, 2);
    return (x + y) * a.length;
};
f.apply(undefined, [ 1, 2 ].concat(params)) === 9;            
var str = "foo";
var chars = str.split(""); // [ "f", "o", "o" ]`
        },
        {
            Name: `String Interpolation`,
            Example: `var customer = { name: "Foo" };
var card = { amount: 7, product: "Bar", unitprice: 42 };
var message = "Hello " + customer.name + ",\\n" +
            "want to buy " + card.amount + " " + card.product + " for\\n" +
            "a total of " + (card.amount * card.unitprice) + " bucks?";`
        },
        {
            Name: `Custom Interpolation`,
            Example: `get([ "http://example.com/foo?bar=", "&quux=", "" ],bar + baz, quux);`
        },
        {
            Name: `Raw String Access`,
            Example: `//  no equivalent in ES5`
        },
        {
            Name: `Binary & Octal Literal`,
            Example: `parseInt("111110111", 2) === 503; \nparseInt("767", 8) === 503; \n0767 === 503; // only in non-strict, backward compatibility mode`
        },
        {
            Name: `Unicode String & RegExp Literal`,
            Example: `"𠮷".length === 2;
"𠮷".match(/(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF][\uD800-\uDBFF][\uDC00-\uDFFF][\uD800-\uDBFF](?![\uDC00-\uDFFF])(?:[^\uD800-\uDBFF]^)[\uDC00-\uDFFF])/)[0].length === 2;
"𠮷" === "\uD842\uDFB7";
//  no equivalent in ES5
//  no equivalent in ES5
//  no equivalent in ES5`
        },
        {
            Name: `Regular Expression Sticky Matching`,
            Example: `var parser = function (input, match) {
    for (var i, found, inputTmp = input; inputTmp !== ""; ) {
        for (i = 0; i < match.length; i++) {
            if ((found = match[i].pattern.exec(inputTmp)) !== null) {
                match[i].action(found);
                inputTmp = inputTmp.substr(found[0].length);
                break;
            }
        }
    }
} \nvar report = function (match) {
    console.log(JSON.stringify(match));
}; \nparser("Foo 1 Bar 7 Baz 42", [
    { pattern: /^Foo\s+(\d+)/, action: function (match) { report(match); } },
    { pattern: /^Bar\s+(\d+)/, action: function (match) { report(match); } },
    { pattern: /^Baz\s+(\d+)/, action: function (match) { report(match); } },
    { pattern: /^\s*/,         action: function (match) {}                 }
]);`
        },
        {
            Name: `Property Shorthand`,
            Example: `var x = 0, y = 0; \nobj = { x: x, y: y };`
        },
        {
            Name: `Computed Property Names`,
            Example: `var obj = { \n    foo: "bar" \n}; \nobj[ "baz" + quux() ] = 42;`
        },
        {
            Name: `Method Properties`,
            Example: `obj = { \n    foo: function (a, b) {
        …
    }, \n   bar: function (x, y) {
        …
    }, \n//  quux: no equivalent in ES5 \n};`
        },
        {
            Name: `Array Matching`,
            Example: `var list = [ 1, 2, 3 ]; \nvar a = list[0], b = list[2]; \nvar tmp = a; a = b; b = tmp;`
        },
    ]
}
export function getFeaturesES6(){
    return [
        {
            Name: `Constants`, 
            Example: `const PI = 3.141593 \nPI > 3.0`
        },
        {
            Name: `Block-Scoped Variables`,
            Example: `for (let i = 0; i < a.length; i++) {
let x = a[i]
   …
}
for (let i = 0; i < b.length; i++) {
    let y = b[i]
    …
}            
let callbacks = []
for (let i = 0; i <= 2; i++) {
    callbacks[i] = function () { return i * 2 }
}
callbacks[0]() === 0
callbacks[1]() === 2
callbacks[2]() === 4`
        },
        {
            Name: `Block-Scoped Functions`,
            Example: `{
    function foo () { return 1 }
    foo() === 1 {
        function foo () { return 2 }
        foo() === 2
    }
    foo() === 1
}`
        },
        {
            Name: `Expression Bodies`,
            Example: `odds = evens.map(v => v + 1)
pairs = evens.map(v => ({ even: v, odd: v + 1 }))
nums  = evens.map((v, i) => v + i)`
        },
        {
            Name: `Statement Bodies`,
            Example: `nums.forEach(v => {
    if (v % 5 === 0)
        fives.push(v)
})`
        },
        {
            Name: `Lexical this`,
            Example: `this.nums.forEach((v) => { \n if (v % 5 === 0)\n  this.fives.push(v) \n})`
        },
        {
            Name: `Default Parameter Values`,
            Example: `function f (x, y = 7, z = 42) { \n    return x + y + z \n} \nf(1) === 50`
        },
        {
            Name: `Rest Parameter`,
            Example: `function f (x, y, ...a) { \n  return (x + y) * a.length \n} \nf(1, 2, "hello", true, 7) === 9`
        },
        {
            Name: `Spread Operator`,
            Example: `var params = [ "hello", true, 7 ] \nvar other = [ 1, 2, ...params ] // [ 1, 2, "hello", true, 7 ]
function f (x, y, ...a) {
    return (x + y) * a.length
}
f(1, 2, ...params) === 9
var str = "foo" \nvar chars = [ ...str ] // [ "f", "o", "o" ]`
        },
        {
            Name: `String Interpolation`,
            Example: `var customer = \{ name: "Foo" \}
var card = \{ amount: 7, product: "Bar", unitprice: 42 \}
var message = \`Hello \$\{customer.name\},
            want to buy \$\{card.amount\} \$\{card.product\} for
            a total of \$\{card.amount * card.unitprice\} bucks?\``
        },
        {
            Name: `Custom Interpolation`,
            Example: `get\`http://example.com/foo?bar=\$\{bar + baz\}\&quux=\$\{quux\}\``
        },
        {
            Name: `Raw String Access`,
            Example: `function quux (strings, ...values) {
    strings[0] === "foo\\n"
    strings[1] === "bar"
    strings.raw[0] === "foo\\n"
    strings.raw[1] === "bar"
    values[0] === 42
}
quux\`foo\\n\$\{ 42 \}bar\` \nString.raw\`foo\n\$\{ 42 \}bar\` === "foo\\n42bar"`
        },
        {
            Name: `Binary & Octal Literal`,
            Example: `0b111110111 === 503
0o767 === 503`
        },
        {
            Name: `Unicode String & RegExp Literal`,
            Example: `"𠮷".length === 2
"𠮷".match(/./u)[0].length === 2
"𠮷" === "\uD842\uDFB7"
"𠮷" === "\u{20BB7}"
"𠮷".codePointAt(0) == 0x20BB7
for (let codepoint of "𠮷") console.log(codepoint)`
        },
        {
            Name: `Regular Expression Sticky Matching`,
            Example: `let parser = (input, match) => {
    for (let pos = 0, lastPos = input.length; pos < lastPos; ) {
        for (let i = 0; i < match.length; i++) {
            match[i].pattern.lastIndex = pos
            let found
            if ((found = match[i].pattern.exec(input)) !== null) {
                match[i].action(found)
                pos = match[i].pattern.lastIndex
                break
            }
        }
    }
} \nlet report = (match) => {
    console.log(JSON.stringify(match))
} \nparser("Foo 1 Bar 7 Baz 42", [
    { pattern: /Foo\s+(\d+)/y, action: (match) => report(match) },
    { pattern: /Bar\s+(\d+)/y, action: (match) => report(match) },
    { pattern: /Baz\s+(\d+)/y, action: (match) => report(match) },
    { pattern: /\s*/y,         action: (match) => {}            }
])`
        },
        {
            Name: `Property Shorthand`,
            Example: `var x = 0, y = 0 \nobj = { x, y }`
        },
        {
            Name: `Computed Property Names`,
            Example: `let obj = { \n    foo: "bar", \n  [ "baz" + quux() ]: 42 \n}`
        },
        {
            Name: `Method Properties`,
            Example: `obj = { \n    foo (a, b) {
        …
    }, \n   bar (x, y) {
        …
    }, \n   *quux (x, y) {
        …
    } \n}`
        },
        {
            Name: `Array Matching`,
            Example: `var list = [ 1, 2, 3 ] \nvar [ a, , b ] = list \n[ b, a ] = [ a, b ]`
        },
    ]
}
export function getScopeFeatures(){
    return [
        {
            FeatureName: `Constants`, Name: `Constants`, 
            Description: `Support for constants (also known as "immutable variables"), i.e., variables which cannot be re-assigned new content. Notice: this only makes the variable itself immutable, not its assigned content (for instance, in case the content is an object, this means the object itself can still be altered).`
        },
        {
            FeatureName: `Scoping`, Name: `Block-Scoped Variables`, 
            Description: `Block-scoped variables (and constants) without hoisting.`
        },
        {
            FeatureName: `Scoping`, Name: `Block-Scoped Functions`, 
            Description: `Block-scoped function definitions.`
        },
        {
            FeatureName: `Arrow Functions`, Name: `Expression Bodies`, 
            Description: `More expressive closure syntax.`
        },
        {
            FeatureName: `Arrow Functions`, Name: `Statement Bodies`, 
            Description: `More expressive closure syntax.`
        },
        {
            FeatureName: `Arrow Functions`, Name: `Lexical this`, 
            Description: `More intuitive handling of current object context.`
        },
        {
            FeatureName: `Extended Parameter Handling`, Name: `Default Parameter Values`, 
            Description: `Simple and intuitive default values for function parameters.`
        },
        {
            FeatureName: `Extended Parameter Handling`, Name: `Rest Parameter`, 
            Description: `Aggregation of remaining arguments into single parameter of variadic functions.`
        },
        {
            FeatureName: `Extended Parameter Handling`, Name: `Spread Operator`, 
            Description: `Spreading of elements of an iterable collection (like an array or even a string) into both literal elements and individual function parameters.`
        },
        {
            FeatureName: `Template Literals`, Name: `String Interpolation`, 
            Description: `Intuitive expression interpolation for single-line and multi-line strings. (Notice: don't be confused, Template Literals were originally named "Template Strings" in the drafts of the ECMAScript 6 language specification)`
        },
        {
            FeatureName: `Template Literals`, Name: `Custom Interpolation`, 
            Description: `Flexible expression interpolation for arbitrary methods.`
        },
        {
            FeatureName: `Template Literals`, Name: `Raw String Access`, 
            Description: `Access the raw template string content (backslashes are not interpreted).`
        },
        {
            FeatureName: `Extended Literals`, Name: `Binary & Octal Literal`, 
            Description: `Direct support for safe binary and octal literals.`
        },
        {
            FeatureName: `Extended Literals`, Name: `Unicode String & RegExp Literal`, 
            Description: `Extended support using Unicode within strings and regular expressions.`
        },
        {
            FeatureName: `Enhanced Object Properties`, Name: `Property Shorthand`, 
            Description: `Shorter syntax for common object property definition idiom.`
        },
        {
            FeatureName: `Enhanced Object Properties`, Name: `Computed Property Names`, 
            Description: `Support for computed names in object property definitions.`
        },
        {
            FeatureName: `Enhanced Object Properties`, Name: `Method Properties`, 
            Description: `Support for method notation in object property definitions, for both regular functions and generator functions.`
        },
        {
            FeatureName: `Destructuring Assignment`, Name: `Array Matching`, 
            Description: `Intuitive and flexible destructuring of Arrays into individual variables during assignment.`
        },
        {
            FeatureName: `Enhanced Regular Expression`, Name: `Regular Expression Sticky Matching`, 
            Description: `Keep the matching position sticky between matches and this way support efficient parsing of arbitrary long input strings, even with an arbitrary number of distinct regular expressions.`
        },
    ]
}