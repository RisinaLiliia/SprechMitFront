import AuthForm from "./AuthForm";
import { useAuthForm } from "../../../hooks/useAuthForm";
import { fetchLoginUser } from "../../../redux/auth/operations";
import {
  loginSchema,
  loginInitialValues,
  loginFields,
} from "../FormConfig/loginConfig";

export default function LoginForm({ switchTab }) {
  const { handleSubmit } = useAuthForm(fetchLoginUser);

  return (
    <AuthForm
      title="Anmelden"
      description="Greife auf deine personalisierte Deutschlern-Reise zu 🚀"
      initialValues={loginInitialValues}
      validationSchema={loginSchema}
      fields={loginFields}
      onSubmit={handleSubmit}
      submitText="Anmelden"
      alternativeText="Noch kein Konto?"
      alternativeLinkText="Registrieren"
      switchTab={switchTab}
    />
  );
}
