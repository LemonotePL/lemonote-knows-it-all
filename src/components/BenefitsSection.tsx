
import { Clock, FolderOpen, Search, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Clock,
    title: "Automation that saves hours",
    description: "Our artificial intelligence works for you 24/7, analysing, categorising and summarising content from screenshots while you focus on what matters most."
  },
  {
    icon: FolderOpen,
    title: "No more digital chaos",
    description: "All your visual notes go into one intelligently organised place. No more searching through your phone's gallery for that one important screenshot."
  },
  {
    icon: Search,
    title: "Knowledge at your fingertips",
    description: "With a powerful search engine and tagging, you'll find every piece of information you've saved in seconds. Definitions, data, quotes - everything is instantly accessible."
  },
  {
    icon: Zap,
    title: "Build your knowledge base effortlessly",
    description: "Lemonote works passively, in the background. You don't have to change your habits. Just take screenshots as you always do and we'll do the rest."
  }
];

export const BenefitsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Take back control of information and your valuable time
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white/70 backdrop-blur-sm border-purple-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
