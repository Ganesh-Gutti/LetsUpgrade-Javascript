let arr = [];
let n = prompt('enter len of array');
for (let i = 0; i < n; i++) {
  arr.push(prompt('enter the element'));
}
for (let i = n-1; i >=0; i--) {
  console.log(arr[i]);
}