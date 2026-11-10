
const buttons = document.querySelectorAll(".menu-button");

const toast = document.querySelector(".toast");
const toastMessage = document.querySelector(".toast-message");

const counter = document.querySelector(".top-line-right");

let toastTimer;

// Button Click Events

buttons.forEach((button, index) => {

    button.addEventListener("click", () => {

        // Remove Previous Selection
        buttons.forEach(item => {
            item.classList.remove("selected");
        });

        // Select Current Button
        button.classList.add("selected");

        const label = button.dataset.label;

        // Update Notification
        toastMessage.textContent = `${label} selected`;

        toast.classList.add("show");

        // Update Counter
        counter.textContent =
            `${String(index + 1).padStart(2, "0")} / 05`;

        // Hide Notification Automatically
        clearTimeout(toastTimer);

        toastTimer = setTimeout(() => {
            toast.classList.remove("show");
        }, 1900);

        /*
          Add Your Navigation Here:

          Example:
          window.location.href = "page1.html";

        */

    });

});


// 3D Mouse Movement Effect

const panel = document.querySelector(".panel");

if (window.matchMedia("(pointer:fine)").matches) {

    panel.addEventListener("pointermove", event => {

        const rect = panel.getBoundingClientRect();

        const x = (event.clientX - rect.left) / rect.width - 0.5;

        const y = (event.clientY - rect.top) / rect.height - 0.5;

        panel.style.transform =
            `rotateY(${x * 2.2}deg) rotateX(${-y * 2.2}deg)`;

    });

    panel.addEventListener("pointerleave", () => {

        panel.style.transform = "rotateY(0) rotateX(0)";

    });

}
