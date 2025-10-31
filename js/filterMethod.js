//filter: filter return selected result with new array

const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

const result = arr.filter((num) => num > 25)
console.log(result);

// behind the seen how its work filter

arr.filtering = function (compare) {
    let res = [];
    for (let num of this) {
        if (compare(num)) {
            res.push(num)
        }
    }
    return res
}

const newResult = arr.filtering((num) => num > 40)
console.log(newResult);

