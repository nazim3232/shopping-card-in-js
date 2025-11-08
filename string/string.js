let myName = "Nazim Chowdhury";


let firstName = "Nazim ";
let lastName = "Chowdury";
let fullName = firstName.concat(lastName);
console.log(fullName);
let  language = "Javascript".concat(" is my favourite language ");
console.log(language);
//this is called the concat operation in the string.
console.log("This is the another example of the concat  method in the string .")
let st1 = " First ";
let st2 = " Second";
let st3 =" thired";

let  st5 ="Nazim ".concat(st1, st2, st3);
console.log(st5);

let name1 ="Nazim Chowdhury";
let subName = name1.slice(0, 6);
console.log("This is a prt if my name .");
console.log(subName);
console.log(name1.slice(0));

console.log(name1.slice(-10));
console.log(name1.slice(-10, -2));
let  intro = "My name is Nazim Chowdhury";
console.log(intro.substring(0, 14));
console.log(intro.substring(-9));
//this is the example of the substring in the js.
let sub = "Bangladesh is my mother land.";
console.log(sub.substr(0, 5))
console.log("This is the example of the string method in the js .");


// toUpperCae();
// toLowerCae();
// trim();
// trimStart();
// trimEnd();
// padStart();
// padEnd();


let userCae = "Bangladesh is my mother land and  also mother country";
let useCase = userCae.replace("Bangladesh", "India");
console.log(useCase);
let replaceAll = useCase.replaceAll("mother", "father");
console.log(replaceAll);
console.log("Tarek".startsWith('T'));
console.log("father".endsWith('rr'));
console.log("mtoher@gmail.com".includes('@'));
console.log("This is the example of the father : ");
console.log("mother.father".includes('.'));

// indexOf();
// lastIndexOf();
// charCodeAt();
// codePointAt();


console.log("My name is Nazim Chowdhury".split(" ", 2).reverse().join("-"));