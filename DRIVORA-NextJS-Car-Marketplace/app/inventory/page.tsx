import InventoryClient from "@/components/InventoryClient";
import { cars } from "@/lib/data";

export default function InventoryPage() {
  return (
    <main className="page">
      <div className="container">
        <div className="page-heading">
          <span className="pill">DRIVORA INVENTORY</span>
          <h1>Find your next vehicle.</h1>
          <p>Browse our marketplace and narrow it down by the details that matter to you.</p>
        </div>
        <InventoryClient cars={cars} />
      </div>
    </main>
  );
}
