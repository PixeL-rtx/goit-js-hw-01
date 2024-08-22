function getElementWidth(content, padding, border) {
    const numerical = parseFloat(content);
    const pad = parseFloat(padding);
    const bor = parseFloat(border);
    return numerical + 2 * (pad + bor);
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
