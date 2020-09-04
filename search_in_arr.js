let arr=[];
let n=prompt("enter len of array");
for(let i=0;i<n;i++)
{
	arr.push(prompt("enter the element"));
}
let search_element=prompt("enter the element to search");
let ind=arr.indexOf(search_element)
if(ind==-1)
	console.log("Not found ");
else 
	console.log(search_element+" is at "+ind+"th position");
