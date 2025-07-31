"use client";

import React from "react";
import {
  CheckCircle,
  Mail,
  Clock,
  FileText,
  ArrowRight,
  Home,
} from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { NavigationItem } from "@/types";

export default function MembershipSuccess() {
  const navigation: NavigationItem[] = [
    { name: "Start", href: "/" },
    { name: "Über uns", href: "/about-us" },
    { name: "Mitgliedschaft", href: "/membership" },
    { name: "Aktuelles", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Kontakt", href: "/contact" },
  ];

  const nextSteps = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "E-Mail Bestätigung",
      description:
        "Sie erhalten in wenigen Minuten eine Bestätigungs-E-Mail mit Ihrer Antragsnummer.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Prüfung Ihres Antrags",
      description: "Unser Team prüft Ihren Antrag innerhalb von 2-3 Werktagen.",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Zahlungsinformationen",
      description:
        "Nach erfolgreicher Prüfung senden wir Ihnen die Zahlungsinformationen zu.",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Willkommen im Club",
      description:
        "Nach Zahlungseingang sind Sie offizielles Mitglied und erhalten Ihre Zugangsdaten.",
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
            onClick={() => (window.location.href = "/")}
          >
            Zur Startseite
          </Button>
        }
      />

      <main className="max-w-4xl mx-auto px-4 py-20">
        {/* Success Message */}
        <div className="text-center mt-16 mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600 rounded-full mb-6">
            <CheckCircle className="h-12 w-12 text-white" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Vielen Dank für Ihren Antrag!
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ihr Mitgliedschaftsantrag wurde erfolgreich übermittelt. Wir freuen
            uns, Sie bald in unserer Community begrüßen zu dürfen.
          </p>
        </div>

        {/* Next Steps */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-green-900/20 to-purple-900/20">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Die nächsten Schritte
            </h2>
            <div className="space-y-6">
              {nextSteps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mr-4">
                    <div className="text-green-600">{step.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Important Info */}
        <section className="mb-12">
          <Card>
            <h3 className="text-xl font-semibold mb-4">
              Wichtige Informationen
            </h3>
            <div className="space-y-3 text-gray-300">
              <p>
                <strong>Antragsnummer:</strong> Ihre individuelle Antragsnummer
                erhalten Sie per E-Mail. Bitte bewahren Sie diese für Rückfragen
                auf.
              </p>
              <p>
                <strong>Bearbeitungszeit:</strong> Die Bearbeitung dauert in der
                Regel 2-3 Werktage. In Ausnahmefällen kann es zu Verzögerungen
                kommen.
              </p>
              <p>
                <strong>Spam-Ordner:</strong> Bitte überprüfen Sie auch Ihren
                Spam-Ordner, falls Sie keine E-Mail von uns erhalten sollten.
              </p>
              <p>
                <strong>Kontakt:</strong> Bei Fragen können Sie uns jederzeit
                unter{" "}
                <a
                  href="mailto:info@csc-esslingen.com"
                  className="text-green-600 hover:underline"
                >
                  info@csc-esslingen.com
                </a>{" "}
                erreichen.
              </p>
            </div>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h3 className="text-2xl font-bold mb-4">Während Sie warten...</h3>
          <p className="text-gray-400 mb-8">
            Erfahren Sie mehr über unseren Verein und bleiben Sie auf dem
            Laufenden
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => (window.location.href = "/ueber-uns")}
            >
              Über uns erfahren
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => (window.location.href = "/aktuelles")}
            >
              Aktuelle News
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="mt-12">
            <Button
              variant="ghost"
              size="md"
              onClick={() => (window.location.href = "/")}
            >
              <Home className="mr-2 h-5 w-5" />
              Zur Startseite
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
