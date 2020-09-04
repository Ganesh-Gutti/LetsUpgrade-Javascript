let arr = [];
let n = prompt('enter len of array');
for (let i = 0; i < n; i++) {
  arr.push(prompt('enter the element'));
}
let a;
arr.forEach(function (a) {
	//console.log(a);
  let ind1 = a.indexOf('a');
  let ind2 = a.indexOf('A');
  if (!(ind1 == -1 && ind2 == -1)) {
    console.log(a);
  }
});
