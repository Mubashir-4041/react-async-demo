import React from "react";
import "./StepCard.css";

export default function StepCard({ code, explanation, output, onPrev, onNext, isFirst, isLast }) {
  return (
    <div className="card shadow-lg p-4 animated-card">
      <pre className="bg-dark text-light p-3 rounded">
        <code>{code}</code>
      </pre>
      <div className="mt-3 alert alert-info">{explanation}</div>
      <div className="mt-3 p-3 bg-light rounded border">
        <strong>Output:</strong>
        <pre>{output}</pre>
      </div>
      <div className="d-flex justify-content-between mt-4">
        <button className="btn btn-secondary" onClick={onPrev} disabled={isFirst}>
          ← Previous
        </button>
        <button className="btn btn-primary" onClick={onNext} disabled={isLast}>
          Next →
        </button>
      </div>
    </div>
  );
}
