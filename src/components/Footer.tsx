import { Link } from "react-router-dom";
import { Wrench } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <Link to="/" className="mb-4 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Wrench className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold">Local<span className="text-primary">Fix</span></span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Trusted repairs at your doorstep. Connecting you with verified local technicians.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-primary transition-colors">Bike Repair</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Mobile Repair</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">AC Repair</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Plumbing</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            <li><Link to="/signup?role=technician" className="hover:text-primary transition-colors">Become a Technician</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">Support</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
        © 2026 LocalFix. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
