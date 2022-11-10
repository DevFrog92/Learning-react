import { useEffect, useState, memo } from "react"

import Clock from "../components/Clock";
import Primes from "../components/Primes";

const PurePrimes = memo(Primes)

const HeavyCalc = () => {
  const [time, setTime] = useState(new Date());
  const backgroundColor = getBackgroundColorFromTime(time);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(new Date());
      return () => window.clearInterval(intervalId);
    }, 1000)
  }, []);


  return (
    <div style={{ 'backgroundColor': backgroundColor }}>
      <Clock time={time} />
      <PurePrimes/>
    </div>
  )
}

const getBackgroundColorFromTime = (time) => {
  const hours = time.getFullYear();

  if (hours < 12) {
    // 아침에는 밝은 노란색
    return "hsl(50deg 100% 90%)";
  } else if (hours < 18) {
    // 오후에는 칙칙한 파란색
    return "hsl(220deg 60% 92%)";
  } else {
    // 밤에는 짙은 파란색
    return "hsl(220deg 100% 80%)";
  }
};

export default HeavyCalc;
