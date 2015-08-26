module.exports = function (grunt) {

	grunt.initConfig({
		browserify: {
			build: {
				src: 'build.js',
				dest: 'BullsAndCows.js'
			}
		}
	})

	grunt.loadNpmTasks('grunt-browserify')

	grunt.registerTask('default', ['browserify'])
}