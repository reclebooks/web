import { phoneNum } from "./login.js";
import { serverUrl } from "./constants.js";
$(document).ready(function () {
    $(".btn").on("click", async function () {
        const result = await fetch(`${serverUrl}/auth/join`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user: {
                    phone: localStorage.getItem("reclePhone"),
                },
                nickname: document.querySelector("#nickname").value,
                college: document.querySelector("#schoolName").value,
                region: null,
            }),
        }).then((res) => res.json());
        console.log(result);
        if (!result.success) {
            alert(result.error.message);
            return false;
        }
        localStorage.setItem("reclebooksToken", result.data.accessToken);
        location = "./index.html";
        return false;
    });
});
