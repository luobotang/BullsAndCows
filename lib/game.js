// <猜数字游戏>
// 标准玩法
//     给出4个不重复的数字（[0-9]），猜的人猜4个数字，出数字
//     一方给出mAnB这样的答案。其中数字正确、位置正确的记为A，数字
//     正确位置不对的给出B。

var Utils = require('./utils')

var currentRoundNums = []

function newRound() {
	currentRoundNums = Utils.getFourRandomNums();
}

function getAnswer() {
	return currentRoundNums.join("");
}



// 参数类型：
// 1. string e.g guess("1234")
// 2. int, int, int, int e.g guess(1, 2, 3, 4)
// return "mAnB" m,n in [0,4]
function guess(num1, num2, num3, num4) {
	var args = arguments,
		argv = args.length,
		guessedNums;

	if (argv === 1 && typeof args[0] === 'string') {
		guessedNums = Utils.getFourNumsFromString(args[0]);
	} else if (argv === 4) {
		guessedNums = [].slice.call(args, 0, 4);
	} else {
		throw new TypeError("无法识别的参数类型");
	}

	if (currentRoundNums.length !== 4) {
		newRound();
	}

	var a = 0
	var b = 0
	// 记录位置和数字的正确数
	guessedNums.forEach(function (num, i) {
		if (currentRoundNums[i] === num) {
			a++;
		} else  if (currentRoundNums.indexOf(num) > -1) {
			b++;
		}
	})

	return {
		success: a === 4,
		msg: a + "A" + b + "B"
	}
}

module.exports = {
	newRound: newRound,
	getAnswer: getAnswer,
	guess: guess
}
