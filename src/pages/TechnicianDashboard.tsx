import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, MapPin, User, Settings, LogOut, DollarSign, CheckCircle, XCircle, TrendingUp, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const bookingRequests = [
  { id: "R001", customerName: "Ananya M.", service: "Bike Repair", date: "2026-02-25", time: "10:00 AM", address: "123, MG Road, Bangalore", amount: "₹500", status: "pending" },
  { id: "R002", customerName: "Karthik R.", service: "Electrician", date: "2026-02-26", time: "2:00 PM", address: "456, HSR Layout, Bangalore", amount: "₹800", status: "pending" },
  { id: "R003", customerName: "Divya S.", service: "Bike Repair", date: "2026-02-24", time: "11:00 AM", address: "789, Indiranagar, Bangalore", amount: "₹600", status: "confirmed" },
  { id: "R004", customerName: "Rohit P.", service: "Electrician", date: "2026-02-22", time: "9:00 AM", address: "321, BTM Layout, Bangalore", amount: "₹1200", status: "completed" },
];

const earningsData = { today: "₹1,800", week: "₹12,400", month: "₹48,600", total: "₹3,24,500" };

const tabs = ["Requests", "Active", "History", "Earnings", "Profile"] as const;
type Tab = typeof tabs[number];

const TechnicianDashboard = () => {
  const [activeTab, setActiveTab] = useState<Tab>("Requests");

  const pending = bookingRequests.filter((b) => b.status === "pending");
  const active = bookingRequests.filter((b) => b.status === "confirmed");
  const completed = bookingRequests.filter((b) => b.status === "completed");

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6 lg:grid-cols-4">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-xl font-bold text-accent">
                  RK
                </div>
                <h2 className="mt-3 font-semibold">Rajesh Kumar</h2>
                <p className="text-sm text-muted-foreground">Bike Repair · Electrician</p>
                <Badge className="mt-2 bg-accent/10 text-accent">Verified</Badge>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 text-center">
                <div className="rounded-lg bg-secondary p-3">
                  <div className="text-lg font-bold text-primary">4.9</div>
                  <div className="text-xs text-muted-foreground">Rating</div>
                </div>
                <div className="rounded-lg bg-secondary p-3">
                  <div className="text-lg font-bold text-primary">1,240</div>
                  <div className="text-xs text-muted-foreground">Jobs</div>
                </div>
              </div>
              <nav className="mt-6 space-y-1">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${activeTab === tab ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-secondary"}`}
                  >
                    {tab}
                  </button>
                ))}
                <Link to="/">
                  <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-destructive hover:bg-destructive/5">
                    <LogOut className="h-4 w-4" /> Log out
                  </button>
                </Link>
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Stats Bar */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                { label: "Today", value: earningsData.today, icon: DollarSign },
                { label: "This Week", value: earningsData.week, icon: TrendingUp },
                { label: "This Month", value: earningsData.month, icon: Calendar },
                { label: "Total Earnings", value: earningsData.total, icon: Briefcase },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-xl border border-border bg-card p-4 shadow-card"
                >
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <stat.icon className="h-4 w-4" />
                    <span className="text-xs">{stat.label}</span>
                  </div>
                  <div className="mt-1 text-lg font-bold">{stat.value}</div>
                </motion.div>
              ))}
            </div>

            {/* Booking Requests */}
            {activeTab === "Requests" && (
              <div>
                <h2 className="text-xl font-bold">New Booking Requests</h2>
                <p className="text-sm text-muted-foreground">Accept or reject incoming bookings</p>
                <div className="mt-4 space-y-4">
                  {pending.length === 0 && <p className="py-12 text-center text-muted-foreground">No pending requests</p>}
                  {pending.map((b) => (
                    <div key={b.id} className="rounded-xl border border-border bg-card p-5 shadow-card">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h3 className="font-semibold">{b.service}</h3>
                          <p className="mt-0.5 text-sm text-muted-foreground">from {b.customerName}</p>
                        </div>
                        <span className="text-lg font-bold text-primary">{b.amount}</span>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {b.date}</span>
                        <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {b.time}</span>
                        <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {b.address}</span>
                      </div>
                      <div className="mt-4 flex gap-2">
                        <Button size="sm" className="gap-1"><CheckCircle className="h-3.5 w-3.5" /> Accept</Button>
                        <Button size="sm" variant="outline" className="gap-1 text-destructive hover:bg-destructive/5"><XCircle className="h-3.5 w-3.5" /> Reject</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "Active" && (
              <div>
                <h2 className="text-xl font-bold">Active Bookings</h2>
                <div className="mt-4 space-y-4">
                  {active.length === 0 && <p className="py-12 text-center text-muted-foreground">No active bookings</p>}
                  {active.map((b) => (
                    <div key={b.id} className="rounded-xl border border-border bg-card p-5 shadow-card">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">{b.service}</h3>
                          <p className="text-sm text-muted-foreground">{b.customerName} · {b.date} at {b.time}</p>
                          <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1"><MapPin className="h-3.5 w-3.5" /> {b.address}</p>
                        </div>
                        <Button size="sm">Mark Complete</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "History" && (
              <div>
                <h2 className="text-xl font-bold">Completed Jobs</h2>
                <div className="mt-4 space-y-4">
                  {completed.map((b) => (
                    <div key={b.id} className="rounded-xl border border-border bg-card p-5 shadow-card">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">{b.service}</h3>
                          <p className="text-sm text-muted-foreground">{b.customerName} · {b.date}</p>
                        </div>
                        <span className="font-bold text-accent">{b.amount}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "Earnings" && (
              <div>
                <h2 className="text-xl font-bold">Earnings Overview</h2>
                <div className="mt-6 rounded-xl border border-border bg-card p-8 shadow-card text-center">
                  <p className="text-muted-foreground">Total Lifetime Earnings</p>
                  <p className="mt-2 text-4xl font-bold text-primary">{earningsData.total}</p>
                  <p className="mt-4 text-sm text-muted-foreground">Detailed analytics coming soon</p>
                </div>
              </div>
            )}

            {activeTab === "Profile" && (
              <div>
                <h2 className="text-xl font-bold">Profile Management</h2>
                <div className="mt-4 rounded-xl border border-border bg-card p-6 shadow-card space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div><label className="text-sm text-muted-foreground">Name</label><p className="font-medium">Rajesh Kumar</p></div>
                    <div><label className="text-sm text-muted-foreground">Phone</label><p className="font-medium">+91 98765 43210</p></div>
                    <div><label className="text-sm text-muted-foreground">Services</label><p className="font-medium">Bike Repair, Electrician</p></div>
                    <div><label className="text-sm text-muted-foreground">Experience</label><p className="font-medium">8 years</p></div>
                    <div><label className="text-sm text-muted-foreground">Service Area</label><p className="font-medium">Koramangala, Bangalore</p></div>
                    <div><label className="text-sm text-muted-foreground">Price Range</label><p className="font-medium">₹200 - ₹1500</p></div>
                  </div>
                  <Button>Edit Profile</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TechnicianDashboard;
