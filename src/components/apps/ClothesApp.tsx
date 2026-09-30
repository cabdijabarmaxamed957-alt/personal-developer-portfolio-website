"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  Search,
  SlidersHorizontal,
  ShoppingBag,
  Heart,
  Plus,
  Minus,
  Trash2,
  X,
  Check,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
} from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: "Jackets" | "Tees" | "Hoodies" | "Pants" | "Footwear";
  price: number;
  color: string;
  size: string[];
  tag: string;
  image: string;
  description: string;
}

const mockProducts: Product[] = [
  {
    id: "prod-1",
    name: "Synth Leather Cyber Jacket",
    category: "Jackets",
    price: 340,
    color: "Black",
    size: ["S", "M", "L", "XL"],
    tag: "SIGNATURE",
    image: "/images/projects/clothes-platform.jpg",
    description: "Constructed with premium composite weather-resistant fabric, ergonomic tactical zips, and sleek tailored silhouette.",
  },
  {
    id: "prod-2",
    name: "Asymmetric Tech Minimalist Tee",
    category: "Tees",
    price: 110,
    color: "Black",
    size: ["S", "M", "L"],
    tag: "BESTSELLER",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
    description: "Heavyweight 280GSM organic cotton with engineered dropped shoulders and breathable cyber stitch.",
  },
  {
    id: "prod-3",
    name: "Urban Modular Cargo Pants",
    category: "Pants",
    price: 260,
    color: "Grey",
    size: ["M", "L", "XL"],
    tag: "NEW DROP",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1200&q=80",
    description: "Multi-pocket technical cargo pants featuring water-repellent finish, magnetic pocket closures, and adjustable cuff toggles.",
  },
  {
    id: "prod-4",
    name: "Obsidian Tech Pullover Hoodie",
    category: "Hoodies",
    price: 195,
    color: "Black",
    size: ["S", "M", "L", "XL"],
    tag: "LIMITED",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1200&q=80",
    description: "Dense double-knit fleece lining with discreet headphone routing, reinforced thumb loops, and structured hood profile.",
  },
  {
    id: "prod-5",
    name: "Cyan Glow High-Top Sneakers",
    category: "Footwear",
    price: 290,
    color: "Cyan",
    size: ["41", "42", "43", "44"],
    tag: "EXCLUSIVE",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=80",
    description: "Shock-absorbing dual-density nitrogen midsole with reflective cyan piping and high-grip carbon rubber tread.",
  },
  {
    id: "prod-6",
    name: "Thermal Shell Windbreaker",
    category: "Jackets",
    price: 280,
    color: "Cyan",
    size: ["M", "L"],
    tag: "WATERPROOF",
    image: "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=1200&q=80",
    description: "Ultralight ripstop shell rated for 20,000mm waterproofing with taped seams and internal stash pouch.",
  },
  {
    id: "prod-7",
    name: "Relaxed Geometric Graphic Tee",
    category: "Tees",
    price: 95,
    color: "White",
    size: ["S", "M", "L", "XL"],
    tag: "STREETWEAR",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80",
    description: "High-density screenprint on pre-shrunk combed cotton with ribbed collar and reinforced necktape.",
  },
  {
    id: "prod-8",
    name: "Apex Tapered Joggers",
    category: "Pants",
    price: 180,
    color: "Black",
    size: ["S", "M", "L"],
    tag: "ESSENTIAL",
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=1200&q=80",
    description: "Four-way stretch technical fleece engineered for active performance and all-day street comfort.",
  },
];

interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
}

