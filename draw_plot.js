export function draw_plot(expr, xValues, yValues) {
    Plotly.newPlot("plot", [{
        x: xValues,
        y: yValues,
        type: "scatter",
        line: { color: "#ff0000ff" }
    }], {
        title: `f(x) = ${expr}`,
        paper_bgcolor: "#141414ff",
        plot_bgcolor: "#141414ff",
        font: { color: "white" },
        xaxis: { gridcolor: "#333" },
        yaxis: { gridcolor: "#333" },
        margin: { t: 40 }
    });
}