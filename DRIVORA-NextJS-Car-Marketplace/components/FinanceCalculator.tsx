"use client";

import { useMemo, useState } from "react";

export default function FinanceCalculator() {
  const [price, setPrice] = useState(40000);
  const [down, setDown] = useState(8000);
  const [months, setMonths] = useState(48);
  const [rate, setRate] = useState(7.5);

  const result = useMemo(() => {
    const principal = Math.max(price - down, 0);
    const monthlyRate = rate / 100 / 12;
    const payment = monthlyRate === 0
      ? principal / months
      : principal * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
    return { principal, payment, total: payment * months };
  }, [price, down, months, rate]);

  return (
    <div className="finance-tool">
      <div className="finance-inputs">
        <label>Vehicle price
          <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
        </label>
        <label>Down payment
          <input type="number" value={down} onChange={(e) => setDown(Number(e.target.value))} />
        </label>
        <label>Loan term
          <select value={months} onChange={(e) => setMonths(Number(e.target.value))}>
            <option value={24}>24 months</option>
            <option value={36}>36 months</option>
            <option value={48}>48 months</option>
            <option value={60}>60 months</option>
            <option value={72}>72 months</option>
          </select>
        </label>
        <label>Annual rate %
          <input type="number" step="0.1" value={rate} onChange={(e) => setRate(Number(e.target.value))} />
        </label>
      </div>
      <div className="payment-result">
        <p>Estimated monthly payment</p>
        <div>${Math.round(result.payment).toLocaleString()}<small>/month</small></div>
        <span>Financed: ${Math.round(result.principal).toLocaleString()} · Total: ${Math.round(result.total).toLocaleString()}</span>
      </div>
    </div>
  );
}
