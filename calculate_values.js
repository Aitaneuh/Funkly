export function calculate_values(expr, delta = 0.01, minValue = -10, maxValue = 10) {
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

    for (let x = minValue; x <= maxValue; x += delta) {
        try {
            const scope = { x: x };
            const y = f.evaluate(scope);

            if (Number.isNaN(y)) {
                xValues.push(x);
                yValues.push(null);
                continue;
            }

            // 2) Skip Infinity
            if (!Number.isFinite(y)) {
                xValues.push(x);
                yValues.push(null);
                continue;
            }

            // 3) Skip insane values (typical asymptote blow-up)
            if (Math.abs(y) > 1e6) {
                xValues.push(x);
                yValues.push(null);
                continue;
            }

            xValues.push(x);
            yValues.push(y);
        } catch (e) {
            // skip invalid points
        }
    }

    return [xValues, yValues]
}