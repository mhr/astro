import fs = require('fs');
import {Lexer}   from "./AstroLexer0.1.0"
import {Parser}  from "./AstroParser0.1.0"
import {Utility} from "./AstroUtility0.1.0"

let fileName1 = './test1.ast';
let fileName2 = './test2.ast';
let fileName3 = './test3.ast';
let fileName4 = './test4.ast';
let fileNameP = './parser_test1.ast';

fs.readFile(fileNameP, function (err, data) {
    if (err) { return console.error(err); }
    let tokens = new Lexer().lex(data.toString());
    Utility.printTokens(tokens);
    let asts = new Parser().parse(tokens);
    // Utility.printAsts(asts);
});