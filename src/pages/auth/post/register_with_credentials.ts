import type { UserRegisterPayload } from "../../../types/register_payload";

export default async function registerWithCredentials({
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

///// Problème onSubmit form