import { serverUrl } from "./constants.js";
localStorage.setItem("reclebooksToken", "");
let oldVal;
export let phoneNum;
$("#phoneNumber").on("propertychange change keyup paste input", function () {
    let currentVal = $(this).val();
    if (currentVal == oldVal) {
        return;
    }
    oldVal = currentVal;
    let phoneNum = document.getElementById("phoneNumber").value;
    const regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    if (regPhone.test(phoneNum) === true) {
        $("#requestCertificate").attr("disabled", false);
    }
});

$(document).ready(function () {
    $("#certificateNumber").hide();
    $("#login").hide();
    $("#requestCertificate").click(async function () {
        const result = await fetch(`${serverUrl}/auth/otp`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: document.querySelector("#phoneNumber").value,
        }).then((res) => res.json());
        if (!result.data) {
            alert("다시 시도해주세요.");
            return;
        }
        $("#requestCertificate").hide();
        $("#certificateNumber").show();
        $("#login").show();
    });
    $("#login").on("click submit", async function () {
        const token = await fetch(`${serverUrl}/auth/login`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                phone: document.querySelector("#phoneNumber").value,
                otpNumber: document.querySelector("#certificateNumber").value,
            }),
        }).then((res) => res.json());
        if (token.data) {
            localStorage.setItem("reclebooksToken", token.data.accessToken);
            location = "./index.html";
            return;
        }
      phoneNum = document.querySelector("#phoneNumber").value;
      localStorage.setItem("reclePhone", phoneNum);
        location = "./register.html";
    });
});
