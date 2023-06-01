import React, { useState } from "react";

const UseFormHooks = (initialValue, validateData) => {
  const [formData, setFormData] = useState(initialValue);
  const [errors, setErrors] = useState({});

  console.log("formData", formData);

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    // Clear error for the changed field
    delete errors[fieldName];
    setFormData((formData) => ({ ...formData, [fieldName]: fieldValue }));
  };

  const reset = () => {
    setFormData(initialValue);
    setErrors({});
  };

  const validateFormData = () => {
    const formErrors = validateData(formData);
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handlePhoneChange = (e) => {
    let { name, value } = e.target;
    // console.log("dfg", e.target.value);
    const formattedPhone = value.replace(/[^\d]/g, "");

    // Clear error for the changed field
    delete errors[name];
    setFormData((formData) => ({ ...formData, [name]: formattedPhone }));
  };

  const handleSelectChange = (e, name) => {
    let fieldValue = name ? (e ? e.value : "") : e.target.value;
    let fieldName = name ? name : e.target.name;
    console.log("fieldName:", fieldName, "fieldValue:", fieldValue);
    // Clear error for the changed field
    delete errors[fieldName];
    setFormData((formData) => ({ ...formData, [fieldName]: fieldValue }));
  };

  // const handleNestedObjChange = (e, obj) => {
  //   let { name, value } = e.target;
  //   delete errors[name];
  //   console.log("obj", obj, formData);
  //   setFormData((formData) => ({
  //     ...formData

  //     // [obj]: { ...formData[obj], [name]: value }
  //   }));
  // };

  // const handleNestedObjChange = (e, obj) => {
  //   const { name, value } = e.target;
  //   // Clear error for the changed field
  //   delete errors[name];
  //   const nestedFormData = { ...formData[obj], [name]: value };
  //   console.log("nestedFormData", nestedFormData);

  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [obj]: nestedFormData
  //   }));
  // };

  const handleNestedObjChange = (e, obj) => {
    const { name, value } = e.target;
    console.log("name:", name, "value:", value);
    // Clear error for the changed field
    delete errors[name];
    setFormData(
      (prevFormData) => ({
        ...prevFormData,
        [obj]: {
          ...prevFormData[obj],
          [name]: value,
        },
      }),
      () => {
        console.log("hghfgh", [obj]);
      }
    );
  };

  return [
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
  ];
};

export default UseFormHooks;
