const fs = require("fs");
// const refactorTheData = (arr) =>{
//     let result = arr.map((elem, index)=>{
//         console.log(elem)
//         let nNew = elem.name.split(" ").join("");
//         elem.email = nNew+ "@companydomain.com";
//         elem.domain = "companydomain/"+nNew;
//         switch(index %5){
//             case 0: elem.post = "Worker"; break;
//             case 1: elem.post = "Staff"; break;
//             case 2: elem.post = "Manager"; break;
//             case 3: elem.post = "Developer"; break;
//             default: elem.post = "Worker"; break;
//         }
//         return elem;
//     })
//     fs.writeFile('output.txt', JSON.stringify(result),(err)=>{
//
//     })
//
// }

const refactorTheData = () => {
  let result = [];
  for (let i = 1; i <= 350; i++) {
    let arr = [1, 2, 3, 4, 5];
    let groupAmount = Math.floor(Math.random() * 3);
    if (groupAmount > 0) {
      for (let j = 0; j < groupAmount; j++) {
        let currentGroupIndex = null;
        while (true) {
          currentGroupIndex = Math.floor(Math.random() * 5) + 1;
          if (arr.indexOf(currentGroupIndex) !== -1) {
            arr = arr.filter((elem) => elem !== currentGroupIndex);
            break;
          }
        }
        result.push({ idGroup: `${currentGroupIndex}`, idUser: `${i}` });
      }
    }
  }
  fs.writeFile("output.txt", JSON.stringify(result), (err) => {});
};
const arr = [
  { name: "Managers" },
  { name: "Middle Staff" },
  { name: "Technical Staff" },
  { name: "Support Staff" },
  { name: "Master" },
];

refactorTheData(arr);
