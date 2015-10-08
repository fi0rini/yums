module.exports = function (yums) {
	yums.watch('**/*.js',		// path, file, glob to watch				
		( path ) => {
			// do stuff with file
			console.log(path);
		}
	);

	yums.watch({

	})
}