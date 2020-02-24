// //X bubble sorting
// function getSortedArray(arr){
//     let temp;
//     for(let a = arr.length; a > 0; a--){
//         for(let b = 0; b < a; b++){
//             if(arr[b] > arr[b+1]){
//                 temp      = arr[b];
//                 arr[b]    = arr[b + 1];
//                 arr [b + 1] = temp;
//             }
//         }
//     }
    
//                 return arr;
// }

//     let unsortedArr = [2, 1, 6, 3, 7, 4]
// console.log(getSortedArray(unsortedArr))



//№3(Triangle)
function getTriangle(n){
    let out = '';
    
    for(let i = 0; i < n; i++) {//stroka(raw)
        for(let k = 0; k < n; k++) { //stolbec(ca)
            
            if (i + k < n) {
                out += '*';
            }
        }
        out += '\n';
    }
    
    return out;
}
console.log( getTriangle(7) );

//№4(Empty Triangle)
function getEmptyTriangle(num){
    let out = '';

    for(let i = 0; i < num; i++) {
        for(let k = 0; k < num; k++) {
            if (((i + k) === num-1) ||i === 0||k === 0) {
                out += '*';
            } else {
                out += ' ';
            }
        }
        out += '\n';
    }
    
    return out;
}
console.log( getEmptyTriangle(7) );

//№1(Square)
function getSquare(num) {
    let out = '';

    for(let i = 0; i < num; i++) {
        for(let k = 0; k < num; k++) {
            out += '*'
        }
        out += '\n'
    }
    
    return out;
}

console.log( getSquare(8) );

//№2(Empty Square)
function getEmptySquare(num) {
    let out = '';

    for(let i = 0; i < num; i++) {
        for(let k = 0; k < num; k++) {
            if ( (i === 0) || i === num - 1 || k === 0 || k === num - 1 ) {
                out += '*';
        } else {
                out += ' ';
            }
        }
        out += '\n';
    }
    
    return out;
}

console.log( getEmptySquare(8) );


//6 (EmptyHourglass)
function getEmptyHourglass(num) {
    let out = '';

    for(let i = 0; i < num; i++) {
        for(let k = 0; k < num; k++) {
            if ( i === 0 || i === num ||   k === i || (i + k) === (num - 1) || i === num - 1  ) {
                
                out += '*';
        } else {
                out += ' ';
            }
        }
        out += '\n';
    }
    
    return out;
}

console.log( getEmptyHourglass(7) );

// (Hourglass)
function getHourglass(num) {
    let out = '';

    for(let i = 0; i < num; i++) {
        for(let k = 0; k < num; k++) {
            if (i + k === num - 1 || i === k || i < k && i + k < num || k < i && i + k > num - 1) {
                
                out += '*';
        } else {
                out += ' ';
            }
        }
        out += '\n';
    }
    
    return out;
}
console.log( getHourglass(7) );
