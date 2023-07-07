import { useContext, useState } from "react";
import StateContext from "../StateContext";
import "../css/Form.css";
const Form = () => {
  const { data, setData } = useContext(StateContext);
  const [text, setText] = useState("");
  const [check, setCheck] = useState(false);
  return (
    <div
      className="card bg-dark text-light"
      style={{ width: "30rem", height: "17rem" }}
    >
      <div className="card-body">
        <h5 className="card-title"> Write New Todo </h5>
        <div className="input-group d-flex flex-column justify-content-evenly">
          <div className="">
            <span className="input-group-text bg-dark text-light c-border mb-2">
              {" "}
              Do :
            </span>
            <textarea
              className="form-control text-light bg-dark c-border mb-4"
              aria-label="With textarea"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="form-check m-auto mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              value={check}
              onChange={() => {
                setCheck((current) => !current);
              }}
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              If Its Important Press !
            </label>
          </div>
        </div>
        <button
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            setData((prevData) => [
              ...prevData,
              { id: data.length + 1, title: text, important: check },
            ]);
          }}
        >
          {" "}
          attach{" "}
        </button>
      </div>
    </div>
  );
};
export default Form;
