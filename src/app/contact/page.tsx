"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Mail, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Modal } from "@/components/ui/Modal";
import { NavigationItem } from "@/types";
import Link from "next/link";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ContactFormErrors = {
  [key in keyof ContactFormData]?: string;
};

export default function ContactPage() {
  const initialFormData: ContactFormData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const navigation: NavigationItem[] = [
    { name: "Start", href: "/" },
    { name: "Über uns", href: "/about-us" },
    { name: "Mitgliedschaft", href: "/membership" },
    { name: "Aktuelles", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Kontakt", href: "/contact" },
  ];

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "E-Mail",
      content: "info@csc-esslingen.com",
      link: "mailto:info@csc-esslingen.com",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Adresse",
      content: "Die genaue Adresse erhalten Mitglieder nach der Aufnahme",
      subtext: "Aus Sicherheitsgründen",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Antwortzeit",
      content: "Innerhalb von 24-48 Stunden",
      subtext: "An Werktagen",
    },
  ];

  const reasons = [
    "Allgemeine Anfrage",
    "Fragen zur Mitgliedschaft",
    "Technisches Problem",
    "Presse & Medien",
    "Kooperationsanfrage",
    "Sonstiges",
  ];

  const validateForm = () => {
    const newErrors: ContactFormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name ist erforderlich";
    if (!formData.email.trim()) newErrors.email = "E-Mail ist erforderlich";
    if (!formData.subject) newErrors.subject = "Bitte wählen Sie einen Betreff";
    if (!formData.message.trim())
      newErrors.message = "Nachricht ist erforderlich";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setShowSuccessModal(true);
    setFormData(initialFormData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-6">
              <MessageSquare className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-6">Kontaktieren Sie uns</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Haben Sie Fragen oder Anregungen? Wir sind für Sie da und freuen
              uns auf Ihre Nachricht.
            </p>
          </div>
        </section>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <Card key={index} className="text-center">
                  <div className="text-green-600 mb-4 flex justify-center">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-green-600 hover:underline"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-300">{info.content}</p>
                  )}
                  {info.subtext && (
                    <p className="text-sm text-gray-500 mt-1">{info.subtext}</p>
                  )}
                </Card>
              ))}
            </div>
            <div className="max-w-3xl mx-auto">
              <Card className="bg-gradient-to-br from-green-900/10 to-purple-900/10">
                <h2 className="text-2xl font-bold mb-6 text-center">
                  Nachricht senden
                </h2>
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      label="Ihr Name"
                      required
                      value={formData.name}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleInputChange("name", e.target.value)
                      }
                      error={errors.name}
                      placeholder="Max Mustermann"
                    />
                    <Input
                      label="Ihre E-Mail"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleInputChange("email", e.target.value)
                      }
                      error={errors.email}
                      placeholder="ihre@email.de"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Betreff <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                        handleInputChange("subject", e.target.value)
                      }
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    >
                      <option value="">Bitte wählen...</option>
                      {reasons.map((reason) => (
                        <option key={reason} value={reason}>
                          {reason}
                        </option>
                      ))}
                    </select>
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.subject}
                      </p>
                    )}
                  </div>
                  <Input
                    label="Ihre Nachricht"
                    type="textarea"
                    required
                    value={formData.message}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                      handleInputChange("message", e.target.value)
                    }
                    error={errors.message}
                    placeholder="Beschreiben Sie Ihr Anliegen..."
                    className="min-h-[150px]"
                  />
                  <div className="flex justify-center">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      loading={isSubmitting}
                      className="min-w-[200px]"
                    >
                      {isSubmitting ? (
                        "Wird gesendet..."
                      ) : (
                        <>
                          Nachricht senden <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Modal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Nachricht gesendet!"
        size="sm"
      >
        <div className="text-center">
          <div className="mx-auto h-12 w-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
            <Send className="h-6 w-6 text-white" />
          </div>
          <p className="text-gray-300 mb-4">
            Vielen Dank für Ihre Nachricht! Wir werden uns innerhalb von 24-48
            Stunden bei Ihnen melden.
          </p>
          <Button
            variant="primary"
            onClick={() => setShowSuccessModal(false)}
            className="w-full"
          >
            Verstanden
          </Button>
        </div>
      </Modal>
    </div>
  );
}
