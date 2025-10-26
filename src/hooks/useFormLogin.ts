// useLoginForm.ts
import { useForm } from "react-hook-form";
import type { UserLoginPayload } from "../types/UserLoginPayload";
import { authentification } from "../contexts/AuthContext";

/////////////////////////////////////////////////////////////////////

export default function useFormLogin() {
  const { register, handleSubmit } = useForm<UserLoginPayload>();
  const { loginSubmit } = authentification();

  function userInformations(data: UserLoginPayload) {
    console.log(data);
  }

  const handleLogin = handleSubmit(loginSubmit);

  return {
    register,
    handleLogin,

    ///////////////

    handleSubmit,
    userInformations,
  };
}
