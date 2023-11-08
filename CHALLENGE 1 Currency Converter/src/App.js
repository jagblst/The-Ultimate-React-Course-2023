import { useEffect, useState } from "react";

// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

export default function App() {
  const [amount, setAmount] = useState(100);
  const [curFrom, setCurFrom] = useState("EUR");
  const [curTo, setCurTo] = useState("USD");
  const [converted, setConverted] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function convert() {
        setIsLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${curFrom}&to=${curTo}`
        );
        const data = await res.json();
        setConverted(data.rates[curTo]);
        setIsLoading(false);
      }
      if (curFrom === curTo) return setConverted(amount);
      convert();
    },
    [amount, curFrom, curTo]
  );

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(+e.target.value)}
        disabled={isLoading}
      />
      <select
        value={curFrom}
        onChange={(e) => setCurFrom(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={curTo}
        onChange={(e) => setCurTo(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {converted} {curTo}
      </p>
    </div>
  );
}
