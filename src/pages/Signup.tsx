import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [role, setRole] = useState<"customer" | "technician">("customer");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Account created! (Demo)");
  };

  return (
    <div className="flex min-h-screen">
      <div className="hidden w-1/2 hero-gradient items-center justify-center lg:flex">
        <div className="max-w-md text-center text-primary-foreground">
          <Wrench className="mx-auto h-16 w-16 mb-6 opacity-80" />
          <h2 className="text-3xl font-bold">Join LocalFix</h2>
          <p className="mt-3 opacity-80">Trusted repairs at your doorstep</p>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <Link to="/" className="mb-8 flex items-center gap-2 justify-center">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <Wrench className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">Local<span className="text-primary">Fix</span></span>
          </Link>
          <h1 className="text-2xl font-bold text-center">Create account</h1>

          <div className="mt-4 flex rounded-lg bg-secondary p-1">
            <button onClick={() => setRole("customer")} className={`flex-1 rounded-md py-2 text-sm font-medium transition-colors ${role === "customer" ? "bg-card shadow-sm" : "text-muted-foreground"}`}>
              Customer
            </button>
            <button onClick={() => setRole("technician")} className={`flex-1 rounded-md py-2 text-sm font-medium transition-colors ${role === "technician" ? "bg-card shadow-sm" : "text-muted-foreground"}`}>
              Technician
            </button>
          </div>

          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            <div>
              <Label>Full Name</Label>
              <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" required />
            </div>
            <div>
              <Label>Email</Label>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required />
            </div>
            <div>
              <Label>Phone</Label>
              <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 98765 43210" />
            </div>
            <div>
              <Label>Password</Label>
              <div className="relative">
                <Input type={showPw ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Min 8 characters" required />
                <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <Button type="submit" className="w-full">Create Account</Button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-primary hover:underline">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
