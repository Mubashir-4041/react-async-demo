import React, { useState } from "react";
import StepCard from "./StepCard";

const steps = [
  {
    code: `async function fetchData() {\n  console.log("Fetching...");\n}\nfetchData();`,
    explanation: "Async function starts execution like a normal function.",
    output: "Fetching..."
  },
  {
    code: `async function fetchData() {\n  console.log("Fetching...");\n  return "Data loaded";\n}\nfetchData();`,
    explanation: "The async function returns a promise.",
    output: "Fetching..."
  },
  {
    code: `async function fetchData() {\n  console.log("Fetching...");\n  return "Data loaded";\n}\nfetchData().then(console.log);`,
    explanation: "When awaited or .then() is used, the resolved value is retrieved.",
    output: "Fetching...\nData loaded"
  }
];

export default function AsyncAwaitExample() {
  const [stepIndex, setStepIndex] = useState(0);

  return (
    <StepCard
      code={steps[stepIndex].code}
      explanation={steps[stepIndex].explanation}
      output={steps[stepIndex].output}
      onPrev={() => setStepIndex(stepIndex - 1)}
      onNext={() => setStepIndex(stepIndex + 1)}
      isFirst={stepIndex === 0}
      isLast={stepIndex === steps.length - 1}
    />
  );
}
