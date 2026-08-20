import Button from "../components/partials/buttons/Button";
import Text from "../components/text";

const CTASection = () => {
  return (
    <section className="md:px-10  px-4 py-20">
      <div
        className="relative rounded-3xl p-12 text-center overflow-hidden
        bg-gradient-to-r from-green-400 to-emerald-500"
      >
        <div className="absolute left-20 top-1/2 w-32 h-32 bg-white/20 blur-2xl rounded-full" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <Text
            variant="heading"
            className=" text-[#00311F] font-bold font-[Outfit]"
          >
            Ready to Uncover the Future of Mining?
          </Text>

          <Text
            variant="body"
            className="text-[#00311F] font-[Lato] max-w-xl mx-auto mt-4"
          >
            Join the intelligence network of top-tier mining operations and
            government agencies globally.
          </Text>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button>Get Started Free</Button>

            <button className="px-6 py-3 rounded-full border border-black text-black hover:bg-black hover:text-white transition">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
