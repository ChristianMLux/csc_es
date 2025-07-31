import React from "react";

import { Shield } from "lucide-react";
import { Button } from "../ui/Button";
import { Modal } from "../ui/Modal";

type AgeVerificationModalProps = {
  isOpen: boolean;
  onVerify: () => void;
  onLeave: () => void;
};

export const AgeVerificationModal = ({
  isOpen,
  onVerify,
  onLeave,
}: AgeVerificationModalProps) => {
  // KORREKTUR: Die generische Modal-Komponente wird jetzt korrekt verwendet
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {}} // Verhindert Schließen durch Klick auf Overlay
      title="Altersverifikation"
      size="md"
      closeOnOverlayClick={false}
    >
      <div className="text-center">
        <div className="mx-auto h-16 w-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
          <Shield className="h-8 w-8 text-white" />
        </div>
        <p className="text-gray-400 mb-8">
          Diese Website richtet sich ausschließlich an Personen über 18 Jahre.
          Bitte bestätigen Sie Ihr Alter.
        </p>
        <div className="space-y-3">
          <Button onClick={onVerify} className="w-full" size="lg">
            Ich bin über 18 Jahre alt
          </Button>
          <Button
            onClick={onLeave}
            variant="secondary"
            className="w-full"
            size="lg"
          >
            Ich bin unter 18 Jahre alt
          </Button>
        </div>
        <p className="text-xs text-gray-500 mt-6">
          Der Zugang zu dieser Website ist nur volljährigen Personen gestattet.
        </p>
      </div>
    </Modal>
  );
};
