// useLoginForm.ts
import { useForm } from "react-hook-form";
import type { UserLoginPayload } from "../types/login_payloadALERTE";
import authenticateWithCredentials from "../pages/auth/post/login_with_credentials";

export default function useLoginForm() {
  const { register, handleSubmit } = useForm<UserLoginPayload>();

  function userInformations(data: UserLoginPayload) {
    console.log(data);
    
  }

  const handleSub = handleSubmit(authenticateWithCredentials);

  return {
    register,
    handleSub,

    ///////////////

    handleSubmit,
    userInformations
  };
}
