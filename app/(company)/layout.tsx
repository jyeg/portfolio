export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
  activeSection: string;
}) {
  return (
    <section className="min-h-screen">
      <main>{children}</main>
    </section>
  );
}
