import { calculate_values } from "./calculate_values.js"
import { draw_plot } from "./draw_plot.js"

document.getElementById("plotBtn").addEventListener("click", () => {
    const expr = document.getElementById("func").value;

    let values = calculate_values(expr)
    let xValues = values[0]
    let yValues = values[1]

    draw_plot(expr, xValues, yValues)
});

document.getElementById("heartBtn").addEventListener("click", () => {
    document.getElementById("func").value = "(x^2)^(1/3) + e/3 * sqrt(pi - x^2) * sin(10 * pi * x)"
    const expr = document.getElementById("func").value;

    let values = calculate_values(expr, 0.001, -4, 4)
    let xValues = values[0]
    let yValues = values[1]

    draw_plot(expr, xValues, yValues)
});

document.getElementById("resetBtn").addEventListener("click", () => {
    document.getElementById("func").value = "x"
    const expr = document.getElementById("func").value;

    let values = calculate_values(expr)
    let xValues = values[0]
    let yValues = values[1]

    draw_plot(expr, xValues, yValues)
});

