
import { Award } from "lucide-react";

export const SocialProofSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Trusted by the best</h2>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            We are a proud participant in the Innovations Hub Foundation's incubation programme which supports the most innovative and promising technology startups in the region.
          </p>
          
          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-8 inline-flex items-center gap-4">
              <img 
                src="/IHF.png" 
                alt="Innovations Hub Foundation" 
                className="w-12 h-12 object-contain"
              />
              <div className="text-left">
                <div className="font-semibold text-gray-900">Innovations Hub Foundation</div>
                <div className="text-sm text-gray-600">Incubation Programme Participant</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
