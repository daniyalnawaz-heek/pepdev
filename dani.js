const fs=require('fs');
const cheerio=require("cheerio");


const data=fs.readFileSync("./index.html","utf8");
let ch=cheerio.load(data);


// console.log("dani");
console.log(ch);
// 
// 