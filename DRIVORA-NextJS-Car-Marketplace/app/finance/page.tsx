import FinanceCalculator from "@/components/FinanceCalculator";

export default function FinancePage() {
  return (
    <main className="page"><div className="container">
      <div className="page-heading"><span className="pill">FINANCE</span><h1>Know your payment before you buy.</h1><p>Use the calculator to estimate a monthly vehicle payment. Actual financing depends on the lender, terms and approval.</p></div>
      <FinanceCalculator />
      <div className="finance-notes"><div><strong>How it works</strong><p>Choose a vehicle price, down payment, term and estimated annual rate. DRIVORA calculates an approximate monthly installment.</p></div><div><strong>Important</strong><p>This is an estimate, not a loan offer or financial approval.</p></div></div>
    </div></main>
  );
}
