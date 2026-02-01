import React from 'react';
import { PhoneOff, Clock, DollarSign, Moon } from 'lucide-react';

const PainPoints = () => {
  const painPoints = [
    {
      icon: PhoneOff,
      title: "Missed Calls = Lost Revenue?",
      description: "Convert every call into business with 24/7 AI answering—capture leads around the clock.",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Clock,
      title: "Stressed by Constant Interruptions?",
      description: "Automate routine call handling, freeing your day for productive, focused work.",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: DollarSign,
      title: "Struggling with High Reception Costs?",
      description: "Affordable AI receptionist at a fraction of traditional human-based services.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Moon,
      title: "Frustrated by After-hours Gaps?",
      description: "Round-the-clock call coverage ensures you never miss a lead or important inquiry.",
      color: "bg-blue-100 text-blue-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
            Transform Your Business Challenges
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stop losing opportunities due to missed calls and inefficient phone handling
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className={`w-12 h-12 rounded-xl ${point.color} flex items-center justify-center mb-6`}>
                <point.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-4">
                {point.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;