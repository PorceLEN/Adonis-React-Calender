// useLoginForm.ts
import { useForm } from "react-hook-form";
import registerWithCredentials from "../pages/auth/post/register_with_credentials";
import type { UserRegisterPayload } from "../types/register_payload";

export default function useRegisterForm() {
  const { register, handleSubmit } = useForm<UserRegisterPayload>();

  function userInformations(data: UserRegisterPayload) {
    console.log(data);
  }

  const handleSub = handleSubmit(registerWithCredentials);

  return {
    register,
    handleSub,

    ///////////////

    handleSubmit,
    userInformations
  };
}
