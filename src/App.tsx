import { useState } from "react";
import hopsLogo from "../public/teknoir.jpg";
import "./App.css";
import type { RootState } from "./store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, lock, unlock, addCounter, deleteCounter } from "./slice/counterSlice";

function App() {

  const counterList = useSelector((state: RootState) => state.counterListReducer.counterList);
  const [newCountName, setNewCountName] = useState("");
  const dispatch = useDispatch();
  return (
    <>
      <h1>Counter List</h1>
      <div className="card">
        <input value={newCountName} onChange={(e) => setNewCountName(e.target.value)}></input>
        <button onClick={() => dispatch(addCounter(newCountName))}>
          Add Counter
        </button>
      </div>
      {counterList.map((counter, id) => (
        < div className="card" key={id}>
          <p>{id}</p>
          <p>{counter.name}</p>
          <p>{counter.lock ? "locked" : "unlocked"}</p>
          <p>{counter.count}</p>
          {
            counter.lock ?
              <div>
                <button disabled>
                  Increase
                </button>
                <button disabled>
                  Decrease
                </button>
              </div> :
              <div>
                <button onClick={() => dispatch(increment(counter.name))}>
                  Increase
                </button>
                <button onClick={() => dispatch(decrement(counter.name))}>
                  Decrease
                </button>
              </div>

          }
          {
            counter.lock ?
              <div>
                <button onClick={() => dispatch(unlock(counter.name))}>
                  Unlock
                </button>
                <button disabled>Delete</button>
              </div> :
              <div>
                <button onClick={() => dispatch(lock(counter.name))}>
                  Lock
                </button>
                <button onClick={() => dispatch(deleteCounter(counter.name))}>Delete</button>
              </div>
          }
        </div>
      ))
      }
    </>
  );
}

export default App;
