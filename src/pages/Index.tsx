
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Index = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you for your interest!");
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white p-4">
      <div className="max-w-md w-full">
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <div className="inline-block">
              <span className="px-3 py-1 text-sm bg-slate-100 rounded-full text-slate-600 font-medium animate-fade-in">
                Coming Soon
              </span>
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl animate-title">
              Something amazing is in the works
            </h1>
            <p className="text-slate-600 max-w-sm mx-auto animate-fade-in">
              We're crafting something special. Sign up to be the first to know when we launch.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 animate-fade-in">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" className="bg-slate-900 hover:bg-slate-800 transition-colors">
              Notify me
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
