import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DonationModal = ({ isOpen, onClose }: DonationModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto rounded-md border border-gray-200">
        <DialogHeader className="relative">
          <DialogTitle className="text-left text-xl font-bold">
            Make a Donation
          </DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0"
            onClick={onClose}
            aria-label="Close"
          >
          
          </Button>
          <p className="mt-2 text-left text-sm text-gray-600">
            Your donation helps us provide essential support to children,
            widows, and vulnerable individuals across India. Every contribution
            makes a difference.
          </p>
        </DialogHeader>

        <div className="mt-4">
          <p className="font-medium mb-2">Bank Transfer Details</p>
          <div className="space-y-1 text-sm bg-gray-50 p-3 rounded-md">
            <div>
              <span className="font-medium">Bank Name: </span>
              United Bank of Africa
            </div>
            <div>
              <span className="font-medium">Account Name: </span>
              Manavata Succour Foundation
            </div>
            <div>
              <span className="font-medium">Account Number: </span>
              1027783699
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Please use your name as payment reference.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DonationModal;
