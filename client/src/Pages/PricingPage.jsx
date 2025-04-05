import Pricing from "../components/PricingSection";

function PricingPage() {
  return (
    <div className="">
      <div className="">
        <Pricing />
      </div>
      <div className="max-w-5xl mx-auto mt-16 px-6 text-left text-gray-800 space-y-6 mb-4">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-4">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">
              What is included in the pricing plans?
            </h3>
            <p className="text-lg">
              Our pricing plans include access to handpicked destinations,
              verified accommodations, and 24/7 support. You can also customize
              your experience with premium add-ons.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Are there any hidden charges?
            </h3>
            <p className="text-lg">
              No, we believe in transparent pricing. There are no hidden charges
              or confusing terms.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Can I customize my plan?</h3>
            <p className="text-lg">
              Yes, you can customize your plan with tailored itineraries and
              premium add-ons to suit your preferences.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              What kind of support do you offer?
            </h3>
            <p className="text-lg">
              We provide around-the-clock support to ensure your travel
              experience is seamless and enjoyable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingPage;
