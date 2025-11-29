document.getElementById("plotBtn").addEventListener("click", () => {
    const expr = document.getElementById("func").value;

    // Parse math expression
    let f;
    try {
        f = math.parse(expr).compile();
    } catch (err) {
        alert("Invalid function!");
        return;
    }

    // Generate X values
    const xValues = [];
    const yValues = [];

    for (let x = -10; x <= 10; x += 0.01) {
        try {
            const scope = { x: x };
            const y = f.evaluate(scope);
            xValues.push(x);
            yValues.push(y);
        } catch (e) {
            // skip invalid points
        }
    }

    // Plot
    Plotly.newPlot("plot", [{
        x: xValues,
        y: yValues,
        type: "scatter",
        line: { color: "#ff0000ff" }
    }], {
        title: `f(x) = ${expr}`,
        paper_bgcolor: "#141414ff",    // fond global
        plot_bgcolor: "#141414ff",     // fond du graph
        font: { color: "white" },
        xaxis: { gridcolor: "#333" },
        yaxis: { gridcolor: "#333" },
        margin: { t: 40 }
    });
});

document.getElementById("heartBtn").addEventListener("click", () => {
    document.getElementById("func").value = "(x^2)^(1/3) + e/3 * sqrt(pi - x^2) * sin(10 * pi * x)"
    const expr = document.getElementById("func").value;

    // Parse math expression
    let f;
    try {
        f = math.parse(expr).compile();
    } catch (err) {
        alert("Invalid function!");
        return;
    }

    // Generate X values
    const xValues = [];
    const yValues = [];

    for (let x = -10; x <= 10; x += 0.01) {
        try {
            const scope = { x: x };
            const y = f.evaluate(scope);
            xValues.push(x);
            yValues.push(y);
        } catch (e) {
            // skip invalid points
        }
    }

    // Plot
    Plotly.newPlot("plot", [{
        x: xValues,
        y: yValues,
        type: "scatter",
        line: { color: "#ff0000ff" }
    }], {
        title: `f(x) = ${expr}`,
        paper_bgcolor: "#141414ff",    // fond global
        plot_bgcolor: "#141414ff",     // fond du graph
        font: { color: "white" },
        xaxis: { gridcolor: "#333" },
        yaxis: { gridcolor: "#333" },
        margin: { t: 40 }
    });
});

document.getElementById("resetBtn").addEventListener("click", () => {
    document.getElementById("func").value = "x"
    const expr = document.getElementById("func").value;

    // Parse math expression
    let f;
    try {
        f = math.parse(expr).compile();
    } catch (err) {
        alert("Invalid function!");
        return;
    }

    // Generate X values
    const xValues = [];
    const yValues = [];

    for (let x = -10; x <= 10; x += 0.01) {
        try {
            const scope = { x: x };
            const y = f.evaluate(scope);
            xValues.push(x);
            yValues.push(y);
        } catch (e) {
            // skip invalid points
        }
    }

    // Plot
    Plotly.newPlot("plot", [{
        x: xValues,
        y: yValues,
        type: "scatter",
        line: { color: "#ff0000ff" }
    }], {
        title: `f(x) = ${expr}`,
        paper_bgcolor: "#141414ff",    // fond global
        plot_bgcolor: "#141414ff",     // fond du graph
        font: { color: "white" },
        xaxis: { gridcolor: "#333" },
        yaxis: { gridcolor: "#333" },
        margin: { t: 40 }
    });
});

