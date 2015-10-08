#yums
is a yummy file muncher that helps you do your job

	npm i -g yums

#program stuff

*we thought a useful and known pattern for file watching on npm scripts with npm-parallel*

like so:

	"scripts" : {
		'watch': 'parallel yums'		
	}


make `yummyfile.js` in directory where you are running `yums` from

	module.exports = function (yums) {
		yums.watch('**/*.js',		// path, file, glob to watch				
			( path ) => {
				// do stuff with .js files
			}
		);
	}

when you call yums, it looks for yummyfile.js in current directory and starts watching with definitions

#notables

	yums.watch

takes a third option -> options that `extends` default [chokidar](https://github.com/paulmillr/chokidar) options

returns a watcher so you can override anything you want

	yums.watch(/*stuff*/)
		.on('add', fn)
		.on('change', fn)
		.on('unlink', fn)
		.on('unlinkDir', fn)
		.on('error', fn)
		.on('ready', fn)
		.on('raw', fn)

**more**

	yums.options({})

extends default options

#help
view [chokidar](https://github.com/paulmillr/chokidar) for help with watchers
view source, it's really simple