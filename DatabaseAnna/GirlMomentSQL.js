var database = null;
database = openDatabase('Girl Moment', '1.0', 'GirlMoment', 1024 * 1024); 

function maakNieuweAdministratie(){
    verwijderDatabase();
    maakDatabase();
    voegDummyDataToe();
}

function maakMedewerkersTabel(){
    var query = "CREATE TABLE IF NOT EXISTS MEDEWERKERS" +
                "(MedewerkerID integer PRIMARY KEY AUTOINCREMENT, " +
				 "Naam varchar(100), " +
                 "Adres varchar(100), " +
				 "Telefoonnummer varchar(20))";
    
    updateStatus("Medewerkers tabel aangemaakt: <br>")
    uitvoerenQuery(query,[]);
}

function verwijderMedewerkersTabel(){
    var query = "DROP TABLE MEDEWERKERS";
    uitvoerenQuery(query,[]);
    updateStatus("Medewerker tabel verwijdert<br>");
}


function maakBezorgersTabel(){
    var query = "CREATE TABLE IF NOT EXISTS BEZORGERS" +
                   "(BezorgerID integer PRIMARY KEY AUTOINCREMENT, " +
                 "Naam varchar(100), " +
                 "Adres varchar(100), " +
                 "Telefoonnummer varchar(20))";
        
    updateStatus("Bezorgers tabel aangemaakt: <br>");
    uitvoerenQuery(query,[]);
}
    
function verwijderBezorgersTabel(){
    var query = "DROP TABLE BEZORGERS";
    uitvoerenQuery(query,[]);
    updateStatus("Bezorgers tabel verwijdert<br>");
}
    

function maakBestellingenTabel(){
    var query = "CREATE TABLE IF NOT EXISTS BESTELLINGEN" +
                "(BestellingID integer PRIMARY KEY AUTOINCREMENT, " +
                 "Betalingswijze varchar(100), " +
                 "Besteldatum DateTime, " +
                 "KlantID integer, "+
                 "MedewerkerID integer, " +
                 "BezorgerID integer)";
            
    updateStatus("Bestellingen tabel aangemaakt: <br>")
    uitvoerenQuery(query,[]);
}
        
function verwijderBestellingenTabel(){
    var query = "DROP TABLE BESTELLINGEN";
    uitvoerenQuery(query,[]);
    updateStatus("Bestellingen tabel verwijdert<br>");
}


function maakKlantgegevensTabel(){
    var query = "CREATE TABLE IF NOT EXISTS KLANTGEGEVENS" +
                "(KlantID integer PRIMARY KEY AUTOINCREMENT, " +
                "Naam varchar(100), " +
                "Adres varchar(100), " +
                "E-mailadres varchar(20))";
                
    updateStatus("Klantgegevens tabel aangemaakt: <br>")
    uitvoerenQuery(query,[]);
}
            
function verwijderKlantgegevensTabel(){
    var query = "DROP TABLE KLANTGEGEVENS";
    uitvoerenQuery(query,[]);
    updateStatus("Klantgegevens tabel verwijdert<br>");
}

function maakBestellingsdetailsTabel(){
    var query = "CREATE TABLE IF NOT EXISTS BESTELLINGSDETAILS" +
                "(BestellingsdetailID integer PRIMARY KEY AUTOINCREMENT, " +
                "ProductID integer, " +
                "Hoeveelheid integer, " +
                "Prijs decimal(10,2), " +
                "BestellingID integer)";
                    
    updateStatus("Bestellingsdetails tabel aangemaakt: <br>")
    uitvoerenQuery(query,[]);
}
                
function verwijderBestellingsdetailsTabel(){
    var query = "DROP TABLE BESTELLINGSDETAILS";
    uitvoerenQuery(query,[]);
    updateStatus("Bestellingsdetails tabel verwijdert<br>");
}
                    
function maakProductgegevensdetailsTabel(){
    var query = "CREATE TABLE IF NOT EXISTS PRODUCTGEGEVENS" +
                "(ProductID integer PRIMARY KEY AUTOINCREMENT, " +
                "Naam varchar(100), " +
                "Beschrijving varchar(100), " +
                "Prijs decimal(10,2), " +
                "LeverancierID integer, " +
                "CategorieID integer)";
                        
    updateStatus("Productgegevens tabel aangemaakt: <br>")
    uitvoerenQuery(query,[]);
}
                    
 function verwijderProductgegevensdetailsTabel(){
    var query = "DROP TABLE PRODUCTGEGEVENS";
    uitvoerenQuery(query,[]);
    updateStatus("Productgegevens tabel verwijdert<br>");
}


