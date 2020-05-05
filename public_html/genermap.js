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
    ,
    {name: "Dům umění Ústí nad Labem",
        id: 30,
        obr: "DUUstiNadLabem.png",
        url: "https://duul.cz/",
        coords: "50.6622800N, 14.0350917E"
    },
    {name: "Galerie Špejchar Chomutov",
        id: 31,
        obr: "GSChomutov.png",
        url: "https://www.chomutovskaknihovna.cz/kultura/galerie-spejchar",
        coords: "50.4599494N, 13.4192925E"
    },
    {name: "Galerie a muzeum litoměřické diecéze",
        id: 32,
        obr: "SGVULitomerice.png",
        url: "http://www.galerie-ltm.cz",
        coords: "50.5339150N, 14.1301203E"
    }
    ,
    {name: "Galerie města Loun",
        id: 33,
        obr: "GMLouny.png",
        url: "https://www.gaml.cz",
        coords: "50.3556214N, 13.7989464E"
    }
    ,
    {name: "Galerie výtvarného umění v Mostě",
        id: 34,
        obr: "GVUMost.png",
        url: "http://www.gvum.cz",
        coords: "50.5176047N, 13.6482772E"
    }
    ,
    {name: "Galerie Emila Filly Ústí nad Labem",
        id: 35,
        obr: "GEFUsti.png",
        url: "https://gef.cz",
        coords: "50.6623383N, 14.0397758E"
    }
    ,
    {name: "Galerie Chodba a galerie Jídelna Česká Lípa",
        id: 36,
        obr: "GJCeskaLipa.png",
        url: "https://www.muzeumcl.cz/galerie.html",
        coords: "50.6859281N, 14.5344986E"
    }
    /*
     ,
     {name: "Městská galerie MY Jablonec nad Nisou",
     id: 37,
     obr: ".png",
     url: "",
     coords: "50.7229422N, 15.1678514E"
     }
     */
    ,
    {name: "Oblastní galerie Liberec",
        id: 38,
        obr: "OGLLiberec.png",
        url: "https://www.ogl.cz",
        coords: "50.7735458N, 15.0675358E"
    }
    ,
    {name: "Galerie Prostor 228 Liberec",
        id: 39,
        obr: "GPLiberec.png",
        url: "https://www.prostor228.cz",
        coords: "50.7704125N, 15.0514497E"
    }
    ,
    {name: "Galerie moderního umění Hradec Králové",
        id: 40,
        obr: "GMUHradecKralove.png",
        url: "https://www.galeriehk.cz",
        coords: "50.2099331N, 15.8342222E"
    }
    ,
    {name: "Galerie výtvarného umění v Náchodě",
        id: 41,
        obr: "GVUNachod.png",
        url: "http://www.gvun.cz",
        coords: "50.4197761N, 16.1607094E"
    }
    ,
    {name: "Muzea a galerie Orlických hor Rychnov nad Kněžnou",
        id: 42,
        obr: "MGOHRychnov.png",
        url: "https://www.moh.cz/orlicka-galerie",
        coords: "50.1704511N, 16.2681461E"
    }
    ,
    {name: "Galerie města Trutnov",
        id: 43,
        obr: "GMTrutnov.png",
        url: "https://www.gamt.cz",
        coords: "50.5610344N, 15.9158319E"
    }
    ,
    {name: "Galerie Art Chrudim",
        id: 44,
        obr: "GAChrudim.png",
        url: "https://www.galerieart.cz",
        coords: "49.9515039N, 15.7954539E"
    }
    ,
    {name: "Výstavní síň Chrudim",
        id: 45,
        obr: "VSChrudim.png",
        url: "http://www.vystavnisinchrudim.cz",
        coords: "49.9505958N, 15.7921408E"
    }
    ,
    {name: "Východočeská galerie v Pardubicích - Dům U Jonáše",
        id: 46,
        obr: "VGPardubice.png",
        url: "http://www.vcg.cz",
        coords: "50.0388450N, 15.7801467E"
    }
    ,
    {name: "Východočeská galerie v Pardubicích - Zámek",
        id: 47,
        obr: "VGPardubice.png",
        url: "http://www.vcg.cz",
        coords: "50.0414619N, 15.7773047E"
    }
    ,
    {name: "Městská galerie ve Zvonici Vysoké Mýto",
        id: 48,
        obr: "MGZVysokeMyto.png",
        url: "http://www.galerie-vm.cz",
        coords: "49.9520167N, 16.1593225E"
    }
    ,
    {name: "Městská galerie Litomyšl",
        id: 49,
        obr: "MGLitomysl.png",
        url: "http://www.galerie.litomysl.cz",
        coords: "49.8705253N, 16.3114833E"
    }
    ,
    {name: "Galerie Zdeněk Sklenář Litomyšl",
        id: 50,
        obr: "GZSklenar.png",
        url: "https://www.zdeneksklenar.cz/galerie",
        coords: "49.8728103N, 16.3106881E"
    }
    ,
    {name: "8smička Humpolec",
        id: 51,
        obr: "8Humpolec.png",
        url: "https://8smicka.com",
        coords: "49.5438919N, 15.3545875E"
    }
    ,
    {name: "Galerie výtvarného umění v Havlíčkově Brodě",
        id: 52,
        obr: "GVUHavlickuvBrod.png",
        url: "https://www.galeriehb.cz",
        coords: "49.6074258N, 15.5788614E"
    }
    ,
    {name: "Oblastní galerie Vysočiny v Jihlavě",
        id: 53,
        obr: "OGVJihlava.png",
        url: "http://www.ogv.cz",
        coords: "49.3939553N, 15.5920725E"
    }
    ,
    {name: "Horácká galerie Nové Město na Moravě",
        id: 54,
        obr: "HGNoveMesto.png",
        url: "http://www.horackagalerie.cz",
        coords: "49.5615717N, 16.0755397E"
    }
    ,
    {name: "Moravská galerie v Brně",
        id: 55,
        obr: "MGBrno.png",
        url: "http://www.moravska-galerie.cz",
        coords: "49.1954383N, 16.6042156E"
    }
    ,
    {name: "Městské muzeum a galerie Břeclav",
        id: 56,
        obr: "MMGBreclav.png",
        url: "https://www.muzeumbv.cz",
        coords: "48.7596139N, 16.8867511E"
    }
    ,
    {name: "Galerie výtvarného umění v Hodoníně",
        id: 57,
        obr: "GVUHodonin.png",
        url: "http://www.gvuhodonin.cz",
        coords: "48.8556328N, 17.1244356E"
    }

    ,
    {name: "Muzeum a galerie v Prostějově",
        id: 58,
        obr: "MGProstejov.png",
        url: "http://www.muzeumpv.cz",
        coords: "49.4720992N, 17.1118203E"
    }
    ,
    {name: "Muzeum umění Olomouc",
        id: 59,
        obr: "MUOlomouc.png",
        url: "http://www.muo.cz",
        coords: "49.5962267N, 17.2562175E"
    }
    ,
    {name: "Arcidiecézní muzeum Olomouc",
        id: 60,
        obr: "MUOlomouc.png",
        url: "http://www.muo.cz",
        coords: "49.5983739N, 17.2616353E"
    }
    ,
    {name: "Galerie Jiřího Jílka",
        id: 61,
        obr: "GJJSumperk.png",
        url: "http://www.galerie-sumperk.cz",
        coords: "49.9641761N, 16.9795589E"
    }
    ,
    {name: "Dům umění Opava",
        id: 62,
        obr: "OKOpava.png",
        url: "https://oko-opava.cz/",
        coords: "49.9404206N, 17.9036839E"
    }
    ,
    {name: "Galerie výtvarného umění v Ostravě",
        id: 63,
        obr: "GVUOstrava.png",
        url: "https://www.gvuo.cz",
        coords: "49.8340264N, 18.2867908E"
    }
    ,
    {name: "Arcibiskupský zámek Kroměříž",
        id: 64,
        obr: "AZKromeriz.png",
        url: "https://www.zamek-kromeriz.cz/navstevni-trasy/zamecka-obrazarna/",
        coords: "49.3002200N, 17.3932100E"
    }
     ,
     {name: "Galerie Joži Uprky Uherské Hradiště",
     id: 65,
     obr: "GJUUherskeHradiste.png",
     url: "http://www.jozauprka.cz",
     coords: "49.0675544N, 17.4594022E"
     }
     ,
     {name: "Krajská galerie výtvarného umění ve Zlíně",
     id: 66,
     obr: "KGVUZlin.png",
     url: "https://www.galeriezlin.cz",
     coords: "49.2248725N, 17.6589281E"
     }
     ,
     {name: "Galerie Kaple Valašské Meziříčí",
     id: 67,
     obr: "GKValasskeMezirici.png",
     url: "https://kaple.kzvalmez.cz/",
     coords: "49.4714044N, 17.9686208E"
     }
     /* 
    ,
     {name: "",
     id: ,
     obr: ".png",
     url: "",
     coords: ""
     }
     ,
     {name: "",
     id: ,
     obr: ".png",
     url: "",
     coords: ""
     }
     ,
     {name: "",
     id: ,
     obr: ".png",
     url: "",
     coords: ""
     }
     ,
     {name: "",
     id: ,
     obr: ".png",
     url: "",
     coords: ""
     }
     ,
     {name: "",
     id: ,
     obr: ".png",
     url: "",
     coords: ""
     }
     ,
     {name: "",
     id: ,
     obr: ".png",
     url: "",
     coords: ""
     }
     ,
     {name: "",
     id: ,
     obr: ".png",
     url: "",
     coords: ""
     }
     ,
     {name: "",
     id: ,
     obr: ".png",
     url: "",
     coords: ""
     }
     ,
     {name: "",
     id: ,
     obr: ".png",
     url: "",
     coords: ""
     }
     ,
     {name: "",
     id: ,
     obr: ".png",
     url: "",
     coords: ""
     }
     ,
     {name: "",
     id: ,
     obr: ".png",
     url: "",
     coords: ""
     }
     ,
     {name: "",
     id: ,
     obr: ".png",
     url: "",
     coords: ""
     }
     ,
     {name: "",
     id: ,
     obr: ".png",
     url: "",
     coords: ""
     }
     ,
     {name: "",
     id: ,
     obr: ".png",
     url: "",
     coords: ""
     }
     ,
     {name: "",
     id: ,
     obr: ".png",
     url: "",
     coords: ""
     }
     ,
     {name: "",
     id: ,
     obr: ".png",
     url: "",
     coords: ""
     }
     ,
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


