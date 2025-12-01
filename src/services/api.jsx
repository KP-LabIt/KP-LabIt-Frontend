// Všetky requesty na backend pokope (pre čistejší kód a jednoduchší maintenance)

const BASE_URL = "http://localhost:8000/";

// Funkcia na prihlasenie ktorá vracia token a stará sa o error handling
const LoginFetch = async ({email, password}, setError) => {

    const url = BASE_URL + "/api/accounts/login/";

    const data = { email, password };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })

        if (response.ok) {
            const body = await response.json();
            if (body.token) {
                localStorage.setItem("token", body.token);
                return body.token;
            }
            else {
                setError("Chyba odpovede.");
            }
        }

        else {
            setError("Chyba pri prihlasovaní: " + response.status);
        }
    }

    catch (err) {
        setError("Chyba pri odosielaní dát: ")
        console.log(err)
    }
};

export { LoginFetch };
