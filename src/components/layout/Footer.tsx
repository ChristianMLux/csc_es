import React from "react";
import Link from "next/link";
import { Leaf } from "lucide-react";

export const Footer = () => {
  const footerLinks = [
    {
      title: "Verein",
      items: [
        { name: "Über uns", href: "/about-us" },
        { name: "Mitgliedschaft", href: "/membership" },
        { name: "Aktuelles", href: "/blog" },
      ],
    },
    {
      title: "Service",
      items: [
        { name: "FAQ", href: "/faq" },
        { name: "Kontakt", href: "/contact" },
        { name: "Mitgliederbereich", href: "/login" },
      ],
    },
    {
      title: "Rechtliches",
      items: [
        { name: "Impressum", href: "/impressum" },
        { name: "Datenschutz", href: "/privacypolicy" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-10 w-10 bg-green-600 rounded-full flex items-center justify-center">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl text-white">
                CSC Esslingen
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Cannabis Social Club Esslingen e.V.
              <br />
              Gemeinsam den Wandel gestalten
            </p>
          </div>

          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Cannabis Social Club Esslingen
            e.V. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};
