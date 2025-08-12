import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SyncExample from "./components/SyncExample";
import PromisesExample from "./components/PromiseExample";
import AsyncAwaitExample from "./components/AsyncAwaitExample";

function App() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">JavaScript Execution Flow</h1>
      <h3>Sync Example</h3>
      <SyncExample />
      <hr />
      <h3>Promises Example</h3>
      <PromisesExample />
      <hr />
      <h3>Async/Await Example</h3>
      <AsyncAwaitExample />
    </div>
  );
}

export default App;
