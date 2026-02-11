// ===== Wait until DOM is loaded =====
document.addEventListener("DOMContentLoaded", () => {

    // ===== Theme Toggle =====
    const toggleBtn = document.querySelector(".theme-toggle");
    const body = document.body;

    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        if (toggleBtn) toggleBtn.textContent = "☀";
    } else {
        if (toggleBtn) toggleBtn.textContent = "☾";
    }

    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            body.classList.toggle("light-mode");

            if (body.classList.contains("light-mode")) {
                toggleBtn.textContent = "☀";
                localStorage.setItem("theme", "light");
            } else {
                toggleBtn.textContent = "☾";
                localStorage.setItem("theme", "dark");
            }
        });
    }

    // ===== Certificate Verification =====
    const certInput = document.getElementById("certInput");
    const verifyBtn = document.getElementById("verifyBtn");
    const result = document.getElementById("result");

    if (verifyBtn && certInput && result) {
        verifyBtn.addEventListener("click", () => {
            const id = certInput.value.trim().toUpperCase();

            if (certificates && certificates[id]) {
                result.innerHTML = `
                    <img src="${certificates[id]}" alt="Certificate ${id}" 
                    style="width:100%;max-width:600px;border-radius:12px;box-shadow:0 0 20px rgba(230,164,196,0.35);">
                `;
            } else {
                result.innerHTML = id === "" ? "" : "<p style='color:#ff8fa3;'>Certificate not found.</p>";
            }
        });
    }


    // ===== CTA Button =====
    const ctaBtn = document.querySelector(".ctabtn");
    if (ctaBtn) {
        ctaBtn.addEventListener("click", () => {
            // Redirect to signup page (change URL as needed)
            window.location.href = "contact.html";
        });
    }

});
