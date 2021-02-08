const fs = require('fs')
const path = require('path')

module.exports = 
function listFiles(dirname, ext, callback){
	// console.log(`dirname= ${dirname}`);
	// console.log(`ext= ${ext}`);
	function wrapper(err, data){
		if ( err ) {
			callback( err, data );
		} else {
			let result=[];
			data.forEach( (curr) => {
				if ( path.extname(curr) === `.${ext}` ) 
					result.push(path.parse(curr).base);
			} );
			callback( null, result );
		}
	}
	fs.readdir(dirname, 'utf8', wrapper);
}