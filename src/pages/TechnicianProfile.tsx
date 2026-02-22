import { useParams, Link } from "react-router-dom";
import { Star, MapPin, Clock, CheckCircle, Briefcase, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { technicians, sampleReviews } from "@/lib/mockData";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const TechnicianProfile = () => {
  const { id } = useParams();
  const tech = technicians.find((t) => t.id === id);

  if (!tech) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <p className="text-muted-foreground">Technician not found.</p>
          <Link to="/services"><Button className="mt-4">Browse Technicians</Button></Link>
        </div>
      </Layout>
    );
  }

  const initials = tech.name.split(" ").map((n) => n[0]).join("");

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Link to="/services" className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to search
        </Link>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mt-4 grid gap-6 lg:grid-cols-3">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary">
                  {initials}
                </div>
                <h1 className="mt-4 text-xl font-bold">{tech.name}</h1>
                <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" /> {tech.location}
                </div>
                <div className="mt-3 flex items-center gap-4">
                  <span className="flex items-center gap-1 text-sm font-medium">
                    <Star className="h-4 w-4 fill-warning text-warning" /> {tech.rating}
                  </span>
                  <span className="text-sm text-muted-foreground">{tech.reviewCount} reviews</span>
                </div>
                {tech.available && (
                  <Badge className="mt-3 bg-accent text-accent-foreground">
                    <CheckCircle className="mr-1 h-3 w-3" /> Available Now
                  </Badge>
                )}
              </div>

              <div className="mt-6 space-y-3 border-t border-border pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> Experience</span>
                  <span className="font-medium">{tech.experience}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" /> Jobs Done</span>
                  <span className="font-medium">{tech.completedJobs.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Price Range</span>
                  <span className="font-medium">{tech.priceRange}</span>
                </div>
              </div>

              <Link to={`/booking/${tech.id}`} className="mt-6 block">
                <Button className="w-full" size="lg" disabled={!tech.available}>
                  {tech.available ? "Book Now" : "Currently Unavailable"}
                </Button>
              </Link>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h2 className="text-lg font-semibold">About</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tech.bio}</p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h2 className="text-lg font-semibold">Services Offered</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {tech.services.map((s) => (
                  <Badge key={s} variant="secondary">{s}</Badge>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h2 className="text-lg font-semibold">Reviews ({tech.reviewCount})</h2>
              <div className="mt-4 space-y-4">
                {sampleReviews.map((r) => (
                  <div key={r.id} className="border-b border-border pb-4 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm">{r.userName}</span>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: r.rating }).map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 fill-warning text-warning" />
                        ))}
                      </div>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{r.comment}</p>
                    <span className="mt-1 text-xs text-muted-foreground">{r.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default TechnicianProfile;
