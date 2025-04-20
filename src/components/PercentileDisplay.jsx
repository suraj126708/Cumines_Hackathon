import React, { useState, useEffect } from "react";
import collegesData from "../data/collegesData.json";

function PercentileDisplay() {
  const [filters, setFilters] = useState({
    percentile: "",
    caste: "",
    branch: "",
  });

  const [filteredColleges, setFilteredColleges] = useState([]);
  const [availableBranches, setAvailableBranches] = useState([]);
  const [availableCastes, setAvailableCastes] = useState([]);

  useEffect(() => {
    // Populate available branches and castes from data
    const branchesSet = new Set();
    const castesSet = new Set();

    Object.values(collegesData).forEach((college) => {
      college.branches.forEach((branch) => {
        branchesSet.add(branch.branch_info);
        Object.keys(branch.table_data[0] || {}).forEach((key) => {
          if (key !== "null") castesSet.add(key);
        });
      });
    });

    setAvailableBranches(Array.from(branchesSet));
    setAvailableCastes(Array.from(castesSet));
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const applyFilters = () => {
    const { percentile, caste, branch } = filters;

    let results = Object.entries(collegesData)
      .map(([collegeName, collegeInfo]) => {
        const branches = collegeInfo.branches.filter((b) => {
          const percentileMatch =
            percentile === "" ||
            (b.table_data.some(
              (row) =>
                caste in row &&
                parseFloat(row[caste]?.split("\n")[1]?.replace(/[()]/g, "")) <=
                  parseFloat(percentile)
            ) ??
              false);

          const branchMatch =
            branch === "" ||
            b.branch_info.toLowerCase() === branch.toLowerCase();

          return percentileMatch && branchMatch;
        });

        if (branches.length > 0) {
          return {
            collegeName,
            status: collegeInfo.status,
            level: collegeInfo.level,
            branches,
            closingPercentile: Math.max(
              ...branches.map((b) =>
                parseFloat(
                  b.table_data[0][caste]?.split("\n")[1]?.replace(/[()]/g, "")
                )
              )
            ), // Get the highest closing percentile
          };
        }
        return null;
      })
      .filter(Boolean);

    // Sort results by closing percentile in descending order
    results.sort((a, b) => b.closingPercentile - a.closingPercentile);

    setFilteredColleges(results.slice(0, 20)); // Top 20 results
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-blue-700 mb-8">College Finder</h1>

      {/* Filters Section */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl mb-6">
        <h2 className="text-2xl font-semibold mb-4">Filter Criteria</h2>

        {/* Percentile Input */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Your Percentile:</label>
          <input
            type="number"
            name="percentile"
            value={filters.percentile}
            onChange={handleFilterChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter your percentile"
          />
        </div>

        {/* Caste Dropdown */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Select Caste:</label>
          <select
            name="caste"
            value={filters.caste}
            onChange={handleFilterChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          >
            <option value="">-- Select Caste --</option>
            {availableCastes.map((caste) => (
              <option key={caste} value={caste}>
                {caste}
              </option>
            ))}
          </select>
        </div>

        {/* Branch Dropdown */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Select Branch:</label>
          <select
            name="branch"
            value={filters.branch}
            onChange={handleFilterChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          >
            <option value="">-- Select Branch --</option>
            {availableBranches.map((branch) => (
              <option key={branch} value={branch}>
                {branch}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={applyFilters}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition duration-300"
        >
          Find Colleges
        </button>
      </div>

      {/* Results Section */}
      <div className="w-full max-w-4xl">
        {filteredColleges.length > 0 ? (
          filteredColleges.map((college, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow-md mb-4">
              <h2 className="text-xl font-bold">{college.collegeName}</h2>
              <p className="text-sm text-gray-600">
                {college.status} - {college.level}
              </p>
              <h3 className="font-semibold mt-4">Matching Branches:</h3>
              <ul className="list-disc list-inside">
                {college.branches.map((branch, i) => (
                  <li key={i}>{branch.branch_info}</li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center">
            No colleges match your criteria. Try adjusting the filters.
          </p>
        )}
      </div>
    </div>
  );
}

export default PercentileDisplay;
