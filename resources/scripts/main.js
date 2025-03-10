const rangeInput = document.getElementById("order_range");
const rangeValue = document.getElementById("order_range_value");

rangeInput.addEventListener("input", () => {
    rangeValue.textContent = rangeInput.value + '%';
});