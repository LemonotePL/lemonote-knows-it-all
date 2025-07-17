
import { Play } from "lucide-react";

export const VideoSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">See the magic in action</h2>

          <div className="relative bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl p-8 mb-6">
            <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-700 transition-colors">
                <video
                  controls
                  className="w-full rounded-xl"
                >
                  <source src="/lemonoteteaser.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

              </div>
            </div>
          </div>

          <p className="text-lg text-gray-600">
            See how Lemonote turns chaos into structured knowledge in less than 60 seconds.
          </p>
        </div>
      </div>
    </section>
  );
};
