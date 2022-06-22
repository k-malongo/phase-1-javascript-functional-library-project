let inputData = function(collection) {
    return (collection instanceof Array) ? collection.slice() : Object.values(collection);
  }
  
let myEach = function(collection, callback) {
   let newCollection = inputData(collection);
  
    for (let idx = 0; idx < newCollection.length; idx++) {
      callback(newCollection[idx]);
    }
  
    return collection;
}
  
let myMap = function(collection, callback) {
    let newCollection = inputData(collection);
  
    let newArr = [];
  
    for (let idx = 0; idx < newCollection.length; idx++) {
      newArr.push(callback(newCollection[idx]));
    }
  
    return newArr;
}
  
let myReduce = function(collection, callback, acc) {
    let newCollection = inputData(collection);
  
    if (!acc) {
      acc = newCollection[0];
      newCollection = newCollection.slice(1);
    }
  
let len = newCollection.length;
  
    for (let i = 0; i < len; i++) {
      acc = callback(acc, newCollection[i], newCollection);
    }
    return acc;
  }
  
let myFind = function(collection, predicate) {
    let newCollection = inputData(collection);
  
    for (let idx = 0; idx < newCollection.length; idx++) {
      if (predicate(newCollection[idx])) return newCollection[idx];
    }
  
    return undefined;
}
  
let myFilter = function(collection, predicate) {
    let newCollection = inputData(collection);
  
    let newArr = [];
  
    for (let idx = 0; idx < newCollection.length; idx++) {
      if (predicate(newCollection[idx])) newArr.push(newCollection[idx]);
    }
  
    return newArr;
}
  
let mySize = function(collection) {
    const newCollection = inputData(collection);
    return newCollection.length;
}

let myFirst = function(arr, stop=false) {
    return (stop) ? arr.slice(0, stop) : arr[0];
}
  
  let myLast = function(arr, start=false) {
    return (start) ? arr.slice(arr.length-start, arr.length) : arr[arr.length-1];
}
  
let mySortBy = function(arr, callback) {
    const newArr = [...arr];
    return newArr.sort(function(a, b) {
      if (callback(a) > callback(b)) {
        return 1;
      } else if (callback(b) > callback(a)) {
        return -1;
      } else {
        return 0;
      }
    });
}
  
let unpack = function(receiver, arr) {
    for (let val of arr) {
      receiver.push(val);
    }
}
  
let myFlatten = function(collection, shallow, newArr=[]) {
    if (shallow) {
      for (let val of collection) {
        Array.isArray(val) ? unpack(newArr, val) : newArr.push(val);
      }
    } else {
      for (let val of collection) {
        if (Array.isArray(val)) {
          myFlatten(val, false, newArr);
        } else {
          newArr.push(val);
        }
      }
    }
    return newArr;
}
    
let myKeys = function(obj) {
    let keys = [];
    for (let key in obj){
      keys.push(key);
    }
    return keys;
}
  
let myValues = function(obj) {
    let values = [];
    for (let key in obj){
      values.push(obj[key]);
    }
    return values;
  
}