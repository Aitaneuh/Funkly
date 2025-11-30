import { calculate_values } from "./calculate_values.js"
import { draw_plot } from "./draw_plot.js"

document.getElementById("plotBtn").addEventListener("click", () => {
    const expr = document.getElementById("func").value;
    const minVal = parseFloat(document.getElementById("minVal").value);
    const maxVal = parseFloat(document.getElementById("maxVal").value);
    const delta = parseFloat(document.getElementById("delta").value);


    let values = calculate_values(expr, delta, minVal, maxVal)
    let xValues = values[0]
    let yValues = values[1]

    draw_plot(expr, xValues, yValues)
});

document.getElementById("heartBtn").addEventListener("click", () => {
    document.getElementById("func").value = "(x^2)^(1/3) + e/3 * sqrt(pi - x^2) * sin(10 * pi * x)"
    document.getElementById("minVal").value = -5
    document.getElementById("maxVal").value = 5
    document.getElementById("delta").value = 0.001
    const expr = document.getElementById("func").value;
    const minVal = parseFloat(document.getElementById("minVal").value);
    const maxVal = parseFloat(document.getElementById("maxVal").value);
    const delta = parseFloat(document.getElementById("delta").value);


    let values = calculate_values(expr, delta, minVal, maxVal)
    let xValues = values[0]
    let yValues = values[1]

    draw_plot(expr, xValues, yValues)
});

document.getElementById("gaussBtn").addEventListener("click", () => {
    document.getElementById("func").value = "1/(sqrt(2 * pi)) * e^(-1 * (x^2/2^2))"
    document.getElementById("minVal").value = -5
    document.getElementById("maxVal").value = 5
    document.getElementById("delta").value = 0.01
    const expr = document.getElementById("func").value;
    const minVal = parseFloat(document.getElementById("minVal").value);
    const maxVal = parseFloat(document.getElementById("maxVal").value);
    const delta = parseFloat(document.getElementById("delta").value);


    let values = calculate_values(expr, delta, minVal, maxVal)
    let xValues = values[0]
    let yValues = values[1]

    draw_plot(expr, xValues, yValues)
});

document.getElementById("resetBtn").addEventListener("click", () => {
    document.getElementById("func").value = "x"
    const expr = document.getElementById("func").value;
    document.getElementById("minVal").value = -10
    document.getElementById("maxVal").value = 10
    document.getElementById("delta").value = 0.01

    let values = calculate_values(expr)
    let xValues = values[0]
    let yValues = values[1]

    draw_plot(expr, xValues, yValues)
});

