import React, { useState } from "react";

function TabbedContent() {
  const [activeTab, setActiveTab] = useState("stats"); // Initial active tab

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select tab
        </label>
        <select
          id="tabs"
          className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
          onChange={(e) => handleTabClick(e.target.value)}
          value={activeTab}
        >
          <option value="stats">Statistics</option>
          <option value="about">Services</option>
          <option value="faq">FAQ</option>
        </select>
      </div>
      <ul
        className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400"
        id="fullWidthTab"
        role="tablist"
      >
        <li className="w-full">
          <button
            id="stats-tab"
            data-tabs-target="#stats"
            type="button"
            role="tab"
            aria-controls="stats"
            aria-selected={activeTab === "stats"}
            onClick={() => handleTabClick("stats")}
            className={`inline-block w-full p-4 rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none ${
              activeTab === "stats"
                ? "dark:bg-gray-700 dark:hover:bg-gray-600"
                : ""
            }`}
          >
            Statistics
          </button>
        </li>
        <li className="w-full">
          <button
            id="about-tab"
            data-tabs-target="#about"
            type="button"
            role="tab"
            aria-controls="about"
            aria-selected={activeTab === "about"}
            onClick={() => handleTabClick("about")}
            className={`inline-block w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none ${
              activeTab === "about"
                ? "dark:bg-gray-700 dark:hover:bg-gray-600"
                : ""
            }`}
          >
            Services
          </button>
        </li>
        <li className="w-full">
          <button
            id="faq-tab"
            data-tabs-target="#faq"
            type="button"
            role="tab"
            aria-controls="faq"
            aria-selected={activeTab === "faq"}
            onClick={() => handleTabClick("faq")}
            className={`inline-block w-full p-4 rounded-tr-lg bg-gray-50 hover:bg-gray-100 focus:outline-none ${
              activeTab === "faq"
                ? "dark:bg-gray-700 dark:hover:bg-gray-600"
                : ""
            }`}
          >
            FAQ
          </button>
        </li>
      </ul>
      <div
        id="fullWidthTabContent"
        className="border-t border-gray-200 dark:border-gray-600"
      >
        <div
          className={`p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800 ${
            activeTab === "stats" ? "" : "hidden"
          }`}
          id="stats"
          role="tabpanel"
          aria-labelledby="stats-tab"
        >
          {/* Statistics content */}
          <h2>Statistics content</h2>
          {/* ... */}
        </div>
        <div
          className={`p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800 ${
            activeTab === "about" ? "" : "hidden"
          }`}
          id="about"
          role="tabpanel"
          aria-labelledby="about-tab"
        >
          {/* About content */}
          <h2>About content</h2>
          {/* ... */}
        </div>
        <div
          className={`p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800 ${
            activeTab === "faq" ? "" : "hidden"
          }`}
          id="faq"
          role="tabpanel"
          aria-labelledby="faq-tab"
        >
          {/* FAQ content */}
          <h2>Faq content</h2>
          {/* ... */}
        </div>
      </div>
    </div>
  );
}

export default TabbedContent;
