import React from "react";

const EstimationResult = ({ data }) => {
  if (!data) return null;

  if (!data.images_match) {
    return (
      <div className="text-red-600 font-semibold">
        Images do not match. Cannot estimate cost or time.
      </div>
    );
  }

  return (
    <div className=" alibg-white shadow-md p-6 rounded-lg max-w-xl  mt-10 space-y-4">
      <h2 className="text-2xl font-bold text-green-600">Estimation Summary</h2>

      {/* Estimated Total Cost */}
      <div>
        <strong>Estimated Total Cost:</strong>{" "}
        {data.estimated_cost?.amount.toLocaleString("en-IN", {
          style: "currency",
          currency: data.estimated_cost?.currency,
        })}
        <p className="text-sm text-gray-600">{data.estimated_cost?.note}</p>
      </div>

      {/* Estimated Time */}
      <div>
        <strong>Estimated Time to Complete:</strong>{" "}
        {data.estimated_time?.amount} {data.estimated_time?.unit}
        <p className="text-sm text-gray-600">{data.estimated_time?.note}</p>
      </div>
    </div>
  );
};

export default EstimationResult;
