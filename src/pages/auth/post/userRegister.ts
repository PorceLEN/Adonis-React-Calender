import type { UserRegisterPayload } from "../../../types/UserRegisterPayload";

export default async function userRegister({
  pseudo,
  email,
  password,
  confirmPassword
}: UserRegisterPayload) {

  try {
    const response = await fetch("http://localhost:3333/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ pseudo, email, password, confirmPassword }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Une erreur est survenue");
    }

    const data = await response.json();
    return data;



  } catch (err) {
    if (err instanceof Error) {
      return { error: err.message };
    } else return { error: "Erreur inconnue" };
  }
}