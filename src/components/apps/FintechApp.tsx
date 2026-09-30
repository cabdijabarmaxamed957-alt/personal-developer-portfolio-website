"use client";

import React, { useState } from "react";
import {
  CreditCard,
  ArrowUpRight,
  ArrowDownLeft,
  RefreshCw,
  ShieldCheck,
  TrendingUp,
  Wallet,
  DollarSign,
  Send,
  Plus,
  Lock,
  ChevronRight,
  Eye,
  EyeOff,
  CheckCircle2,
  Download,
} from "lucide-react";

interface Transaction {
  id: string;
  recipient: string;
  category: string;
  amount: number;
  date: string;
  type: "send" | "receive";
  status: "Completed" | "Pending";
}

export default function FintechApp() {
  const [balance, setBalance] = useState(148250.0);
  const [hideBalance, setHideBalance] = useState(false);
  const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);
  const [transferAmount, setTransferAmount] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [cardFrozen, setCardFrozen] = useState(false);

  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: "TX-9021",
      recipient: "Stripe Global Payouts",
      category: "SaaS Invoicing",
      amount: 14850.0,
      date: "Today, 11:42 AM",
      type: "receive",
      status: "Completed",
    },
    {
      id: "TX-9020",
      recipient: "AWS Cloud Infrastructure",
      category: "Server Hosting",
      amount: -1240.5,
      date: "Yesterday",
      type: "send",
      status: "Completed",
    },
    {
      id: "TX-9019",
      recipient: "GitHub Enterprise Sub",
      category: "Software Licenses",
      amount: -210.0,
      date: "Sep 28",
      type: "send",
      status: "Completed",
    },
    {
      id: "TX-9018",
      recipient: "Client Wire: Apex Logistics",
      category: "Contract Retainer",
      amount: 28500.0,
      date: "Sep 26",
      type: "receive",
      status: "Completed",
    },
  ]);

  const handleTransfer = (e: React.FormEvent) => {
    e.preventDefault();
    const amt = parseFloat(transferAmount);
    if (!amt || isNaN(amt) || amt <= 0 || !recipientName.trim()) return;

    setBalance((prev) => prev - amt);
    const newTx: Transaction = {
      id: `TX-${Math.floor(1000 + Math.random() * 9000)}`,
      recipient: recipientName.trim(),
      category: "Instant Wire Transfer",
      amount: -amt,
      date: "Just Now",
      type: "send",
      status: "Completed",
    };
    setTransactions([newTx, ...transactions]);
    setTransferAmount("");
    setRecipientName("");
    setIsTransferModalOpen(false);
  };

  return (
    <div className="w-full min-h-screen bg-[#050811] text-slate-100 flex flex-col font-sans">
      {/* Top Header */}
      <header className="border-b border-slate-800 bg-[#070C18]/90 backdrop-blur sticky top-12 z-20 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-[1px] flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)]">
            <div className="w-full h-full bg-[#070C18] rounded-xl flex items-center justify-center text-cyan-400">
              <Wallet className="w-5 h-5" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold tracking-tight text-white">SecureBank Digital Vault</h1>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-cyan-400" /> Biometric MFA Active
              </span>
            </div>
            <p className="text-xs text-slate-400">Multi-Currency Global Treasury & Automated Liquidity Gateway</p>
          </div>
        </div>

        {/* Quick Send Action */}
        <button
          onClick={() => setIsTransferModalOpen(true)}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-xs font-bold tracking-wide shadow-lg shadow-cyan-500/20 transition-all hover:scale-105 active:scale-95"
        >
          <Send className="w-4 h-4" />
          <span>SEND PAYMENT</span>
        </button>
      </header>

      {/* Main Viewport */}
      <main className="flex-1 p-6 max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Account Balances & Virtual Card (4 Cols) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Main Liquidity Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-[#0B1325] to-[#070D1A] border border-cyan-500/30 shadow-2xl relative overflow-hidden flex flex-col gap-5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] pointer-events-none rounded-full" />

            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider">Total Available Treasury</span>
              <button
                onClick={() => setHideBalance(!hideBalance)}
                className="hover:text-white transition-colors"
              >
                {hideBalance ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
                {hideBalance ? "••••••••••" : `$${balance.toLocaleString("en-US", { minimumFractionDigits: 2 })}`}
              </span>
              <span className="text-xs text-emerald-400 font-mono flex items-center gap-0.5">
                <TrendingUp className="w-3.5 h-3.5" /> +8.4%
              </span>
            </div>

            {/* Currency Sub-Balances */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5 font-mono text-xs">
              <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-[10px] text-slate-500 block">USD Account</span>
                <span className="text-white font-bold">$112,400.00</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-[10px] text-slate-500 block">EUR Account</span>
                <span className="text-white font-bold">€34,120.00</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                onClick={() => setIsTransferModalOpen(true)}
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-semibold hover:bg-cyan-500/30 transition-colors"
              >
                <ArrowUpRight className="w-4 h-4" />
                <span>Transfer</span>
              </button>
              <button
                onClick={() => alert("Crypto Swap Engine Ready: 1.00 BTC = $64,280 USD")}
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-800 text-slate-300 border border-slate-700 text-xs font-semibold hover:bg-slate-700 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Exchange</span>
              </button>
            </div>
          </div>

          {/* Virtual Titanium Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-900 border border-indigo-500/30 shadow-2xl relative overflow-hidden flex flex-col justify-between h-56">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-cyan-400 tracking-widest">SECUREBANK TITANIUM</span>
              <CreditCard className="w-6 h-6 text-white/80" />
            </div>

            <div className="font-mono text-lg text-white tracking-widest my-auto">
              {cardFrozen ? "•••• •••• •••• ••••" : "4892 •••• •••• 9104"}
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-slate-300">
              <div>
                <span className="text-[9px] text-slate-500 block">CARDHOLDER</span>
                <span className="font-bold">DEV CORE CORP</span>
              </div>
              <div>
                <span className="text-[9px] text-slate-500 block">EXPIRES</span>
                <span className="font-bold">09/29</span>
              </div>
              <button
                onClick={() => setCardFrozen(!cardFrozen)}
                className={`px-3 py-1 rounded-lg text-[10px] font-bold transition-colors ${
                  cardFrozen
                    ? "bg-rose-500/20 text-rose-300 border border-rose-500/40"
                    : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                }`}
              >
                {cardFrozen ? "Frozen" : "Active"}
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Live Crypto Watch & Recent Transactions (8 Cols) */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* Live Market Assets Watch */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { pair: "BTC / USD", price: "$64,280.50", change: "+3.42%", up: true },
              { pair: "ETH / USD", price: "$3,450.20", change: "+4.18%", up: true },
              { pair: "SOL / USD", price: "$142.80", change: "-1.10%", up: false },
            ].map((crypto) => (
              <div
                key={crypto.pair}
                className="p-4 rounded-2xl bg-[#0B1325] border border-slate-800 flex items-center justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-white font-mono">{crypto.pair}</span>
                  <div className="text-sm font-extrabold text-cyan-400 font-mono mt-0.5">{crypto.price}</div>
                </div>
                <span
                  className={`text-xs font-mono font-bold px-2 py-0.5 rounded-full ${
                    crypto.up ? "text-emerald-400 bg-emerald-950/40" : "text-rose-400 bg-rose-950/40"
                  }`}
                >
                  {crypto.change}
                </span>
              </div>
            ))}
          </div>

          {/* Real-Time Transaction Ledger */}
          <div className="p-6 rounded-3xl bg-[#090F1E] border border-slate-800 flex flex-col gap-4 flex-1">
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <div>
                <h3 className="text-base font-bold text-white">Live Treasury Ledger</h3>
                <p className="text-xs text-slate-400">Cryptographically signed instant clearing transactions</p>
              </div>
              <span className="text-xs font-mono text-cyan-400 bg-cyan-950/50 px-2.5 py-1 rounded-lg border border-cyan-800/40">
                {transactions.length} Records Loaded
              </span>
            </div>

            <div className="flex flex-col gap-2.5">
              {transactions.map((tx) => (
                <div
                  key={tx.id}
                  className="p-4 rounded-2xl bg-[#060A14] border border-slate-800/90 hover:border-cyan-500/40 transition-colors flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        tx.type === "receive"
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                          : "bg-blue-500/10 text-blue-400 border border-blue-500/30"
                      }`}
                    >
                      {tx.type === "receive" ? (
                        <ArrowDownLeft className="w-5 h-5" />
                      ) : (
                        <ArrowUpRight className="w-5 h-5" />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-white">{tx.recipient}</span>
                      <div className="flex items-center gap-2 text-[10px] text-slate-500 font-mono mt-0.5">
                        <span>{tx.category}</span>
                        <span>•</span>
                        <span>{tx.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex flex-col text-right font-mono">
                      <span
                        className={`text-sm font-extrabold ${
                          tx.amount > 0 ? "text-emerald-400" : "text-slate-200"
                        }`}
                      >
                        {tx.amount > 0 ? `+$${tx.amount.toLocaleString()}` : `-$${Math.abs(tx.amount).toLocaleString()}`}
                      </span>
                      <span className="text-[10px] text-emerald-500 flex items-center gap-1 justify-end">
                        <CheckCircle2 className="w-3 h-3" /> {tx.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Transfer Modal */}
      {isTransferModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-[#091122] border border-cyan-500/30 rounded-3xl p-6 shadow-2xl flex flex-col gap-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Send className="w-5 h-5 text-cyan-400" /> Direct Wire Transfer
            </h3>
            <form onSubmit={handleTransfer} className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-xs text-slate-400">Recipient Name / IBAN</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Acme Global Logistics Corp"
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  className="px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs text-slate-400">Transfer Amount (USD)</label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 font-mono">$</span>
                  <input
                    type="number"
                    step="0.01"
                    required
                    placeholder="0.00"
                    value={transferAmount}
                    onChange={(e) => setTransferAmount(e.target.value)}
                    className="w-full pl-8 pr-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-400 font-mono"
                  />
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Network Protocol:</span>
                <span className="font-mono text-cyan-400 font-bold">FedNow / SEPA Instant ($0.00 fee)</span>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-white/5 mt-2">
                <button
                  type="button"
                  onClick={() => setIsTransferModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-black text-xs font-bold shadow-lg shadow-cyan-500/20"
                >
                  Authorize Payment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
