export const validateField = (name, value) => {
  let error = "";

  if (name === "email") {
    if (!/\S+@\S+\.\S+/.test(value)) {
      error = "Invalid email";
    }
  }

  if (name === "name") {
    if (value.trim().length < 2) {
      error = "Name too short";
    }
  }

  return error;
};

export const validateForm = (form) => {
  const errors = {};

  Object.keys(form).forEach((key) => {
    const err = validateField(key, form[key]);
    if (err) errors[key] = err;
  });

  return errors;
};