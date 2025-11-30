// funkcia pre extrakciu payloadu z JWT tokenu, vracia payload


const getPayloadFromToken = () => {

    const token = localStorage.getItem("token");

    if (typeof token !== "string") {
        throw new Error("Token musí byť string");
    }

    const parts = token.split(".");
    if (parts.length !== 3) {
        throw new Error("Zlý formáť tokenu.");
    }

    const payloadBase64Url = parts[1];

    const payloadBase64 = payloadBase64Url.replace(/-/g, "+").replace(/_/g, "/");

    const padLength = 4 - (payloadBase64.length % 4);
    const paddedPayloadBase64 =
        padLength < 4 ? payloadBase64 + "=".repeat(padLength) : payloadBase64;

    const jsonString = atob(paddedPayloadBase64);

    return JSON.parse(jsonString);

}

export default getPayloadFromToken;
