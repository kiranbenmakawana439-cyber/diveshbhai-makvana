// Welcome Message
window.onload = function () {
    alert("📚 Welcome to 12th Commerce Study Hub!");
};

// Dark Mode
let dark = false;

const darkBtn = document.createElement("button");
darkBtn.innerHTML = "🌙";
darkBtn.style.position = "fixed";
darkBtn.style.bottom = "20px";
darkBtn.style.right = "20px";
darkBtn.style.padding = "12px";
darkBtn.style.borderRadius = "50%";
darkBtn.style.border = "none";
darkBtn.style.cursor = "pointer";
darkBtn.style.fontSize = "20px";
document.body.appendChild(darkBtn);

darkBtn.onclick = function () {
    if (!dark) {
        document.body.style.background = "#111";
        document.body.style.color = "#fff";
        darkBtn.innerHTML = "☀️";
        dark = true;
    } else {
        document.body.style.background = "#f5f7fb";
        document.body.style.color = "#333";
        darkBtn.innerHTML = "🌙";
        dark = false;
    }
};

// Back to Top Button
const topBtn = document.createElement("button");
topBtn.innerHTML = "⬆";
topBtn.style.position = "fixed";
topBtn.style.bottom = "80px";
topBtn.style.right = "20px";
topBtn.style.display = "none";
topBtn.style.padding = "12px";
topBtn.style.borderRadius = "50%";
topBtn.style.border = "none";
topBtn.style.cursor = "pointer";
document.body.appendChild(topBtn);

window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

// Live Date & Time
const clock = document.createElement("div");
clock.style.position = "fixed";
clock.style.top = "10px";
clock.style.right = "10px";
clock.style.background = "#0077ff";
clock.style.color = "white";
clock.style.padding = "8px 12px";
clock.style.borderRadius = "8px";
document.body.appendChild(clock);

setInterval(function () {
    const now = new Date();
    clock.innerHTML = now.toLocaleString();
}, 1000);
