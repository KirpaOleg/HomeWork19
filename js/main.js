
// Task1 +
const arr1 = [1, 8, -3, 4];
 for (let i = 0; i < 100; i++) {
	 arr1.push(0);
}
console.log(arr1);

// Task2 +
const arr2 = [1, 8, -3, 4];
 for (let i = 0; i < 100; i++) {
		if (Number.isInteger(arr2[i])){
			} else {
				arr2.push(0);
			}	
}
console.log(arr2);	

// Task3 +
const arr3 = [1, 8, -3, 4];
 for (let i = 0; i < 100; i++) {
	 arr3.unshift(0);
}
console.log(arr3);

// Task4 +
const arr4 = [1, 8, -3, 4];
 for (let i = 0; i < 100; i++) {
		if (Number.isInteger(arr4[i])){
			} else {
				arr4.unshift(0);
			}	
}
console.log(arr4);	

// Task5 +
 const arr5 = [1, 8, -3, 4];
 let del = arr5.shift();
	 for (let i = 0; i < 25; i++) {
		arr5.unshift(0);
	 }
	arr5.unshift(del);
	console.log(arr5);

// Task6 +
const arr6 = [1, 8, -3, 4];
for (let i = 0; i < 76; i++) {
	arr6.push(arr6[i]);
}
console.log(arr6);	

// Task7 +
const arr7 = [1, 8, -3, 4];
let suma = 0;
for (let i = 0; i < arr7.length; i++) {
	suma += arr7[i];
}
arr7.push(suma);
console.log(arr7);	

// Task8 +
const arr8 = [1, 8, -3, 4];
let plus = 0;
let minus = 0;
for (let i = 0; i < arr8.length; i++) {
	if (arr8[i] > 0) {
	plus += arr8[i];
	} else if (arr8[i] < 0) {
		minus += arr8[i];
	}
}
arr8.push(plus);
arr8.push(minus);
console.log(arr8);	

// Task9 +
const arr9 = [1, 8, -3, 4];
	for (let i = 0; i < arr9.length; i++) {
		arr9[i] = arr9[i] * 2;
}
console.log(arr9);	

// Task10 +/-
const arr10 = [1, 8, -3, 4];
let ar1 = arr10[0];
let ar2 = arr10[1];
let ar3 = arr10[2];
let ar4 = arr10[3];
	for (let i = 0; i < arr10.length; i++) {
		arr10[i] = arr10[i] +3;
}
arr10.unshift(ar1);
arr10.unshift(ar2);
arr10.unshift(ar3);
arr10.unshift(ar4);
console.log(arr10);	

// Task11 +
const arr11 = [1, 8, -3, 4];
 let x = arr11[0];
 arr11.push(x);
console.log(arr11);	

// Task12 +
const arr12 = [1, 8, -3, 4];
let y = arr12[arr12.length-1];
	for (let i = 0; i < arr12.length; i++) {
		arr12[i] = arr12[i] + y;
}
console.log(arr12);	
