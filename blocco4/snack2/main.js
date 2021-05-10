// Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.

var TriangoloRettangolo = {

    base : 50,
    altezza : 100

}

var ipotenusa = parseInt(Math.sqrt(Math.pow(TriangoloRettangolo.base, 2) + Math.pow(TriangoloRettangolo.altezza, 2) ));

console.log(ipotenusa);

var perimetro = parseInt(ipotenusa + TriangoloRettangolo.base + TriangoloRettangolo.altezza) ;

console.log(perimetro);

var area = parseInt( (ipotenusa * TriangoloRettangolo.altezza ) / 2) ;

console.log(area);

// Calcolare perimetro e area.
// (ripassiamo il Teorema di Pitagora ;D )