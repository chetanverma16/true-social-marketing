import Footer from "./footer";
import Navbar from "./navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-col items-center justify-center max-w-6xl mx-auto w-full my-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
