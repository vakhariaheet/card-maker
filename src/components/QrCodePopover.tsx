import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { QrCode } from "lucide-react";

interface QrCodePopoverProps {
  children?: React.ReactNode;
}

export function QrCodePopover({ children }: QrCodePopoverProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children || (
          <button className="flex flex-col items-center gap-2 group">
            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary transition-all duration-300 transform group-hover:scale-105 shadow-lg">
              <QrCode className="w-8 h-8" />
            </div>
            <span className="text-sm font-medium group-hover:text-primary transition-colors">QR Code</span>
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-6">
        <DialogHeader className="mb-6">
          <DialogTitle className="text-2xl font-bold text-center">Scan QR Code</DialogTitle>
        </DialogHeader>
        <div className="p-6 bg-white rounded-xl shadow-inner">
          <img
            src="/assets/qr.png"
            alt="QR Code"
            className="w-full h-auto"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}