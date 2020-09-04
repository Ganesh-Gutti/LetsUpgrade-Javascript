let str = prompt("enter a string");
let char =prompt("enter a char");
let found=false;	   
for(let i=0;i<(str.length);i++)
{
 if(char===str[i])
 {
	 found=true;
   console.log(char+" found at "+i+"th index.");
	 break; 
 } 
}		  
if(!found){
 console.log("Not found.");
}
