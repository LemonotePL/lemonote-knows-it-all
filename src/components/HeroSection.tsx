
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Smartphone, ArrowRight, Sparkles } from "lucide-react";

export const HeroSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // Handle email submission here
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-20 pb-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-purple-200 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">AI-Powered Knowledge Management</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-indigo-800 bg-clip-text text-transparent mb-6 animate-fade-in leading-tight">
            Your second brain that takes notes on its own
          </h1>

          {/* Sub Headline */}
          <h2 className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Lemonote is the first app that passively analyses your screenshots and turns digital chaos into an intelligent, searchable knowledge base. Stop collecting, start using.
          </h2>

          {/* Visualization */}
          <div className="mb-12 relative animate-fade-in">
            <div className="relative max-w-2xl mx-auto">
              <div className="grid grid-cols-3 gap-4 mb-8 opacity-60">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>
                    <Smartphone className="w-full h-full p-4 text-gray-400" />
                  </div>
                ))}
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <ArrowRight className="w-12 h-12 text-purple-600 animate-bounce" />
              </div>
              
              <div className="mt-8 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-200 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <span className="text-sm font-medium text-gray-600 ml-2">Lemonote</span>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-3 bg-purple-200 rounded w-2/3"></div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto animate-fade-in">
            <div className="flex gap-3 mb-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 bg-white/90 backdrop-blur-sm border-purple-200 focus:border-purple-400"
                required
              />
              <Button type="submit" className="h-12 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium">
                Join the Waiting List
              </Button>
            </div>
            <p className="text-sm text-gray-500">
              You will also get access to our newsletter with the best productivity tips.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