function maakLeveranciersTabel(){
    var query = "CREATE TABLE IF NOT EXISTS LEVERANCIERS" +
                "(LeverancierID integer PRIMARY KEY AUTOINCREMENT, " +
                "Naam varchar(100), " +
                "Adres varchar(100), " +
                "Contactpersoon varchar(20))";
                            
    updateStatus("Leveranciers tabel aangemaakt: <br>")
    uitvoerenQuery(query,[]); 
}
                        
function verwijderLeveranciersTabel(){
    var query = "DROP TABLE LEVERANCIERS";
    uitvoerenQuery(query,[]);
    updateStatus("Leveranciers tabel verwijdert<br>");
}
        

function maakCategorieenTabel(){
    var query = "CREATE TABLE IF NOT EXISTS CATEGORIEEN" +
                "(CategorieID integer PRIMARY KEY AUTOINCREMENT, " +
                "Categorienaam varchar(20))";
                            
    updateStatus("Categorieen tabel aangemaakt: <br>")
    uitvoerenQuery(query,[]);
}
                        
function verwijderCategorieenTabel(){
    var query = "DROP TABLE CATEGORIEEN";
    uitvoerenQuery(query,[]);
    updateStatus("Categorieen tabel verwijdert<br>");
}
    

function updateMedewerkersLijst(){
    var query = "SELECT * " +
                "FROM MEDEWERKERS;";
    database.transaction(function(transactie) {transactie.executeSql(query,[],viewMedewerkers)});
}

function maakDatabase(){
    maakMedewerkersTabel();
    maakBezorgersTabel();
    maakBestellingenTabel();
    maakKlantgegevensTabel();
    maakBestellingsdetailsTabel();
    maakProductgegevensdetailsTabel();
    maakLeveranciersTabel();
    maakCategorieenTabel();
}

function verwijderDatabase(){
    verwijderMedewerkersTabel();
    verwijderBezorgersTabel();
    verwijderBestellingenTabel();
    verwijderKlantgegevensTabel();
    verwijderBestellingsdetailsTabel();
    verwijderProductgegevensdetailsTabel();
    verwijderLeveranciersTabel();
    verwijderCategorieenTabel();
}

function uitvoerenQuery(query, variabelen){
    database.transaction(function(transactie) {transactie.executeSql(query,variabelen,updateMedewerkersLijst), updateStatus(query+ " " + variabelen + "<br>")});
}

function viewHelp(){
    var helpScreen = "";
    helpScreen += "<br><table>";
    helpScreen += "<tr><td><button class=\"medewerkers_input\" type=\"button\" title=\"Reload\" onclick=\"doeNiets()\"><img src=\"reload.jpg\" width=15 height=15></button></td><td>Druk op deze knop om de database opnieuw aan te maken en de dummy data te laden</td></tr>";
    helpScreen += "<tr><td><button class=\"medewerkers_input\" type=\"button\" title=\"Opslaan\" onclick=\"doeNiets()\"><img src=\"save.jpg\" width=15 height=15></button></td><td>Druk op deze knop om een wijziging op te slaan</td></tr>";
    helpScreen += "<tr><td><button class=\"medewerkers_input\" type=\"button\" title=\"Verwijderen\" onclick=\"doeNiets()\"><img src=\"delete.jpg\" width=15 height=15></button></td><td>Druk op deze knop om een medewerker te verwijderen</td></tr>";
    helpScreen += "<tr></tr><tr><td></td><td>de laatste regel kan gebruikt worden om een nieuwe medewerker toe te voegen</td></tr>";
    helpScreen += "<tr><td></td><td><button class=\"header\" type=\"button\" title=\"Terug\" onclick=\"updateMedewerkersLijst()\"><img src=\"left.jpg\" width=15 height=15></button></td></tr>";
    helpScreen += "</table>";
    document.getElementById("Medewerkers").innerHTML = helpScreen;
}

