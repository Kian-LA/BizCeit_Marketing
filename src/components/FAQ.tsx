import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
}

const FAQ: React.FC<FAQProps> = ({ items, title = "Frequently Asked Questions" }) => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="bg-white rounded-2xl p-8 my-8">
      <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">{title}</h3>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
            >
              <span className="font-medium text-slate-900">{item.question}</span>
              {openItems.includes(index) ? (
                <ChevronUp className="text-lime-600 flex-shrink-0" size={20} />
              ) : (
                <ChevronDown className="text-slate-400 flex-shrink-0" size={20} />
              )}
            </button>
            {openItems.includes(index) && (
              <div className="px-6 pb-4 text-slate-600 border-t border-slate-100">
                <p className="pt-4">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;