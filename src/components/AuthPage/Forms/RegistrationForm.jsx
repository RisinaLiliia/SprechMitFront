import AuthForm from "./AuthForm";
import { useAuthForm } from "../../../hooks/useAuthForm";
import { fetchRegisterUser } from "../../../redux/auth/operations";
import {
  registerSchema,
  registerInitialValues,
  registerFields,
} from "./formConfig";

export default function RegistrationForm() {
  const { handleSubmit } = useAuthForm(fetchRegisterUser);

  return (
    <AuthForm
      title="Sign up"
      description="Create your account and start learning German today ✨"
      initialValues={registerInitialValues}
      validationSchema={registerSchema}
      fields={registerFields}
      onSubmit={handleSubmit}
      submitText="Sign up"
      alternativeText="Already have an account?"
      alternativeLink="/auth/login"
      alternativeLinkText="Log in"
    />
  );
}
