var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// 获取4个随机不重复数字构成的数组
exports.getFourRandomNums = function () {
	return nums.sort(function () {
		return Math.random() - Math.random()
	}).slice(0, 4)
}

exports.getFourNumsFromString = function (str) {
	return str.split("").slice(0, 4).map(function (num) {
		return parseInt(num, 10)
	})
}