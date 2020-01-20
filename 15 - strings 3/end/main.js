// Strings
var text1 = 'hi';
var text2 = "hi";

// escaping: \' \" \\
var text3 = 'hi \\ there, I\'m looking for someone';
console.log(text3);

// breaking up long strings
var text4 = 'hi there, how' +
  ' \n are you?';
console.log(text4);

// strings as Objects: using `new String()` - not recommended to use this
var text5 = new String('hi');
console.log(text5);

// String properties
// .length
var text6 = 'hi';
console.log(text6.length);

// String methods
// .indexOf(), .lastIndexOf()
var text7 = 'hello world, how are you?';
console.log(text7.indexOf('world'));
console.log(text7.indexOf('z', 5));
console.log(text7.lastIndexOf('o'));
console.log(text7.indexOf('h', 5));

// .search()
console.log(text7.search('you'));

// .slice()
console.log(text7.slice(0, 5));
console.log(text7);

// .substring()
console.log(text7.substring(6, 10));

// .substr()
console.log(text7.substr(6, 10));

// .replace()
var text8 = 'apples are great!';
var text9 = text8.replace('great', 'amazing!');
console.log(text8);
console.log(text9);

// .toUpperCase()
let text10 = 'apPles are gReat 234 ^&!';
console.log(text10.toUpperCase());
console.log(text10);

// .toLowerCase()
console.log(text10.toLowerCase());
console.log(text10);

// .concat()
text10 = 'hi';
let text11 = text10.concat(' ', 'there');
console.log(text11);
console.log(text10);

// .trim()
text11 = '     hi    ';
console.log(text11);
console.log(text11.trim());

// .charAt()
text11 = 'hi there';
console.log(text11.charAt(4));

// .charCodeAt()
console.log(text11.charCodeAt(4));

// property access
console.log(text11[0]);
const test1 = 'a';
console.log(test1.charAt(1));
console.log(test1[1]);
text11[0] = 'D';
console.log(text11);

// .split()
console.log(text11.split());
console.log(text11.split(''));
console.log(text11.split(' '));
