import * as Yup from "yup";

export const emailSchema = Yup.string()
  .email("Bitte eine gültige Email eingeben")
  .required("Email ist erforderlich");

export const passwordSchema = Yup.string()
  .min(8, "Mindestens 8 Zeichen")
  .max(128, "Maximal 128 Zeichen")
  .matches(/[A-Z]/, "Mindestens ein Großbuchstabe")
  .matches(/[a-z]/, "Mindestens ein Kleinbuchstabe")
  .matches(/\d/, "Mindestens eine Zahl")
  .matches(/[@$!%*?&#]/, "Mindestens ein Sonderzeichen")
  .required("Passwort ist erforderlich");

export const nameSchema = Yup.string()
  .matches(
    /^[\p{L}\s'-]+$/u,
    "Nur Buchstaben, Leerzeichen, - und ' sind erlaubt"
  )
  .max(16, "Maximal 16 Zeichen")
  .required("Name ist erforderlich");
