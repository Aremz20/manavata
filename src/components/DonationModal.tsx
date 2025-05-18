
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { X } from "lucide-react";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DonationModal = ({ isOpen, onClose }: DonationModalProps) => {
  const [selectedAmount, setSelectedAmount] = useState<string | null>(null);
  const [donationFrequency, setDonationFrequency] = useState<"one-time" | "monthly">("one-time");
  
  const predefinedAmounts = [
    { value: "10000", label: "₦10,000" },
    { value: "25000", label: "₦25,000" },
    { value: "50000", label: "₦50,000" },
    { value: "100000", label: "₦100,000" },
  ];

  const handleAmountSelect = (amount: string) => {
    setSelectedAmount(amount);
  };

  const handleCompleteDonation = () => {
    // Here you would handle the donation process
    // For now, we'll just close the modal
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto rounded-md border border-gray-200">
        <DialogHeader className="relative">
          <DialogTitle className="text-left text-xl font-bold">Make a Donation</DialogTitle>
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-0 top-0" 
            onClick={onClose}
            aria-label="Close"
          >
        
          </Button>
          <p className="text-left text-sm text-gray-600 mt-2">
            Your donation helps us provide essential support to children, widows, and
            vulnerable individuals across India. Every contribution makes a difference.
          </p>
        </DialogHeader>
        
        <div className="space-y-4 py-2">
          <div>
            <p className="font-medium mb-2">Select Amount</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {predefinedAmounts.map((amount) => (
                <Button
                  key={amount.value}
                  variant={selectedAmount === amount.value ? "default" : "outline"}
                  className={`${
                    selectedAmount === amount.value ? "bg-brand-blue text-white" : "bg-white"
                  }`}
                  onClick={() => handleAmountSelect(amount.value)}
                >
                  {amount.label}
                </Button>
              ))}
            </div>
            <div className="mt-2">
              <Input 
                placeholder="₦ Enter custom amount" 
                className="w-full" 
              />
            </div>
          </div>

          <div>
            <p className="font-medium mb-2">Donation Frequency</p>
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant={donationFrequency === "one-time" ? "default" : "outline"}
                className={`${
                  donationFrequency === "one-time" ? "bg-brand-blue text-white" : "bg-white"
                }`}
                onClick={() => setDonationFrequency("one-time")}
              >
                One time
              </Button>
              <Button
                variant={donationFrequency === "monthly" ? "default" : "outline"}
                className={`${
                  donationFrequency === "monthly" ? "bg-brand-blue text-white" : "bg-white"
                }`}
                onClick={() => setDonationFrequency("monthly")}
              >
                Monthly
              </Button>
            </div>
          </div>

          <div>
            <p className="font-medium mb-2">Bank Transfer Details</p>
            <div className="space-y-1 text-sm bg-gray-50 p-3 rounded-md">
              <div>
                <span className="font-medium">Bank Name: </span>
                First Bank of Nigeria
              </div>
              <div>
                <span className="font-medium">Account Name: </span>
                Manavata Succour Foundation
              </div>
              <div>
                <span className="font-medium">Account Number: </span>
                0123456789
              </div>
              <div>
                <span className="font-medium">Sort Code: </span>
                012345
              </div>
              <p className="text-xs text-gray-500 mt-2">Please use your name as payment reference</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm mb-1">Full Name</label>
                <Input placeholder="" className="w-full" />
              </div>
              <div>
                <label className="block text-sm mb-1">Email Address</label>
                <Input placeholder="" className="w-full" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm mb-1">Phone Number</label>
                <Input placeholder="" className="w-full" />
              </div>
              <div>
                <label className="block text-sm mb-1">PAN Card (Optional)</label>
                <Input placeholder="" className="w-full" />
              </div>
            </div>
          </div>

          <Button 
            className="w-full bg-brand-gold hover:bg-brand-gold/90 text-brand-blue font-semibold py-2"
            onClick={handleCompleteDonation}
          >
            Complete Donation
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DonationModal;
