import React, { useState } from 'react';

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (faqId) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  return (
    <section className="bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-gray-600">
            Have questions? We’ve got answers.
          </p>
        </div>
        <div className="mt-12 space-y-4">
          {[
            { id: 'faq1', question: 'What services do you offer?', answer: 'We offer a wide range of services including web development, mobile development, UX/UI design, system development, and game development.' },
            { id: 'faq2', question: 'How can I contact you?', answer: 'You can contact us via email at contact@ourcompany.com or call us at (123) 456-7890.' },
            { id: 'faq3', question: 'What are your business hours?', answer: 'Our business hours are Monday to Friday, 9 AM to 6 PM.' },
            { id: 'faq4', question: 'Do you offer support?', answer: 'Yes, we offer 24/7 support to our clients. You can reach our support team at support@ourcompany.com.' },
            { id: 'faq5', question: 'What payment methods do you accept?', answer: 'We accept all major credit cards, PayPal, and bank transfers.' }
          ].map(({ id, question, answer }) => (
            <div key={id} className="bg-white p-6 rounded-lg shadow-lg">
              <button
                className="w-full text-left flex justify-between items-center"
                onClick={() => toggleFAQ(id)}
              >
                <span className="text-xl font-bold">{question}</span>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${openFAQ === id ? 'rotate-45' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                </svg>
              </button>
              <div className={`mt-4 ${openFAQ === id ? '' : 'hidden'}`}>
                <p className="text-gray-600">{answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
