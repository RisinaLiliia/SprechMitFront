import AuthForm from "./AuthForm";
import { useAuthForm } from "../../../hooks/useAuthForm";
import { fetchLoginUser } from "../../../redux/auth/operations";
import { loginSchema, loginInitialValues, loginFields } from "./formConfig";

export default function LoginForm() {
  const { handleSubmit } = useAuthForm(fetchLoginUser);

  return (
    <AuthForm
      title="Log in"
      description="Access your personalized German learning journey 🚀"
      initialValues={loginInitialValues}
      validationSchema={loginSchema}
      fields={loginFields}
      onSubmit={handleSubmit}
      submitText="Log in"
      alternativeText="Don’t have an account?"
      alternativeLink="/auth/register"
      alternativeLinkText="Sign up"
    />
  );
}
