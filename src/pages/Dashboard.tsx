import { Link } from "react-router-dom";
import { Calendar, Clock, MapPin, User, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { sampleBookings } from "@/lib/mockData";
import Layout from "@/components/Layout";

const statusColor: Record<string, string> = {
  pending: "bg-warning/10 text-warning",
  confirmed: "bg-primary/10 text-primary",
  "in-progress": "bg-accent/10 text-accent",
  completed: "bg-accent/10 text-accent",
  cancelled: "bg-destructive/10 text-destructive",
};

const Dashboard = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6 lg:grid-cols-4">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                  JD
                </div>
                <h2 className="mt-3 font-semibold">John Doe</h2>
                <p className="text-sm text-muted-foreground">john@example.com</p>
              </div>
              <nav className="mt-6 space-y-1">
                {[
                  { icon: Calendar, label: "My Bookings", active: true },
                  { icon: User, label: "Profile", active: false },
                  { icon: Settings, label: "Settings", active: false },
                ].map((item) => (
                  <button
                    key={item.label}
                    className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${item.active ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-secondary"}`}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </button>
                ))}
                <Link to="/">
                  <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-destructive hover:bg-destructive/5">
                    <LogOut className="h-4 w-4" />
                    Log out
                  </button>
                </Link>
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <h1 className="text-2xl font-bold">My Bookings</h1>
            <p className="text-muted-foreground text-sm">Manage your service bookings</p>

            <div className="mt-6 space-y-4">
              {sampleBookings.map((b) => (
                <div key={b.id} className="rounded-xl border border-border bg-card p-5 shadow-card transition-all hover:shadow-card-hover">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{b.service}</h3>
                        <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColor[b.status]}`}>
                          {b.status}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">with {b.technicianName}</p>
                    </div>
                    <span className="text-lg font-bold text-primary">{b.amount}</span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {b.date}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {b.time}</span>
                    <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {b.address}</span>
                  </div>
                  {(b.status === "pending" || b.status === "confirmed") && (
                    <div className="mt-4 flex gap-2">
                      <Button size="sm" variant="outline">Reschedule</Button>
                      <Button size="sm" variant="outline" className="text-destructive hover:bg-destructive/5">Cancel</Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
