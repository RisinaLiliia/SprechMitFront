import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export function useAuthForm(submitAction) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async (values, actions) => {
      try {
        await dispatch(submitAction(values)).unwrap();
        navigate("/");
      } finally {
        actions.setSubmitting(false);
      }
    },
    [dispatch, navigate, submitAction],
  );

  return { handleSubmit };
}
