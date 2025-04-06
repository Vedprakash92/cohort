// function pataNhi(fn, delay){
//     let timer;
//     return function(){
//         let context = this;
//         let args = arguments;
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             fn.apply(context, args);
//         }, delay);
//     }
// }

// function sayHello(name){
//     console.log(`Hello ${name}`);
// }

// let faster = pataNhi(sayHello, 300);
// faster('Aman');


function throtle(fn, delay){
    let timer = null;
    return function(){
        let args = arguments;
        if(flag){
            fn(...args);
            setTimeout(() => {
                timer = null;
            }, delay);
        }
    }
}
