// Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.

var TriangoloRettangolo = {

    base : 100,
    altezza : 80

}

var ipotenusa = parseInt(Math.sqrt(Math.pow(TriangoloRettangolo.base, 2) + Math.pow(TriangoloRettangolo.altezza, 2) ));

console.log(ipotenusa);

// Calcolare perimetro e area.

var perimetro = parseInt(ipotenusa + TriangoloRettangolo.base + TriangoloRettangolo.altezza) ;

console.log(perimetro);

var area = parseInt( (TriangoloRettangolo.base * TriangoloRettangolo.altezza ) / 2) ;

console.log(area);

