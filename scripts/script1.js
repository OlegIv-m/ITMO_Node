// 1. Требуется реализовать декоратор с параметрами pause, 
// который откладывает выполнение функции на указанное 
// количество секунд. Пример использования:
// function func() {
	// console.log('Функция выполниться с задержкой в 2 секунды!');
// }
// let paused = pause(func, 2);
// paused();

let textMe = function(){
	console.log('Functiion puased');
}

let decorateTextMe = function(decorate, time){
	return function() { setTimeout(decorate,time*1000); }
}

let decoratedFunc = decorateTextMe(textMe, 4);

decoratedFunc();


// 2*. Требуется реализовать декоратор с параметрами returnObject, 
// который в случае, если функция возвращает массив, подменяет 
// его объектом. Имена задаются в параметрах декоратора. Декоратор 
// универсальный, количество имен переменное.
// Пример использования №1:
// function func(){
	// return [1, 2]
// }
// let func_decoreted = return_object(func, 'one', 'two');
// let r = func_decoreted();
// console.log(r.one); // 1
// console.log(r.two); //2
// Пример использования №2:
// function func(){
	// return ['JS', 'is', 'programming language']
// }
// let r = return_object (func, 'a', 'b', 'c')();
// console.log(r.c) // 'programming language'

let func = function(){
	return 'Hello';
}

let return_object = function(decorate, ...args){
	let arr = decorate();
	let container = Array.isArray(arr);
	if(container) {
		return function(){
			let obj = {};
			for(let i = 0; i < args.length; i++) {
				let name = args[i];
				obj[name] = arr[i];
			}
			return obj;
		};
	} else {
		return decorate;
	}
}

let decorated = return_object(func,'one','two');

console.log(decorated());
