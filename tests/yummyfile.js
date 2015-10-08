module.exports = function (yums) {
	yums.options({

	});

	yums.watch(
		'**/*.js',		// path, file, glob to watch				
		( path ) => 
			console.log(path)
	);
}