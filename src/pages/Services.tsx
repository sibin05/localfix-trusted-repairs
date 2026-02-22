import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { serviceCategories, technicians } from "@/lib/mockData";
import TechnicianCard from "@/components/TechnicianCard";
import Layout from "@/components/Layout";

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const filtered = technicians.filter((t) => {
    const matchCategory = !selectedCategory || t.services.some((s) => s.toLowerCase().includes(selectedCategory.toLowerCase()));
    const matchSearch = !search || t.name.toLowerCase().includes(search.toLowerCase()) || t.services.some((s) => s.toLowerCase().includes(search.toLowerCase()));
    return matchCategory && matchSearch;
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold">Find a Technician</h1>
        <p className="mt-1 text-muted-foreground">Browse verified professionals near you</p>

        <div className="mt-6 flex items-center gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name or service..."
              className="pl-10"
            />
          </div>
          <Button variant="outline" size="icon"><SlidersHorizontal className="h-4 w-4" /></Button>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <Badge
            variant={selectedCategory === null ? "default" : "secondary"}
            className="cursor-pointer"
            onClick={() => setSelectedCategory(null)}
          >
            All
          </Badge>
          {serviceCategories.map((cat) => (
            <Badge
              key={cat.id}
              variant={selectedCategory === cat.name ? "default" : "secondary"}
              className="cursor-pointer"
              onClick={() => setSelectedCategory(selectedCategory === cat.name ? null : cat.name)}
            >
              {cat.icon} {cat.name}
            </Badge>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((t, i) => (
            <TechnicianCard key={t.id} technician={t} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-16 text-center text-muted-foreground">
            No technicians found. Try adjusting your search or filters.
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Services;
