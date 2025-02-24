"use client"

import { ModeToggle } from '@/components/mode-toggle';
import { CustomWalletSelector } from "@/components/CustomWalletSelector";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import APTCoinsLogo from '@/components/APTCoinsLogo';
import { Circle, Menu } from 'lucide-react';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from './Sidebar';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <APTCoinsLogo />
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="flex items-center space-x-2">
            <Circle className="h-2 w-2 fill-green-500 text-green-500" />
            <span>Aptos Mainnet</span>
          </Button>
          <ModeToggle />
          <CustomWalletSelector />
        </div>
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="py-4">
                <Sidebar />
              </div>
              <div className="mt-4 space-y-4">
                <Button variant="outline" className="w-full flex items-center justify-center space-x-2">
                  <Circle className="h-2 w-2 fill-green-500 text-green-500" />
                  <span>Aptos Mainnet</span>
                </Button>
                <div className="flex justify-between items-center">
                  <ModeToggle />
                  <CustomWalletSelector />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;