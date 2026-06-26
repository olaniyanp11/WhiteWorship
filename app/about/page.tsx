import { PageShell } from "@/components/site/PageShell";

export default function AboutPage() {
  return (
    <PageShell>
      <section className="min-h-screen bg-background px-6 py-32 text-foreground lg:px-10">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">About</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">About WHITE</h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            WHITE is a global movement of worship, prayer, and gospel encouragement that invites people into a deeper encounter with God.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
