// customs hooks helps to reuse the code. suppose here we are using the counter to increment and decrement.
// to increase the reusablity we use the shared code in the hooks for forward and backward counter.
import { useState, useEffect } from "react";

const useCounter = (forwards = true) => {
	//Here default parameter we are using forward true . if parameter is false it will go to backward
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			if (forwards) {
				setCounter((prevCounter) => prevCounter + 1);
			} else {
				setCounter((prevCounter) => prevCounter - 1);
			}
		}, 1000);

		return () => clearInterval(interval);
	}, [forwards]);          // since the useeffect runs based on the parameter we used the dependency

	return counter;
};

export default useCounter;
