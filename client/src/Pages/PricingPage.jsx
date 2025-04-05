import Pricing from "../components/PricingSection";

function PricingPage() {
  return (
    <div className="">
      <div className="">
        <Pricing />
      </div>
      <div className="max-w-5xl mx-auto mt-16 px-6 text-left text-gray-800 space-y-6 mb-4">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-4">
          Why Choose Our Plans?
        </h2>

        <p className="text-lg">
          Our pricing plans are thoughtfully designed to suit every type of
          traveler — from spontaneous backpackers to luxury vacationers. We
          believe that memorable experiences shouldnt come with a heavy price
          tag.
        </p>

        <p className="text-lg">
          With flexible durations, exclusive benefits, and clear pricing, you
          can focus on the journey instead of the logistics. No hidden charges,
          no confusing terms — just pure travel joy.
        </p>

        <p className="text-lg">
          Each subscription comes with handpicked destinations, verified
          accommodations, and around-the-clock support. You can also customize
          your experience with premium add-ons and tailored itineraries.
        </p>

        <p className="text-lg">
          So, whether youre planning a solo escape, a romantic trip, or a family
          adventure, we’ve got a plan that fits your dream perfectly. Adventure
          awaits — let us help you explore it your way.
        </p>
      </div>
    </div>
  );
}

export default PricingPage;
