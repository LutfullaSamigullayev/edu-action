import { Banner, Footer, Header } from "@/components";

export default function HomePage() {
  return (
    <div className="h-full w-full flex flex-col justify-between">
      <div>
        <Header />
        <Banner />
      </div>
      <Footer />
    </div>
  );
}
