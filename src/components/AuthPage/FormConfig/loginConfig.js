import { emailSchema, passwordSchema } from "./validationSchemas";
import * as Yup from "yup";

export const loginInitialValues = {
  email: "",
  password: "",
};

export const loginFields = [
  { name: "email", label: "Email", type: "email", autoComplete: "username" },
  {
    name: "password",
    label: "Passwort",
    type: "password",
    autoComplete: "current-password",
  },
];

export const loginSchema = Yup.object().shape({
  email: emailSchema,
  password: passwordSchema,
});
