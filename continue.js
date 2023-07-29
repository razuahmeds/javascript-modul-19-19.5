
function getTotal(num){

let results = 0;

for(let i=1; i<=num;i++ ){
    results+= i;
}

console.log({results});
}

//  getTotal(5)



// getTotal(5);
// getTotal(15);


// const x = 52;
// const y = 95;
// const z = 83;

// if(x>y){
//     if(x>z){
//         console.log({x});
//     }else{
//         console.log({z});
//     }
// }else{
//     if(y>z){
//         console.log({y});
//     }else{
//         console.log({z});
//     }
// }



const m =12;
const n =4;
const o =5;


// if(m > n){
//     if(m > o){
//         console.log({m})
//     }else{
//         console.log({o});
//     }
// }else{
//     if(n > o){
//         console.log({n});
//     }else{
//         console.log({o});
//     }
// }

let num =0;
for(let num =1; num <=1; num+=2){
    

    function numbers(num){

let number = 0;

for(let i=1; i<=num;i++ ){
    number+= i;
}

// console.log({number});
}

//  numbers(1)
//  numbers(3)
//  numbers(5)
//  numbers(7)
//  numbers(9)
}





let results =1;
for(let i =1; i <=5; i++){
results =results *i;
}

// console.log({results});

let oddNum =1;
for(let i =1; i <=10; i+=2){
    // console.log(i);
    oddNum =oddNum +i;
    // console.log(oddNum);
}


let resultsNum =1;
for(let i =0; i <=10; i+=2){
    // console.log(i);
    resultsNum =resultsNum -i
    // console.log(resultsNum);
}





// let hour =19;
// if(hour >= 6 && hour <12){
//     console.log('good mornign');
// }else if(hour >= 12 && hour <18){
//     console.log('good afternoon');
// }else{
//     console.log('good evening');
// }


let result =49;
if(result >= 80 && result <99){
    console.log('gp a+');
}else if(result >= 70 && result <79){
    console.log('gp a');
}else if(result >= 60 && result <70){
    console.log('gp a-');
}else if(result >= 50 && result <60){
    console.log('gp b');
}else if(result >= 40 && result <50){
    console.log('gp c');
}else if(result >= 33 && result <40){
    console.log('gp d');
}else {
    console.log('gp f');
}