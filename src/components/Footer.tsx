export default function Footer({ variant = "mini" }: { variant?: "mini" | "full" }) {
  return (
    <footer className="border-t border-border-subtle">
      <div className="flex justify-center items-center px-5 md:px-8 lg:px-12 py-4 md:py-6">
        <span className="text-[11px] md:text-[13px] text-text-muted text-center">
          2026 Brou Studio. Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
}
