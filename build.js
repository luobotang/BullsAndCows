var browserify = require('browserify')
var fs = require('fs')

var input = './lib/expose.js'
var output = 'BullsAndCows.js'

browserify()
	.add(input)
	.bundle()
	.pipe(fs.createWriteStream(output))