function viewMedewerkers(transaction, resultaten){
    var medewerkersTabel = "<label class=\"title\">Medewerkers:</div><br><form id=\"medewerkersForm\"><table>";
    medewerkersTabel += "<tr>";
    medewerkersTabel += "<td>ID</td>";
    medewerkersTabel += "<td>Naam</td>";
    medewerkersTabel += "<td>Adres</td>";
    medewerkersTabel += "<td>Telefoonnummer</td>";
    medewerkersTabel += "</tr>";
    for (var i = 0; i < resultaten.rows.length; i++) {
        medewerkersTabel += "<tr>";
        medewerkersTabel += "<td>" + "<input class=\"medewerkers_input_id\" id=\"ID_" + i + "\" placeholder=\"" + resultaten.rows.item(i)["MedewerkerID"] + "\" disabled></td>";
        medewerkersTabel += "<td>" + "<input class=\"medewerkers_input\" id=\"Naam_" + i + "\" placeholder=\"" + resultaten.rows.item(i)["Naam"] + "\"></td>";
        medewerkersTabel += "<td>" + "<input class=\"medewerkers_input\" id=\"Adres_" + i + "\" placeholder=\"" + resultaten.rows.item(i)["Adres"] + "\"></td>";
        medewerkersTabel += "<td>" + "<input class=\"medewerkers_input\" id=\"Telefoonnummer_" + i + "\" placeholder=\"" + resultaten.rows.item(i)["Telefoonnummer"] + "\"></td>";
        medewerkersTabel += "<td>" + "<button class=\"medewerkers_input\" type=\"button\" title=\"Opslaan\" onclick=\"pasMedewerkerAan(" + resultaten.rows.item(i)["MedewerkerID"] + ", " + i + ")\"><img src=\"save.jpg\" width=15 height=15></button>" +  "</td>";
        medewerkersTabel += "<td>" + "<button class=\"medewerkers_input\" type=\"button\" title=\"Verwijderen\" onclick=\"verwijderMedewerker(" + resultaten.rows.item(i)["MedewerkerID"] + ")\"><img src=\"delete.jpg\" width=15 height=15></button>" +  "</td>";
        medewerkersTabel += "</tr>";
    }
    medewerkersTabel += "<tr>";
    medewerkersTabel += "<td></td>";
    medewerkersTabel += "<td>" + "<input class=\"medewerkers_input\" id=\"Naam_new\" placeholder=\"\"></td>";
    medewerkersTabel += "<td>" + "<input class=\"medewerkers_input\" id=\"Adres_new\" placeholder=\"\"></td>";
    medewerkersTabel += "<td>" + "<input class=\"medewerkers_input\" id=\"Telefoonnummer_new\" placeholder=\"\"></td>";
    medewerkersTabel += "<td>" + "<button class=\"medewerkers_input\" type=\"button\" title=\"Opslaan\" onclick=\"voegMedewerkerToe()\"><img src=\"save.jpg\" width=15 height=15></button>" +  "</td>";
    medewerkersTabel += "<td></td>";
    medewerkersTabel += "</tr>";

    medewerkersTabel += "</table></form>";
    document.getElementById("Medewerkers").innerHTML = medewerkersTabel;

}

function updateStatus(string){
//    document.getElementById("status").innerHTML += string;
}

function verwijderMedewerker(medewerkerID){
    var query = "DELETE FROM MEDEWERKERS " +
                "WHERE MedewerkerID=?";
     uitvoerenQuery(query, [medewerkerID]);
    updateStatus("Medewerker verwijdert van tabel<br>");

}      

function voegMedewerkerToe(){
    var query = "INSERT INTO MEDEWERKERS " +
                "(Naam, Adres, Telefoonnummer) " +
                "VALUES (?, ?, ?)";
    
    var Naam =              document.getElementById("Naam_new").value;
    var Adres =             document.getElementById("Adres_new").value;
    var Telefoonnummer =    document.getElementById("Telefoonnummer_new").value;
    var variabelen = [Naam, Adres, Telefoonnummer];
    uitvoerenQuery(query, variabelen);
    updateStatus("Medewerker toegevoegd aan tabel<br>")
    }


function pasMedewerkerAan(MedewerkerID, Index){
    var query = "UPDATE MEDEWERKERS SET Naam = ?, Adres = ?, Telefoonnummer = ? WHERE MedewerkerID = ?";

    if(document.getElementById("Naam_"  + Index).value) {
        var Naam = document.getElementById("Naam_"  + Index).value;
    } else {
        var Naam = document.getElementById("Naam_"  + Index).placeholder;
    }
    if(document.getElementById("Adres_"  + Index).value) {
        var Adres = document.getElementById("Adres_"  + Index).value;
    } else {
        var Adres = document.getElementById("Adres_"  + Index).placeholder;
    }
    if(document.getElementById("Telefoonnummer_"  + Index).value) {
        var Telefoonnummer = document.getElementById("Telefoonnummer_"  + Index).value;
    } else {
        var Telefoonnummer = document.getElementById("Telefoonnummer_"  + Index).placeholder;
    }
    console.log(MedewerkerID + " wordt " + Naam + Adres + Telefoonnummer + "<br>");
    var variabelen = [Naam, Adres, Telefoonnummer, MedewerkerID];
    uitvoerenQuery(query, variabelen);
}

