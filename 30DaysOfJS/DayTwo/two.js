// LEVEL ONE EXCERCISES

// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days Of JavaScript';

// Print the string on the browser console using console.log()
console.log(challenge);

// Print the length of the string on the browser console using console.log()
console.log(challenge.length);

// Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());

// Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase());

// Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substring(3,21));

// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.slice(3,21));

// Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script'));

// Split the string into an array using split() method
console.log(challenge.split());

// Split the string 30 Days Of JavaScript at the space using split() method
console.log((challenge.split(' ')));

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(','));

// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace('JavaScript', 'Python'));

// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15));

// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt(11));

// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('a'));

// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a'));

// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));

// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.lastIndexOf('because'));

// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.search('because'));

// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let sentence2 = ' 30 Days Of JavaScript ';
console.log(sentence2);
console.log(sentence2.trim());

// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith('30'));

// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith('Script'));

// Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match('a'));

// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let first = '30 Days of';
let last = 'JavaScript';
console.log(first.concat(' ',last));

// Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2));

// LEVEL TWO EXCERCISES

// Using console.log() print out the following statement:
console.log(`The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.`);

// Using console.log() print out the following quote by Mother Teresa:
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
`);

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof '10' === typeof 10);
console.log(typeof Number('10') === typeof 10);

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let num1 = parseFloat('9.8');
let num2 = 10;
console.log(num1 === num2);
num1 = num2;
console.log(num1 === num2);

// Check if 'on' is found in both python and jargon
let python = "python";
let jargon = "jargon";
console.log(python.includes('on'), jargon.includes('on'));

// I hope this course is not full of jargon. Check if jargon is in the sentence.
console.log("I hope this course is not full of jargon".includes('jargon'));

// Generate a random number between 0 and 100 inclusively.
console.log(Math.floor(Math.random()*100));

// Generate a random number between 50 and 100 inclusively.
console.log(Math.floor(Math.random()*51)+50);

// Generate a random number between 0 and 255 inclusively.
console.log(Math.floor(Math.random()*255));

// Access the 'JavaScript' string characters using a random number.
let string = 'JavaScript';
let RandomChar = string[Math.floor(Math.random()*string.length)];
console.log(RandomChar);

// Use console.log() and escape characters to print the following pattern.
console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125');

// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let part1 = sentence.substr(0,30);
let part2 = sentence.substr(55,70);
console.log(part1.concat(' ',part2));

// LEVEL THREE EXCERCISES

// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let love = `Love is the best thing in this world. Some found their love and some are still looking for their love.`;
console.log(love.match(/love/gi).length);

// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.match(/because/gi).length);

// Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const OriginalS = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

let newS = OriginalS.replace(/[%/$/@/&,#,;,.,!,?]/g, "");
newS = newS.split(' ');
console.log(newS);
// Unsure how to find most - come back ltr.


// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let OriginalS2 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let newS2 = OriginalS2.match(/\d+/g);
console.log(((Number(newS2[0])+Number(newS2[2])) * 12) + Number(newS2[1]));