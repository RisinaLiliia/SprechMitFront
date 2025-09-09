import { emailSchema, passwordSchema, nameSchema } from "./validationSchemas";
import * as Yup from "yup";

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
    label: "Passwort",
    type: "password",
    autoComplete: "new-password",
  },
  {
    name: "confirmPassword",
    label: "Passwort bestätigen",
    type: "password",
    autoComplete: "new-password",
  },
  {
    name: "privacyPolicyAccepted",
    label: "Ich akzeptiere die Datenschutzerklärung",
    type: "checkbox",
  },
];

export const registerSchema = Yup.object().shape({
  name: nameSchema,
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwörter müssen übereinstimmen")
    .required("Bitte bestätigen Sie Ihr Passwort"),
  privacyPolicyAccepted: Yup.boolean().oneOf(
    [true],
    "Sie müssen die Datenschutzerklärung akzeptieren",
  ),
});
