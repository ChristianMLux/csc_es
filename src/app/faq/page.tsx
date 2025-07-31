"use client";
import React, { useState } from "react";
import { ChevronDown, Search, HelpCircle, Users, Shield } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { NavigationItem } from "@/types";
import Link from "next/link";

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const navigation: NavigationItem[] = [
    { name: "Start", href: "/" },
    { name: "Über uns", href: "/about-us" },
    { name: "Mitgliedschaft", href: "/membership" },
    { name: "Aktuelles", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Kontakt", href: "/contact" },
  ];

  const faqCategories = [
    {
      title: "Mitgliedschaft",
      icon: <Users className="h-6 w-6" />,
      questions: [
        {
          q: "Wie kann ich Mitglied werden?",
          a: "Füllen Sie einfach unser Online-Antragsformular aus...",
        },
        {
          q: "Welche Voraussetzungen muss ich erfüllen?",
          a: "Sie müssen mindestens 18 Jahre alt sein...",
        },
      ],
    },
    {
      title: "Rechtliches",
      icon: <Shield className="h-6 w-6" />,
      questions: [
        {
          q: "Ist der Club legal?",
          a: "Ja, unser Verein handelt vollständig im Rahmen des CanG.",
        },
        {
          q: "Welche Mengen darf ich erhalten?",
          a: "Maximal 25g pro Tag und 50g pro Monat.",
        },
      ],
    },
  ];

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const filteredCategories = faqCategories
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (item) =>
          item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.a.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((category) => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar
        navigation={navigation}
        ctaButton={
          <Link href="/membership/application">
            <Button variant="primary" size="sm">
              Mitglied werden
            </Button>
          </Link>
        }
      />
      <main>
        <section className="py-20 bg-gradient-to-br from-green-900/20 via-gray-900 to-gray-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-6">
              <HelpCircle className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-6">Häufig gestellte Fragen</h1>
            <p className="text-xl text-gray-300 mb-8">
              Finden Sie Antworten auf die wichtigsten Fragen rund um den CSC
              Esslingen
            </p>
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Suchen Sie nach Ihrer Frage..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              />
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredCategories.length === 0 ? (
              <Card className="text-center py-12">
                <p className="text-gray-400 text-lg">Keine Fragen gefunden.</p>
              </Card>
            ) : (
              <div className="space-y-8">
                {filteredCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <div className="flex items-center mb-6">
                      <div className="text-green-600 mr-3">{category.icon}</div>
                      <h2 className="text-2xl font-bold">{category.title}</h2>
                    </div>
                    <div className="space-y-4">
                      {category.questions.map((item, questionIndex) => {
                        const key = `${categoryIndex}-${questionIndex}`;
                        const isOpen = openItems[key];
                        return (
                          <Card
                            key={questionIndex}
                            className="cursor-pointer transition-all"
                            onClick={() =>
                              toggleQuestion(categoryIndex, questionIndex)
                            }
                          >
                            <div className="flex items-start justify-between">
                              <h3 className="text-lg font-semibold pr-4">
                                {item.q}
                              </h3>
                              <ChevronDown
                                className={`h-5 w-5 text-gray-400 flex-shrink-0 transition-transform ${
                                  isOpen ? "rotate-180" : ""
                                }`}
                              />
                            </div>
                            {isOpen && (
                              <div className="mt-4 text-gray-300 border-t border-gray-700 pt-4">
                                {item.a}
                              </div>
                            )}
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ihre Frage war nicht dabei?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Wir helfen Ihnen gerne persönlich weiter
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt">
                <Button variant="primary" size="lg">
                  Kontakt aufnehmen
                </Button>
              </Link>
              <a href="mailto:info@csc-esslingen.com">
                <Button variant="outline" size="lg">
                  E-Mail schreiben
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
