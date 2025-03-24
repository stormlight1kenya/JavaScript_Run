let codedString = "How's%20it%20going%3F";
let decodedString = decodeURIComponent(codedString);
console.log(decodedString);
normalString = "How's it going?";
let stringCode = encodeURI(normalString);
console.log(stringCode);
//realistic url
let link = "http://www.basescripts.com";
let linkURI = '?=Hello World"';
let codeuri = encodeURIComponent(linkURI);
let fullLink = link + codeuri;
console.log(fullLink);
