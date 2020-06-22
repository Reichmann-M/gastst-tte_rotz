function berechnen() {
    let preisInsgesamt = document.getElementById('preis').value;
    let preisBernd = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format((preisInsgesamt/18) * (10/4))
    let preisManfred = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format((preisInsgesamt/18) * (10/4) + (preisInsgesamt/18) * (2/2))
    let preisNiklas = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format((preisInsgesamt/18) * (10/4) + (preisInsgesamt/18) * (2/2))
    let preisMax = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format((preisInsgesamt/18) * (10/4) + (preisInsgesamt/18) * (6/1))


    var p = "<b>Preise für jeden Gastgeber bei " + new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(preisInsgesamt) + " Gesamtpreis</b><br>" + 'Preis für Bernd: ' + preisBernd + "<br>" +
    'Preis für Manfred: ' + preisManfred + "<br>" +
    'Preis für Niklas: ' + preisNiklas + "<br>" +
    'Preis für Max: ' + preisMax + "<br>";

    var outputText = document.createElement("p");
    outputText.innerHTML = p;
    document.body.appendChild(outputText)

}