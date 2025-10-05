export default async function userLogout() {
  try {
    const response = await fetch("http://localhost:3333/logout", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Une erreur est survenue");
    }

    const data = await response.json();

    console.log(data);
  
    return data;
  } catch (err) {
    if (err instanceof Error) {
      return { error: err.message };
    } else return { error: "Erreur inconnue" };
  }
}
