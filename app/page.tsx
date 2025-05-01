import Header from "@/app/components/Header";
import Button from "@/app/components/ui/Button";

export default function Home() {
  return (
    <main className="pt-24">
      <Header />

      <section className="flex flex-col gap-6 p-4">
        <h1 className="text-center mb-4 text-lg">Component Library</h1>

        <div>
            <h2 className="mb-2">Buttons</h2>
            <div className="flex gap-4 ">
              <Button text="Choose Plan" color="blue" size="small" icon="forward" />
              <Button text="Expand" color="black" size="wide" icon="downward" />
            </div>
        </div>

        <div>
            <h2 className="mb-2">Accordions</h2>
            <div className="flex gap-4 ">
    
            </div>
        </div>

        <div>
            <h2 className="mb-2">Cards</h2>
            <div className="flex gap-4 ">
    
            </div>
        </div>

        <div>
            <h2 className="mb-2">Slider</h2>
            <div className="flex gap-4 ">
    
            </div>
        </div>



      </section>

     
     
      
    </main>
  );
}
