export type Car = {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuel: string;
  transmission: string;
  body: string;
  location: string;
  color: string;
  description: string;
  image: string;
  featured?: boolean;
  status?: "available" | "reserved" | "sold";
};

export const cars: Car[] = [
  {
    id: "toyota-land-cruiser-2024",
    brand: "Toyota",
    model: "Land Cruiser",
    year: 2024,
    price: 68500,
    mileage: 12000,
    fuel: "Petrol",
    transmission: "Automatic",
    body: "SUV",
    location: "Hargeisa",
    color: "Pearl White",
    description: "A premium 4x4 SUV with a spacious cabin, modern safety technology and strong off-road capability.",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1400&q=85",
    featured: true,
    status: "available"
  },
  {
    id: "mercedes-glc-2023",
    brand: "Mercedes-Benz",
    model: "GLC 300",
    year: 2023,
    price: 58900,
    mileage: 18500,
    fuel: "Petrol",
    transmission: "Automatic",
    body: "SUV",
    location: "Dubai",
    color: "Obsidian Black",
    description: "Luxury compact SUV with a premium interior, digital cockpit and smooth automatic transmission.",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1400&q=85",
    featured: true,
    status: "available"
  },
  {
    id: "bmw-x5-2022",
    brand: "BMW",
    model: "X5 xDrive40i",
    year: 2022,
    price: 54500,
    mileage: 29000,
    fuel: "Petrol",
    transmission: "Automatic",
    body: "SUV",
    location: "Hargeisa",
    color: "Mineral Grey",
    description: "Powerful premium SUV with all-wheel drive, driver assistance and a refined interior.",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1400&q=85",
    featured: true,
    status: "available"
  },
  {
    id: "toyota-corolla-2021",
    brand: "Toyota",
    model: "Corolla",
    year: 2021,
    price: 21900,
    mileage: 41000,
    fuel: "Petrol",
    transmission: "Automatic",
    body: "Sedan",
    location: "Hargeisa",
    color: "Silver",
    description: "Reliable and economical sedan, ideal for daily city driving and family use.",
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=1400&q=85",
    status: "available"
  },
  {
    id: "hyundai-tucson-2023",
    brand: "Hyundai",
    model: "Tucson",
    year: 2023,
    price: 31200,
    mileage: 16000,
    fuel: "Petrol",
    transmission: "Automatic",
    body: "SUV",
    location: "Hargeisa",
    color: "Amazon Grey",
    description: "Modern family SUV with excellent cabin space, technology and fuel economy.",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1400&q=85",
    status: "available"
  },
  {
    id: "ford-ranger-2024",
    brand: "Ford",
    model: "Ranger Wildtrak",
    year: 2024,
    price: 44900,
    mileage: 8000,
    fuel: "Diesel",
    transmission: "Automatic",
    body: "Pickup",
    location: "Dubai",
    color: "Blue",
    description: "Rugged pickup built for work and adventure with a strong diesel engine.",
    image: "https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=1400&q=85",
    status: "available"
  },
  {
    id: "lexus-rx-2022",
    brand: "Lexus",
    model: "RX 350",
    year: 2022,
    price: 47800,
    mileage: 23000,
    fuel: "Petrol",
    transmission: "Automatic",
    body: "SUV",
    location: "Hargeisa",
    color: "Matte Black",
    description: "Comfort-focused luxury SUV with a quiet cabin and premium Japanese engineering.",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1400&q=85",
    status: "available"
  },
  {
    id: "audi-a6-2021",
    brand: "Audi",
    model: "A6 Quattro",
    year: 2021,
    price: 39900,
    mileage: 33000,
    fuel: "Petrol",
    transmission: "Automatic",
    body: "Sedan",
    location: "Dubai",
    color: "Glacier White",
    description: "Executive sedan combining comfort, technology and confident all-wheel drive.",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1400&q=85",
    status: "available"
  }
];

export const brands = [...new Set(cars.map((car) => car.brand))];
export const bodyTypes = [...new Set(cars.map((car) => car.body))];
