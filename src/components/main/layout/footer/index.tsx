import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 w-full max-w-6xl mx-auto py-10 text-white">
      <div className="w-full grid lg:grid-cols-3 gap-10">
        <div className="w-full flex flex-col justify-between">
          <div className="space-y-4 text-left">TSM Interview</div>
        </div>

        <div className="col-span-2 grid lg:grid-cols-4 text-sm gap-10">
          <div className="flex flex-col gap-4">
            <span className="font-semibold">Products</span>

            <Link
              href="/"
              className="opacity-70 hover:opacity-100 duration-100"
            >
              Features
            </Link>
            <Link
              href="/"
              className="opacity-70 hover:opacity-100 duration-100"
            >
              Integrations
            </Link>
            <Link
              href="/"
              className="opacity-70 hover:opacity-100 duration-100"
            >
              Pricing & Plans
            </Link>
            <Link
              href="/"
              className="opacity-70 hover:opacity-100 duration-100"
            >
              Changelog
            </Link>
            <Link
              href="/"
              className="opacity-70 hover:opacity-100 duration-100"
            >
              Our method
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-semibold">Company</span>

            <Link
              href="/"
              className="opacity-70 hover:opacity-100 duration-100"
            >
              About us
            </Link>
            <Link
              href="/"
              className="opacity-70 hover:opacity-100 duration-100"
            >
              Diversity & Inclusion
            </Link>
            <Link
              href="/"
              className="opacity-70 hover:opacity-100 duration-100"
            >
              Blog
            </Link>
            <Link
              href="/"
              className="opacity-70 hover:opacity-100 duration-100"
            >
              Careers
            </Link>
            <Link
              href="/"
              className="opacity-70 hover:opacity-100 duration-100"
            >
              Financial Statements
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-semibold">Resources</span>

            <Link
              href="/"
              className="opacity-70 hover:opacity-100 duration-100"
            >
              Community
            </Link>
            <Link
              href="/"
              className="opacity-70 hover:opacity-100 duration-100"
            >
              Terms of service
            </Link>
            <Link
              href="/"
              className="opacity-70 hover:opacity-100 duration-100"
            >
              Report a vulnerability
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-semibold">Legals</span>

            <Link
              href="/"
              className="opacity-70 hover:opacity-100 duration-100"
            >
              Refund policy
            </Link>
            <Link
              href="/"
              className="opacity-70 hover:opacity-100 duration-100"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/"
              className="opacity-70 hover:opacity-100 duration-100"
            >
              Privacy policy
            </Link>
            <Link
              href="/"
              className="opacity-70 hover:opacity-100 duration-100"
            >
              Brand Kit
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
