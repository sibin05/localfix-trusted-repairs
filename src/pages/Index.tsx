import { Link } from "react-router-dom";
import { Search, Star, Shield, Clock, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { serviceCategories, technicians } from "@/lib/mockData";
import TechnicianCard from "@/components/TechnicianCard";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { useState } from "react";

const stats = [
  { label: "Verified Technicians", value: "2,500+" },
  { label: "Services Completed", value: "50,000+" },
  { label: "Happy Customers", value: "45,000+" },
  { label: "Cities Served", value: "25+" },
];

const howItWorks = [
  { step: "1", title: "Choose a Service", desc: "Select from our wide range of repair categories" },
  { step: "2", title: "Pick a Technician", desc: "Browse verified pros near you with ratings & reviews" },
  { step: "3", title: "Book & Relax", desc: "Schedule at your convenience, pay after service" },
];

const Index = () => {
  const [search, setSearch] = useState("");

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden hero-gradient py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsla(152,60%,45%,0.15),_transparent_60%)]" />
        <div className="container relative mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground">
              ⭐ Trusted by 45,000+ customers
            </span>
            <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold leading-tight text-primary-foreground md:text-6xl">
              Book Trusted Local Repair Services{" "}
              <span className="opacity-90">Instantly</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-primary-foreground/80">
              Connect with verified technicians near you for bike, mobile, laptop, AC, plumbing & electrical repairs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mx-auto mt-8 flex max-w-lg items-center gap-2 rounded-xl bg-card p-2 shadow-card-hover"
          >
            <Search className="ml-3 h-5 w-5 text-muted-foreground" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="What needs repair?"
              className="flex-1 border-0 bg-transparent shadow-none focus-visible:ring-0"
            />
            <Link to={`/services${search ? `?q=${search}` : ""}`}>
              <Button>Search</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-card py-6">
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-8 px-4 md:gap-16">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-bold text-primary">{s.value}</div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold">Our Services</h2>
            <p className="mt-2 text-muted-foreground">Professional repair services across all categories</p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {serviceCategories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Link to={`/services?category=${cat.slug}`}>
                  <div className="group rounded-xl border border-border bg-card p-6 text-center shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-primary/30">
                    <div className="mx-auto mb-3 text-4xl">{cat.icon}</div>
                    <h3 className="font-semibold text-card-foreground">{cat.name}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{cat.description}</p>
                    <ChevronRight className="mx-auto mt-2 h-4 w-4 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold">How It Works</h2>
            <p className="mt-2 text-muted-foreground">Get your repairs done in 3 simple steps</p>
          </div>
          <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-3">
            {howItWorks.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="rounded-xl bg-card p-6 text-center shadow-card"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  {item.step}
                </div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Technicians */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold">Top Technicians</h2>
              <p className="mt-1 text-muted-foreground">Highest-rated pros near you</p>
            </div>
            <Link to="/services">
              <Button variant="ghost" className="gap-1">
                View all <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {technicians.slice(0, 3).map((t, i) => (
              <TechnicianCard key={t.id} technician={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Why Choose LocalFix?</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { icon: Shield, title: "Verified Technicians", desc: "Background-checked and skill-verified professionals" },
              { icon: Star, title: "Quality Guaranteed", desc: "30-day warranty on all repair services" },
              { icon: Clock, title: "Quick & Reliable", desc: "Same-day service available in most areas" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl bg-card p-6 shadow-card"
              >
                <item.icon className="mx-auto mb-3 h-10 w-10 text-primary" />
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground">Ready to Get Started?</h2>
          <p className="mt-3 text-primary-foreground/80">Join thousands of happy customers using LocalFix</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link to="/signup">
              <Button size="lg" variant="secondary">Sign Up Free</Button>
            </Link>
            <Link to="/signup?role=technician">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Join as Technician
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
