const makeCounter = () => {
	let count = 0;

	const increment = () => {
		count++;
		return count;
	};

	const decrement = () => {
		count--;
		return count;
	};

	return [increment, decrement];
};

// 以下は変更しない
const [increment, decrement] = makeCounter();
console.log(increment()); // 1
console.log(increment()); // 2
console.log(decrement()); // 1
console.log(decrement()); // 0
console.log(increment()); // 1
