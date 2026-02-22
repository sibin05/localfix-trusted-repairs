import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { technicians, serviceCategories } from "@/lib/mockData";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { toast } from "sonner";

const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const tech = technicians.find((t) => t.id === id);
  const [step, setStep] = useState(1);
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [address, setAddress] = useState("");
  const [confirmed, setConfirmed] = useState(false);

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

  const handleConfirm = () => {
    setConfirmed(true);
    toast.success("Booking confirmed successfully!");
  };

  if (confirmed) {
    return (
      <Layout>
        <div className="container mx-auto flex min-h-[60vh] items-center justify-center px-4">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="max-w-md text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent">
              <CheckCircle className="h-8 w-8 text-accent-foreground" />
            </div>
            <h2 className="mt-4 text-2xl font-bold">Booking Confirmed!</h2>
            <p className="mt-2 text-muted-foreground">
              Your booking with {tech.name} for {service} on {date} at {time} has been confirmed.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <Link to="/dashboard"><Button>View Dashboard</Button></Link>
              <Link to="/"><Button variant="outline">Back Home</Button></Link>
            </div>
          </motion.div>
        </div>
      </Layout>
    );
  }

  const initials = tech.name.split(" ").map((n) => n[0]).join("");

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Link to={`/technician/${tech.id}`} className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to profile
        </Link>

        <div className="mx-auto mt-4 max-w-2xl">
          {/* Progress */}
          <div className="mb-8 flex items-center justify-center gap-2">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${s <= step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                  {s}
                </div>
                {s < 3 && <div className={`h-0.5 w-12 ${s < step ? "bg-primary" : "bg-muted"}`} />}
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            {/* Tech info */}
            <div className="mb-6 flex items-center gap-3 border-b border-border pb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">{initials}</div>
              <div>
                <h3 className="font-semibold">{tech.name}</h3>
                <p className="text-sm text-muted-foreground">{tech.location}</p>
              </div>
            </div>

            {step === 1 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                <h2 className="text-lg font-semibold">Select Service</h2>
                <div className="grid gap-2">
                  {tech.services.map((s) => (
                    <button
                      key={s}
                      onClick={() => setService(s)}
                      className={`rounded-lg border p-4 text-left text-sm font-medium transition-all ${service === s ? "border-primary bg-primary/5 text-primary" : "border-border hover:border-primary/30"}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
                <Button onClick={() => setStep(2)} disabled={!service} className="w-full">Continue</Button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                <h2 className="text-lg font-semibold">Select Date & Time</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label className="flex items-center gap-1 mb-1.5"><Calendar className="h-3.5 w-3.5" /> Date</Label>
                    <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} min={new Date().toISOString().split("T")[0]} />
                  </div>
                  <div>
                    <Label className="flex items-center gap-1 mb-1.5"><Clock className="h-3.5 w-3.5" /> Time</Label>
                    <Select value={time} onValueChange={setTime}>
                      <SelectTrigger><SelectValue placeholder="Select time" /></SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setStep(1)} className="flex-1">Back</Button>
                  <Button onClick={() => setStep(3)} disabled={!date || !time} className="flex-1">Continue</Button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                <h2 className="text-lg font-semibold">Confirm Booking</h2>
                <div>
                  <Label className="flex items-center gap-1 mb-1.5"><MapPin className="h-3.5 w-3.5" /> Service Address</Label>
                  <Input value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter your full address" />
                </div>
                <div className="rounded-lg bg-secondary p-4 space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-muted-foreground">Service</span><span className="font-medium">{service}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Date</span><span className="font-medium">{date}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Time</span><span className="font-medium">{time}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Technician</span><span className="font-medium">{tech.name}</span></div>
                  <div className="flex justify-between border-t border-border pt-2"><span className="font-medium">Estimated Price</span><span className="font-bold text-primary">{tech.priceRange}</span></div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setStep(2)} className="flex-1">Back</Button>
                  <Button onClick={handleConfirm} disabled={!address} className="flex-1">Confirm Booking</Button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Booking;
