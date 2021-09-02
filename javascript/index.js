var events = [
    {
        name: "Kegeln",
        isAvailable: function () {
            if (!daytime || (weekdays && daytime)) return true;
            return false;
        }
    },
    {
        name: "Freibad",
        isAvailable: function () {
            if (goodWeather && daytime) return true;
            return false;
        }
    },
    {
        name: "Hallenbad",
        isAvailable: function () {
            if (holidays && !weekdays) return true;
            return false;
        }
    },
    {
        name: "Wandern im Dunkelwald",
        isAvailable: function () {
            if (goodWeather && daytime) return true;
            return false;
        }
    },
    {
        name: "Freikurs Musik",
        isAvailable: function () {
            if (!daytime && !holidays && !weekdays) return true;
            return false;
        }
    },
    {
        name: "Brotbackkurs",
        isAvailable: function () {
            if (!goodWeather && !weekdays) return true;
            return false;
        }
    },
    {
        name: "Schieferbergwerk",
        isAvailable: function () {
            if (!weekdays && !daytime && holidays) return true;
            return false;
        }
    },
    {
        name: "Go-Kurse",
        isAvailable: function () {
            if ((!weekdays && !goodWeather) || (!daytime && goodWeather))
                return true;
            return false;
        }
    },
    {
        name: "Billard",
        isAvailable: function () {
            if (daytime && !weekdays & !kids) return true;
            return false;
        }
    },
    {
        name: "Rennautofahren",
        isAvailable: function () {
            if (!kids && !weekdays && holidays) return true;
            return false;
        }
    },
    {
        name: "Open-Air-Kino",
        isAvailable: function () {
            if (goodWeather && (daytime && weekdays)) return true;
            return false;
        }
    },
    {
        name: "Korbflechten",
        isAvailable: function () {
            if (holidays && !goodWeather && weekdays) return true;
            return false;
        }
    },
    {
        name: "Besuch des Wasserfalls",
        isAvailable: function () {
            if (daytime) return true;
            return false;
        }
    },
    {
        name: "Zoobesuch",
        isAvailable: function () { return true; }
    }
];

  $( document ).ready(function() {
    console.log("Willkommen zum Ausflugsplanner!")
    check()
});

function check() {
    weekdays = document.getElementById("weekdays").checked;
    goodWeather = document.getElementById("goodWeather").checked;
    holidays = document.getElementById("holidays").checked;
    daytime = document.getElementById("daytime").checked;
    kids = document.getElementById("kids").checked;
    out = document.getElementById("out");

    console.log(weekdays, goodWeather, holidays, daytime, kids)

    $.getJSON("../events.json", function(json) {
        console.log(json); 

        const data = json.items;

        data.forEach(function(data, index){

            if(weekdays == true, goodWeather == true, holidays == true, daytime == true, kids == true){
                if (data.weather =="all"|| data.weather=="gut"||data.)
            }

            if(data.weather == "all"){
                console.log(data);
            }

        });

    });


    



    var arr = [];
    var i = 0;
    for (i; i < events.length; i++)
        if (events[i].isAvailable()) arr.push(events[i].name);
    out.innerHTML = arr.sort().join(", ");


}


