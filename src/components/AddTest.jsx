import React from "react";
import { useState } from "react";
import "../styles/AddTest.css";
import { useEffect } from "react";

function AddTest() {
  const [testy, setTesty] = useState([]);
  const [meno, setMeno] = useState("");
  const [body, setBody] = useState(0);
  const [pridanie, setPridanie] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    if (!meno || !body) {
      return;
    } else {
      const testData = {
        meno,
        body,
      };

      try {
        const response = await fetch("http://127.0.0.1:8000/api/data/create/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(testData),
        });

        const data = await response.json();
        setPridanie(`Pridané: Meno - ${meno}, Počet bodov - ${body}`);
        // ked chcem rovno vypisat novy test, states su immutable takze nemozem rovno pridat cez .push, ale treba novu array
        // ako keby spravit cca
        setTesty((prev) => [...prev, data]);
      } catch (error) {
        console.log(error);
      }

      setBody(0);
      setMeno("");
    }
  };

  const fetchTesty = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/data/");
      const data = await response.json();
      setTesty(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTesty();
  }, []);

  return (
    <div className="addTestContainer">
      <form className="form">
        <input
          type="text"
          value={meno}
          placeholder="Meno..."
          onChange={(e) => setMeno(e.target.value)}
        />
        <input
          type="number"
          value={body}
          placeholder="Body..."
          onChange={(e) => setBody(e.target.value)}
        />
        <button onClick={handleClick}>Pridať Test</button>
      </form>
      <p className="pridanieText">{pridanie}</p>
      <h1>Zoznam testov</h1>
      {testy.length !== 0 ? (
        testy.map((value) => {
          return (
            <h3>
              Meno: {value.meno}, Body: {value.body}
            </h3>
          );
        })
      ) : (
        <h3>Prázdny zoznam</h3>
      )}
    </div>
  );
}

export default AddTest;
