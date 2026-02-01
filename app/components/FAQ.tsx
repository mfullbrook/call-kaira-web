import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqData } from '../data/faqData';

const FAQ = () => {

  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about CallKaira
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden">
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                onClick={() => toggleItem(index)}
              >
                <h3 className="font-semibold text-lg text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openItems.includes(index) ? (
                  <Minus className="h-5 w-5 text-valencia-500 flex-shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 text-valencia-500 flex-shrink-0" />
                )}
              </button>

              {openItems.includes(index) && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

FAQ.displayName = 'FAQ';

export default FAQ;
