
import { Camera, Brain, BookOpen } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Camera,
    title: "Take a Screenshot",
    description: "Do you see something important? An article, data, graph, inspiration? Take a screenshot like you always do."
  },
  {
    number: "2",
    icon: Brain,
    title: "Lemonote Analyses in the Background",
    description: "Our app automatically detects the new screenshot, reads its content, identifies the key information and creates a note."
  },
  {
    number: "3",
    icon: BookOpen,
    title: "Use Ready Knowledge",
    description: "Open Lemonote to browse, search and use your intelligently organised notes."
  }
];

export const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your knowledge in 3 easy steps
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-purple-600">{step.number}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-purple-300 to-indigo-300 -translate-x-1/2"></div>
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
