"use client";
import { randomNumFromInterval } from "@/util/random-number";
import { useEffect, useState } from "react";

const Addition = () => {
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);
  const [answer, setAnswer] = useState(0);
  const [error, setError] = useState(false);

  const checkAnswer = () => {
    if (answer === firstNum + secondNum) {
      window.location.reload();
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    setFirstNum(randomNumFromInterval(0, 99));
    setSecondNum(randomNumFromInterval(0, 99));
  }, []);

  return (
    <div className="text-lg font-bold px-8 py-4">
      <div className="flex justify-end">{firstNum}</div>
      <div className="flex justify-between border-b-4">
        <div>+</div>
        <div>{secondNum}</div>
      </div>
      <div className="">
        <input className="text-slate-800 mt-2 w-20 text-right" type="number" value={answer} onChange={e => setAnswer(+e.target.value)} />
      </div>
      <div>
        <button className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-2 rounded text-sm mt-4 mb-2" onClick={checkAnswer}>Submit</button>
      </div>
      {error && <div className="text-red-500">Incorrect!</div>}
    </div>
  );
};

export default Addition;
