// useLoginForm.ts
import { useForm } from "react-hook-form";
import type { UserLoginPayload } from "../types/UserLoginPayload";
import userLogin from "../pages/auth/post/userLogin";




export default function useFormLogin() {
  const { register, handleSubmit } = useForm<UserLoginPayload>();

  function userInformations(data: UserLoginPayload) {
    console.log(data);
  }

  const handleLogin = handleSubmit(userLogin);

  return {
    register,
    handleLogin,

    ///////////////

    handleSubmit,
    userInformations
  };
}
