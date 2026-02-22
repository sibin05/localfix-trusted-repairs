export interface ServiceCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  slug: string;
}

export interface Technician {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  reviewCount: number;
  experience: string;
  priceRange: string;
  distance: string;
  available: boolean;
  services: string[];
  location: string;
  bio: string;
  completedJobs: number;
}

export interface Booking {
  id: string;
  technicianName: string;
  service: string;
  date: string;
  time: string;
  status: "pending" | "confirmed" | "in-progress" | "completed" | "cancelled";
  amount: string;
  address: string;
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}
