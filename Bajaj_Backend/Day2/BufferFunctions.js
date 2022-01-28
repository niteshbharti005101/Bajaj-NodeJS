var buf1 = Buffer.from('abcdefghijkl');
var buf2 = Buffer.from('HELLO');

//Copy buf2 into parts of buf1:
buf2.copy(buf1, 10);
console.log(buf1.toString());

//Slicing the buffer
var x = Buffer.from('Nitesh Bharti');
var y = x.slice(2, x.length);
console.log(y.toString());

//Convert to Json
const data = [
    "Nitesh Bharti",
    21,
    "AP18110010604"
];

// const buff = Buffer.from(JSON.stringify(data));
// const json = buff.toString();
// console.log(json);
const buff = Buffer.from("Nitesh Bharti");
const json = JSON.stringify(buff);
console.log(json);