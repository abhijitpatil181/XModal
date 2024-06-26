import Modal from "./components/Modal";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>User Details Modal</h1>
        <button
          onClick={() => setOpen(true)}
          style={{
            padding: "0.5rem",
            width: "10rem",
            background: "rgb(0, 155, 255)",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            color: "white",
          }}
        >
          Open Form
        </button>
      </div>

      <Modal open={open}>
        <Form />
      </Modal>
    </>
  );
}

export default App;