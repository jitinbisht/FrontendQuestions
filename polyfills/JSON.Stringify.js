// Implement the JSON.stringify function
// function stringify(input) {
//   // To do
// }

const data1 = 10;
const data2 = "abc";
const data3 = { a: 1, b: 2, c: { 1: "x" } };
const data4 = [{ x: 1, y: 2, z: { a: 1, b: 2 } }, 4];
let data5;

// stringify(data4)

function stringify(data) {
  if (data === undefined) {
    return undefined;
  }

  if (data.constructor === String) {
    return '"' + data.replace(/"/g, "") + '"';
  }
  if (data.constructor === Number) {
    console.log(data, "===data===");
    return String(data);
  }
  if (data.constructor === Array) {
    return (
      "[" +
      data
        .reduce((acc, curr) => {
          if (curr === undefined || curr === null) {
            return [...acc, "null"];
          } else {
            return [...acc, stringify(curr)];
          }
        }, [])
        .join(",") +
      "]"
    );
  }
  if (data.constructor === Object) {
    return (
      "{" +
      Object.keys(data)
        .reduce((acc, curr) => {
          if (data[curr] === undefined) {
            return acc;
          } else {
            console.log(curr);
            return [...acc, stringify(curr) + ":" + stringify(data[curr])];
          }
        }, [])
        .join(",") +
      "}"
    );
  }
}

console.log(stringify(data4), "===1===");
console.log(JSON.stringify(data4), "====2====");

[{"x":1,"y":2,"z":{"a":1,"b":2}},4] ===1=== 
[{"x":1,"y":2,"z":{"a":1,"b":2}},4] ====2==== 
