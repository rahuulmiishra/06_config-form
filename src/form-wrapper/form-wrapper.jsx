import Checkbox from "./checkbox";
import TextField from "./text-field";

import "./style.css";

function FormWrapper({
  disableSubmit,
  inputs,
  onInputChange,
  onCancel,
  onSubmit,
  onBlur,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit();
  }

  return (
    <form className="form-wrapper" onSubmit={handleSubmit}>
      {Object.keys(inputs).map((key) => {
        const data = inputs[key];

        return (
          <fieldset key={key}>
            <legend>{data.name}</legend>

            {data.inputs.map((input, index) => {
              if (input.type === "checkbox") {
                return (
                  <Checkbox
                    categoryKey={key}
                    index={index}
                    onChange={onInputChange}
                    key={input.id}
                    {...input}
                  />
                );
              }

              return (
                <TextField
                  categoryKey={key}
                  index={index}
                  onBlur={onBlur}
                  onChange={onInputChange}
                  key={input.id}
                  {...input}
                />
              );
            })}
          </fieldset>
        );
      })}

      <div>
        <button onClick={onCancel}>Cancel</button>
        <button disabled={disableSubmit} type="submit" className="success">
          Submit
        </button>
      </div>
    </form>
  );
}

export default FormWrapper;
