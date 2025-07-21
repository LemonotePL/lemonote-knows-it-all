import { Play } from "lucide-react";

export const ScreenshotSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
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
        </div>
      </div>
    </section>
  );
};
