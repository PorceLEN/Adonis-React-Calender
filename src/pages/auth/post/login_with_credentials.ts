import type { UserLoginPayload } from "../../../types/login_payloadALERTE";

export default async function authenticateWithCredentials({
  email,
  password,
}: UserLoginPayload) {
  try {
    const response = await fetch("http://localhost:3333/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
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