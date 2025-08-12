import React, { useState } from "react";
import StepCard from "./StepCard";

const steps = [
  {
    code: `console.log("Step 1: Start");`,
    explanation: "Synchronous execution starts from the first line.",
    output: "Step 1: Start"
  },
  {
    code: `console.log("Step 1: Start");\nconsole.log("Step 2: Middle");`,
    explanation: "The second line executes immediately after the first.",
    output: "Step 1: Start\nStep 2: Middle"
  },
  {
    code: `console.log("Step 1: Start");\nconsole.log("Step 2: Middle");\nconsole.log("Step 3: End");`,
    explanation: "The last line runs, completing synchronous execution.",
    output: "Step 1: Start\nStep 2: Middle\nStep 3: End"
  }
];

export default function SyncExample() {
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
