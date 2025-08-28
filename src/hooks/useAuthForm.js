import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchLoginUser } from "../redux/auth/operations";

export const useAuthForm = (authThunk) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const resultAction = await dispatch(authThunk(values));
      if (fetchLoginUser.fulfilled.match(resultAction)) {
        // успешный логин — редирект на /dashboard
        navigate("/dashboard");
      }
      resetForm();
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return { handleSubmit };
};
