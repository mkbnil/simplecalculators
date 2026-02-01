export type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQ({ items }: { items: FAQItem[] }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>

      <div className="space-y-4">
        {items.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border p-4"
          >
            <h3 className="font-medium">{faq.question}</h3>
            <p className="text-gray-600 text-sm mt-1">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
