import { useState } from "react";
import { Users, Wrench, Calendar, TrendingUp, CheckCircle, XCircle, Shield, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const mockUsers = [
  { id: "U1", name: "Ananya M.", email: "ananya@example.com", role: "customer", joined: "2026-01-15", bookings: 5 },
  { id: "U2", name: "Karthik R.", email: "karthik@example.com", role: "customer", joined: "2026-01-20", bookings: 3 },
  { id: "U3", name: "Divya S.", email: "divya@example.com", role: "customer", joined: "2026-02-01", bookings: 8 },
];

const mockTechnicians = [
  { id: "T1", name: "Rajesh Kumar", services: "Bike Repair, Electrician", verified: true, rating: 4.9, jobs: 1240, status: "active" },
  { id: "T2", name: "Priya Sharma", services: "Mobile Repair, Laptop Repair", verified: true, rating: 4.8, jobs: 890, status: "active" },
  { id: "T3", name: "New Technician", services: "Plumbing", verified: false, rating: 0, jobs: 0, status: "pending" },
];

const mockBookings = [
  { id: "B001", customer: "Ananya M.", technician: "Rajesh Kumar", service: "Bike Repair", date: "2026-02-24", status: "confirmed", amount: "₹500" },
  { id: "B002", customer: "Karthik R.", technician: "Priya Sharma", service: "Mobile Repair", date: "2026-02-23", status: "in-progress", amount: "₹1200" },
  { id: "B003", customer: "Divya S.", technician: "Amit Patel", service: "AC Repair", date: "2026-02-20", status: "completed", amount: "₹800" },
];

const adminTabs = ["Overview", "Users", "Technicians", "Bookings"] as const;
type AdminTab = typeof adminTabs[number];

const statusColor: Record<string, string> = {
  confirmed: "bg-primary/10 text-primary",
  "in-progress": "bg-accent/10 text-accent",
  completed: "bg-accent/10 text-accent",
  pending: "bg-warning text-warning-foreground",
};

const AdminDashboard = () => {
  const [tab, setTab] = useState<AdminTab>("Overview");

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Shield className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <p className="text-sm text-muted-foreground">Manage LocalFix platform</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 rounded-lg bg-secondary p-1 mb-6 overflow-x-auto">
          {adminTabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap ${tab === t ? "bg-card shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Overview */}
        {tab === "Overview" && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                { label: "Total Users", value: "1,245", icon: Users, color: "text-primary" },
                { label: "Technicians", value: "328", icon: Wrench, color: "text-accent" },
                { label: "Total Bookings", value: "5,432", icon: Calendar, color: "text-primary" },
                { label: "Revenue", value: "₹24.5L", icon: TrendingUp, color: "text-accent" },
              ].map((stat, i) => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="rounded-xl border border-border bg-card p-5 shadow-card">
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  <div className="mt-2 text-2xl font-bold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            <div className="rounded-xl border border-border bg-card p-8 shadow-card text-center">
              <BarChart3 className="mx-auto h-12 w-12 text-muted-foreground/30" />
              <p className="mt-4 text-muted-foreground">Advanced analytics charts coming soon</p>
            </div>
          </div>
        )}

        {/* Users */}
        {tab === "Users" && (
          <div className="rounded-xl border border-border bg-card shadow-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-border bg-secondary">
                  <tr>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Name</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Email</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Joined</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Bookings</th>
                  </tr>
                </thead>
                <tbody>
                  {mockUsers.map((u) => (
                    <tr key={u.id} className="border-b border-border last:border-0 hover:bg-secondary/50">
                      <td className="px-4 py-3 font-medium">{u.name}</td>
                      <td className="px-4 py-3 text-muted-foreground">{u.email}</td>
                      <td className="px-4 py-3 text-muted-foreground">{u.joined}</td>
                      <td className="px-4 py-3">{u.bookings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Technicians */}
        {tab === "Technicians" && (
          <div className="space-y-4">
            {mockTechnicians.map((t) => (
              <div key={t.id} className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-card p-5 shadow-card">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{t.name}</h3>
                    {t.verified ? (
                      <Badge className="bg-accent/10 text-accent">Verified</Badge>
                    ) : (
                      <Badge variant="secondary">Pending</Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-0.5">{t.services}</p>
                  <p className="text-xs text-muted-foreground mt-1">⭐ {t.rating} · {t.jobs} jobs</p>
                </div>
                {!t.verified && (
                  <div className="flex gap-2">
                    <Button size="sm" className="gap-1"><CheckCircle className="h-3.5 w-3.5" /> Verify</Button>
                    <Button size="sm" variant="outline" className="gap-1 text-destructive"><XCircle className="h-3.5 w-3.5" /> Reject</Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Bookings */}
        {tab === "Bookings" && (
          <div className="rounded-xl border border-border bg-card shadow-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-border bg-secondary">
                  <tr>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">ID</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Customer</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Technician</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Service</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Date</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {mockBookings.map((b) => (
                    <tr key={b.id} className="border-b border-border last:border-0 hover:bg-secondary/50">
                      <td className="px-4 py-3 font-mono text-xs">{b.id}</td>
                      <td className="px-4 py-3">{b.customer}</td>
                      <td className="px-4 py-3">{b.technician}</td>
                      <td className="px-4 py-3">{b.service}</td>
                      <td className="px-4 py-3 text-muted-foreground">{b.date}</td>
                      <td className="px-4 py-3">
                        <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColor[b.status] || ""}`}>{b.status}</span>
                      </td>
                      <td className="px-4 py-3 font-medium">{b.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default AdminDashboard;
