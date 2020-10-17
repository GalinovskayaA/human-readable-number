const oneNine = new Map([
  [0, 'zero'],
  [1, 'one'], 
  [2, 'two'], 
  [3, 'three'],
  [4, 'four'],
  [5, 'five'],
  [6, 'six'],
  [7, 'seven'],
  [8, 'eight'],
  [9, 'nine'],
]);

const eleven = new Map([
  [0, 'ten'], 
  [1, 'eleven'], 
  [2, 'twelve'],
  [3, 'thirteen'],
  [4, 'fourteen'],
  [5, 'fifteen'],
  [6, 'sixteen'],
  [7, 'seventeen'],
  [8, 'eighteen'],
  [9, 'nineteen'],
])

const ten = new Map([
  [2, 'twenty'], 
  [3, 'thirty'], 
  [4, 'forty'],
  [5, 'fifty'],
  [6, 'sixty'],
  [7, 'seventy'],
  [8, 'eighty'],
  [9, 'ninety'],
])

const hundred = new Map([
  [1, 'one hundred'], 
  [2, 'two hundred'], 
  [3, 'three hundred'],
  [4, 'four hundred'],
  [5, 'five hundred'],
  [6, 'six hundred'],
  [7, 'seven hundred'],
  [8, 'eight hundred'],
  [9, 'nine hundred'],
])


function numb (x) {
  let arr = new Array();
  const n = Math.ceil(Math.log10(x + 1));
  let a = x
  
  for (let i = 1; i <= n; i++) {
    b = Math.floor(a / 10 ** (n - i)); 
    arr.push(b);
    a = a - b * 10 ** (n - i);
  }
  return arr 
} 

module.exports = function toReadable (number) {
  let a = numb (number)
  let oneMap = oneNine.get(a[a.length-1])
  let twoMap = ten.get(a[a.length-2])
  let tenMap = eleven.get(a[a.length-1])
  let threeMap = hundred.get(a[a.length-3])

  if (a[a.length-2] === 1 && a.length === 2) {
    return (`${tenMap}`)
  } else if (a[a.length-2] === 1 && a.length === 3) {
    return (`${threeMap}` + ` ${tenMap}`)
  } else if (a.length === 1) {
    return (`${oneMap}`)
  } else if (a.length === 0) {
    return ('zero')
  } else if (a.length === 2 && a[a.length-2] > 1 && a[a.length-1] !== 0) {
    return (`${twoMap}` + ` ${oneMap}`)
  } else if (a.length === 2 && a[a.length-2] > 1 && a[a.length-1] === 0) {
    return (`${twoMap}`)
  } else if (a.length === 3 && a[a.length-2] > 1 && a[a.length-1] !== 0) {
    return (`${threeMap}` + ` ${twoMap}` + ` ${oneMap}`)
  } else if (a.length === 3 && a[a.length-2] > 1 && a[a.length-1] === 0) {
    return (`${threeMap}` + ` ${twoMap}`)
  } else if (a.length === 3 && a[a.length-2] === 0 && a[a.length-1] > 0) {
    return (`${threeMap}` + ` ${oneMap}`)
  } else {
    return (`${threeMap}`)
  }
}
