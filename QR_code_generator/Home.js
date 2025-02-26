document.addEventListener("DOMContentLoaded", function () {
    let input = document.querySelector(".inputData");
    let qrcode = document.querySelector(".qrimg");
    let generateBtn = document.querySelector(".generate");

    function check() {
        if (input.value.trim().length > 0) {
            generator();
            showImage();
            document.querySelector(".error").style.display = "none";
            document.querySelector(".qrbox").style.display = "block";
            input.value = "";
        } else {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".qrbox").style.display = "none";
        }
    }

    function generator() {
        let dummy = input.value;
        qrcode.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + dummy;
    }

    function showImage() {
        qrcode.classList.remove("show");
        void qrcode.offsetWidth;
        setTimeout(() => {
            qrcode.classList.add("show");
        }, 200);
    }

    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            check();
        }
    });
    generateBtn.addEventListener("click", check);
});
