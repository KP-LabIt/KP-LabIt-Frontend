// Všetky requesty na backend pokope (pre čistejší kód a jednoduchší maintenance)

const BASE_URL = "http://localhost:8000/";


const ErrorHandler = async (res) => {

    // konvertacia odpovede na text alebo json podla content-type
    const contentType = res.headers.get("content-type") || "";
    const rawBody = contentType.includes("application/json")
        ? await res.json().catch(() => null)
        : await res.text().catch(() => "");


    // vytvorenie error massage z odpovede z backendu
    let detail = "";

    if (typeof rawBody === "string" && rawBody.trim()) {
        detail = rawBody.trim();
    }
    else if (Array.isArray(rawBody) && rawBody.length) {
        detail = rawBody.join(" ");
    }
    else if (rawBody && typeof rawBody === "object") {

        const firstVal = Object.values(rawBody)[0];
        if (Array.isArray(firstVal)) detail = firstVal.join(" ");
        else if (typeof firstVal === "string") detail = firstVal;
    }

    // Orezanie príliš dlhých správ
    const MAX_LEN = 150;
    if (detail.length > MAX_LEN) {
        detail = detail.slice(0, MAX_LEN) + "…";
    }

    return { detail, rawBody };

}


// Funkcia na prihlasenie ktorá sa stará sa o error handling a ukladanie údajov do localStorage
const LoginFetch = async ({email, password}, setError) => {

    const url = BASE_URL + "api/accounts/login/";

    const data = { email, password };

    try {
        const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })

        const { detail, rawBody } = await ErrorHandler(res);

        const msg = detail
            ? "Chyba pri prihlasovaní: " + detail
            : "Chyba pri prihlasovaní.";


        if (res.ok) {

            localStorage.setItem("firstLogin", rawBody.must_change_password);

            if (rawBody.token) {
                localStorage.setItem("token", rawBody.token);
            }
            if (rawBody.refresh_token) {
                localStorage.setItem("refreshToken", rawBody.refresh_token);
            }
            if (rawBody.user) {
                const user = rawBody.user;
                localStorage.setItem("userRole", user.role);
                localStorage.setItem("userEmail", user.email);
                localStorage.setItem("userName", user.first_name + " " + user.last_name);
            }

            else {
                setError("Chyba odpovede.");
            }
        }

        else {
            setError(msg);
            console.log(detail)
        }
    }

    catch (err) {
        setError("Chyba pri odosielaní dát: " + err.message)
        console.log(err)
    }
};



// Funkcia na zmenu hesla
const ResetPasswordFetch = async (email, setError, setSuccess) => {

    const url = BASE_URL + "api/accounts/reset_password/";

    try {

        // odosielanie emailu na backend
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json" ,
            },
            body: JSON.stringify(email)
        })

        const { detail } = await ErrorHandler(res);

        const msg = detail
            ? "Chyba pri odosielaní emailu: " + detail
            : "Chyba pri odosielaní emailu.";


        // setnutie success
        if (res.ok) {
            setSuccess(true)
        }


        // setnutie erroru
        else {
            setError(msg);
            console.log(detail)
        }
    }

    catch (err) {
        setError("Chyba pri odosielaní dát: " + err.message)
        console.log(err)
    }
};


// funkcia pre potvrdenie zmeny hesla ( odoslanie noveho hesla do backendu )
const ResetPasswordFetchConfirm = async ({uid, token, newPassword, reNewPassword}, setError, setSuccess) => {

    const url = BASE_URL + "api/accounts/reset_password_confirm/";

    const payload = { uid, token, "new_password": newPassword, "re_new_password": reNewPassword };

    try {
        const res = await fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(payload)
        })

        const { detail } = await ErrorHandler(res);

        const msg = detail
            ? "Chyba pri zmene hesla: " + detail
            : "Chyba pri zmene hesla.";


        // setnutie success
        if (res.ok) {
            setSuccess(true)
        }


        // setnutie erroru
        else {
            setError(msg);
            console.log(detail)
        }

    }

    catch (err) {
        setError("Chyba pri odosielaní dát: ")
        console.log(err)
    }

}


// funkcia pre refreshnutie tokenu
const RefreshTokenFetch = async (refreshToken) => {

    const url = BASE_URL + "api/accounts/refresh_token/";

    try {
        // Refresh the access token
        const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ refresh_token: refreshToken })
        });

        if (!res.ok) {
            return false;
        }

        const data = await res.json();

        // Save new tokens
        localStorage.setItem("token", data.token);
        localStorage.setItem("refreshToken", data.refresh_token);


        return true;
    } catch (err) {
        console.error("Failed to refresh token:", err);
        return false;
    }
}

export { LoginFetch, ResetPasswordFetch, ResetPasswordFetchConfirm, RefreshTokenFetch };
