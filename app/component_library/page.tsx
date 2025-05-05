import Header from "@/app/components/Header";
import Button from "@/app/components/ui/Button";
import Card from "@/app/components/ui/Card";
import Slider from "@/app/components/ui/Slider";

const Page = () => {
  return (
    <main className="pt-24">
      <Header />

      <section className="flex flex-col gap-6 p-4">
        <h1 className="text-center mb-4 text-lg">Component Library</h1>

        <div>
          <h2 className="mb-2">Buttons</h2>
          <div className="flex gap-4 ">
            <Button
              text="Choose Plan"
              color="blue"
              size="small"
              icon="forward"
            />
            <Button text="Expand" color="black" size="wide" icon="downward" />
          </div>
        </div>

        <div>
          <h2 className="mb-2">Cards</h2>
          <div className="flex gap-4 ">
            <Card
              title="Payment Time: Instant"
              description="Once you’re approved and you accept a loan, you’ll have the money in your account in seconds."
            />
          </div>
        </div>

        <div>
          <h2 className="mb-2">Slider</h2>
          <div className="flex gap-4 ">
            <Slider />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
