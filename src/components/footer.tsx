import { Button } from '@/components/button';

export default function Footer() {
  return (
    <footer className="text-muted-foreground border-border/60 mt-10 w-full border-t py-8 text-center text-sm">
      © {new Date().getFullYear()}{' '}
      <Button
        variant="link"
        className="text-foreground h-auto p-0 font-semibold"
      >
        <a
          href="https://github.com/AhmetMel1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ahmet Melih Temiz
        </a>
      </Button>
      . Crafted with care.
    </footer>
  );
}
