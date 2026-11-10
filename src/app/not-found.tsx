import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-start py-28">
      <p className="text-sm font-medium text-primary">Erreur 404</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight">Page introuvable</h1>
      <p className="mt-3 text-muted-foreground">
        La page demandée n&apos;existe pas ou a été déplacée.
      </p>
      <ButtonLink href="/" className="mt-8">
        Retour à l&apos;accueil
      </ButtonLink>
    </Container>
  );
}