function voegDummyDataToe(){
    query = "INSERT INTO MEDEWERKERS " +
    "(Naam, Adres, Telefoonnummer) " +
    "VALUES (?, ?, ?)";
    var WillemWekker =  ["Willem Wekker"    ,"Rodelindalaan 13","31621742197"];
    var KeesKlok =      ["Kees Klok"        ,"Teststraat 1","31632134219"];
    var HansHorloge =   ["Hans Horloge"     ,"Hemelweg 56","31421975634"];
    var ZoeZakHorloge=  ["Zoe ZakHorloge"   ,"Laan van hel 2","31611342456"];
    var TeunTijd =      ["Teun Tijd"        ,"Jou straatje 45","31621442187"];
    var MedewerkerLijst = [WillemWekker,KeesKlok,HansHorloge,ZoeZakHorloge,TeunTijd];
    for(let i = 0; i < MedewerkerLijst.length; i++){
        uitvoerenQuery(query, MedewerkerLijst[i]);
    };
    updateStatus("Dummy MEDEWERKERS data toegevoegd<br>");

    query = "INSERT INTO BEZORGERS " +
    "(Naam, Adres, Telefoonnummer) " +
    "VALUES (?, ?, ?)";
    var Piet =  ["Piet","Steegje 3","31621742197"];
    var Jan  =  ["Jan","Avenue du concorde 1","31632134219"];
    var Toos =  ["Toos","Time square 45","31421975634"];
    var Greet=  ["Greet","Picadilly circus 3","31611342456"];
    var BezorgersLijst = [Piet, Jan, Toos, Greet];
    for(let i = 0; i < BezorgersLijst.length; i++){
        uitvoerenQuery(query, BezorgersLijst[i]);
    };
    updateStatus("Dummy BEZORGERS data toegevoegd<br>");

    query = "INSERT INTO KLANTGEGEVENS " +
    "(Naam, Adres, Telefoonnummer) " +
    "VALUES (?, ?, ?)";
    var Alessio =  ["Alessio"    ,"Rodelindalaan 1","31621742197"];
    var Marco   =  ["Marco"        ,"Laan van Aida 45","31632134219"];
    var Mattia  =  ["Mattia"     ,"Figarolaan 4","31421975634"];
    var Luca    =  ["Luca"   ,"Fideliolaan 8","31611342456"];
    var Rebecca =  ["Rebecca"        ,"Nabucco singel 5","31621442187"];
    var KlantgegevensLijst = [Alessio, Marco, Mattia, Luca, Rebecca];
    for(let i = 0; i < KlantgegevensLijst.length; i++){
        uitvoerenQuery(query, KlantgegevensLijst[i]);
    };
    updateStatus("Dummy KLANTGEGEVENS data toegevoegd<br>");

    var query = "INSERT INTO CATEGORIEEN " +
    "(Categorienaam)" +
    "VALUES (?)";
    var Shirts      =  ["Shirts"];
    var Broeken     =  ["Broeken"];
    var Truien =   ["Truien"];
    var Jurken=  ["Jurken"];
    var Topjes =      ["Topjes"];
    var CategorieenLijst = [Shirts,Broeken, Truien, Jurken, Topjes];
    for(let i = 0; i < CategorieenLijst.length; i++){
        uitvoerenQuery(query, CategorieenLijst[i]);
    };
    updateStatus("Dummy CATEGORIEEN data toegevoegd<br>");

    query = "INSERT INTO PRODUCTGEGEVENS (Naam, Beschrijving, Prijs, LeverancierID, CategorieID)  VALUES (?, ?, ?, ?, ?)";
    uitvoerenQuery(query,["Zwembroek", "Leuke zwembroekje", 25.00, 1, 2]);
    uitvoerenQuery(query,["Truitje", "Korte zomertrui", 40.98, 2, 3]);
    updateStatus("Dummy PRODUCTGEGEVENS data toegevoegd<br>");

    query = "INSERT INTO LEVERANCIERS " +
    "(Naam, Adres, Telefoonnummer) " +
    "VALUES (?, ?, ?)";
    var Adidas  =  ["Adidas","","31621742197"];
    var Zalando =  ["Zalando","","31632134219"];
    var Nike    =  ["Nike","","31421975634"];
    var Puma    =  ["Puma","","31611342456"];
     var LeveranciersLijst = [Adidas, Zalando, Nike, Puma];
    for(let i = 0; i < LeveranciersLijst.length; i++){
        uitvoerenQuery(query, LeveranciersLijst[i]);
    };
    updateStatus("Dummy LEVERANCIERS data toegevoegd<br>");

    query = "INSERT INTO BESTELLINGEN " +
    "(Betalingswijze, Besteldatum, KlantID, MedewerkerID, BezorgerID) " +
    "VALUES (?, ?, ?, ?, ?)";
    uitvoerenQuery(query, ["Ideal", "22/7/2023", 1, 1, 1]);
    updateStatus("Dummy BESTELLINGEN data toegevoegd<br>");

    query = "INSERT INTO BESTELLINGSDETAILS " +
    "(ProductID, Hoeveelheid, Prijs, BestellingID) " +
    "VALUES (?, ?, ?, ?)";
    uitvoerenQuery(query, [2, 3, "10.00", 1]);
    updateStatus("Dummy BESTELLINGSDETAILS data toegevoegd<br>");

};

