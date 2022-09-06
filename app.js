
//NESTED ARRAYS

let diseases = [
["shoulder pain"],["leg pain"], ["headache"], ["knee pain"]];
document.getElementById('arrayName').innerHTML = diseases;


function getArray() {
let na =  document.getElementById('na');
let cure = [...diseases.slice(-1)];
console.log(cure);
na.innerHTML = [...diseases.slice(-1)];
}








//NESTED OBJECTS
let problems = {
        math:{
                num:1,
    },
    science:{
        num: 2,
    },
    english:{
            num:5,
        }
    }
    let solution1 = {...problems.english};
    let solution2 = {...Object.values(problems).slice(-1)};
    let solution3 = {...Object.keys(problems).slice(-1)};
    console.log(solution1, solution2,solution3);
    





    //testing only
    
    let user = { 
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43,
    'department':{
            'name': 'Sales',
        'Shift': 'Morning',
        'address': {
                'city': 'Bangalore',
                'street': '7th Residency Rd',
                'zip': 560001
            }
        }
    }
    
    
    let b = { ...Object.keys(user.address)};

console.log(user);







// SPREAD OPERATOR FOR ARRAY....
// let nestedArr = ["outermostData", ["innerData", ["INNERMOSTDATA"]]];
// let copyInnerMostArr = [...nestedArr[1][1]];
// console.log(copyInnerMostArr)



// SPREAD OPERATOR FOR OBJECT.....
// let nestedObj = {
//   outermost: {
//     inner: {
//       data: "INNERMOSTDATA",
//     },
//   },
// };

// let copyInnermostObj = {
//   ...(nestedObj.outermost.inner),
// };
// console.log(copyInnermostObj);
