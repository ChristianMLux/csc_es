import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { NavigationItem } from "@/types";
import {
  Leaf,
  Users,
  Sparkles,
  Calendar,
  CheckCircle,
  Shield,
  ArrowRight,
  Download,
  LogIn,
} from "lucide-react";
import Link from "next/link";

export default function MembershipPage() {
  const navigation: NavigationItem[] = [
    { name: "Start", href: "/" },
    { name: "Über uns", href: "/about-us" },
    { name: "Mitgliedschaft", href: "/membership" },
    { name: "Aktuelles", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Kontakt", href: "/contact" },
  ];

  const benefits = [
    {
      icon: <Leaf className="h-6 w-6 text-green-500" />,
      text: "Cannabis und -produkte in geprüfter Qualität zum Selbstkostenpreis",
    },
    {
      icon: <Users className="h-6 w-6 text-green-500" />,
      text: "Zugang zu einer exklusiven Gemeinschaft von Gleichgesinnten",
    },
    {
      icon: <Sparkles className="h-6 w-6 text-green-500" />,
      text: "Professionelle Beratung und Workshops von erfahrenen Growern",
    },
    {
      icon: <Calendar className="h-6 w-6 text-green-500" />,
      text: "Einladungen zu exklusiven Mitgliederveranstaltungen und Treffen",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      text: "Aktives Mitbestimmungsrecht bei wichtigen Vereinsentscheidungen",
    },
    {
      icon: <Shield className="h-6 w-6 text-green-500" />,
      text: "Sicherer und legaler Rahmen für den Umgang mit Cannabis",
    },
  ];

  const documents = [
    {
      name: "Vereinssatzung",
      description: "Die rechtliche Grundlage unseres Vereins.",
      href: "/documents/satzung.pdf",
    },
    {
      name: "Beitragsordnung",
      description: "Alle Informationen zu Beiträgen und Gebühren.",
      href: "/documents/beitragsordnung.pdf",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar
        navigation={navigation}
        ctaButton={
          <Link href="/membership/application" passHref>
            <Button variant="primary" size="sm">
              Jetzt bewerben
            </Button>
          </Link>
        }
      />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-br from-green-900/20 via-gray-900 to-gray-950">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Werde Teil der Community
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Entdecke die Vorteile einer Mitgliedschaft im CSC Esslingen und
              gestalte mit uns aktiv die Zukunft der Cannabis-Kultur.
            </p>
            <Link href="/membership/application" passHref>
              <Button
                variant="primary"
                size="xl"
                className="transform hover:scale-105"
              >
                Mitgliedsantrag stellen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Deine Vorteile auf einen Blick
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Eine Mitgliedschaft bei uns ist mehr als nur Zugang zu Cannabis.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index}>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">{benefit.icon}</div>
                    <p className="text-gray-300">{benefit.text}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Downloads & Login Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Downloads */}
              <Card>
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Download className="mr-3 h-6 w-6" />
                  Wichtige Dokumente
                </h3>
                <div className="space-y-4">
                  {documents.map((doc) => (
                    <a
                      key={doc.name}
                      href={doc.href}
                      download
                      className="block p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-semibold text-white">{doc.name}</p>
                          <p className="text-sm text-gray-400">
                            {doc.description}
                          </p>
                        </div>
                        <Download className="h-5 w-5 text-gray-500 group-hover:text-white transition-colors" />
                      </div>
                    </a>
                  ))}
                </div>
              </Card>

              {/* Member Login */}
              <Card className="bg-gradient-to-br from-green-900/20 to-purple-900/20">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <LogIn className="mr-3 h-6 w-6" />
                  Bereits Mitglied?
                </h3>
                <p className="text-gray-300 mb-6">
                  Hier geht's zum exklusiven Mitgliederbereich mit allen
                  internen Informationen, Terminen und Neuigkeiten.
                </p>
                <Link href="/login" passHref>
                  <Button variant="secondary" size="lg" className="w-full">
                    Zum Mitglieder-Login
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
