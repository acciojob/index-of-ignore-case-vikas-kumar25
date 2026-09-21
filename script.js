function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let s1Lower = s1.toLowerCase()
	let s2Lower = s2.toLowerCase()

	return s1Lower.indexOf(s2Lower)

	// let res = -1
	// let char2 = s2Lower.charAt(0)

	// for (let index = 0; index < s1.length; index++) {
	// 	let char1 = s1Lower.charAt(index) 
	// 	if(char1 === char2){
	// 		res = index 
	// 	} 
	// 	return res;
	// } 
	
}
// console.log(indexOfIgnoreCase(s1, s2))

// Please do not change the code below 
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
