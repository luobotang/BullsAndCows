// <猜数字游戏>
// 标准玩法
//     给出4个不重复的数字（[0-9]），猜的人猜4个数字，出数字
//     一方给出mAnB这样的答案。其中数字正确、位置正确的记为A，数字
//     正确位置不对的给出B。
var Game = (function () {

	var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		currentRoundNums = [];

	// 获取4个随机不重复数字构成的数组
	function getFourRandomNums() {
		return nums.sort(function () {
			return Math.random() - Math.random();
		}).slice(0, 4);
	}

	function newRound() {
		currentRoundNums = getFourRandomNums();
	}

	function getAnswer() {
		return currentRoundNums.join("");
	}

	function getFourNumsFromString(str) {
		return str.split("").slice(0, 4).map(function (num) {
			return parseInt(num);
		});
	}

	// 参数类型：
	// 1. string e.g guess("1234")
	// 2. int, int, int, int e.g guess(1, 2, 3, 4)
	// return "mAnB" m,n in [0,4]
	function guess(num1, num2, num3, num4) {
		var a = 0,
			b = 0,
			args = arguments,
			argv = args.length,
			guessedNums;

		if (argv === 1 && typeof args[0] === 'string') {
			guessedNums = getFourNumsFromString(args[0]);
		} else if (argv === 4) {
			guessedNums = [].slice.call(args, 0, 4);
		} else {
			throw new TypeError("无法识别的参数类型");
		}

		if (currentRoundNums.length !== 4) {
			newRound();
		}

		// 记录位置和数字的正确数
		guessedNums.map(function (num, i) {
			if (currentRoundNums[i] === num) {
				a++;
			} else {
				if (currentRoundNums.some(function (n) {
					return n === num;
				})) {
					b++;
				}
			}
		});

		return Math.round(a) + "A" + Math.round(b) + "B";
	}

	return {
		newRound: newRound,
		getAnswer: getAnswer,
		guess: guess
	};

})();

if (exports) {
	exports.newRound = Game.newRound;
	exports.getAnswer = Game.getAnswer;
	exports.guess = Game.guess;
}
