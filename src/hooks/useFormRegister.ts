// useLoginForm.ts
import { useForm } from "react-hook-form";
import type { UserRegisterPayload } from "../types/UserRegisterPayload";
import userRegister from "../pages/auth/post/userRegister";

export default function useFormRegister() {
  const { register, handleSubmit } = useForm<UserRegisterPayload>();

  function userInformations(data: UserRegisterPayload) {
    console.log(data);
  }

  const handleRegister = handleSubmit(userRegister);

  return {
    register,
    handleRegister,

    ///////////////

    handleSubmit,
    userInformations,
  };
}
