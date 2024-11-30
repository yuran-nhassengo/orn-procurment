import Footer from "@/components/footer";
import Header from "@/components/header";

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen my-16 mb-20 md:mb-0 text-primary">
     {/* <Header />*/}
      <div>
        <main className="my-2 ">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default PagesLayout;
