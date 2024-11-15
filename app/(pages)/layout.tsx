import Footer from "@/Components/footer";
import Header from "@/Components/header";

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen text-primary">
      <Header />
      <main >{children}</main>
      <Footer />
    </div>
  );
};

export default PagesLayout;
