import Header from "@/app/components/Header";
import Button from "@/app/components/Button";

export default function Home() {
  return (
    <main className="pt-24">
      <Header />
     
     <div>
        <h1>Buttons</h1>
        <Button text="Choose Plan" color="blue" size="small" icon="forward" />
        <Button text="Expand" color="black" size="wide" icon="downward" />
     </div>
      
    </main>
  );
}
