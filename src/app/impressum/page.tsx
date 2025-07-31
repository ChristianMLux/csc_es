import React from "react";
import { FileText, Mail, Phone, Home, Scale, Users } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Card } from "@/components/ui/Card";

export default function Impressum() {
  const navigation = [
    { name: "Start", href: "/" },
    { name: "Über uns", href: "/about-us" },
    { name: "Mitgliedschaft", href: "/membership" },
    { name: "Aktuelles", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Kontakt", href: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar navigation={navigation} ctaButton={undefined} />

      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-6">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Impressum</h1>
            <p className="text-xl text-gray-400">Angaben gemäß § 5 TMG</p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Vereinsangaben */}
            <Card>
              <div className="flex items-start mb-4">
                <Home className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-semibold mb-4">
                    Vereinsangaben
                  </h2>
                  <div className="space-y-2 text-gray-300">
                    <p>
                      <strong className="text-white">
                        Cannabis Social Club Esslingen e.V.
                      </strong>
                    </p>
                    <p>Musterstraße 123</p>
                    <p>73728 Esslingen am Neckar</p>
                    <p>Deutschland</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Vertreten durch */}
            <Card>
              <div className="flex items-start mb-4">
                <Users className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-semibold mb-4">
                    Vertreten durch
                  </h2>
                  <div className="text-gray-300">
                    <p>Vorstand gemäß § 26 BGB:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>
                        1. Vorsitzender: [Name wird nach Vereinsgründung
                        ergänzt]
                      </li>
                      <li>
                        2. Vorsitzender: [Name wird nach Vereinsgründung
                        ergänzt]
                      </li>
                    </ul>
                    <p className="mt-4 text-sm text-gray-400">
                      Der Verein wird gerichtlich und außergerichtlich durch
                      zwei Mitglieder des Vorstands gemeinschaftlich vertreten.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Kontakt */}
            <Card>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Mail className="h-6 w-6 text-green-600 mr-3" />
                Kontakt
              </h2>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-gray-500" />
                  Telefon: [Wird nach Vereinsgründung ergänzt]
                </p>
                <p className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-gray-500" />
                  E-Mail:{" "}
                  <a
                    href="mailto:info@csc-esslingen.com"
                    className="text-green-600 hover:underline ml-1"
                  >
                    info@csc-esslingen.com
                  </a>
                </p>
              </div>
            </Card>

            {/* Registereintrag */}
            <Card>
              <div className="flex items-start mb-4">
                <Scale className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-semibold mb-4">
                    Registereintrag
                  </h2>
                  <div className="space-y-2 text-gray-300">
                    <p>Eintragung im Vereinsregister</p>
                    <p>Registergericht: Amtsgericht Stuttgart</p>
                    <p>Registernummer: [Wird nach Eintragung ergänzt]</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Verantwortlich für den Inhalt */}
            <Card>
              <h2 className="text-2xl font-semibold mb-4">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <div className="text-gray-300">
                <p>[Name des Verantwortlichen]</p>
                <p>Musterstraße 123</p>
                <p>73728 Esslingen am Neckar</p>
              </div>
            </Card>

            {/* Haftungsausschluss */}
            <Card className="bg-gray-800/50">
              <h2 className="text-2xl font-semibold mb-4">
                Haftungsausschluss
              </h2>
              <div className="space-y-4 text-gray-300 text-sm">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Haftung für Inhalte
                  </h3>
                  <p>
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                    Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                    verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                    Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                    gespeicherte fremde Informationen zu überwachen oder nach
                    Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                    hinweisen.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Haftung für Links
                  </h3>
                  <p>
                    Unser Angebot enthält Links zu externen Websites Dritter,
                    auf deren Inhalte wir keinen Einfluss haben. Deshalb können
                    wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                    Für die Inhalte der verlinkten Seiten ist stets der
                    jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Urheberrecht
                  </h3>
                  <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke
                    auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                    Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                    der Verwertung außerhalb der Grenzen des Urheberrechtes
                    bedürfen der schriftlichen Zustimmung des jeweiligen Autors
                    bzw. Erstellers.
                  </p>
                </div>
              </div>
            </Card>

            {/* Hinweis */}
            <Card className="bg-green-900/20 border-green-800">
              <p className="text-sm text-gray-300">
                <strong className="text-white">Hinweis:</strong> Dieses
                Impressum wird nach der offiziellen Vereinsgründung und
                Eintragung ins Vereinsregister mit allen erforderlichen Daten
                vervollständigt.
              </p>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
