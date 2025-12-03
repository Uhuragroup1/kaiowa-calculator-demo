function calcular() {
    const monto = parseFloat(document.getElementById("monto").value);
    const ventas = parseFloat(document.getElementById("ventas").value);
    const tasa = parseFloat(document.getElementById("tasa").value);

    if (!monto || !ventas || !tasa) {
        alert("Por favor ingresa todos los datos.");
        return;
    }

    const total = monto * ventas;
    const comision = total * (tasa / 100);
    const ingresos = total - comision;

    document.getElementById("total").innerText = "$" + total.toLocaleString("es-CO");
    document.getElementById("comision").innerText = "$" + comision.toLocaleString("es-CO");
    document.getElementById("ingresos").innerText = "$" + ingresos.toLocaleString("es-CO");
}
