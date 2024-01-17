export function fibs (n){
    let arr =[];
    let first = 0;
    let second = 1;
    for(let i = 0; i < n; i++){
        let result = first + second;
        arr.push(first);
        first = second;
        second = result;
    }
    return arr;
}

export function fibsRec (n){
    if(n < 1){
        return [];
    }
    if(n == 1){
        return [0]
    }
    else if(n == 2){
        return [0, 1]
    }else{
        let arr = fibsRec(n - 1);
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        return arr;
    }
}