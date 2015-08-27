var browserify = require('browserify')
var fs = require('fs')

var input = './lib/expose.js'
var output = 'BullsAndCows.js'

var fail

browserify()
	.on('error', function (err) { faile = true; console.log(err) })
	.on('bundle', function () { if (!fail) console.log('done! ' + output) })
	.add(input)
	.bundle()
	.pipe(fs.createWriteStream(output))
