import { Mail } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

const socials = [
  { href: siteConfig.links.github, label: "GitHub", Icon: GithubIcon },
  { href: siteConfig.links.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: siteConfig.links.email, label: "Email", Icon: Mail },
].filter((s) => s.href !== "");

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border">
      <Container className="flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {new Date().getFullYear()} {siteConfig.name} — Next.js, TypeScript & Tailwind CSS
        </p>
        <ul className="flex items-center gap-2">
          {socials.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex rounded-md p-2 transition hover:bg-muted hover:text-foreground"
              >
                <Icon className="size-5" />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
