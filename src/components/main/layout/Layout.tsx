import Footer from "./footer";
import Navbar from "./navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col container w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
