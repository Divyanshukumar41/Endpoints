import { useState } from "react";
import faqData from "./../../Feq.json";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  // parent index + sub index
  const [openSubIndex, setOpenSubIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));

    // Parent change hone par sub FAQ close
    setOpenSubIndex(null);
  };

  const handleSubToggle = (parentIndex, subIndex) => {
    setOpenSubIndex((prev) => {
      if (prev?.parentIndex === parentIndex && prev?.subIndex === subIndex) {
        return null;
      }

      return {
        parentIndex,
        subIndex,
      };
    });
  };

  return (
    <div className="px-4 md:px-8 mt-6">
      <div className="space-y-5 max-w-7xl mx-auto">
        {faqData.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index}>
              {/* Parent FAQ */}
              <h3 className="mb-4">
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                  className={`text-base text-left font-medium flex items-center gap-4 cursor-pointer w-full transition-all rounded   neumorphic-flat  border ${faq.borderColor} px-3 py-3 ${
                    isOpen ? "text-blue-700" : "text-slate-900"
                  }`}
                >
                  <span className="font-bold text-md text-gray-600">
                    {faq.label}
                  </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`ml-auto size-4 fill-current shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.016 18a1.5 1.5 0 0 1-1.065-.434l-9-9a1.506 1.506 0 0 1 2.13-2.13l7.935 7.95L19.95 6.45a1.5 1.5 0 0 1 2.115 2.115l-9 9a1.5 1.5 0 0 1-1.05.435" />
                  </svg>
                </button>
              </h3>

              {/* Sub FAQ */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {faq.apirequests.map((subfaq, subindex) => {
                  const subIsOpen =
                    openSubIndex?.parentIndex === index &&
                    openSubIndex?.subIndex === subindex;

                  return (
                    <div key={subindex}>
                      {/* Sub Header */}
                      <div
                        className="
          px-1
          py-2
          bg-gray-100
          cursor-pointer
          transition-all
          border
          w-full
          rounded
        "
                        aria-expanded={subIsOpen}
                        onClick={() => handleSubToggle(index, subindex)}
                      >
                        <span
                          className={`
                                    mr-3
                                    px-2
                                    py-2
                                    ${subfaq.btnColor}
                                    text-white
                                    font-bold
                                    leading-relaxed
                                    rounded-md
                                  `}
                        >
                          {subfaq.method}
                        </span>

                        <span className="font-bold leading-relaxed">
                          {subfaq.url}
                        </span>
                      </div>

                      {/* Sub Detail */}
                      <div
                        className={`
          ${subindex ? "mb-7" : "mb-6"}
          overflow-hidden
          transition-all
          duration-300
          ${subIsOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
        `}
                      >
                        <div className="border-b border-l border-r px-3 py-3 bg-gray-100">
                          Status Code: {subfaq.code}
                        </div>

                        <div
                          className={`
            text-2xl
            ${subfaq.textcolor}
            font-bold
            border-l
            border-r
            px-3
            py-3
            bg-gray-100
          `}
                        >
                          {subfaq.label}
                        </div>

                        <div className="border-b border-l border-r px-3 py-3 bg-gray-100">
                          {subfaq.description}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FAQ;
