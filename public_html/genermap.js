/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var obrazek = "https://api.mapy.cz/img/api/marker/drop-red.png";
var m = new SMap(JAK.gel("m"));
m.addControl(new SMap.Control.Sync()); /* Aby mapa reagovala na změnu velikosti průhledu */
m.addDefaultLayer(SMap.DEF_BASE).enable(); /* Turistický podklad */
var mouse = new SMap.Control.Mouse(SMap.MOUSE_PAN | SMap.MOUSE_WHEEL | SMap.MOUSE_ZOOM); /* Ovládání myší */
m.addControl(mouse);
var vrstva = new SMap.Layer.Marker(); /* Vrstva se značkami */
var souradnice = [];
// data pro markery
var markers = [{
        name: "Severočeská galerie výtvarného umění v Litoměřicích",
        id: 1,
        obr: "SGVULitomerice.png",
        url: "https://galerie-ltm.cz",
        coords: "50.5342064N, 14.1293525E",
    }, {
        name: "Galerie Středočeského kraje Kutná hora",
        id: 2,
        obr: "GASK.png",
        url: "http://www.gask.cz/cs",
        coords: "49.9467400N, 15.2642719E"
    }, {
        name: "Galerie moderního umění Roudnice nad Labem",
        id: 3,
        obr: "GMURoudnice.png",
        url: "http://www.galerieroudnice.cz",
        coords: "50.4249078N, 14.2629756E"
    },
    {name: "Národní galerie Praha",
        id: 4,
        obr: "NGPraha.png",
        url: "http://www.ngprague.cz",
        coords: "50.1014008N, 14.4326381E"
    },
    {name: "GHMP Zámek Troja",
        id: 5,
        obr: "GHMPraha.png",
        url: "http://www.ghmp.cz",
        coords: "50.1148867N, 14.4110900E"
    },
    {name: "GHMP Dům Františka Bílka Chýnov",
        id: 6,
        obr: "GHMPraha.png",
        url: "http://www.ghmp.cz",
        coords: "49.4039917N, 14.8066197E"
    },
    {name: "GHMP Bílkova vila",
        id: 7,
        obr: "GHMPraha.png",
        url: "http://www.ghmp.cz",
        coords: "50.0952181N, 14.4083664E"
    },
    {name: "Galerie Hlavního města Praha - Dům U Kamenného zvonu",
        id: 8,
        obr: "GHMPraha.png",
        url: "http://www.ghmp.cz",
        coords: "50.0877647N, 14.4218644E"
    },
    {name: "Galerie Hlavního města Praha - Městská knihovna",
        id: 9,
        obr: "GHMPraha.png",
        url: "http://www.ghmp.cz",
        coords: "50.0875303N, 14.4173319E"
    },
    {name: "Galerie Hlavního města Praha - Colloredo-Mansfeldský palác",
        id: 10,
        obr: "GHMPraha.png",
        url: "http://www.ghmp.cz",
        coords: "50.0859681N, 14.4146061E"
    },
    {name: "Muzeum umění a designu Benešov",
        id: 11,
        obr: "MUDBenesov.png",
        url: "https://mudbenesov.cz",
        coords: "49.7836778N, 14.6909681E"
    }
    ,
    {name: "Městská galerie Beroun",
        id: 12,
        obr: "MGBeroun.png",
        url: "https://www.mkcberoun.cz",
        coords: "49.9652711N, 14.0722581E"
    }
    ,
    {name: "Městská galerie Kolín",
        id: 13,
        obr: "GKolin.png",
        url: "https://www.divadlokolin.cz/cms/galerie-mesta-kolina",
        coords: "50.0259992N, 15.2057597E"
    }
    ,
    {name: "Galerie v zahradě Kolín",
        id: 14,
        obr: "GVZKolin.png",
        url: "http://www.galerie-kolin.cz/",
        coords: "50.0293006N, 15.1974403E"
    }
    ,
    {name: "Mělnické kulturní centrum, Galerie Ve Věži",
        id: 15,
        obr: "MKCMelnik.png",
        url: "https://www.mekuc.cz/galerie-ve-vezi",
        coords: "50.3514211N, 14.4759692E"
    }
    ,
    {name: "Galerie Ludvíka Kuby Poděbrady",
        id: 16,
        obr: "GLKPodebrady.png",
        url: "https://www.lazne-podebrady.cz/galerie",
        coords: "50.1441881N, 15.1205444E"
    }
    ,
    {name: "Galerie Františka Drtikola Příbram",
        id: 17,
        obr: "GFDPribram.png",
        url: "http://www.galerie-drtikol.com",
        coords: "49.6899414N, 14.0104083E"
    }
    ,
    {name: "Rabasova galerie Rakovník",
        id: 18,
        obr: "RGRakovnik.png",
        url: "http://www.rabasgallery.cz",
        coords: "50.1041908N, 13.7287053E"
    }
    ,
    {name: "Galerie současného umění a architektury České Budějovice",
        id: 19,
        obr: "GSUABudejovice.png",
        url: "https://dumumenicb.cz",
        coords: "48.9738922N, 14.4737053E"
    }
    ,
    {name: "Alšova jihočeská galerie Hluboká",
        id: 20,
        obr: "AlsovaJG.png",
        url: "https://www.ajg.cz/",
        coords: "49.0519256N, 14.4414100E"
    }
    ,
    {name: "Galerie U Radnice Tábor",
        id: 20,
        obr: "GRTabor.png",
        url: "http://www.galerietabor.cz",
        coords: "49.4137231N, 14.6575967E"
    }
    ,
    {name: "Galerie Dolní brána Prachatice",
        id: 21,
        obr: "GDBPrachatice.png",
        url: "https://www.kisprachatice.cz",
        coords: "49.0135803N, 13.9995481E"
    }
    ,
    {name: "Městské muzeum a galerie Vodňany",
        id: 22,
        obr: "MMGVodnany.png",
        url: "https://www.muzeumvodnany.cz/muzeum-galerie",
        coords: "49.1480981N, 14.1765403E"
    }
    ,
    {name: "Galerie bratří Špillarů Domažlice ",
        id: 23,
        obr: "GBSDomazlice.png",
        url: "https://www.muzeum-chodska.com/galerie-bratri-spillaru/",
        coords: "49.4411111N, 12.9342719E"
    }
    ,
    {name: "Galerie Klenová",
        id: 24,
        obr: "GKKlatovy.png",
        url: "https://www.gkk.cz",
        coords: "49.3337136N, 13.2296408E"
    }
    ,
    {name: "Galerie U Bílého jednorožce Klatovy",
        id: 25,
        obr: "GKKlatovy.png",
        url: "https://www.gkk.cz",
        coords: "49.3953742N, 13.2926436E"
    }
    ,
    {name: "Západočeské galerie v Plzni",
        id: 26,
        obr: "ZGPlzen.png",
        url: "http://www.zpc-galerie.cz",
        coords: "49.7476350N, 13.3804111E"
    }
    ,
    {name: "Galerie výtvarného umění v Chebu",
        id: 27,
        obr: "GVUCheb.png",
        url: "http://www.gavu.cz",
        coords: "50.0788344N, 12.3713511E"
    }
    ,
    {name: "Galerie umění Karlovy vary",
        id: 28,
        obr: "GUKarlovyvary.png",
        url: "http://www.galeriekvary.cz",
        coords: "50.2171733N, 12.8869947E"
    }
    ,
    {name: "Becherova vila",
        id: 29,
        obr: "Becherovavila.png",
        url: "http://www.becherovavila.cz",
        coords: "50.2261772N, 12.8746747E"
    }
    /* ,  
     {name: "",
     id: ,
     obr: ".png",
     url: "",
     coords: ""
     }     ,  
     {name: "",
     id: ,
     obr: ".png",
     url: "",
     coords: ""
     }     ,  
     {name: "",
     id: ,
     obr: ".png",
     url: "",
     coords: ""
     }     ,  
     {name: "",
     id: ,
     obr: ".png",
     url: "",
     coords: ""
     }   
     */
];
// vytvoreni markeru
markers.forEach(function (marker) {
    var c = SMap.Coords.fromWGS84(marker.coords); /* Souřadnice značky, z textového formátu souřadnic */

    var options = {
        url: "icons/" + marker.obr,
        title: marker.name,
        anchor: {left: 10, bottom: 1}  /* Ukotvení značky za bod uprostřed dole */
    }
    // duletize je prirazeni id jednotlivemu markeru - vlastni id, jinak se generuje nahodne
    var znacka = new SMap.Marker(c, marker.id, options);
    souradnice.push(c);
    vrstva.addMarker(znacka);
});
// zobrazime a povolime vrstvu - pokud by se vrstva povolila pred vkladanim markeru, tak by se s kazdym vlozenym markerem prekreslovala mapa a pocitaly pozice vsech markeru
m.addLayer(vrstva); /* Přidat ji do mapy */
vrstva.enable(); /* A povolit */

var cz = m.computeCenterZoom(souradnice); /* Spočítat pozici mapy tak, aby značky byly vidět */
m.setCenterZoom(cz[0], cz[1]);
// poslouchani na kliknuti u markeru
m.getSignals().addListener(this, "marker-click", function (e) {
// vybrany marker
    var marker = e.target;
    var id = marker.getId();
    // zobrazime jeho jmeno - parovani vybraneho markeru pomoci jeho id a nasich vstupnich dat
    for (var i = 0; i < markers.length; i++) {
        if (markers[i].id === id) {
            window.open(markers[i].url);
            break;
        }
    }
});


