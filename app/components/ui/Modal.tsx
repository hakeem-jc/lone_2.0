"use client";
import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept?: () => void;
  onDecline?: () => void;
  title?: string;
  children?: React.ReactNode;
  showFooter?: boolean;
}

export default function Modal({
  isOpen,
  onClose,
  onAccept,
  onDecline,
  title = "Terms of Service",
  children,
  showFooter = true,
}: ModalProps) {
  // Close modal on ESC key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleAccept = () => {
    onAccept?.();
    onClose();
  };

  const handleDecline = () => {
    onDecline?.();
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-primary/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative p-4 w-full max-w-2xl max-h-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal content */}
        <div className="relative bg-secondary border border-gray-700 rounded-lg shadow-lg p-4 md:p-6">
          {/* Modal header */}
          <div className="flex items-center justify-between border-b border-gray-700 pb-4 md:pb-5">
            <h3 className="text-lg font-medium text-white">{title}</h3>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-400 bg-transparent hover:bg-gray-700 hover:text-white rounded-lg text-sm w-9 h-9 ms-auto inline-flex justify-center items-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
            </button>
          </div>

          {/* Modal body */}
          <div className="space-y-4 overflow-auto max-h-96 md:space-y-6 py-4 md:py-6">
            {children}
          </div>

          {/* Modal footer */}
          {showFooter && (
            <div className="flex items-center border-t border-gray-700 space-x-4 pt-4 md:pt-5">
              <button
                onClick={handleAccept}
                type="button"
                className="text-white bg-blue-600 border border-transparent hover:bg-blue-700 focus:ring-4 focus:ring-blue-800 shadow-sm font-medium rounded-lg text-sm px-4 py-2.5 focus:outline-none transition-colors cursor-pointer"
              >
                I accept
              </button>
              <button
                onClick={handleDecline}
                type="button"
                className="text-gray-300 bg-gray-700 border border-gray-600 hover:bg-gray-600 hover:text-white focus:ring-4 focus:ring-gray-600 shadow-sm font-medium rounded-lg text-sm px-4 py-2.5 focus:outline-none transition-colors cursor-pointer"
              >
                Decline
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}