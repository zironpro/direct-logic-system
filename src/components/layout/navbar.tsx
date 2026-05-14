"use client";

import Link from "next/link";

import { IconMenu } from "@/assets/icons/menu";
import { Logo, LogoWordmark } from "@/assets/logo";

import { useMobileMenu } from "@/hooks/use-mobile-menu";

import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { NavLinks } from "./ui/nav-links";

export const Navbar = () => {
  const { isOpen: isMobileMenuOpen, toggle: toggleMobileMenu, close: closeMobileMenu } = useMobileMenu();

  return (
    <header className="fixed top-1.5 left-1/2 z-999 mx-auto min-w-[95%] -translate-x-1/2 sm:top-3 lg:min-w-3xl">
      <nav
        aria-label="Main navigation"
        className="rounded-[calc(var(--radius)+var(--spacing)_*_1)] border-card border-b bg-background/80 p-1 shadow-primary-foreground/10 shadow-xl backdrop-blur-2xl"
        role="navigation"
      >
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link
              aria-label="Direct Logic Systems - Home"
              className="flex items-center gap-2 rounded-md transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              href="/"
            >
              <Logo />
              <LogoWordmark />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <NavLinks />

          <Button asChild className="hidden md:inline-flex" size="lg" variant="primary">
            <Link aria-label="Contact us" href="/contact">
              Contact
            </Link>
          </Button>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <Button asChild size="lg" variant="primary">
              <Link aria-label="Contact us" href="/contact">
                Contact
              </Link>
            </Button>
            <Sheet onOpenChange={toggleMobileMenu} open={isMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  aria-controls="mobile-menu"
                  aria-expanded={isMobileMenuOpen}
                  aria-label="Toggle mobile menu"
                  type="button"
                >
                  <span className="sr-only">Open main menu</span>
                  {/* Hamburger Icon */}
                  <IconMenu />
                </Button>
              </SheetTrigger>
              <SheetContent
                className="z-9999 w-80 border bg-card"
                onCloseAutoFocus={(e) => e.preventDefault()}
                side="right"
              >
                <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
                <div className="flex h-full flex-col p-4">
                  {/* Mobile Menu Header */}
                  <div className="flex items-center justify-between border-border border-b pb-4">
                    <Link
                      aria-label="Direct Logic Systems - Home"
                      className="flex items-center gap-2 rounded-md transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      href="/"
                      onClick={closeMobileMenu}
                    >
                      <Logo />
                      <LogoWordmark />
                    </Link>
                  </div>

                  {/* Mobile Navigation Links */}
                  <div className="flex-1 space-y-1 pt-4">
                    <NavLinks mobile />
                  </div>

                  {/* Mobile Contact Button */}
                  <div className="border-border border-t pt-4">
                    <Button asChild className="w-full justify-center" size="lg" variant="primary">
                      <Link aria-label="Contact us" href="/contact" onClick={closeMobileMenu}>
                        Contact
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
};
