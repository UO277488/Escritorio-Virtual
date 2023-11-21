class Pais{

    constructor(nombrePaís, nombreCapital, poblacion, gobierno, coordenadasCapital, religion){
        this.nombrePaís = nombrePaís;
        this.nombreCapital = nombreCapital;
        this.poblacion = poblacion;
        this.gobierno = gobierno;
        this.coordenadasCapital = coordenadasCapital;
        this.religion = religion;
    }

    constructor(nombrePaís, nombreCapital, poblacion){
        this.nombrePaís = nombrePaís;
        this.nombreCapital = nombreCapital;
        this.poblacion = poblacion;
    }

    rellenaAtributos(gobierno, coordenadasCapital, religion){
        this.gobierno = gobierno;
        this.coordenadasCapital = coordenadasCapital;
        this.religion = religion;
    }

    getNombrePaís(){
        return this.nombrePaís;
    }

    getNombreCapital(){
        return this.nombreCapital;
    }

    getInformacionSecundaria(){
        return "<p>"+ this.poblacion + ", " + this.gobierno + ", " + this.religion + "</p>";
    }

    writeCoordinatesCapital(){
        document.write("<p>" + this.coordenadasCapital +"</p>");
    }
}
    var pais = new Pais("Salvador", "El Salvador", "6.314.000",  "República Representativa Constitucional Democrática", "Catolicismo");