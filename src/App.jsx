import { useState } from "react";
import "./App.css";
import FormWrapper from "./form-wrapper";

const Categories = {
  personal_details: {
    name: "Personal Details",
    inputs: [
      {
        type: "text",
        label: "First Name",
        placeholder: "Enter your first name",
        value: "",
        id: "first_name",
        name: "first_name",
        error: "",
        disabled: false,
        readonly: false,
        required: true,
        description: "should be grater than 3 characters",
      },
      {
        type: "text",
        label: "Last Name",
        placeholder: "Enter your last name",
        value: "",
        id: "last_name",
        name: "last_name",
        error: "",
        disabled: false,
        readonly: false,
      },
    ],
  },
  contact_details: {
    name: "Contact Details",
    inputs: [
      {
        type: "text",
        label: "Email",
        placeholder: "Enter your email",
        value: "",
        id: "email",
        name: "email",
        error: "",
        disabled: false,
        readonly: false,
        required: true,
      },
      {
        type: "text",
        label: "Phone Number",
        placeholder: "Enter your phone number",
        value: "",
        id: "phone",
        name: "phone",
        error: "",
        disabled: false,
        readonly: false,
      },
    ],
  },
  extra: {
    name: "",
    inputs: [
      {
        type: "checkbox",
        label: "Accept Terms and Conditions",
        value: "accept_terms",
        id: "accept_terms",
        name: "accept_terms",
        error: "",
        disabled: false,
        readonly: false,
        checked: false,
      },
    ],
  },
};

function App() {
  const [inputs, setInputs] = useState(structuredClone(Categories));

  function onInputChange({ id, index, value, checked, type, categoryKey }) {
    const oldState = structuredClone(inputs);

    if (type === "checkbox") {
      oldState[categoryKey].inputs[index].checked = checked;
    } else {
      oldState[categoryKey].inputs[index].value = value;
    }

    oldState[categoryKey].inputs[index].error = "";
    setInputs(oldState);
  }

  function onInputBlur({ id, index, value, checked, type, categoryKey }) {
    const oldState = structuredClone(inputs);

    if (type === "text") {
      if (value.length < 3) {
        oldState[categoryKey].inputs[
          index
        ].error = `Invalid Field ${oldState[categoryKey].inputs[index].label}`;
      }
    }

    setInputs(oldState);
  }

  function handleCancel() {
    setInputs(structuredClone(Inputs));
  }

  function handleSubmit() {
    const params = {};

    Object.keys(inputs).forEach((key) => {
      inputs[key].inputs.forEach((input) => {
        if (input.type === "checkbox") {
          if (input.checked) {
            params[input.name] = input.value;
          }
        } else {
          params[input.name] = input.value;
        }

        if (input.accept_terms === "YES") {
        }
      });
    });

    const oldState = structuredClone(inputs);
    oldState["contact_details"].inputs[0].error =
      "Announce this error, this is super important";

    setInputs(oldState);
  }

  // function needToDisableSubmit() {
  //   let disable = false;

  //   for (let input of inputs) {
  //     if (input.required && !input.value) {
  //       disable = true;
  //       break;
  //     }
  //   }

  //   return disable;
  // }

  // const disableSubmit = needToDisableSubmit(inputs);

  return (
    <>
      <FormWrapper
        onCancel={handleCancel}
        onSubmit={handleSubmit}
        onBlur={onInputBlur}
        onInputChange={onInputChange}
        inputs={inputs}
        // disableSubmit={disableSubmit}
      />
    </>
  );
}

export default App;
