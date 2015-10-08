#!/usr/bin/env node
"use strict";

// module initializations
const fs 		= require('fs');
const chokidar  = require('chokidar');
const extend 	= require('extend');

try { 
	fs.statSync(process.cwd() + '/yummyfile.js').isFile()
} 
catch (e) {
	console.error('################ yums ##################');
	console.error('yummyfile.js does not exist..');
	console.error('docs: https://github.com/nf071590/yums');
	console.error('');

	process.exit(1);
}


let defaults 	= {
	persistent: 			true,
	ignored: 				/node_modules/,
	ignoreInitial: 			false,
	followSymlinks: 		true,
	cwd: 					'.',

	usePolling: 			true,
	interval: 				100,
	binaryInterval: 		300,
	alwaysStat: 			false,
	depth: 					99,
	
	awaitWriteFinish:{
		stabilityThreshold: 2000,
		pollInterval: 		100
	},

	ignorePermissionErrors: false,
	atomic: 				true
};

let yums = ({
	options: (opts) => defaults = extend(true, defaults, opts) ,

	watch: (path, cb, options) => {
		// invocation args check logic
		if ( typeof path === "string" && cb instanceof Function) {} 	// good, do nothing
		
		else if(typeof path !== "string" && path instanceof Function) {
			console.warn('missing path, defaulting to "."');
			cb = path;
			path = '.';
		} 

		else {
			console.error('there\'s an error with your yum.watch invocation');
			return null;
		}

		let opts = extend(true, defaults, options || {});
		
		return chokidar.watch(path, opts)
					.on('change', cb)
					.on('add', cb)
					.on('addDir', cb)
					.on('error', 
						(err) => console.error("Error:", error)
					);
	}
});

// run yums

require(process.cwd() + '/yummyfile.js')(yums);