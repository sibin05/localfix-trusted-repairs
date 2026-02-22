import { Shield, Users, Heart, Target } from "lucide-react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const values = [
  { icon: Shield, title: "Trust & Safety", desc: "Every technician is background-verified and skill-tested before joining our platform." },
  { icon: Users, title: "Community First", desc: "We empower local technicians by providing them a platform to grow their business." },
  { icon: Heart, title: "Customer Obsessed", desc: "Your satisfaction is our priority. 30-day service warranty on every booking." },
  { icon: Target, title: "Transparency", desc: "Upfront pricing, honest reviews, and no hidden charges. What you see is what you pay." },
];

const About = () => (
  <Layout>
    <section className="hero-gradient py-20 text-center">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-extrabold text-primary-foreground md:text-5xl">About LocalFix</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            We're on a mission to make repair services accessible, transparent, and reliable for everyone.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center">Our Story</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed text-center">
            LocalFix was born from a simple frustration — finding a reliable repair technician shouldn't be hard. 
            We started in 2024 with a small team in Bangalore and a big dream: to build the most trusted hyperlocal 
            repair marketplace in India. Today, we connect thousands of customers with skilled, verified technicians 
            across 25+ cities.
          </p>
        </div>
      </div>
    </section>

    <section className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 text-3xl font-bold text-center">Our Values</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl bg-card p-6 shadow-card text-center"
            >
              <v.icon className="mx-auto mb-3 h-10 w-10 text-primary" />
              <h3 className="font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto grid gap-8 px-4 text-center md:grid-cols-4">
        {[
          { value: "2,500+", label: "Technicians" },
          { value: "50,000+", label: "Jobs Completed" },
          { value: "25+", label: "Cities" },
          { value: "4.8★", label: "Average Rating" },
        ].map((s) => (
          <div key={s.label}>
            <div className="text-3xl font-bold text-primary">{s.value}</div>
            <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default About;
