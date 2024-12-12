import { Header, Banner, Product, Footer } from "@/components";

export default function HomePage() {
  return (
    <div className="h-full w-full flex flex-col justify-between">
      <div className="flex flex-col gap-y-8 sm:gap-y-10 md:gap-y-12 lg:gap-y-14 xl:gap-y-16 2xl:gap-y-20">
        <Header />
        <Banner />
        <Product />
      </div>
      <Footer />
    </div>
  );
}
