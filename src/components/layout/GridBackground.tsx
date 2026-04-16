export function GridBackground() {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-background">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
    </div>
  );
}
