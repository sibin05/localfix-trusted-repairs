import { ServiceCategory, Technician, Booking, Review } from "./types";

export const serviceCategories: ServiceCategory[] = [
  { id: "1", name: "Bike Repair", icon: "🏍️", description: "Expert bike servicing & repairs", slug: "bike-repair" },
  { id: "2", name: "Mobile Repair", icon: "📱", description: "Screen, battery & software fixes", slug: "mobile-repair" },
  { id: "3", name: "Laptop Repair", icon: "💻", description: "Hardware & software solutions", slug: "laptop-repair" },
  { id: "4", name: "AC Repair", icon: "❄️", description: "AC servicing & installation", slug: "ac-repair" },
  { id: "5", name: "Electrician", icon: "⚡", description: "Wiring, switches & fixtures", slug: "electrician" },
  { id: "6", name: "Plumbing", icon: "🔧", description: "Pipes, leaks & installations", slug: "plumbing" },
  { id: "7", name: "Appliance Repair", icon: "🏠", description: "Washing machine, fridge & more", slug: "appliance-repair" },
];

export const technicians: Technician[] = [
  {
    id: "1", name: "Rajesh Kumar", avatar: "", rating: 4.9, reviewCount: 234,
    experience: "8 years", priceRange: "₹200 - ₹1500", distance: "1.2 km",
    available: true, services: ["Bike Repair", "Electrician"], location: "Koramangala, Bangalore",
    bio: "Certified mechanic with 8+ years of experience in all types of bike repairs. Specialized in performance tuning and electrical diagnostics.",
    completedJobs: 1240,
  },
  {
    id: "2", name: "Priya Sharma", avatar: "", rating: 4.8, reviewCount: 189,
    experience: "5 years", priceRange: "₹300 - ₹2000", distance: "2.5 km",
    available: true, services: ["Mobile Repair", "Laptop Repair"], location: "HSR Layout, Bangalore",
    bio: "Apple & Samsung certified technician. Expert in screen replacements, motherboard repairs, and data recovery.",
    completedJobs: 890,
  },
  {
    id: "3", name: "Amit Patel", avatar: "", rating: 4.7, reviewCount: 312,
    experience: "10 years", priceRange: "₹250 - ₹3000", distance: "0.8 km",
    available: true, services: ["AC Repair", "Electrician", "Appliance Repair"], location: "Indiranagar, Bangalore",
    bio: "Master electrician and HVAC specialist. Government certified with experience in residential and commercial projects.",
    completedJobs: 2100,
  },
  {
    id: "4", name: "Sneha Reddy", avatar: "", rating: 4.9, reviewCount: 156,
    experience: "6 years", priceRange: "₹400 - ₹2500", distance: "3.1 km",
    available: false, services: ["Laptop Repair", "Mobile Repair"], location: "Whitefield, Bangalore",
    bio: "CompTIA certified technician specializing in laptop motherboard repairs, OS installations, and virus removal.",
    completedJobs: 720,
  },
  {
    id: "5", name: "Vikram Singh", avatar: "", rating: 4.6, reviewCount: 278,
    experience: "12 years", priceRange: "₹200 - ₹2000", distance: "1.8 km",
    available: true, services: ["Plumbing", "Appliance Repair"], location: "BTM Layout, Bangalore",
    bio: "Licensed plumber with expertise in modern plumbing systems, water purifier installation, and bathroom renovations.",
    completedJobs: 1850,
  },
  {
    id: "6", name: "Meera Nair", avatar: "", rating: 4.8, reviewCount: 198,
    experience: "7 years", priceRange: "₹300 - ₹1800", distance: "2.0 km",
    available: true, services: ["AC Repair", "Electrician"], location: "JP Nagar, Bangalore",
    bio: "Specialized in split AC installation, inverter AC repairs, and smart home electrical setups.",
    completedJobs: 950,
  },
];

export const sampleBookings: Booking[] = [
  { id: "B001", technicianName: "Rajesh Kumar", service: "Bike Repair", date: "2026-02-24", time: "10:00 AM", status: "confirmed", amount: "₹500", address: "123, MG Road, Bangalore" },
  { id: "B002", technicianName: "Priya Sharma", service: "Mobile Repair", date: "2026-02-23", time: "2:00 PM", status: "in-progress", amount: "₹1200", address: "456, HSR Layout, Bangalore" },
  { id: "B003", technicianName: "Amit Patel", service: "AC Repair", date: "2026-02-20", time: "11:00 AM", status: "completed", amount: "₹800", address: "789, Indiranagar, Bangalore" },
  { id: "B004", technicianName: "Vikram Singh", service: "Plumbing", date: "2026-02-18", time: "9:00 AM", status: "completed", amount: "₹600", address: "321, BTM Layout, Bangalore" },
];

export const sampleReviews: Review[] = [
  { id: "1", userName: "Ananya M.", rating: 5, comment: "Excellent service! Fixed my bike in 30 minutes. Very professional and friendly.", date: "2026-02-15" },
  { id: "2", userName: "Karthik R.", rating: 4, comment: "Good work, arrived on time. Pricing was fair and transparent.", date: "2026-02-12" },
  { id: "3", userName: "Divya S.", rating: 5, comment: "Best technician I've ever hired. Will definitely book again!", date: "2026-02-10" },
  { id: "4", userName: "Rohit P.", rating: 5, comment: "Very knowledgeable and efficient. Fixed the issue quickly.", date: "2026-02-08" },
];
