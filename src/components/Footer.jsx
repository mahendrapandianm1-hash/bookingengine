import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold text-white mb-3">
              Carry PMS
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Smart hotel booking and property management platform.
            </p>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-semibold text-white mb-3">Address</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1" />
                123 Beach Road,<br />
                Chennai, Tamil Nadu – 600001
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                +91 98765 43210
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                support@carrypms.com
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Carry PMS. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
