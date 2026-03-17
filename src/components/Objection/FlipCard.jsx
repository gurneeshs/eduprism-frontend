import React from "react";

export default function FlipCard({
    index,
    activeIndex,
    setActiveIndex,
    title,
    concern,
    solution,
}) {
    const isFlipped = activeIndex === index;

    const handleClick = () => {
        if (isFlipped) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <div
            className="w-full h-130 perspective cursor-pointer"
            onClick={handleClick}
        >
            <div
                className={`relative w-full h-full duration-700 transform-style preserve-3d ${isFlipped ? "rotate-y-180" : ""
                    }`}
            >
                {/* FRONT - Concern */}
                <div className="absolute w-full h-full backface-hidden rounded-2xl shadow-xl bg-gray-100 dark:bg-gray-800 p-6 flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl font-semibold mb-4 border-b-2 py-4 text-blue-700 dark:text-blue-300 ">
                            {title}
                        </h3>
                        {/* <p className="text-gray-700 ">{concern}</p> */}
                        <ul className="list-disc pl-5  space-y-2 text-gray-700 dark:text-gray-200 text-sm text-justify">
                            {concern.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>

                    </div>
                    <button className="mt-4 border border-blue-700 px-4 py-4 text-md cursor-pointer font-semibold text-gray-50 bg-blue-700 dark:bg-blue-500">
                        See How We Solve This →
                    </button>
                </div>

                {/* BACK - Solution */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl shadow-xl bg-lightgreen-100 p-6 flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl font-semibold mb-4 border-b-2 py-4 text-lightgreen-700">
                            ✔ {title} Solved
                        </h3>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm text-justify">
                            {solution.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </div>
                    <button className="mt-4 border border-lightgreen-700 px-4 py-4 text-md cursor-pointer font-semibold text-white bg-lightgreen-700">
                        View Parent Concern
                    </button>
                </div>
            </div>
        </div>
    );
}