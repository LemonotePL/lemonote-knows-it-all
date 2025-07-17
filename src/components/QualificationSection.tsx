
import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const questions = [
  "Do you have over 100 unstructured screenshots on your phone?",
  "Do you use Notion / Obsidian / OneNote / Evernote but lack the time to take notes?",
  "Does your work or study require constant online research?",
  "Do you believe that automation is the key to higher productivity?"
];

export const QualificationSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Is Lemonote for you?</h2>
          </div>
          
          <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
            <CardContent className="p-8">
              <div className="space-y-6 mb-8">
                {questions.map((question, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700">{question}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-purple-200">
                <p className="text-lg font-semibold text-center text-gray-900">
                  If you answered "yes" at least once, you are in the perfect place.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
