//Task1
let array = [23,45,6,7,34,78];

function AverageofValues(arr){
    if (arr.length === 0) {
        return 0;
    }

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;
};
 AverageofValues(array);

 //Task3
  let object = {
     Name: Joseph,n
     age: 25,
     country: UsA,
     semester: 4,
     cms: 9870,

      obj = {
        contactNumber1: "0234823448",
        contactNumber2: "3724873194138",
        contactNumber3: "023912366578",
        email1: "xyz@gmail.com",
        email2: "abc@gmail.com",
        email3: "abq@gmail.com",
     };
     
  };

  //Task2
  const array = [10, 20, 30, 40, 50];

array.map((value, index) => {
  console.log(`Value at index ${index} is ${value}`);
}
);
