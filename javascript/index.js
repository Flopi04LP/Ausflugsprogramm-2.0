var events = [
    {
        name: "Kegeln",
        isAvailable: function () {
            if (!daytime || (weekday && daytime)) return true;
            return false;
        }
    },
    {
        name: "Freibad",
        isAvailable: function () {
            if (weather && daytime) return true;
            return false;
        }
    },
    {
        name: "Hallenbad",
        isAvailable: function () {
            if (holiday && !weekday) return true;
            return false;
        }
    },
    {
        name: "Wandern im Dunkelwald",
        isAvailable: function () {
            if (weather && daytime) return true;
            return false;
        }
    },
    {
        name: "Freikurs Musik",
        isAvailable: function () {
            if (!daytime && !holiday && !weekday) return true;
            return false;
        }
    },
    {
        name: "Brotbackkurs",
        isAvailable: function () {
            if (!weather && !weekday) return true;
            return false;
        }
    },
    {
        name: "Schieferbergwerk",
        isAvailable: function () {
            if (!weekday && !daytime && holiday) return true;
            return false;
        }
    },
    {
        name: "Go-Kurse",
        isAvailable: function () {
            if ((!weekday && !weather) || (!daytime && weather))
                return true;
            return false;
        }
    },
    {
        name: "Billard",
        isAvailable: function () {
            if (daytime && !weekday & !kid) return true;
            return false;
        }
    },
    {
        name: "Rennautofahren",
        isAvailable: function () {
            if (!kid && !weekday && holiday) return true;
            return false;
        }
    },
    {
        name: "Open-Air-Kino",
        isAvailable: function () {
            if (weather && (daytime && weekday)) return true;
            return false;
        }
    },
    {
        name: "Korbflechten",
        isAvailable: function () {
            if (holiday && !weather && weekday) return true;
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
    weekday = document.getElementById("weekday").checked;
    weather = document.getElementById("weather").checked;
    holiday = document.getElementById("holiday").checked;
    daytime = document.getElementById("daytime").checked;
    kid = document.getElementById("kid").checked;
    output = document.getElementById("output");

    console.log(weekday, weather, holiday, daytime, kid)
    var arr = [];
    var i = 0;
    for (i; i < events.length; i++)
        if (events[i].isAvailable()) arr.push(events[i].name);
    output.innerHTML = arr.sort().join(", ");


}


