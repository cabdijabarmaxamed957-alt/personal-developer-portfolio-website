import FavoriteCars from "@/components/FavoriteCars";

export default function FavoritesPage() {
  return (
    <main className="page"><div className="container">
      <div className="page-heading"><span className="pill">YOUR SHORTLIST</span><h1>Saved vehicles.</h1><p>Keep the cars you are considering in one place.</p></div>
      <FavoriteCars />
    </div></main>
  );
}
