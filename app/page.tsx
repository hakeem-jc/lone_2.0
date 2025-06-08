import Header from "@/app/components/Header";
import Button from "@/app/components/ui/Button";

export default function Home() {
  return (
    <main className="pt-24">
      <Header />
      <section className="flex justify-center">
        <section className="flex flex-col gap-6 w-4/5 h-96 justify-around">
          <h1 className="text-4xl text-center mt-8">More Money, Less Problems</h1>
          <p className="text-center">
            Need cash fast? We've got you covered. Our digital lending app
            provides quick, hassle-free loans to help you manage unexpected
            expenses or seize sudden opportunities.
          </p>
          <div className="flex justify-center">
            <Button
              text="Learn More"
              color="blue"
              size="small"
              icon="downward"
            />
          </div>
        </section>
      </section>
    </main>
  );
}
