export default function Footer() {
  return (
    <footer className="border-t border-border p-8 flex justify-between items-center text-sm text-muted-foreground">
      <p>&copy; {new Date().getFullYear()}</p>
      <p className="font-bold font-headline tracking-widest uppercase">Forge Revamped</p>
    </footer>
  );
}
