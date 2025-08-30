import AuthForm from "./AuthForm";
import { useAuthForm } from "../../../hooks/useAuthForm";
import { fetchLoginUser } from "../../../redux/auth/operations";
import { loginSchema, loginInitialValues, loginFields } from "./formConfig";

export default function LoginForm() {
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
      alternativeLink="/auth/register"
      alternativeLinkText="Registrieren"
    />
  );
}
