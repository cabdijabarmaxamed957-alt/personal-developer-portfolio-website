"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  Utensils,
  Calendar,
  Clock,
  Users,
  ShoppingBag,
  Star,
  Plus,
  Minus,
  Trash2,
  X,
  Check,
  Sparkles,
  Flame,
  Award,
} from "lucide-react";

interface Dish {
  id: string;
  name: string;
  category: "Specials" | "Mains" | "Appetizers" | "Desserts" | "Wine";
  price: number;
  rating: number;
  dietary: "Vegetarian" | "Gluten-Free" | "Chef Special" | "Standard";
  image: string;
  description: string;
}

const mockDishes: Dish[] = [
  {
    id: "dish-1",
    name: "Herb Crusted Rack of Lamb",
    category: "Specials",
    price: 44,
    rating: 4.9,
    dietary: "Chef Special",
    image: "/images/projects/restaurant-platform.jpg",
    description: "New Zealand pasture-fed lamb with pistachio herb crust, pomme purée, and black truffle demi-glace.",
  },
  {
    id: "dish-2",
    name: "Pan-Seared Hokkaido Scallops",
    category: "Appetizers",
    price: 36,
    rating: 4.8,
    dietary: "Gluten-Free",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1200&q=80",
    description: "Jumbo sea scallops served over cauliflower velvet purée with crispy pancetta crisp and caviar pearls.",
  },
  {
    id: "dish-3",
    name: "Wild Forest Mushroom Risotto",
    category: "Mains",
    price: 28,
    rating: 4.7,
    dietary: "Vegetarian",
    image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=1200&q=80",
    description: "Acquerello aged carnaroli rice, chanterelles, porcini broth, 24-month aged Parmigiano-Reggiano, and white truffle essence.",
  },
  {
    id: "dish-4",
    name: "Prime Dry-Aged Wagyu Striploin",
    category: "Mains",
    price: 68,
    rating: 5.0,
    dietary: "Chef Special",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    description: "A5 Miyazaki Wagyu beef, charred baby leeks, bone marrow emulsion, and smoked sea salt.",
  },
  {
    id: "dish-5",
    name: "Dark Chocolate Fondant Sphere",
    category: "Desserts",
    price: 22,
    rating: 4.9,
    dietary: "Vegetarian",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=80",
    description: "Valrhona 72% dark chocolate sphere, molten Madagascar bourbon vanilla core, and raspberry gold dust.",
  },
  {
    id: "dish-6",
    name: "Cabernet Sauvignon Private Reserve",
    category: "Wine",
    price: 85,
    rating: 4.8,
    dietary: "Standard",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
    description: "Vintage 2019 Napa Valley single-vineyard oak barrel selection with notes of dark blackberry and spiced cedar.",
  },
];

interface OrderItem extends Dish {
  quantity: number;
}

