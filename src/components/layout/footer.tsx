import Link from "next/link";

import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandX } from "@/assets/icons/brands";
import { IconLogo, LogoWordmark, WordWatermark } from "@/assets/logo";

import { COMPANY_ADDRESS, COMPANY_INFO, CONTACT_INFO, NAVIGATION_LINKS, SOCIAL_LINKS } from "@/data/footer";

import { Separator } from "../ui/separator";

export const Footer = () => {
  return (
    <footer aria-label="Site footer" className="container relative space-y-6 overflow-hidden pt-2" role="contentinfo">
      {/* Top section with logo and social media */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row sm:gap-0">
        <div className="flex items-center gap-2">
          <IconLogo aria-hidden="true" className="text-primary" />
          <LogoWordmark aria-label="Direct Logic Systems" />
        </div>
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <h2 className="font-medium">Follow us</h2>
          <nav aria-label="Social media links">
            <ul className="flex items-center gap-3">
              <li>
                <Link
                  aria-label="Visit our LinkedIn page"
                  className="flex size-9 items-center justify-center rounded-lg border text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  href={SOCIAL_LINKS.linkedin}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <IconBrandLinkedin aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link
                  aria-label="Visit our Facebook page"
                  className="flex size-9 items-center justify-center rounded-lg border text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  href={SOCIAL_LINKS.facebook}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <IconBrandFacebook aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link
                  aria-label="Visit our Instagram page"
                  className="flex size-9 items-center justify-center rounded-lg border text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  href={SOCIAL_LINKS.instagram}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <IconBrandInstagram aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link
                  aria-label="Visit our X (Twitter) page"
                  className="flex size-9 items-center justify-center rounded-lg border text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  href={SOCIAL_LINKS.x}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <IconBrandX aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <Separator />

      {/* Main content section */}
      <div className="mx-auto mb-16 grid max-w-7xl grid-cols-1 gap-8 sm:mb-24 md:mb-44 lg:mb-72 lg:grid-cols-2 lg:gap-12">
        <div>
          <h2 className="mb-8 text-pretty text-3xl leading-tight tracking-tight sm:text-4xl lg:mb-12 lg:text-5xl">
            {COMPANY_INFO.tagline}
          </h2>
          <address className="text-lg text-muted-foreground not-italic leading-relaxed">
            <p>
              {COMPANY_ADDRESS.street},
              <br /> {COMPANY_ADDRESS.location}, <br />
              {COMPANY_ADDRESS.city}
            </p>
          </address>
        </div>

        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap gap-12 justify-self-start sm:gap-16 lg:gap-20 lg:justify-self-end"
        >
          <div>
            <h3 className="mb-3 font-medium text-muted-foreground text-sm">Quick Links</h3>
            <ul className="space-y-3 font-medium text-base sm:space-y-4 sm:text-lg">
              {NAVIGATION_LINKS.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    className="rounded transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-medium text-muted-foreground text-sm">Company</h3>
            <ul className="space-y-3 font-medium text-base sm:space-y-4 sm:text-lg">
              {NAVIGATION_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    className="rounded transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-medium text-muted-foreground text-sm">Contact</h3>
            <ul className="space-y-3 font-medium text-base sm:space-y-4 sm:text-lg">
              <li>
                <Link
                  aria-label={`Call us at ${CONTACT_INFO.phone1}`}
                  className="rounded transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, "")}`}
                >
                  {CONTACT_INFO.phone1}
                </Link>
              </li>
              <li>
                <Link
                  aria-label={`Call us at ${CONTACT_INFO.phone2}`}
                  className="rounded transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  href={`tel:${CONTACT_INFO.phone2.replace(/\s/g, "")}`}
                >
                  {CONTACT_INFO.phone2}
                </Link>
              </li>
              <li>
                <Link
                  aria-label={`Email us at ${CONTACT_INFO.email}`}
                  className="rounded transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  href={`mailto:${CONTACT_INFO.email}`}
                >
                  {CONTACT_INFO.email}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Bottom section with copyright and credits */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 py-3 text-center max-sm:mb-0 sm:flex-row sm:gap-0 sm:text-left">
        <p className="text-sm">
          © {new Date().getFullYear()} {COMPANY_INFO.name}{" "}
          <span className="text-muted-foreground">- All Rights Reserved</span>
        </p>
        <p className="text-muted-foreground text-sm">
          Website Designed & Developed by{" "}
          <Link
            aria-label={`Visit ${COMPANY_INFO.developer.name} website (opens in new tab)`}
            className="rounded text-primary-background transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            href={COMPANY_INFO.developer.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            {COMPANY_INFO.developer.name}
          </Link>
        </p>
      </div>

      <WordWatermark
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 mx-auto h-auto w-full -translate-x-1/2 sm:w-[92%]"
      />
    </footer>
  );
};
