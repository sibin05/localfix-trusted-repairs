import { Link } from "react-router-dom";
import { Star, MapPin, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Technician } from "@/lib/types";
import { motion } from "framer-motion";

interface Props {
  technician: Technician;
  index?: number;
}

const TechnicianCard = ({ technician, index = 0 }: Props) => {
  const initials = technician.name.split(" ").map(n => n[0]).join("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
    >
      <Link to={`/technician/${technician.id}`}>
        <div className="group rounded-xl border border-border bg-card p-5 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
              {initials}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-card-foreground truncate">{technician.name}</h3>
                {technician.available && (
                  <CheckCircle className="h-4 w-4 shrink-0 text-accent" />
                )}
              </div>
              <div className="mt-1 flex items-center gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Star className="h-3.5 w-3.5 fill-warning text-warning" />
                  {technician.rating} ({technician.reviewCount})
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  {technician.distance}
                </span>
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {technician.services.slice(0, 3).map((s) => (
                  <Badge key={s} variant="secondary" className="text-xs font-normal">
                    {s}
                  </Badge>
                ))}
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="text-sm">
                  <span className="font-semibold text-card-foreground">{technician.priceRange}</span>
                  <span className="ml-2 text-muted-foreground flex items-center gap-1 inline-flex">
                    <Clock className="h-3 w-3" /> {technician.experience}
                  </span>
                </div>
                <Button size="sm" variant={technician.available ? "default" : "secondary"} disabled={!technician.available}>
                  {technician.available ? "Book Now" : "Unavailable"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default TechnicianCard;
