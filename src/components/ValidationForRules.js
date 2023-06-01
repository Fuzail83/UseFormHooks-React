export default function ValidationFormRules(state) {
  const { fname, lname, phoneNo, reactSelect, city, email, address, contact } =
    state;
  console.log("fgdfg", state);

  let errors = {};
  if (!fname) {
    errors.fname = "first name is required";
  }

  if (!lname) {
    errors.lname = "last name is required";
  }

  if (!phoneNo) {
    errors.phoneNo = "Phone Number is required";
  }

  if (!reactSelect) {
    errors.reactSelect = "Please select value";
  }

  if (!address?.city) {
    errors.city = "Please enter city";
  }

  if (!contact?.email) {
    errors.email = "Please enter Email";
  }
  return errors;
}
