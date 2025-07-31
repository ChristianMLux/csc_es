"use client";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Modal } from "@/components/ui/Modal";
import { NavigationItem } from "@/types";
import { Link, ArrowLeft, Info, Check } from "lucide-react";
import { useState, FormEvent, ChangeEvent } from "react";

type FormDataState = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  phone: string;
  street: string;
  houseNumber: string;
  zip: string;
  city: string;
  hasExperience: string;
  motivation: string;
  termsAccepted: boolean;
  dataProtectionAccepted: boolean;
  ageConfirmed: boolean;
  newsletterOptIn: boolean;
};

type FormErrors = {
  [key in keyof FormDataState]?: string;
};

const simulateFirebaseSubmission = async (
  data: any
): Promise<{ success: boolean; id: string }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Gespeicherte Daten:", data);
      resolve({ success: true, id: "mock-id-123" });
    }, 2000);
  });
};

export default function MembershipApplication() {
  const initialFormData: FormDataState = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    phone: "",
    street: "",
    houseNumber: "",
    zip: "",
    city: "",
    hasExperience: "",
    motivation: "",
    termsAccepted: false,
    dataProtectionAccepted: false,
    ageConfirmed: false,
    newsletterOptIn: false,
  };

  const [formData, setFormData] = useState<FormDataState>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
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

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName) newErrors.firstName = "Vorname ist erforderlich";
    if (!formData.lastName) newErrors.lastName = "Nachname ist erforderlich";
    if (!formData.dateOfBirth)
      newErrors.dateOfBirth = "Geburtsdatum ist erforderlich";
    if (!formData.email) newErrors.email = "E-Mail ist erforderlich";
    if (!formData.phone) newErrors.phone = "Telefonnummer ist erforderlich";
    if (!formData.street) newErrors.street = "Straße ist erforderlich";
    if (!formData.houseNumber)
      newErrors.houseNumber = "Hausnummer ist erforderlich";
    if (!formData.zip) newErrors.zip = "PLZ ist erforderlich";
    if (!formData.city) newErrors.city = "Stadt ist erforderlich";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein";
    }

    if (formData.dateOfBirth) {
      const birthDate = new Date(formData.dateOfBirth);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      if (age < 18) {
        newErrors.dateOfBirth = "Sie müssen mindestens 18 Jahre alt sein";
      }
    }

    if (!formData.termsAccepted)
      newErrors.termsAccepted = "Sie müssen die Satzung akzeptieren";
    if (!formData.dataProtectionAccepted)
      newErrors.dataProtectionAccepted =
        "Sie müssen die Datenschutzerklärung akzeptieren";
    if (!formData.ageConfirmed)
      newErrors.ageConfirmed =
        "Sie müssen bestätigen, dass Sie volljährig sind";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateForm()) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setIsSubmitting(true);

    try {
      const submissionData = {
        ...formData,
        membershipStatus: "pending",
        role: "member",
        createdAt: new Date().toISOString(),
      };

      const result = await simulateFirebaseSubmission(submissionData);

      if (result.success) {
        setShowSuccessModal(true);
        setFormData(initialFormData);
      }
    } catch (error) {
      console.error("Fehler beim Senden:", error);
      alert(
        "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    field: keyof FormDataState,
    value: string | boolean
  ) => {
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
          <Link href="/">
            <Button variant="primary" size="sm">
              Zurück zur Startseite
            </Button>
          </Link>
        }
      />

      <main className="max-w-4xl mx-auto px-4 py-20">
        <div className="mt-16 mb-8">
          <button
            onClick={() => window.history.back()}
            className="flex items-center text-gray-400 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Zurück
          </button>
          <h1 className="text-4xl font-bold mb-4">Mitgliedschaftsantrag</h1>
          <p className="text-xl text-gray-400">
            Werden Sie Teil der Cannabis-Community in Esslingen. Füllen Sie das
            Formular aus und wir melden uns schnellstmöglich bei Ihnen.
          </p>
        </div>

        <Card className="mb-8 bg-green-900/20 border-green-800">
          <div className="flex items-start">
            <Info className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold mb-2">Wichtige Informationen</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Mitgliedschaft nur für Personen ab 18 Jahren</li>
                <li>• Monatlicher Beitrag: 25€ (Aufnahmegebühr: 20€)</li>
                <li>• Ihre Daten werden vertraulich behandelt</li>
                <li>
                  • Sie erhalten nach Prüfung eine E-Mail mit weiteren
                  Informationen
                </li>
              </ul>
            </div>
          </div>
        </Card>

        <form onSubmit={handleSubmit} className="space-y-8" noValidate>
          <Card>
            <h2 className="text-2xl font-semibold mb-6">Persönliche Daten</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Vorname"
                required
                value={formData.firstName}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleInputChange("firstName", e.target.value)
                }
                error={errors.firstName}
              />
              <Input
                label="Nachname"
                required
                value={formData.lastName}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleInputChange("lastName", e.target.value)
                }
                error={errors.lastName}
              />
              <Input
                label="Geburtsdatum"
                type="date"
                required
                value={formData.dateOfBirth}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleInputChange("dateOfBirth", e.target.value)
                }
                error={errors.dateOfBirth}
              />
              <Input
                label="Telefonnummer"
                type="tel"
                required
                placeholder="+49 123 456789"
                value={formData.phone}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleInputChange("phone", e.target.value)
                }
                error={errors.phone}
              />
              <div className="md:col-span-2">
                <Input
                  label="E-Mail"
                  type="email"
                  required
                  placeholder="ihre@email.de"
                  value={formData.email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleInputChange("email", e.target.value)
                  }
                  error={errors.email}
                />
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-2xl font-semibold mb-6">Adresse</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="md:col-span-2 grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <Input
                    label="Straße"
                    required
                    value={formData.street}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleInputChange("street", e.target.value)
                    }
                    error={errors.street}
                  />
                </div>
                <div>
                  <Input
                    label="Hausnummer"
                    required
                    value={formData.houseNumber}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleInputChange("houseNumber", e.target.value)
                    }
                    error={errors.houseNumber}
                  />
                </div>
              </div>
              <Input
                label="PLZ"
                required
                placeholder="73728"
                value={formData.zip}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleInputChange("zip", e.target.value)
                }
                error={errors.zip}
              />
              <Input
                label="Stadt"
                required
                placeholder="Esslingen"
                value={formData.city}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleInputChange("city", e.target.value)
                }
                error={errors.city}
              />
            </div>
          </Card>

          <Card>
            <h2 className="text-2xl font-semibold mb-6">
              Zusätzliche Informationen (optional)
            </h2>
            <div className="space-y-6">
              <Input
                label="Haben Sie bereits Erfahrung mit Cannabis?"
                type="textarea"
                placeholder="Erzählen Sie uns von Ihren Erfahrungen..."
                value={formData.hasExperience}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  handleInputChange("hasExperience", e.target.value)
                }
              />
              <Input
                label="Was motiviert Sie zur Mitgliedschaft?"
                type="textarea"
                placeholder="Ihre Motivation..."
                value={formData.motivation}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  handleInputChange("motivation", e.target.value)
                }
              />
            </div>
          </Card>

          <Card>
            <h2 className="text-2xl font-semibold mb-6">
              Rechtliche Bestätigungen
            </h2>
            <div className="space-y-4">
              <label className="flex items-start cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.termsAccepted}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleInputChange("termsAccepted", e.target.checked)
                  }
                  className="mt-1 mr-3 h-4 w-4 text-green-600 bg-gray-800 border-gray-600 rounded focus:ring-green-600"
                />
                <span className="text-sm text-gray-300">
                  Ich habe die{" "}
                  <Link
                    href="/satzung"
                    className="text-green-600 hover:underline"
                  >
                    Vereinssatzung
                  </Link>{" "}
                  gelesen und akzeptiere diese. *
                </span>
              </label>
              {errors.termsAccepted && (
                <p className="text-sm text-red-500 ml-7">
                  {errors.termsAccepted}
                </p>
              )}

              <label className="flex items-start cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.dataProtectionAccepted}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(
                      "dataProtectionAccepted",
                      e.target.checked
                    )
                  }
                  className="mt-1 mr-3 h-4 w-4 text-green-600 bg-gray-800 border-gray-600 rounded focus:ring-green-600"
                />
                <span className="text-sm text-gray-300">
                  Ich habe die{" "}
                  <Link
                    href="/datenschutz"
                    className="text-green-600 hover:underline"
                  >
                    Datenschutzerklärung
                  </Link>{" "}
                  gelesen und bin mit der Verarbeitung meiner Daten
                  einverstanden. *
                </span>
              </label>
              {errors.dataProtectionAccepted && (
                <p className="text-sm text-red-500 ml-7">
                  {errors.dataProtectionAccepted}
                </p>
              )}

              <label className="flex items-start cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.ageConfirmed}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleInputChange("ageConfirmed", e.target.checked)
                  }
                  className="mt-1 mr-3 h-4 w-4 text-green-600 bg-gray-800 border-gray-600 rounded focus:ring-green-600"
                />
                <span className="text-sm text-gray-300">
                  Ich bestätige, dass ich mindestens 18 Jahre alt bin. *
                </span>
              </label>
              {errors.ageConfirmed && (
                <p className="text-sm text-red-500 ml-7">
                  {errors.ageConfirmed}
                </p>
              )}

              <div className="pt-4 border-t border-gray-700">
                <label className="flex items-start cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.newsletterOptIn}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleInputChange("newsletterOptIn", e.target.checked)
                    }
                    className="mt-1 mr-3 h-4 w-4 text-green-600 bg-gray-800 border-gray-600 rounded focus:ring-green-600"
                  />
                  <span className="text-sm text-gray-300">
                    Ich möchte den Newsletter erhalten und über Neuigkeiten
                    informiert werden. (optional)
                  </span>
                </label>
              </div>
            </div>
          </Card>

          <div className="flex justify-center pt-6">
            <Button
              type="submit"
              variant="primary"
              size="xl"
              disabled={isSubmitting}
              loading={isSubmitting}
              className="min-w-[300px]"
            >
              {isSubmitting ? "Antrag wird gesendet..." : "Antrag absenden"}
            </Button>
          </div>
        </form>
      </main>

      <Footer />

      <Modal
        isOpen={showSuccessModal}
        onClose={() => {
          setShowSuccessModal(false);
          window.location.href = "/membership/success";
        }}
        title="Antrag erfolgreich gesendet!"
        size="md"
      >
        <div className="text-center">
          <div className="mx-auto h-16 w-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
            <Check className="h-8 w-8 text-white" />
          </div>
          <p className="text-gray-300 mb-6">
            Vielen Dank für Ihren Mitgliedschaftsantrag! Wir haben Ihre Daten
            erhalten und werden uns innerhalb von 2-3 Werktagen bei Ihnen
            melden.
          </p>
          <p className="text-sm text-gray-400 mb-6">
            Sie erhalten in Kürze eine Bestätigungs-E-Mail an die angegebene
            Adresse.
          </p>
          <Button
            variant="primary"
            onClick={() => {
              setShowSuccessModal(false);
              window.location.href = "/membership/success";
            }}
            className="w-full"
          >
            Zur Bestätigungsseite
          </Button>
        </div>
      </Modal>
    </div>
  );
}
