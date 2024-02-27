import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkle, Wand } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full flex flex-col gap-y-10 items-center justify-cente">
      <div className="px-4 md:px-0 z-40 grid place-items-center gap-6 p-4">
        <Button
          size="sm"
          data-aos="fade-down"
          variant="outline"
          className="flex items-center gap-x-2"
        >
          <Sparkle size={10} />
          Star Wars API
        </Button>

        <div className="text-center flex flex-col gap-y-2 items-center">
          <h1 className="leading-none text-5xl">
            Star Wars API Implementation
          </h1>

          <p className="text-2xl max-w-md opacity-60">
            Our landing page template works on all devices, so you only have to
            set it up once, and get beautiful results forever.
          </p>
        </div>
        <div className="flex items-center gap-x-2">
          <Button size="sm" className="group">
            Get Started
            <ArrowRight className="ml-1 w-4 h-4 text-primary-500 duration-150 ease-in-out transition-transform group-hover:translate-x-0.5" />
          </Button>

          <Button size="sm" variant="secondary">
            <Wand className="mr-1 w-4 h-4" />
            Read the docs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
