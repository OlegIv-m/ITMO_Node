const fs = require('fs');
const paths = require('path');
const path = process.argv[2];
const ext = process.argv[3];

fs.readdir(path, 'utf8', (err, data) => {
	if (err)
		console.log('Error reading directorry');
	else 
		data.forEach( (curr) => {
			if ( paths.extname(curr) === `.${ext}` ) 
				console.log(curr);
		});
});