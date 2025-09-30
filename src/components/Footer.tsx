import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Product: [
      { name: "Features", href: "#how-it-works" },
      { name: "Demo", href: "#demo" },
      { name: "Integration", href: "#integration" },
      { name: "Pricing", href: "#contact" },
    ],
    Resources: [
      { name: "Documentation", href: "#integration" },
      { name: "API Reference", href: "#integration" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
    Company: [
      { name: "About", href: "#team" },
      { name: "Team", href: "#team" },
      { name: "Contact", href: "#contact" },
      { name: "GitHub", href: "#" },
    ],
  };

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="mb-4 flex items-center gap-2 font-heading text-xl font-bold text-primary">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary"
              >
                <path
                  d="M8 12C8 9.79086 9.79086 8 12 8H20C22.2091 8 24 9.79086 24 12V20C24 22.2091 22.2091 24 20 24H12C9.79086 24 8 22.2091 8 20V12Z"
                  fill="currentColor"
                  opacity="0.2"
                />
                <path
                  d="M12 8H20C22.2091 8 24 9.79086 24 12V20C24 22.2091 22.2091 24 20 24H12C9.79086 24 8 22.2091 8 20V12C8 9.79086 9.79086 8 12 8Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="14" cy="14" r="2" fill="currentColor" />
                <circle cx="20" cy="14" r="2" fill="currentColor" />
              </svg>
              AutoATC
            </a>
            <p className="mb-6 max-w-md text-sm text-muted-foreground">
              AI-powered animal type classification for cattle and buffaloes. Objective measurements from a single photo, integrated with Bharat Pashudhan App.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-4 font-semibold text-foreground">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-accent"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} AutoATC Project. Built for agricultural innovation.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
