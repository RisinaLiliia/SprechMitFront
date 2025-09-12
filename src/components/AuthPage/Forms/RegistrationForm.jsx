import AuthForm from "./AuthForm";
import { useAuthForm } from "../../../hooks/useAuthForm";
import { fetchRegisterUser } from "../../../redux/auth/operations";
import {
  registerSchema,
  registerInitialValues,
  registerFields,
} from "../FormConfig/registerConfig";

export default function RegistrationForm({ switchTab }) {
  const { handleSubmit } = useAuthForm(fetchRegisterUser);

  return (
    <AuthForm
      title="Registrieren"
      description="Erstelle dein Konto und beginne noch heute, Deutsch zu lernen ✨"
      initialValues={registerInitialValues}
      validationSchema={registerSchema}
      fields={registerFields}
      onSubmit={handleSubmit}
      submitText="Registrieren"
      alternativeText="Schon ein Konto?"
      alternativeLink="/auth/login"
      alternativeLinkText="Anmelden"
      switchTab={switchTab}
    />
  );
}
