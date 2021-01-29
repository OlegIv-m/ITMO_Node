// 1*. Генератор случайных паролей. Требуется реализовать генератор
// (function*) случайных паролей указанной длины. В пароле можно 
// использовать любые символы в верхнем и нижнем регистре. 
// Например: password_generator(16), вернет случайный пароль 
// длиной 16 символов.

function* genPass(length){
	let pass = 0;
	while(true){
		let arrNum= [];
		for( let i = 0; i < length; i++) {
			arrNum.push(Math.round(Math.random()*50) + 21);
		}
		yield pass = String.fromCharCode(...arrNum);
	}
}

let passGenerator = genPass(5);
console.log(passGenerator.next());



