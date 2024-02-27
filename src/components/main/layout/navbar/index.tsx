import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Menu, XIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);

  const { push } = useRouter();

  const nav = useMemo(
    () => [
      { title: "About", href: "/about" },
      { title: "Company", href: "/integrations" },
      { title: "Pricing", href: "/pricing" },
      { title: "Contact", href: "/customers" },
    ],
    []
  );

  return (
    <>
      <header className="z-50 bg-transparent w-full">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4">
          <Link href="/" className="flex-1 text-white">
            TSM-interview
          </Link>

          <div className="hidden flex-1 md:flex items-center gap-x-10 text-sm font-medium">
            {nav.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-white/70 hover:text-white duration-150 ease-in-out transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>

          <div className="flex-1 flex items-center justify-end gap-2">
            <Button variant="ghost" onClick={() => push("/signin")}>
              Sign in
            </Button>

            <Button
              variant="outline"
              className="group"
              onClick={() => push("/signup")}
            >
              Sign up
              <ArrowRight className="ml-1 w-3.5 h-3.5 text-primary-500 duration-150 ease-in-out transition-transform group-hover:translate-x-0.5" />
            </Button>

            <button
              className="md:hidden ml-2 ring-0 outline-none"
              onClick={() => setIsMobileNavbarOpen(!isMobileNavbarOpen)}
            >
              {isMobileNavbarOpen ? (
                <XIcon className="text-white" />
              ) : (
                <Menu className="text-white" />
              )}
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {isMobileNavbarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "md:hidden mt-2 px-4 z-50 absolute top-16 w-full duration-200 transition-all ease-in-out"
            )}
          >
            <div className="p-4 mx-auto bg-gray-800 grid gap-4 bg-secondary-900 rounded-lg">
              {nav.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-white duration-150 ease-in-out transition-colors hover:bg-gray-700 p-2 rounded-xl"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
