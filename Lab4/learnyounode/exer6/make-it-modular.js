const mymodule = require('./mymodule.js');

function onReading(err, data){
	if ( err ) {
		console.log('Error occured!');
		console.log(err);
		return;
	} else {
		data.forEach( (curr) => console.log(curr));
		return;
	}
}

mymodule(process.argv[2], process.argv[3],onReading);





