"use client";

import React, { useState, useEffect } from "react";

import {
  ChevronDown,
  Calendar,
  Users,
  Leaf,
  Shield,
  ArrowRight,
  Check,
} from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AgeVerificationModal } from "@/components/modals/AgeVerificationModal";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { NavigationItem } from "@/types";
import Link from "next/link";

export default function App() {
  const [showAgeModal, setShowAgeModal] = useState(true);

  const navigation: NavigationItem[] = [
    { name: "Über uns", href: "/about-us" },
    { name: "Mitgliedschaft", href: "/membership" },
    { name: "Aktuelles", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Kontakt", href: "/contact" },
  ];

  const features = [
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Höchste Qualität",
      description:
        "Beste Genetik und modernste Anbautechniken für Premium-Cannabis",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Gemeinschaft",
      description:
        "Engagierte Community mit erfahrenen Growern und Cannabis-Enthusiasten",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Legal & Sicher",
      description:
        "Vollständig legal nach dem CanG, mit höchsten Sicherheitsstandards",
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Transparenz",
      description:
        "Nachhaltige Vereinsführung zum Selbstkostenpreis für alle Mitglieder",
    },
  ];

  const benefits = [
    "Cannabis und Cannabisprodukte zum Selbstkostenpreis",
    "Zugang zu Premium-Genetik und Stecklingen",
    "Professionelle Beratung durch erfahrene Grower",
    "Exklusive Mitgliederveranstaltungen und Workshops",
    "Mitbestimmung bei Vereinsentscheidungen",
    "Teil einer legalen Cannabis-Community werden",
  ];

  const handleVerify = () => {
    sessionStorage.setItem("ageVerified", "true");
    setShowAgeModal(false);
  };

  const handleLeave = () => {
    window.location.href = "https://www.google.com";
  };

  useEffect(() => {
    if (sessionStorage.getItem("ageVerified") === "true") {
      setShowAgeModal(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <AgeVerificationModal
        isOpen={showAgeModal}
        onVerify={handleVerify}
        onLeave={handleLeave}
      />

      <Navbar
        navigation={navigation}
        ctaButton={
          <Link href="/mitgliedschaft/antrag">
            <Button variant="primary" size="sm">
              Mitglied werden
            </Button>
          </Link>
        }
      />

      <main className={showAgeModal ? "hidden" : "block"}>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-gray-900 to-gray-950"></div>
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-green-600/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Von Esslingen
              <br />
              Für Esslingen
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Der erste legale Cannabis Social Club in Esslingen. Gemeinsam
              gestalten wir den Wandel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/membership/application">
                <Button
                  variant="primary"
                  size="lg"
                  className="transform hover:scale-105"
                >
                  Jetzt Mitglied werden
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/membership">
                <Button variant="secondary" size="lg">
                  Mehr erfahren
                </Button>
              </Link>
            </div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown className="h-8 w-8 text-gray-400" />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Warum CSC Esslingen?</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Wir setzen neue Standards für legalen Cannabis-Konsum in
                Deutschland
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} hover>
                  <div className="text-green-600 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Deine Vorteile als Mitglied
                </h2>
                <p className="text-xl text-gray-400 mb-8">
                  Als Mitglied des CSC Esslingen e.V. profitierst du von
                  zahlreichen exklusiven Vorteilen:
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 lg:mt-0">
                <Card className="bg-gradient-to-br from-green-600/20 to-purple-600/20">
                  <h3 className="text-2xl font-bold mb-4">Mitgliedsbeitrag</h3>
                  <div className="mb-6">
                    <span className="text-5xl font-bold">25€</span>
                    <span className="text-gray-400 ml-2">/ Monat</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-300">
                      <Check className="h-5 w-5 text-green-600 mr-2" />
                      Einmalige Aufnahmegebühr: 20€
                    </li>
                    <li className="flex items-center text-gray-300">
                      <Check className="h-5 w-5 text-green-600 mr-2" />
                      Jederzeit kündbar
                    </li>
                    <li className="flex items-center text-gray-300">
                      <Check className="h-5 w-5 text-green-600 mr-2" />
                      Transparente Verwendung
                    </li>
                  </ul>
                  <Link href="/membership/application">
                    <Button variant="primary" className="w-full">
                      Jetzt Antrag stellen
                    </Button>
                  </Link>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {!showAgeModal && <Footer />}
    </div>
  );
}
