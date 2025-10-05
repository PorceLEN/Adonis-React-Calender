import type { UserLoginPayload } from "../../../types/UserLoginPayload";

export default async function userLogin({
  email,
  password,
}: UserLoginPayload) {
  try {
    const response = await fetch("http://localhost:3333/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Une erreur est survenue");
    }

    const data = await response.json();

    return data;
  } catch (err) {
    if (err instanceof Error) {
      return { error: err.message };
    }
    return { error: "Erreur inconnue" };
  }
}
 