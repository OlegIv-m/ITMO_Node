let arr = (process.argv).splice(2);
let sum = 0;
for(let item of arr)
	sum += (+item);
console.log(sum);