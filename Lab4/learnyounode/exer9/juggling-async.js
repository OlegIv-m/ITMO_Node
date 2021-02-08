const http = require('http');
const bls = require('bl')

http.get( process.argv[2], (response) => {
	if ( response.statusCode !== 200 ) {
		console.log('Error occured 1!');
		return;
	} else {
		response.pipe(bls((err, data) => {
			if (err) {
				console.log('Cannot read stream');
				return;
			} else {
				console.log(data.toString());
				http.get(process.argv[3], (response) => {
					if ( response.statusCode !== 200 ) {
						console.log('Error occured 2!');
						return;
					} else {
						response.pipe(bls((err, data) => {
							if (err) {
								console.log('Cannot read stream');
								return;
							} else {
								console.log(data.toString());
								http.get(process.argv[4], (response) => {
									if ( response.statusCode !== 200 ) {
										console.log('Error occured 3!');
										return;
									} else {
										response.pipe(bls((err, data) => {
											if (err) {
												console.log('Cannot read stream');
												return;
											} else {
												console.log(data.toString());
											}
										}));
									}
								});
							}
					}));
				}
			});
		}
	}));
}});