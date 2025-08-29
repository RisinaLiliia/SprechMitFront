import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useAuthForm = (authThunk) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const { confirmPassword: _, ...dataToSend } = values;

      const resultAction = await dispatch(authThunk(dataToSend));

      if (authThunk.fulfilled.match(resultAction)) {
        navigate("/dashboard");
        resetForm();
      } else if (authThunk.rejected.match(resultAction)) {
        console.error(resultAction.payload || resultAction.error);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return { handleSubmit };
};
