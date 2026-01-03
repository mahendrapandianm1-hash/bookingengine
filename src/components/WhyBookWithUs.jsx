import { BadgeCheck, Wallet, Headphones, ShieldCheck } from "lucide-react";

export default function WhyBookWithUs() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair">
            Why Book With Us
          </h2>
          <p className="text-gray-500 mt-2">
            Trusted by thousands of guests worldwide
          </p>
        </div>

        {/* Trust Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <TrustCard
            icon={<BadgeCheck />}
            title="Best Price Guarantee"
            desc="Get the best deals with no hidden charges."
          />

          <TrustCard
            icon={<Wallet />}
            title="Free Cancellation"
            desc="Plans changed? Cancel without extra fees."
          />

          <TrustCard
            icon={<Headphones />}
            title="24/7 Customer Support"
            desc="We’re here anytime to assist your booking."
          />

          <TrustCard
            icon={<ShieldCheck />}
            title="Secure Payments"
            desc="Your transactions are fully protected."
          />

        </div>
      </div>
    </section>
  );
}

function TrustCard({ icon, title, desc }) {
  return (
    <div className="flex flex-col items-center text-center bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition">
      
      <div className="bg-indigo-100 text-indigo-600 p-4 rounded-full mb-4">
        {icon}
      </div>

      <h3 className="text-lg font-semibold mb-1">
        {title}
      </h3>

      <p className="text-sm text-gray-500">
        {desc}
      </p>
    </div>
  );
}
