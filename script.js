function firstNonRepeatedChar(str) {
 // Write your code here
	
	let strLowerCase= str.toLowercase()
	if(str.length==0){
		return null
	}
	for(let i=0; i<strLowerCase.length; i++){
		if(strLowerCase[i]!==strLowerCase[i+1]){
			return strLowerCase[i]
		}

		
	}
return null
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
