console.log("EXERCISE 1 The Sum of an Array:\n==========\n");
const numbersArray = [2, 22, 12, 17, 18, 39, 129];

function arraySum(numbers) {
    let sum = 0;
    //using the .forEach method for Arrays, each element of the array is evaluated
    //where sum is set to each value of the array and added, returning sum after
    numbers.forEach((value) => {
      sum += value;
    });  
    return sum;
  }
let sum1 = arraySum(numbersArray);
let sum2 = arraySum([9, 99, 103, 3, 444]); 
console.log(sum1, sum2);

console.log("EXERCISE 2: Favorite Book\n==========\n");

let book = {
    title: "The Eye of the World",
    author: "Robert Jordan",
    pages: 832,
    readCount: 0,
    info: function () {
        return `${this.title} by ${this.author} is ${this.pages} page(s) long, and has been read ${this.readCount} time(s).`;
    },
};

console.log(book.info());

console.log("EXERCISE 3: Reverse a String\n==========\n");

let sentence = "The quick brown fox jumps over the lazy dog";

function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}

console.log(reverseString("Hello"));
console.log(reverseString(sentence));

console.log("EXERCISE 4: Parse a CSV\n==========\n");

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

console.log(csvData);

function ParseCSV(input) {
    let dataArr = input.split("\n"); //splits at every \n
  
    // get the headers
    let headers = dataArr[0].split(","); // "name,age" -> ["name", "age"]
  
    // get each record
    // returns a subarray from starting index, to ending index (if not supplied, end of array)
    let records = dataArr.slice(1);
  
    console.log(headers, records);
  
    let CSV = records.map(function (record) {
      let values = record.split(","); // "Frodo,50" -> ["Frodo", "50"]
      let obj = {};
  
      
      // use the header index to grab the corresponding value at the same index
      headers.forEach(function (header, index) {
        obj[header] = values[index];
      })
  
      return obj;
    })
  
    return CSV;
  }
  
  let result = ParseCSV(csvData);
  console.log(result);