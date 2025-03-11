const rangeInput = document.getElementById("order_range");
const rangeValue = document.getElementById("order_range_value");

const customSelect = document.getElementById("custom_select");

rangeInput.addEventListener("input", () => {
    rangeValue.textContent = rangeInput.value + '%';
});

customSelect.onclick = () => {
    customSelect.classList.toggle("order__form_toggle-select");
}