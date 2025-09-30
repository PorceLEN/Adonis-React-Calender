export default async function logout() {
    const response = await fetch("http://localhost:3333/logout", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include"
    })

    if (!response.ok) {
        throw new Error(`Déconnexion échoué: ${response.status}`)
    }

    const data = await response.json();

    return data.message;
}

console.log(logout());
