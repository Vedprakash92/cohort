let arr = [1,2,3,4,5,6,7,8,9,10]; 


function negativeIndex (arr) {

    return new Proxy(arr, {

        get(target, prep) {
            const index = Number(prep);
            if ( index < 0) {
                return target[target.length + index];
            }
            return target[index]
        },

        set(target, prep, value) {
            const index = Number(prep);
            if(index < 0) {
                return target[target.length + index] = value;
            }
            ret
        }

    })
}


console.log(negativeIndex(arr[-1]));