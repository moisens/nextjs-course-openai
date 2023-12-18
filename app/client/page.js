"use client";
import { useState } from "react";

const ClientPage = () => {
  const [count, setCount] = useState(0);
  const handleIncreaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecreaseCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <h1 className="text-7xl">{count}</h1>
      <div className="flex gap-2">
        <button
          className="btn btn-sm btn-outline btn-primary"
          onClick={handleIncreaseCount}
        >
          +
        </button>
        <button
          className="btn btn-sm btn-outline btn-primary"
          onClick={handleDecreaseCount}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default ClientPage;
