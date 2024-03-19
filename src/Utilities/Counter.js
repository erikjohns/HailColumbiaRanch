import { useEffect, useState } from "react"

const Counter = ({ inputNum }) => {
    const [displayedValue, setDisplayedValue] = useState(0);

    useEffect(() => {
        const updateNum = () => {
            const numInterval = setInterval(() => {
                if (displayedValue < inputNum) {
                    setDisplayedValue(prevValue => prevValue + 0.1);
                } else {
                    clearInterval(numInterval);
                }
            }, 1);

            return () => clearInterval(numInterval);
        };

        updateNum();
    }, [inputNum, displayedValue]);

    return <span>{displayedValue}</span>
}

export default Counter;