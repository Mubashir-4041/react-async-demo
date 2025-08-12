import React, { useState } from "react";
import StepCard from "./StepCard";

const steps = [
  {
    code: `const promise = new Promise(resolve => resolve("Data received"));\nconsole.log("Step 1: Promise created");`,
    explanation: "A promise is created but not yet executed.",
    output: "Step 1: Promise created"
  },
  {
    code: `promise.then(data => console.log(data));\nconsole.log("Step 1: Promise created");`,
    explanation: "Promise then() is registered, synchronous code still runs first.",
    output: "Step 1: Promise created"
  },
  {
    code: `promise.then(data => console.log(data));\nconsole.log("Step 1: Promise created");\n// Later...\nData received`,
    explanation: "After synchronous code finishes, the promise resolves.",
    output: "Step 1: Promise created\nData received"
  }
];

export default function PromisesExample() {
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
