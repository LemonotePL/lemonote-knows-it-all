
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Smile } from "lucide-react";
import { useWaitingList } from "@/hooks/useWaitingList";

export const FinalCTASection = () => {
  const [email, setEmail] = useState("");
  const { addToWaitingList, isLoading } = useWaitingList();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    const result = await addToWaitingList(email, 'final_cta');
    if (result.success) {
      setEmail("");
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stop hoarding. Start knowing.
          </h2>
          
          <p className="text-xl mb-12 text-purple-100 leading-relaxed">
            Be one of the first to bring digital chaos under control. Sign up for the waiting list and receive early access and valuable productivity tips straight to your inbox.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="space-y-3 mb-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-12 bg-white/90 backdrop-blur-sm border-white/20 text-gray-900 placeholder:text-gray-500"
                    required
                    disabled={isLoading}
                  />
                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-white text-purple-600 hover:bg-gray-100 font-medium"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing up..." : "Sign me up for the list!"}
                  </Button>
                </div>
              </form>
            </div>
            
            <div className="flex justify-center">
              <div className="w-48 h-48 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Smile className="w-24 h-24 text-white/70" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
