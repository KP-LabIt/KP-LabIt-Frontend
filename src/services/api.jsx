// Všetky requesty na backend pokope (pre čistejší kód a jednoduchší maintenance)

const BASE_URL = "http://localhost:8000/";

// Funkcia na prihlasenie ktorá vracia token a stará sa o error handling
const LoginFetch = async ({email, password}, setError) => {

    const url = BASE_URL + "api/accounts/login/";

    const data = { email, password };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })

        const body = await response.json();

        if (response.ok) {

            const mustChangePassword = body.must_change_password;

            if (mustChangePassword === true) {
                localStorage.setItem("firstLogin", mustChangePassword);
            }

            if (body.token) {
                localStorage.setItem("token", body.token);
                return body.token;
            }

            else {
                setError("Chyba odpovede.");
            }
        }

        else {
            setError("Chyba pri prihlasovaní: " + body.detail);
        }
    }

    catch (err) {
        setError("Chyba pri odosielaní dát: ")
        console.log(err)
    }
};


// Funkcia na zmenu hesla
const ChangePasswordFetch = async ({oldPassword, newPassword}, setError, setSuccess) => {

    const url = BASE_URL + "api/accounts/change_password/";

    if (oldPassword === newPassword) {
        setError("Heslá, nemôžu byť rovnaké.")
        return
    }

    const user = { "old_password": oldPassword, "new_password": newPassword };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json" ,
                "Authorization": "Bearer " + localStorage.getItem("token")
            },
            body: JSON.stringify(user)
        })

        const body = await response.json();

        if (response.ok) {
            const mustChangePassword = "false";
            localStorage.setItem("firstLogin", mustChangePassword);

            setSuccess(true)
        }

        else {
            setError("Chyba pri zmene hesla: " + body.detail);
            console.log(body)
        }
    }

    catch (err) {
        setError("Chyba pri odosielaní dát: " + err.message)
        console.log(err)
    }
};


export { LoginFetch, ChangePasswordFetch };
