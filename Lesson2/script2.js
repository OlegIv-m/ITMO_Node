// 2*. Работа с файлами. Файл "data.txt" заполнен случайными целыми числами, 
// числа разделены одним пробелом.
// Сформировать файл "out-1.txt" из элементов файла "data.txt", делящихся 
// без остатка на 2. Сформировать файл "out-2.txt" из элементов файла "data.txt", 
// возведенных в степень 3. Тестовый набор данных для тестирования можно 
// скачать отсюда: https://yadi.sk/d/s7Gz7ypi3XCBXP 
// Для записи текстовых файлов воспользуйтесь функцией 
// writeFile описанной в документации: 
// https://nodejs.org/dist/latest-v8.x/docs/api/fs.html#fs_fs_writefile_file_data_options_callback
// или в русской версии: 
// https://js-node.ru/site/article?id=23#fs_fs_writefile_file_data_options_callback

let fs = require('fs');
let pathname1 = 'data.txt'
let str;

let funcDev2;
let funcPow;

fs.readFile(pathname1,'utf-8', (err,data) => {
	if (err) {
		console.log('Error occured reading file!');
		return 1;
	} else {
		let arrData = data.split(' ');
		//arrData = arrData.filter( (num) => num!=0 );
		str1 = funcDev2(arrData);
		str1 = str1.join(' ');
		fs.writeFile('data_1.txt', str1, 'utf8', (err) => {
			if (err)
				console.log('Cannot write to file');
		});
		str2 = funcPow(arrData);
		str2 = str2.join(' ');
		console.log('str2: ' + str2);
		fs.writeFile('data_2.txt', str2, 'utf8', (err) => {
			if (err)
				console.log('Cannot write to file');
		});
	}
});



funcDev2 = function(data){
	return data.filter( num => !(num%2));
}

funcPow = function(data){
	return data.map( num => Math.pow(num,3));
}