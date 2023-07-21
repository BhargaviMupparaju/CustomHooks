// customs hooks helps to reuse the code. suppose here we are using the counter to increment and decrement.
// to increase the reusablity we use the shared code in the hooks for forward and backward counter.
import { useState, useEffect } from "react";
const useCounter = () => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter((prevCounter) => prevCounter + 1);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return counter;
};

export default useCounter;
