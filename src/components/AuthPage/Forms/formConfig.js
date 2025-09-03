import * as Yup from "yup";

export const loginInitialValues = {
  email: "",
  password: "",
};

export const loginFields = [
  { name: "email", label: "Email", type: "email", autoComplete: "username" },
  {
    name: "password",
    label: "Password",
    type: "password",
    autoComplete: "current-password",
  },
];

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(128, "Password must be at most 128 characters")
    .required("Password is required"),
});

export const registerInitialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  privacyPolicyAccepted: false,
};

export const registerFields = [
  { name: "name", label: "Name", type: "text", autoComplete: "name" },
  { name: "email", label: "Email", type: "email", autoComplete: "username" },
  {
    name: "password",
    label: "Password",
    type: "password",
    autoComplete: "new-password",
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    autoComplete: "new-password",
  },
  {
    name: "privacyPolicyAccepted",
    label: "I accept the Privacy Policy",
    type: "checkbox",
  },
];

export const registerSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Zа-яА-ЯёЁ\s]+$/, "Name can only contain letters")
    .max(16, "Name must be at most 16 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(128, "Password must be at most 128 characters")
    .matches(/[A-Za-z]/, "Password must contain at least one letter")
    .matches(/\d/, "Password must contain at least one number")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .max(128, "Password must be at most 128 characters")
    .required("Confirm your password"),
  privacyPolicyAccepted: Yup.boolean().oneOf(
    [true],
    "You must accept the Privacy Policy",
  ),
});
