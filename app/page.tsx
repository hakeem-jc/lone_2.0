import Header from "@/app/components/Header";
import Button from "@/app/components/ui/Button";
import Slider from "@/app/components/ui/Slider";
import Card from "@/app/components/ui/Card";
import Footer from "@/app/components/Footer";

type SectionItem = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

const items: SectionItem[] = [
  {
    id: 1,
    title: "Apply in Minutes",
    description:
      "Our streamlined application process takes just a few taps. No paperwork, no waiting in lines.",
    imageUrl: "/placeholder.jpg",
  },
  {
    id: 2,
    title: "Instant Decision",
    description:
      "Our advanced AI evaluates your application in real-time, providing an immediate lending decision.",
    imageUrl: "/placeholder.jpg",
  },
  {
    id: 3,
    title: "Fast Funding",
    description:
      "Once approved, get up to $5,000 deposited directly into your bank account within minutes.",
    imageUrl: "/placeholder.jpg",
  },
  {
    id: 4,
    title: "Flexible Repayment",
    description:
      "Choose a repayment term that works for you, from 1 to 3 months.",
    imageUrl: "/placeholder.jpg",
  },
  {
    id: 5,
    title: "Transparent Pricing",
    description:
      "We believe in full disclosure. Our competitive rates are clearly displayed, and we never charge hidden fees.",
    imageUrl: "/placeholder.jpg",
  },
  {
    id: 6,
    title: "Secure and Confidential",
    description:
      "Your financial data is protected with bank-level encryption, ensuring your privacy and security.",
    imageUrl: "/placeholder.jpg",
  },
];

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

        <section className="flex flex-col items-center gap-12 bg-secondary rounded-4xl mt-8">
          <h1 className="text-3xl text-center mt-16">
            Your Next Pay Day Is Today
          </h1>
          <p className="text-center">Here's How it Works</p>

          <section className="bg-secondary max-w-6xl  flex flex-col gap-16 px-6">
            {items.map((item, index) => {
              const isReversed = index % 2 === 1;
              return (
                <div
                  key={item.id}
                  className={`flex flex-col md:flex-row ${
                    isReversed ? "md:flex-row-reverse" : ""
                  } items-center gap-8`}
                >
                  <div className="w-full md:w-1/2">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="h-64 rounded-xl shadow-lg"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <h2 className="text-xl md:text-2xl font-bold mb-4">
                      {item.title}
                    </h2>
                    <p className="text-lg text-gray-300">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </section>

          <div className="text-center w-10/12 mb-12">
            <p className="text-lg text-gray-300 mb-8">
              Whether you're dealing with an emergency expense, consolidating
              debt, or investing in yourself, we're here to provide the
              financial boost you need, when you need it.
            </p>
            <Button
              text="Learn More"
              color="blue"
              size="small"
              icon="downward"
            />
          </div>
        </section>

        <section className="flex flex-col items-center justify-center px-4 py-30">
          <div className="flex flex-col gap-12 items-center text-center max-w-2xl">
            <h1 className="text-4xl">Take a Sneak Peak at Our Rates</h1>
            <div className="w-8/12">
              <Slider />
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <Card
                title="Payment Time: Instant"
                description="Once you’re approved and you accept a loan, you’ll have the money in your account in seconds."
              />

              <Card
                title="Monthly Fee: $200"
                description="This is a monthly fee charged for the service of the loan, priced at 20% of the loan amount"
              />

              <Card
                title="Monthly Payment: $1,200"
                description="The total monthly payment you make. No hidden fees, no surprises"
              />
            </div>
          </div>

          <div className="p-10">
            <Button
              text="Get Started"
              color="black"
              size="wide"
              icon="forward"
            />
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
}