export default function ClothesApp() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedColor, setSelectedColor] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [cart, setCart] = useState<CartItem[]>([
    {
      ...mockProducts[0],
      quantity: 1,
      selectedSize: "L",
    },
  ]);
  const [favorites, setFavorites] = useState<string[]>(["prod-1", "prod-4"]);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState<boolean>(false);
  const [promoCode, setPromoCode] = useState<string>("");
  const [discount, setDiscount] = useState<number>(0);
  const [orderPlaced, setOrderPlaced] = useState<boolean>(false);

  // Filter products
  const filteredProducts = useMemo(() => {
    return mockProducts.filter((product) => {
      const matchCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      const matchColor =
        selectedColor === "All" || product.color === selectedColor;
      const matchSearch =
        searchQuery.trim() === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchColor && matchSearch;
    });
  }, [selectedCategory, selectedColor, searchQuery]);

  // Cart operations
  const addToCart = (product: Product, size?: string) => {
    const chosenSize = size || product.size[0];
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id && item.selectedSize === chosenSize
      );
      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.selectedSize === chosenSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1, selectedSize: chosenSize }];
    });
    setCartOpen(true);
  };

  const updateQuantity = (id: string, size: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id && item.selectedSize === size) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const removeFromCart = (id: string, size: string) => {
    setCart((prev) =>
      prev.filter((item) => !(item.id === id && item.selectedSize === size))
    );
  };

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const applyPromo = () => {
    if (promoCode.trim().toUpperCase() === "MODIVA15") {
      setDiscount(0.15);
    } else if (promoCode.trim().toUpperCase() === "VIP20") {
      setDiscount(0.2);
    } else {
      alert("Invalid code. Try using: MODIVA15 or VIP20");
    }
  };

  const cartSubtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discountAmount = cartSubtotal * discount;
  const shipping = cartSubtotal > 200 || cartSubtotal === 0 ? 0 : 25;
  const cartTotal = Math.max(0, cartSubtotal - discountAmount + shipping);
  const totalItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#06080F] text-slate-100 font-sans selection:bg-[#7c3aed] selection:text-white pb-24">
      {/* ── App Navigation Header ── */}
      <header className="sticky top-12 z-40 bg-[#080D1A]/95 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-4 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#7c3aed] to-[#00F0FF] flex items-center justify-center font-bold text-white text-lg shadow-[0_0_15px_rgba(124,58,237,0.5)]">
                M
              </span>
              <div>
                <span className="font-extrabold text-xl tracking-wider text-white">
                  MODIVA<span className="text-[#00F0FF]">.</span>
                </span>
                <span className="hidden sm:inline-block ml-2 text-[10px] font-mono text-purple-400 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/30">
                  NEXTJS PLATFORM
                </span>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
              {["All", "Jackets", "Tees", "Hoodies", "Pants", "Footwear"].map(
                (cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`transition-colors hover:text-white cursor-pointer ${
                      selectedCategory === cat
                        ? "text-[#00F0FF] font-bold border-b-2 border-[#00F0FF] pb-0.5"
                        : "text-slate-400"
                    }`}
                  >
                    {cat}
                  </button>
                )
              )}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            {/* Search Box */}
            <div className="relative hidden sm:block w-48 lg:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search collection..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-[#0E1528] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#7c3aed]"
              />
            </div>

            {/* Favorites Icon */}
            <div className="relative p-2 rounded-lg bg-[#0E1528] border border-white/10 text-slate-300 hover:text-rose-400 cursor-pointer">
              <Heart className="w-5 h-5" />
              {favorites.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-rose-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </div>

            {/* Shopping Cart Button */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#5b21b6] hover:brightness-110 text-white font-medium text-xs shadow-[0_0_15px_rgba(124,58,237,0.4)] transition-all cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Bag</span>
              <span className="bg-white text-[#7c3aed] text-[11px] font-bold px-1.5 py-0.2 rounded-full">
                {totalItemCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ── Hero Banner ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0F172A] to-[#06080F] border-b border-white/5 py-12 sm:py-16 px-4 sm:px-8">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#7c3aed]/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7c3aed]/20 border border-[#7c3aed]/50 text-[#00F0FF] text-xs font-mono w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FALL/WINTER TECHWEAR COLLECTION 2024</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.05]">
              Futuristic Fashion. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] via-[#a855f7] to-[#00F0FF]">
                Engineered For The City.
              </span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
              Explore the live demo of this full-stack Next.js fashion platform.
              Try adding products to your bag, filtering sizes and colors, and testing the live checkout flow.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => setSelectedCategory("Jackets")}
                className="px-5 py-2.5 rounded-xl bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold text-xs transition-all shadow-lg shadow-purple-900/40 cursor-pointer"
              >
                Browse Outerwear
              </button>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="px-5 py-2.5 rounded-xl bg-[#0E1528] border border-white/10 hover:border-[#00F0FF] text-slate-300 text-xs font-mono transition-all cursor-pointer"
              >
                View Full Catalog (8 Items)
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] group">
              <Image
                src="/images/projects/clothes-platform.jpg"
                alt="MODIVA Techwear Hero"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06080F] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#080D1A]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#00F0FF]">FEATURED DROP</span>
                  <h4 className="text-sm font-bold text-white">Avant-Garde Techwear</h4>
                </div>
                <span className="text-sm font-mono text-emerald-400 font-bold">$340.00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Catalog with Sidebar Filters ── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left: Filter Controls */}
          <aside className="lg:col-span-1 flex flex-col gap-6">
            <div className="p-5 rounded-2xl bg-[#080D1A] border border-white/10 flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-[#00F0FF]" />
                  <span>Filter Collection</span>
                </h3>
                {(selectedCategory !== "All" || selectedColor !== "All" || searchQuery) && (
                  <button
                    onClick={() => {
                      setSelectedCategory("All");
                      setSelectedColor("All");
                      setSearchQuery("");
                    }}
                    className="text-[11px] text-[#00F0FF] hover:underline cursor-pointer"
                  >
                    Reset
                  </button>
                )}
              </div>

              {/* Categories */}
              <div>
                <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2.5">
                  Category
                </label>
                <div className="flex flex-col gap-1.5">
                  {["All", "Jackets", "Tees", "Hoodies", "Pants", "Footwear"].map(
                    (cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-3 py-1.5 rounded-lg text-xs text-left transition-colors flex items-center justify-between cursor-pointer ${
                          selectedCategory === cat
                            ? "bg-[#7c3aed]/20 text-[#00F0FF] font-semibold border border-[#7c3aed]/40"
                            : "text-slate-300 hover:bg-white/5"
                        }`}
                      >
                        <span>{cat}</span>
                        {selectedCategory === cat && <Check className="w-3.5 h-3.5" />}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Color filter */}
              <div>
                <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2.5">
                  Colorway
                </label>
                <div className="flex flex-wrap gap-2">
                  {["All", "Black", "Cyan", "Grey", "White"].map((col) => (
                    <button
                      key={col}
                      onClick={() => setSelectedColor(col)}
                      className={`px-3 py-1 rounded-md text-xs font-mono transition-all cursor-pointer ${
                        selectedColor === col
                          ? "bg-[#00F0FF] text-[#06080F] font-bold"
                          : "bg-[#0E1528] text-slate-300 border border-white/10 hover:border-white/30"
                      }`}
                    >
                      {col}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Perks */}
              <div className="pt-4 border-t border-white/5 flex flex-col gap-2.5 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-emerald-400" />
                  <span>Free shipping on orders over $200</span>
                </div>
                <div className="flex items-center gap-2">
                  <RotateCcw className="w-4 h-4 text-[#00F0FF]" />
                  <span>30-day hassle free returns</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-purple-400" />
                  <span>Authentic limited production</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Right: Products Grid */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">
                Showing <strong className="text-white">{filteredProducts.length}</strong> items
              </span>
              <span className="text-xs font-mono text-purple-400">
                Category: {selectedCategory}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => {
                const isFavorite = favorites.includes(product.id);
                return (
                  <div
                    key={product.id}
                    className="group relative rounded-2xl bg-[#080D1A] border border-white/10 hover:border-[#7c3aed]/60 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-lg hover:shadow-[0_10px_25px_rgba(124,58,237,0.2)]"
                  >
                    {/* Image Area */}
                    <div className="relative aspect-[4/4] bg-[#0E1528] overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080D1A] via-transparent to-transparent opacity-60" />

                      {/* Tag */}
                      <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-mono font-bold text-[#00F0FF] bg-[#06080F]/80 backdrop-blur-md border border-[#00F0FF]/30">
                        {product.tag}
                      </span>

                      {/* Favorite Button */}
                      <button
                        onClick={() => toggleFavorite(product.id)}
                        className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all cursor-pointer ${
                          isFavorite
                            ? "bg-rose-500 text-white"
                            : "bg-[#06080F]/70 text-slate-400 hover:text-white"
                        }`}
                        title="Add to Wishlist"
                      >
                        <Heart className="w-3.5 h-3.5 fill-current" />
                      </button>

                      {/* Quick view button on hover */}
                      <button
                        onClick={() => setQuickViewProduct(product)}
                        className="absolute bottom-3 left-3 right-3 py-1.5 rounded-lg bg-[#06080F]/90 backdrop-blur-md border border-white/20 text-xs font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity text-center cursor-pointer hover:bg-white hover:text-black"
                      >
                        Quick Inspect
                      </button>
                    </div>

                    {/* Content Details */}
                    <div className="p-4 flex flex-col gap-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono text-purple-400">
                          {product.category}
                        </span>
                        <span className="text-[11px] font-mono text-slate-400">
                          {product.color}
                        </span>
                      </div>

                      <h4 className="font-bold text-sm text-white line-clamp-1 group-hover:text-[#00F0FF] transition-colors">
                        {product.name}
                      </h4>

                      <div className="flex items-center justify-between pt-1">
                        <span className="text-base font-extrabold text-white font-mono">
                          ${product.price}
                        </span>
                        <div className="flex items-center gap-1">
                          {product.size.slice(0, 3).map((s) => (
                            <span
                              key={s}
                              className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-slate-400"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action: Add to Bag */}
                      <button
                        onClick={() => addToCart(product)}
                        className="mt-2 w-full py-2 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#5b21b6] hover:brightness-110 text-white text-xs font-bold font-mono transition-all flex items-center justify-center gap-1.5 shadow-md shadow-purple-950/50 cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add To Bag</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      {/* ── Slide-Out Shopping Bag Drawer ── */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setCartOpen(false)}
          />

          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-[#080D1A] border-l border-white/10 shadow-2xl flex flex-col justify-between">
              {/* Drawer Header */}
              <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#06080F]">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-[#00F0FF]" />
                  <h3 className="font-bold text-white text-base">Your Shopping Bag</h3>
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-purple-950 text-purple-300 border border-purple-500/30">
                    {totalItemCount} items
                  </span>
                </div>
                <button
                  onClick={() => setCartOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4">
                {cart.length === 0 ? (
                  <div className="py-20 text-center flex flex-col items-center gap-3">
                    <ShoppingBag className="w-12 h-12 text-slate-600 animate-pulse" />
                    <p className="text-slate-400 text-sm">Your shopping bag is currently empty.</p>
                    <button
                      onClick={() => setCartOpen(false)}
                      className="px-4 py-2 rounded-lg bg-[#7c3aed] text-white text-xs font-bold cursor-pointer"
                    >
                      Explore Products
                    </button>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div
                      key={`${item.id}-${item.selectedSize}`}
                      className="flex items-center gap-3.5 p-3 rounded-xl bg-[#0E1528] border border-white/5"
                    >
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-black shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0 flex flex-col gap-1">
                        <h5 className="text-xs font-bold text-white truncate">
                          {item.name}
                        </h5>
                        <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                          <span>Size: {item.selectedSize}</span>
                          <span>•</span>
                          <span className="text-[#00F0FF] font-bold">${item.price}</span>
                        </div>

                        {/* Quantity Counter */}
                        <div className="flex items-center gap-2 mt-1">
                          <button
                            onClick={() => updateQuantity(item.id, item.selectedSize, -1)}
                            className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-white hover:bg-white/20 cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-mono text-white font-bold px-1">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.selectedSize, 1)}
                            className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-white hover:bg-white/20 cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id, item.selectedSize)}
                        className="p-2 text-slate-500 hover:text-rose-400 cursor-pointer"
                        title="Remove"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* Drawer Footer with Totals and Checkout */}
              {cart.length > 0 && (
                <div className="p-5 border-t border-white/10 bg-[#06080F] flex flex-col gap-3">
                  {/* Promo Input */}
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Promo code (MODIVA15)"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 px-3 py-1.5 rounded-lg bg-[#0E1528] border border-white/10 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-[#7c3aed]"
                    />
                    <button
                      onClick={applyPromo}
                      className="px-3 py-1.5 rounded-lg bg-[#7c3aed] text-white text-xs font-mono font-bold cursor-pointer"
                    >
                      Apply
                    </button>
                  </div>

                  {discount > 0 && (
                    <div className="flex items-center justify-between text-xs text-emerald-400 font-mono">
                      <span>Discount ({(discount * 100).toFixed(0)}%):</span>
                      <span>-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span>Shipping:</span>
                    <span>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm font-bold text-white font-mono pt-2 border-t border-white/5">
                    <span>Total Amount:</span>
                    <span className="text-[#00F0FF] text-base font-extrabold">
                      ${cartTotal.toFixed(2)}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      setCartOpen(false);
                      setCheckoutModalOpen(true);
                    }}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#7c3aed] via-[#9333ea] to-[#00F0FF] text-white font-bold text-xs font-mono uppercase tracking-wider shadow-lg shadow-purple-900/50 hover:brightness-110 transition-all cursor-pointer"
                  >
                    Proceed To Live Checkout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── Quick Inspect Modal ── */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative max-w-2xl w-full rounded-2xl bg-[#080D1A] border border-[#7c3aed]/50 p-6 shadow-2xl flex flex-col md:flex-row gap-6">
            <button
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative w-full md:w-1/2 aspect-square rounded-xl overflow-hidden bg-black shrink-0">
              <Image
                src={quickViewProduct.image}
                alt={quickViewProduct.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1 flex flex-col justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono text-[#00F0FF] px-2 py-0.5 rounded bg-purple-950 border border-purple-500/30">
                  {quickViewProduct.tag}
                </span>
                <h3 className="text-xl font-bold text-white mt-2">
                  {quickViewProduct.name}
                </h3>
                <span className="text-lg font-extrabold font-mono text-emerald-400 block mt-1">
                  ${quickViewProduct.price}.00
                </span>
                <p className="text-xs text-slate-300 leading-relaxed mt-3">
                  {quickViewProduct.description}
                </p>
              </div>

              <div>
                <span className="text-[11px] font-mono text-slate-400 block mb-2">
                  Available Sizes:
                </span>
                <div className="flex gap-2">
                  {quickViewProduct.size.map((sz) => (
                    <span
                      key={sz}
                      className="px-2.5 py-1 rounded bg-[#0E1528] border border-white/10 text-xs font-mono text-white"
                    >
                      {sz}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => {
                    addToCart(quickViewProduct);
                    setQuickViewProduct(null);
                  }}
                  className="mt-4 w-full py-2.5 rounded-xl bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-bold text-xs font-mono transition-all cursor-pointer"
                >
                  Add To Bag
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Checkout Simulation Modal ── */}
      {checkoutModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative max-w-lg w-full rounded-2xl bg-[#080D1A] border border-emerald-500/50 p-6 sm:p-8 shadow-2xl flex flex-col gap-5">
            <button
              onClick={() => {
                setCheckoutModalOpen(false);
                setOrderPlaced(false);
              }}
              className="absolute top-4 right-4 text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!orderPlaced ? (
              <>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-950 border border-purple-500/50 flex items-center justify-center text-[#00F0FF]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Live Checkout Simulator</h3>
                    <span className="text-xs font-mono text-slate-400">
                      Simulated Next.js Server Action Checkout
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#06080F] border border-white/10 flex flex-col gap-2 font-mono text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>Order items:</span>
                    <span className="text-white">{totalItemCount} items</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Total charge:</span>
                    <span className="text-emerald-400 font-bold">${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Payment Gateway:</span>
                    <span className="text-[#00F0FF]">Stripe Sandbox (Test Mode)</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 text-xs">
                  <label className="text-slate-300 font-mono">Simulated Cardholder Name</label>
                  <input
                    type="text"
                    defaultValue="Alex Chen (Portfolio Demo Visitor)"
                    className="px-3 py-2 rounded-lg bg-[#0E1528] border border-white/10 text-white font-mono text-xs focus:outline-none"
                  />
                </div>

                <button
                  onClick={() => {
                    setOrderPlaced(true);
                    setCart([]);
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-[#00F0FF] text-black font-extrabold text-xs font-mono uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer"
                >
                  Confirm & Authorize Payment (${cartTotal.toFixed(2)})
                </button>
              </>
            ) : (
              <div className="py-6 text-center flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mb-2">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Order Successfully Placed!</h3>
                <p className="text-xs text-slate-300 max-w-sm font-mono">
                  Receipt #MOD-894210 generated. In this real
                  deployment, Next.js triggers webhook confirmation and dispatches automated order manifests.
                </p>
                <button
                  onClick={() => setCheckoutModalOpen(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-[#7c3aed] text-white text-xs font-bold font-mono cursor-pointer"
                >
                  Return to Storefront
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
