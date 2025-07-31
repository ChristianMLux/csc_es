"use client";

import React, { useState } from "react";
import {
  Shield,
  ChevronDown,
  Lock,
  Database,
  Cookie,
  Mail,
  Globe,
  FileText,
} from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Card } from "@/components/ui/Card";

export default function Datenschutz() {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(
    {}
  );

  const navigation = [
    { name: "Start", href: "/" },
    { name: "Über uns", href: "/about-us" },
    { name: "Mitgliedschaft", href: "/membership" },
    { name: "Aktuelles", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Kontakt", href: "/contact" },
  ];

  const sections = [
    {
      id: "allgemein",
      icon: <Shield className="h-5 w-5" />,
      title: "1. Datenschutz auf einen Blick",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Allgemeine Hinweise</h4>
            <p className="text-gray-300">
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
              Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">
              Datenerfassung auf dieser Website
            </h4>
            <p className="text-gray-300 mb-2">
              <strong>
                Wer ist verantwortlich für die Datenerfassung auf dieser
                Website?
              </strong>
            </p>
            <p className="text-gray-300 mb-4">
              Die Datenverarbeitung auf dieser Website erfolgt durch den
              Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum
              dieser Website entnehmen.
            </p>
            <p className="text-gray-300 mb-2">
              <strong>Wie erfassen wir Ihre Daten?</strong>
            </p>
            <p className="text-gray-300">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
              mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in
              ein Kontaktformular oder bei der Mitgliedschaftsanmeldung
              eingeben.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "hosting",
      icon: <Globe className="h-5 w-5" />,
      title: "2. Hosting und Content Delivery Networks (CDN)",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Hosting</h4>
            <p className="text-gray-300">
              Die Inhalte unserer Website werden bei folgendem Anbieter
              gehostet:
            </p>
            <p className="text-gray-300 mt-2">
              <strong>Netlify</strong>
              <br />
              Netlify, Inc.
              <br />
              2325 3rd Street, Suite 296
              <br />
              San Francisco, CA 94107
              <br />
              USA
            </p>
            <p className="text-gray-300 mt-2">
              Netlify ist ein Anbieter von Webhosting-Dienstleistungen. Wenn Sie
              unsere Website besuchen, werden Ihre personenbezogenen Daten (z.B.
              IP-Adresse, Browsertyp, Betriebssystem) auf den Servern von
              Netlify verarbeitet.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "datenerfassung",
      icon: <Database className="h-5 w-5" />,
      title: "3. Allgemeine Hinweise und Pflichtinformationen",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Datenschutz</h4>
            <p className="text-gray-300">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
              Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
              vertraulich und entsprechend den gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">
              Hinweis zur verantwortlichen Stelle
            </h4>
            <p className="text-gray-300">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser
              Website ist:
            </p>
            <p className="text-gray-300 mt-2">
              Cannabis Social Club Esslingen e.V.
              <br />
              Musterstraße 123
              <br />
              73728 Esslingen am Neckar
              <br />
              E-Mail: info@csc-esslingen.com
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">
              Widerruf Ihrer Einwilligung zur Datenverarbeitung
            </h4>
            <p className="text-gray-300">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
              Einwilligung möglich. Sie können eine bereits erteilte
              Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum
              Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf
              unberührt.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "mitgliederdaten",
      icon: <Lock className="h-5 w-5" />,
      title: "4. Datenerfassung bei Mitgliedschaft",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Mitgliedschaftsantrag</h4>
            <p className="text-gray-300">
              Wenn Sie einen Mitgliedschaftsantrag stellen, erheben wir folgende
              Daten:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li>Vor- und Nachname</li>
              <li>Geburtsdatum (zur Altersverifikation)</li>
              <li>Adresse</li>
              <li>E-Mail-Adresse</li>
              <li>Telefonnummer</li>
              <li>Freiwillige Angaben zu Erfahrungen und Motivation</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Zweck der Datenverarbeitung</h4>
            <p className="text-gray-300">
              Diese Daten werden ausschließlich zur Bearbeitung Ihres
              Mitgliedschaftsantrags, zur Verwaltung Ihrer Mitgliedschaft und
              zur Erfüllung unserer satzungsgemäßen Aufgaben verwendet. Die
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
              (Vertragserfüllung).
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Speicherdauer</h4>
            <p className="text-gray-300">
              Ihre Mitgliederdaten werden für die Dauer Ihrer Mitgliedschaft und
              darüber hinaus nur solange gespeichert, wie gesetzliche
              Aufbewahrungsfristen dies erfordern (in der Regel 10 Jahre für
              steuerrelevante Unterlagen).
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "cookies",
      icon: <Cookie className="h-5 w-5" />,
      title: "5. Cookies",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            Unsere Website verwendet so genannte Cookies. Cookies sind kleine
            Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie
            werden entweder vorübergehend für die Dauer einer Sitzung
            (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem
            Endgerät gespeichert.
          </p>
          <div>
            <h4 className="font-semibold mb-2">Technisch notwendige Cookies</h4>
            <p className="text-gray-300">
              Wir verwenden ausschließlich technisch notwendige Cookies, die für
              den Betrieb unserer Website erforderlich sind. Dazu gehören:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li>Session-Cookies für den Login-Bereich</li>
              <li>Cookies zur Speicherung Ihrer Cookie-Einstellungen</li>
              <li>Cookies für die Altersverifikation</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "kontaktformular",
      icon: <Mail className="h-5 w-5" />,
      title: "6. Kontaktformular und E-Mail-Kontakt",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen
            lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der
            von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
            Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
          </p>
          <p className="text-gray-300">
            Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die
            Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
            sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt
            oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.
          </p>
        </div>
      ),
    },
    {
      id: "rechte",
      icon: <FileText className="h-5 w-5" />,
      title: "7. Ihre Rechte",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">Sie haben jederzeit folgende Rechte:</p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              <strong>Auskunftsrecht:</strong> Sie haben das Recht, Auskunft
              über Ihre bei uns gespeicherten personenbezogenen Daten zu
              erhalten.
            </li>
            <li>
              <strong>Berichtigungsrecht:</strong> Sie haben das Recht,
              unrichtige Daten berichtigen zu lassen.
            </li>
            <li>
              <strong>Löschungsrecht:</strong> Sie haben das Recht, Ihre Daten
              löschen zu lassen, sofern keine gesetzlichen Aufbewahrungsfristen
              entgegenstehen.
            </li>
            <li>
              <strong>Einschränkung der Verarbeitung:</strong> Sie haben das
              Recht, die Einschränkung der Verarbeitung Ihrer Daten zu
              verlangen.
            </li>
            <li>
              <strong>Datenübertragbarkeit:</strong> Sie haben das Recht, Ihre
              Daten in einem strukturierten, gängigen und maschinenlesbaren
              Format zu erhalten.
            </li>
            <li>
              <strong>Widerspruchsrecht:</strong> Sie haben das Recht, der
              Verarbeitung Ihrer Daten zu widersprechen.
            </li>
          </ul>
          <p className="text-gray-300 mt-4">
            Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:
            info@csc-esslingen.com
          </p>
        </div>
      ),
    },
    {
      id: "sicherheit",
      icon: <Lock className="h-5 w-5" />,
      title: "8. Datensicherheit",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            Wir verwenden innerhalb des Website-Besuchs das verbreitete
            SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils
            höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt
            wird.
          </p>
          <p className="text-gray-300">
            Wir bedienen uns geeigneter technischer und organisatorischer
            Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder
            vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust,
            Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen.
          </p>
        </div>
      ),
    },
  ];

  const toggleSection = (sectionId: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar navigation={navigation} ctaButton={undefined} />

      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-6">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Datenschutzerklärung</h1>
            <p className="text-xl text-gray-400">
              Informationen zum Schutz Ihrer persönlichen Daten
            </p>
          </div>

          {/* Quick Info */}
          <Card className="mb-8 bg-green-900/20 border-green-800">
            <p className="text-sm text-gray-300">
              <strong className="text-white">Stand:</strong> Januar 2025 | Diese
              Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck
              der Verarbeitung von personenbezogenen Daten auf unserer Website
              auf.
            </p>
          </Card>

          {/* Sections */}
          <div className="space-y-4">
            {sections.map((section) => (
              <Card
                key={section.id}
                className="cursor-pointer transition-all"
                onClick={() => toggleSection(section.id)}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold flex items-center">
                      <span className="text-green-600 mr-3">
                        {section.icon}
                      </span>
                      {section.title}
                    </h3>
                    <ChevronDown
                      className={`h-5 w-5 text-gray-400 transition-transform ${
                        openSections[section.id] ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {openSections[section.id] && (
                    <div className="mt-6 border-t border-gray-700 pt-6">
                      {section.content}
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {/* Contact for Data Protection */}
          <Card className="mt-8 bg-gray-800/50">
            <h3 className="text-xl font-semibold mb-4">
              Datenschutzbeauftragter
            </h3>
            <p className="text-gray-300 mb-4">
              Bei Fragen zum Datenschutz können Sie sich jederzeit an uns
              wenden:
            </p>
            <div className="space-y-2 text-gray-300">
              <p>
                Cannabis Social Club Esslingen e.V.
                <br />
                Datenschutzbeauftragter
                <br />
                E-Mail:{" "}
                <a
                  href="mailto:datenschutz@csc-esslingen.com"
                  className="text-green-600 hover:underline"
                >
                  datenschutz@csc-esslingen.com
                </a>
              </p>
            </div>
          </Card>

          {/* Last Update Notice */}
          <p className="text-center text-sm text-gray-500 mt-12">
            Diese Datenschutzerklärung wurde zuletzt am 31. Januar 2025
            aktualisiert.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
