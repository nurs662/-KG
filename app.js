// ТЕМА
const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
    document.body.classList.toggle("light");
    toggle.textContent = document.body.classList.contains("light") ? "🌙" : "☀️";
};

// КАЛЬКУЛЯТОР
function convert() {
    const amt = +amount.value;
    const rates = {
        KGS:1,
        USD:+rateUSD.textContent,
        EUR:+rateEUR.textContent,
        RUB:+rateRUB.textContent
    };
    if(!amt) return result.textContent="Введите сумму";
    const res = (amt * rates[fromCurrency.value]) / rates[toCurrency.value];
    result.textContent = `≈ ${res.toFixed(2)} ${toCurrency.value}`;
}

// ФОРМА → WhatsApp
contactForm.onsubmit = e => {
    e.preventDefault();
    const f = e.target;
    const msg = `Имя: ${f.name.value}\nТелефон: ${f.phone.value}\nКомментарий: ${f.comment.value}`;
    window.open(`https://wa.me/996553999045?text=${encodeURIComponent(msg)}`);
};
