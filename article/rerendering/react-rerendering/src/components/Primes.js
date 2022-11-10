import React, { useState } from 'react'

function Primes() {
  const [selectedNum, setSelectedNum] = useState(100);
  const allPrimes = calcAllPrimes(selectedNum);

  return (
    <>
      <form>
        <label htmlFor="num">Your Number:</label>
        <input type="number" value={selectedNum} onChange={(event) => {
          let num = Math.min(100_000, Number(event.target.value));

          setSelectedNum(num);
        }} />
      </form>
        <p>
        There are {allPrimes.length} prime(s) between 1 and {selectedNum}:{" "}
        <span className="prime-list">{allPrimes.join(", ")}</span>
      </p>
    </>
  )
}

function calcAllPrimes(num) {
  let results = [];
  for (let counter = 2; counter <= num; counter++){
    if (isPrime(counter)) {
      results.push(counter);
    }
  }

  return results;
}

function isPrime(num) {
  const max = Math.ceil(Math.sqrt(num));

  if (num === 2) {
    return true;
  }

  for (let counter = 2; counter <= max; counter++){
    if (num % counter === 0) {
      return false;
    }
  }

  return true;
}

export default Primes