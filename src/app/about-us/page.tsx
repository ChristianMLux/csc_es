"use client";

import React from "react";
import {
  Target,
  Heart,
  Leaf,
  Users,
  Shield,
  Sparkles,
  ArrowRight,
  Award,
  Zap,
} from "lucide-react";

import { Navbar } from "../../components/layout/Navbar";
import { Button } from "../../components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Footer } from "@/components/layout/Footer";

export default function AboutUs() {
  const navigation = [
    { name: "Start", href: "/" },
    { name: "Über uns", href: "/about-us" },
    { name: "Mitgliedschaft", href: "/membership" },
    { name: "Aktuelles", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Kontakt", href: "/contact" },
  ];

  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Legalität & Sicherheit",
      description:
        "Wir handeln strikt nach dem Cannabisgesetz (CanG) und setzen höchste Sicherheitsstandards um.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Gemeinschaft",
      description:
        "Bei uns steht der respektvolle Umgang miteinander und die gegenseitige Unterstützung im Mittelpunkt.",
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Nachhaltigkeit",
      description:
        "Biologischer Anbau, Recycling und ressourcenschonende Praktiken sind für uns selbstverständlich.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Qualität",
      description:
        "Nur die beste Genetik und modernste Anbautechniken für erstklassige Produkte.",
    },
  ];

  const goals = [
    "Schaffung eines sicheren Rahmens für legalen Cannabis-Konsum",
    "Aufklärung und Prävention in der Gesellschaft",
    "Förderung einer verantwortungsvollen Cannabis-Kultur",
    "Unterstützung der lokalen Community in Esslingen",
    "Wissenschaftlich fundierte Informationsvermittlung",
    "Abbau von Vorurteilen durch transparente Vereinsarbeit",
  ];

  const teamMembers = [
    {
      role: "1. Vorsitzender",
      description: "Vereinsführung und strategische Ausrichtung",
    },
    {
      role: "2. Vorsitzender",
      description: "Stellvertretung und operative Leitung",
    },
    {
      role: "Kassenwart",
      description: "Finanzverwaltung und Buchhaltung",
    },
    {
      role: "Schriftführer",
      description: "Protokollführung und Dokumentation",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar
        navigation={navigation}
        ctaButton={
          <Button
            variant="primary"
            size="sm"
            onClick={() => (window.location.href = "/mitgliedschaft/antrag")}
          >
            Mitglied werden
          </Button>
        }
      />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-96 h-96 bg-green-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Cannabis Social Club
                <span className="block text-green-600">Esslingen e.V.</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Von Esslingen - Für Esslingen. Gemeinsam gestalten wir eine neue
                Ära der Cannabis-Kultur in unserer Stadt.
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="bg-gradient-to-br from-green-900/30 to-transparent">
                <div className="flex items-center mb-4">
                  <Sparkles className="h-8 w-8 text-green-600 mr-3" />
                  <h2 className="text-3xl font-bold">Unsere Vision</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Der CSC Esslingen e.V. wird für seine Mitglieder ab dem
                  Zeitpunkt der Legalität Cannabis und Cannabisprodukte wie
                  Haschisch, Rosin und Stecklinge in höchster Qualität zum
                  Selbstkostenpreis herstellen. Zur Cannabiskultivierung wird
                  die beste Genetik sowie das beste Growequipment am Markt
                  genutzt, wobei erfahrene Grower, welche sich teils seit
                  Jahrzehnten mit der Thematik Cannabis auseinandergesetzt
                  haben, den Prozess leiten.
                </p>
              </Card>

              <Card className="bg-gradient-to-br from-purple-900/30 to-transparent">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-purple-600 mr-3" />
                  <h2 className="text-3xl font-bold">Unsere Mission</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  <strong>
                    "Akzeptanz für Cannabis: Gemeinsam den Wandel gestalten"
                  </strong>
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Der Cannabis Social Club Esslingen e.V. setzt sich
                  weitreichende Ziele im Sinne einer nachhaltigen
                  Vereinsführung, einer Schonung der Umwelt sowie der gerechten
                  Behandlung von allen Interessengruppen. Wir möchten einen
                  nachhaltigen Impact im gesellschaftlichen Leben von Esslingen
                  und darüber hinaus gestalten.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Unsere Werte</h2>
              <p className="text-xl text-gray-400">
                Die Grundpfeiler unserer Vereinsphilosophie
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} hover className="text-center">
                  <div className="text-green-600 mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Goals */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Unsere Ziele</h2>
                <p className="text-xl text-gray-400">
                  Was wir erreichen wollen
                </p>
              </div>

              <Card className="bg-gradient-to-br from-green-900/20 to-purple-900/20">
                <div className="grid md:grid-cols-2 gap-6">
                  {goals.map((goal, index) => (
                    <div key={index} className="flex items-start">
                      <Zap className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-300">{goal}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Unser Vorstand</h2>
              <p className="text-xl text-gray-400">
                Engagierte Menschen für eine gemeinsame Sache
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <Card key={index} className="text-center">
                  <div className="w-20 h-20 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{member.role}</h3>
                  <p className="text-sm text-gray-400">{member.description}</p>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-400 mb-6">
                Aus Datenschutzgründen nennen wir hier keine Namen. Mitglieder
                erhalten alle Kontaktdaten nach der Aufnahme.
              </p>
            </div>
          </div>
        </section>

        {/* Strategy */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Unsere Strategie</h2>
              <p className="text-xl text-gray-400">
                Der Weg zu einer akzeptierten Cannabis-Kultur
              </p>
            </div>

            <Card className="bg-gradient-to-r from-green-900/30 to-purple-900/30">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Um unsere Mission langfristig zu erfüllen, setzen wir auf
                Aufklärungs- und Informationskampagnen, welche darauf abzielen,
                Vorurteile und Missverständnisse rund um Cannabis abzubauen.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Zusätzlich streben wir die Zusammenarbeit mit Fachleuten,
                Behörden und Interessengruppen an, um einen offenen Dialog zu
                fördern.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Unser Fokus liegt zudem auf der Förderung einer nachhaltigen
                Kultur rund um Cannabis, die Respekt, Vernunft und Verantwortung
                betont. Wir setzen uns dafür ein, Cannabis für die Gesellschaft
                zugänglich zu machen.
              </p>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-6">
              Werden Sie Teil der Bewegung
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Gestalten Sie mit uns die Zukunft der Cannabis-Kultur in Esslingen
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="xl"
                onClick={() =>
                  (window.location.href = "/mitgliedschaft/antrag")
                }
              >
                Jetzt Mitglied werden
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="xl"
                onClick={() => (window.location.href = "/kontakt")}
              >
                Kontakt aufnehmen
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
