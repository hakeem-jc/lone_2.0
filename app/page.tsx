import Header from "@/app/components/Header";

export default function Home() {
  return (
    <main className="pt-24">
      <Header />
      <section className="flex flex-col gap-6 p-4">
        <h1 className="text-2xl text-center">Temp</h1>
      </section>
    </main>
  );
}
