import React, { useState } from "react";
import Select from "react-select";
import UseFormHooks from "./UseFormHooks";
import ValidationFormRules from "./ValidationForRules";
const Form = () => {
  const defaultFormData = {
    fname: "",
    lname: "",
    phoneNo: "",
    reactSelect: "",
    address: {
      city: "",
    },
    contact: {
      email: "",
    },
  };

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const [
    formData,
    setFormData,
    handleChange,
    reset,
    validateFormData,
    setErrors,
    errors,
    handlePhoneChange,
    handleSelectChange,
    handleNestedObjChange,
  ] = UseFormHooks(defaultFormData, ValidationFormRules);

  const [submittedData, setSubmittedData] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    console.log("Form values:", formData);

    // Validate the form and handle errors

    const isValid = validateFormData();
    console.log("isValid", isValid);

    if (isValid) {
      // Submit the form or perform further actions
      console.log("Form submitted");

      setSubmittedData([...submittedData, formData]);
      reset();
    }
  };
  console.log("submittedData", submittedData);

  // console.log("defaultFormData", formData);

  // const handlenChangeFornested = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     address: {
  //       ...prevFormData.address,
  //       city: value
  //     }
  //   }));
  // };
  return (
    <div className="App">
      <label>First Name : </label>
      <input
        type="text"
        value={formData.fname}
        name="fname"
        onChange={handleChange}
      />
      <p>{errors["fname"]}</p>
      <label>Last Name : </label>
      <input
        type="text"
        value={formData.lname}
        name="lname"
        onChange={handleChange}
      />
      <p>{errors["lname"]}</p>
      <label>Phone Number : </label>
      <input
        type="text"
        value={formData.phoneNo}
        name="phoneNo"
        onChange={handlePhoneChange}
        maxLength="10"
      />
      <p>{errors["phoneNo"]}</p>
      <label>City : </label>
      <input
        type="text"
        name="city"
        value={formData.address.city}
        onChange={(e) => handleNestedObjChange(e, "address")}
        maxLength="10"
      />
      <p>{errors["city"]}</p>
      <label>Email : </label>
      <input
        type="text"
        value={formData.contact.email}
        name="email"
        onChange={(e) => handleNestedObjChange(e, "contact")}
      />
      <p>{errors["email"]}</p>
      <label>Select Value : </label>
      <Select
        options={options}
        name="reactSelect"
        // value={defaultFormData.reactSelect}
        value={options.find((option) => option.value === formData.reactSelect)}
        onChange={(e) => handleSelectChange(e, "reactSelect")}
      />
      <p>{errors["reactSelect"]}</p>

      <button onClick={submit}>Send</button>

      <button type="button" onClick={reset}>
        Reset
      </button>

      {/* <h2>Form Data:</h2>
      <p>First Name: {formData.fname}</p>
      <p>Last Name: {formData.lname}</p>
      <p>Phone Number: {formData.phoneNo}</p>
      <p>City: {formData.address.city}</p>
      <p>Select Value: {formData.reactSelect}</p> */}

      {/* Display submitted data in a table */}
      {submittedData.length > 0 && (
        <div>
          <h2>Submitted Data:</h2>
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone Number</th>
                <th>City</th>
                <th>Select Value</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {submittedData.map((data, index) => (
                <tr key={index}>
                  <td>{data.fname}</td>
                  <td>{data.lname}</td>
                  <td>{data.phoneNo}</td>
                  <td>{data.address.city}</td>
                  <td>{data.reactSelect}</td>
                  <td>{data.contact.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Form;