export default function RestaurantApp() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [orderDrawerOpen, setOrderDrawerOpen] = useState<boolean>(false);
  const [orderItems, setOrderItems] = useState<OrderItem[]>([
    { ...mockDishes[0], quantity: 1 },
    { ...mockDishes[2], quantity: 1 },
  ]);
  const [reservationModalOpen, setReservationModalOpen] = useState<boolean>(false);
  const [guestCount, setGuestCount] = useState<number>(2);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("19:30");
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);
  const [orderPlaced, setOrderPlaced] = useState<boolean>(false);
  const [selectedArea, setSelectedArea] = useState<string>("Terrace Garden");

  // Filter dishes
  const filteredDishes = useMemo(() => {
    return mockDishes.filter((dish) => {
      return selectedCategory === "All" || dish.category === selectedCategory;
    });
  }, [selectedCategory]);

  const addToOrder = (dish: Dish) => {
    setOrderItems((prev) => {
      const existing = prev.find((item) => item.id === dish.id);
      if (existing) {
        return prev.map((item) =>
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...dish, quantity: 1 }];
    });
    setOrderDrawerOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setOrderItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as OrderItem[]
    );
  };

  const removeItem = (id: string) => {
    setOrderItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.08;
  const total = subtotal + tax;
  const totalItemCount = orderItems.reduce((sum, item) => sum + item.quantity, 0);

  const categories = ["All", "Specials", "Mains", "Appetizers", "Desserts", "Wine"];
  const timeSlots = ["18:00", "19:00", "19:30", "20:00", "20:30", "21:30"];

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 font-sans selection:bg-[#f97316] selection:text-white pb-24">
      {/* ── App Navigation Header ── */}
      <header className="sticky top-12 z-40 bg-[#0C0F18]/95 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#f97316] to-[#00F0FF] flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(249,115,22,0.5)]">
                <Utensils className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-wider text-white">
                  DINEORA<span className="text-[#00F0FF]">.</span>
                </span>
                <span className="hidden sm:inline-block ml-2 text-[10px] font-mono text-orange-400 bg-orange-950/60 px-2 py-0.5 rounded border border-orange-500/30">
                  GASTRONOMY PLATFORM
                </span>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedCategory(c)}
                  className={`transition-colors cursor-pointer ${
                    selectedCategory === c
                      ? "text-[#00F0FF] font-bold border-b-2 border-[#00F0FF] pb-0.5"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {c}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            {/* Reserve Table CTA */}
            <button
              onClick={() => {
                setReservationModalOpen(true);
                setBookingConfirmed(false);
              }}
              className="px-4 py-2 rounded-xl bg-[#0E1528] border border-orange-500/40 hover:border-orange-400 text-orange-300 text-xs font-mono font-semibold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5 text-orange-400" />
              <span>Book Table</span>
            </button>

            {/* Live Order Drawer Button */}
            <button
              onClick={() => setOrderDrawerOpen(true)}
              className="relative flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#f97316] to-[#ea580c] hover:brightness-110 text-white font-medium text-xs shadow-[0_0_15px_rgba(249,115,22,0.4)] transition-all cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Order</span>
              <span className="bg-white text-orange-600 text-[11px] font-bold px-1.5 py-0.2 rounded-full">
                {totalItemCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ── Hero Banner ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#14121A] to-[#07090E] border-b border-white/5 py-12 sm:py-16 px-4 sm:px-8">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#f97316]/10 blur-[140px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/60 border border-orange-500/40 text-[#00F0FF] text-xs font-mono w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>MICHELIN-INSPIRED CULINARY DINING & COCKTAILS</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.05]">
              Gastronomic Art. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] via-[#fb923c] to-[#00F0FF]">
                Gather Around Excellence.
              </span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
              Experience the full interactive demo of DINEORA. Explore curated gourmet dishes,
              customize your course menu, and book verified seating reservations in real-time.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => setSelectedCategory("Specials")}
                className="px-5 py-2.5 rounded-xl bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold text-xs transition-all shadow-lg shadow-orange-900/40 cursor-pointer"
              >
                Chef&apos;s Tasting Specials
              </button>
              <button
                onClick={() => {
                  setReservationModalOpen(true);
                  setBookingConfirmed(false);
                }}
                className="px-5 py-2.5 rounded-xl bg-[#0E1528] border border-white/10 hover:border-[#00F0FF] text-slate-300 text-xs font-mono transition-all cursor-pointer"
              >
                Reserve Table Seating
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] group">
              <Image
                src="/images/projects/restaurant-platform.jpg"
                alt="DINEORA Gourmet Experience"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090E] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0C0F18]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-orange-400">CHEF SIGNATURE</span>
                  <h4 className="text-sm font-bold text-white">Herb Crusted Rack of Lamb</h4>
                </div>
                <span className="text-sm font-mono text-emerald-400 font-bold">$44.00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Culinary Menu ── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400">
              Showing <strong className="text-white">{filteredDishes.length}</strong> culinary dishes
            </span>
            <span className="text-xs font-mono text-orange-400">
              Menu Category: {selectedCategory}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDishes.map((dish) => (
              <div
                key={dish.id}
                className="group relative rounded-2xl bg-[#0C0F18] border border-white/10 hover:border-orange-500/60 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-lg hover:shadow-[0_10px_25px_rgba(249,115,22,0.2)]"
              >
                {/* Dish Photo */}
                <div className="relative aspect-[16/10] bg-[#141824] overflow-hidden">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0F18] via-transparent to-transparent opacity-60" />

                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-mono font-bold text-white bg-[#07090E]/80 backdrop-blur-md border border-white/10">
                    {dish.dietary}
                  </span>

                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#07090E]/80 backdrop-blur-md text-[11px] font-mono text-amber-400">
                    <Star className="w-3 h-3 fill-current" />
                    <span>{dish.rating}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-orange-400">{dish.category}</span>
                    <span className="text-lg font-extrabold text-white font-mono">${dish.price}</span>
                  </div>

                  <h4 className="font-bold text-base text-white group-hover:text-[#00F0FF] transition-colors">
                    {dish.name}
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                    {dish.description}
                  </p>

                  <button
                    onClick={() => addToOrder(dish)}
                    className="mt-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-[#f97316] to-[#ea580c] hover:brightness-110 text-white text-xs font-bold font-mono transition-all flex items-center justify-center gap-1.5 shadow-md shadow-orange-950/50 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add To Order</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* ── Slide-Out Order Drawer ── */}
      {orderDrawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setOrderDrawerOpen(false)}
          />

          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-[#0C0F18] border-l border-white/10 shadow-2xl flex flex-col justify-between">
              <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#07090E]">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-orange-400" />
                  <h3 className="font-bold text-white text-base">Your Dining Order</h3>
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-orange-950 text-orange-300 border border-orange-500/30">
                    {totalItemCount} courses
                  </span>
                </div>
                <button
                  onClick={() => setOrderDrawerOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4">
                {orderItems.length === 0 ? (
                  <div className="py-20 text-center flex flex-col items-center gap-3">
                    <Utensils className="w-12 h-12 text-slate-600 animate-pulse" />
                    <p className="text-slate-400 text-sm">No dishes added yet.</p>
                  </div>
                ) : (
                  orderItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3.5 p-3 rounded-xl bg-[#141824] border border-white/5"
                    >
                      <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-black shrink-0">
                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                      </div>

                      <div className="flex-1 min-w-0 flex flex-col gap-1">
                        <h5 className="text-xs font-bold text-white truncate">{item.name}</h5>
                        <span className="text-xs font-mono text-emerald-400 font-bold">
                          ${item.price}
                        </span>

                        <div className="flex items-center gap-2 mt-1">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-white hover:bg-white/20 cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-mono text-white font-bold px-1">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-white hover:bg-white/20 cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-slate-500 hover:text-rose-400 cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* Totals & Order Button */}
              {orderItems.length > 0 && (
                <div className="p-5 border-t border-white/10 bg-[#07090E] flex flex-col gap-3">
                  <div className="flex justify-between text-xs text-slate-400 font-mono">
                    <span>Course Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-400 font-mono">
                    <span>Taxes & Service (8%):</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-white font-mono pt-2 border-t border-white/5">
                    <span>Order Total:</span>
                    <span className="text-emerald-400 text-base font-extrabold font-mono">
                      ${total.toFixed(2)}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      alert("Order placed successfully! Kitchen display system (KDS) simulated dispatch.");
                      setOrderItems([]);
                      setOrderDrawerOpen(false);
                    }}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#f97316] to-[#00F0FF] text-black font-extrabold text-xs font-mono uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer shadow-lg shadow-orange-950/50"
                  >
                    Send Order To Kitchen (${total.toFixed(2)})
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── Table Reservation Modal ── */}
      {reservationModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative max-w-lg w-full rounded-2xl bg-[#0C0F18] border border-orange-500/50 p-6 sm:p-8 shadow-2xl flex flex-col gap-6">
            <button
              onClick={() => setReservationModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!bookingConfirmed ? (
              <>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-950 border border-orange-500/50 flex items-center justify-center text-orange-400">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Table Reservation</h3>
                    <span className="text-xs font-mono text-slate-400">
                      Real-time seating availability simulation
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-xs font-mono">
                  {/* Guest Count */}
                  <div>
                    <label className="text-slate-300 block mb-1.5 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-orange-400" />
                      <span>Number of Guests:</span>
                      <strong className="text-white font-bold">{guestCount} People</strong>
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 4, 6, 8].map((num) => (
                        <button
                          key={num}
                          onClick={() => setGuestCount(num)}
                          className={`flex-1 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                            guestCount === num
                              ? "bg-orange-500 text-black font-bold border-orange-400"
                              : "bg-[#141824] text-slate-300 border-white/10"
                          }`}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Seating Time */}
                  <div>
                    <label className="text-slate-300 block mb-1.5 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#00F0FF]" />
                      <span>Available Time Slots:</span>
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          onClick={() => setSelectedTimeSlot(slot)}
                          className={`py-1.5 rounded-lg border text-center transition-colors cursor-pointer ${
                            selectedTimeSlot === slot
                              ? "bg-[#00F0FF] text-black font-bold border-[#00F0FF]"
                              : "bg-[#141824] text-slate-300 border-white/10"
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Seating Area */}
                  <div>
                    <label className="text-slate-300 block mb-1.5">Seating Ambience Preference</label>
                    <select
                      value={selectedArea}
                      onChange={(e) => setSelectedArea(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-[#141824] border border-white/10 text-white focus:outline-none"
                    >
                      <option value="Terrace Garden">Terrace Garden (Open Sky)</option>
                      <option value="Main Dining Hall">Main Dining Hall (Live Jazz)</option>
                      <option value="Private VIP Booth">Private VIP Booth</option>
                    </select>
                  </div>

                  <button
                    onClick={() => setBookingConfirmed(true)}
                    className="mt-2 w-full py-3 rounded-xl bg-gradient-to-r from-[#f97316] to-[#00F0FF] text-black font-extrabold text-xs font-mono uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer shadow-lg shadow-orange-950/50"
                  >
                    Confirm Table Reservation
                  </button>
                </div>
              </>
            ) : (
              <div className="py-6 text-center flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mb-2">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Table Confirmed!</h3>
                <p className="text-xs text-slate-300 max-w-sm font-mono leading-relaxed">
                  Booking ref: #DIN-{Math.floor(1000 + Math.random() * 9000)} for {guestCount} guests at{" "}
                  {selectedTimeSlot} ({selectedArea}).
                </p>
                <button
                  onClick={() => setReservationModalOpen(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-[#f97316] text-white text-xs font-bold font-mono cursor-pointer"
                >
                  Close & View Menu
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
