
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles } from "lucide-react";
import { useWaitingList } from "@/hooks/useWaitingList";

export const HeroSection = () => {
  const [email, setEmail] = useState("");
  const { addToWaitingList, isLoading } = useWaitingList();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    const result = await addToWaitingList(email, 'hero_section');
    if (result.success) {
      setEmail("");
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-36 pb-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img
              src="/lemonotelogo.png"
              alt="Lemonote Logo"
              className="h-44 w-auto"
            />
          </div>

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

          {/* App Screenshots */}
          <div className="mb-12 relative animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-purple-200">
                <img
                  src="/lovable-uploads/2e79b9dc-84da-4644-841c-ab7a124267a4.png"
                  alt="Lemonote Categories Interface"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-purple-200">
                <img
                  src="/lovable-uploads/fee51237-5a98-46ae-a79f-b37ef6d21393.png"
                  alt="Lemonote Settings Interface"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-purple-200">
                <img
                  src="/lovable-uploads/47038e5b-af50-47d0-8804-423876009304.png"
                  alt="Lemonote Recipe Note Interface"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Integration Section */}
          <div className="mb-12 animate-fade-in">
            <p className="text-lg text-gray-600 mb-6">Connect our features with your favourite note apps</p>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              {/* Notion */}
              <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center">
                <img
                  src="/notionlogo.png"
                  alt="Notion"
                  className="w-8 h-8 object-contain"
                />
              </div>

              {/* Obsidian */}
              <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center">
                <img
                  src="/obsidianlogo.png"
                  alt="Obsidian"
                  className="w-8 h-8 object-contain"
                />
              </div>

              {/* OneNote */}
              <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center">
                <img
                  src="/onenotelogo.png"
                  alt="OneNote"
                  className="w-8 h-8 object-contain"
                />
              </div>

              {/* Evernote */}
              <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center">
                <img
                  src="/evernotelogo.png"
                  alt="Evernote"
                  className="w-8 h-8 object-contain"
                />
              </div>
            </div>
          </div>


          {/* CTA Form - Vertical */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto animate-fade-in">
            <div className="space-y-3 mb-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 bg-white/90 backdrop-blur-sm border-purple-200 focus:border-purple-400"
                required
                disabled={isLoading}
              />
              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium"
                disabled={isLoading}
              >
                {isLoading ? "Joining..." : "Join the Waiting List"}
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
