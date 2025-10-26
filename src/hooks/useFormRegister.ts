// useLoginForm.ts
import { useForm } from "react-hook-form";
import type { UserRegisterPayload } from "../types/UserRegisterPayload";
import { authentification } from "../contexts/AuthContext";

/////////////////////////////////////////////////////////////////////

export default function useFormRegister() {
  const { register, handleSubmit } = useForm<UserRegisterPayload>();
  const { registerSubmit } = authentification();

  function userInformations(data: UserRegisterPayload) {
    console.log(data);
  }

  const handleRegister = handleSubmit(registerSubmit);

  return {
    register,
    handleRegister,

    ///////////////

    handleSubmit,
    userInformations,
  };
}
