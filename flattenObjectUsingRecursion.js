const nestedData = {
  name: 'Abc',
  age: '29',
  address: {
    pincode: '110011',
    area: 'bangalore',
    state: 'karnataka',
    location: {
      lat: '122.21',
      long: '11.21'
    },
    phone: '1212121'
  }
}
========================================================
let flattenObjOutput = {};
function flattenObj(obj, parent) {
for(key in obj) {
    if(typeof(obj[key]) === 'object') {
      flattenObj(obj[key], parent + '_' + key);
    } else {
      flattenObjOutput[parent + '_' + key] = obj[key];
    }
  }

}

console.log(flattenObj(nestedData,"nestedData"));
console.log(flattenObjOutput)


========================================================
o/p:
{
  nestedData_address_area: "bangalore",
  nestedData_address_location_lat: "122.21",
  nestedData_address_location_long: "11.21",
  nestedData_address_phone: "1212121",
  nestedData_address_pincode: "110011",
  nestedData_address_state: "karnataka",
  nestedData_age: "29",
  nestedData_name: "Abc"
}
