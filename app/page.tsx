import Header from "@/app/components/Header";
import Button from "@/app/components/ui/Button";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="pt-24">
      <Header />
      <section className="flex flex-col justify-center">
        <section className="flex flex-col items-center justify-center px-4 py-30">
          <div className="flex flex-col gap-6 items-center text-center max-w-2xl">
            <h1 className="text-4xl">More Money, Less Problems</h1>
            <p className="text-lg text-gray-400">
              Need cash fast? We've got you covered. Our digital lending app
              provides quick, hassle-free loans to help you manage unexpected
              expenses or seize sudden opportunities.
            </p>
            <div>
              <Button
                text="Learn More"
                color="blue"
                size="small"
                icon="downward"
              />
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-6 bg-secondary rounded-4xl">
          <h1 className="text-3xl text-center mt-16">
            Your Next Pay Day Is Today
          </h1>
          <p className="text-center">Here's How it Works</p>

          <div className="flex w-full mt-16">
            <div className="w-1/2">
              <img
                src="/placeholder.jpg"
                alt=""
                className="h-64 rounded-lg m-auto"
              />
            </div>
            <div className="w-1/2">
              <p className="text-xl mb-4">Apply in Minutes</p>
              <p className="text-gray-400">
                Our streamlined application process takes just a few taps. No
                paperwork, no waiting in lines.
              </p>
            </div>
          </div>
        </section>
        <section className="flex"></section>
      </section>
      <Footer />
    </main>
  );
}
