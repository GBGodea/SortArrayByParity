let arr1 = [3, 5, 1, 0];

var sortArrayByParity = function(arr) {
    let saveArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0 || arr[i] == 0) {
            saveArr.unshift(arr[i]);
        } else {
            saveArr.push(arr[i]);
        }
        
    }
    
    return saveArr;
};

console.log(sortArrayByParity(arr1));