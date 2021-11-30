'use strict';
let gps = null;
function init()
{
    Common.loadAnalytics();
    gps = new GPS(getGpsData(), GPS.LANGUAGE_ENGLISH);
    gps.successFunc = success;
    gps.distanceWithinRange = 200;
    gps.start();
    document.getElementById("search-gps").style.display = 'block';
}

function success(g)
{
    let isFound = false;
    for (let i = 0; i < g.targetGpsDataArray.length; i++)
    {
         let data = gps.targetGpsDataArray[i];
         if (data.withinRange)
         {
            isFound = true;
         }
    }

    if (isFound)
    {
        document.getElementById("search-gps").style.display = 'none';
        document.getElementById("found-gps").style.display = 'block';
    }
    else
    {
        document.getElementById("search-gps").style.display = 'block';
        document.getElementById("found-gps").style.display = 'none';
    }
}
function getGpsData()
{
    let arr = [];
    let type = getParam('type');
    if (type === "st")
    {
        arr.push(new GPSData("自宅", 34.647575, 135.534916));
        arr.push(new GPSData("寺田町駅",  34.647499, 135.524093));
        arr.push(new GPSData("天王寺駅",  34.646332, 135.515234));
        return arr;
    }
    else if (type === "planet")
    {
        arr.push(new GPSData("本社", 35.375297, 140.362102));
        arr.push(new GPSData("エクセルハイムA棟", 35.527001, 140.324502));
        return arr;
    }
    arr.push(new GPSData("L", 33.789589, -118.313876));
    arr.push(new GPSData("G", 33.890679, -118.309061));
    return arr;
}
function getParam(name) {
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
       results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
 }
 window.onload = init;