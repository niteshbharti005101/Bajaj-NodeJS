/* 1. Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with
values higher or equal to a and lower or equal to b and return a result as an array.
The function should not modify the array. It should return the new array.
For instance:*/
function filterRange(arr, a, b) {
    let a1 = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) {
            a1.push(arr[i])
        }
    }
    return a1
}
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert(filtered); // 3,1 (matching values)
alert(arr); // 5,3,8,1 (not modified)

/*2. Let arr be an array.
Create a function unique_elements(arr) that should return an array with unique items
of arr.
For instance:*/

function unique_elements(arr) {
    /* your code */
    const unique = (value, index, self) => {
        return self.indexOf(value) === index
    }
    return arr.filter(unique)
}
let strings = ["React Js", "JavaScript", "React Js", "JavaScript",
    "JavaScript", "JavaScript", "React Js", "React Js"
];
alert(unique_elements(strings)); // React Js, JavaScript

/* 3. Create a function truncate(str, maxlength) that checks the length of the str and, if it
exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its
length equal to maxlength.
The result of the function should be the truncated (if needed) string.
For instance:*/
function truncate(str1) {
    if (str1.length > 20) {
        let s = str1.slice(0, 20) + "..."
        str1 = s
    }
    return str1

}

console.log(truncate("What I'd like to tell on this topic is:"))
console.log(truncate("Hi everyone! Welcome to this test application"))


/* 4. We have a cost in the form "$120". That is: the dollar sign goes first, and then the
number.
Create a function extractCurrencyValue(str) that would extract the numeric value from such
string and return it.
The example:*/
function extractCurrencyValue(s) {
    let s1 = s.slice(1, s.length)
    return Number(s1)
}
alert(extractCurrencyValue('$120')); // true