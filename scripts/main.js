import { series } from './data.js';
var seriesTbody = document.getElementById('series');
var btnfilterByName = document.getElementById("button-filterByName");
var inputSearchBox = document.getElementById("search-box");
var seassonAverageElm = document.getElementById("seasson-average");
renderSeriesInTable(series);
seassonAverageElm.innerHTML = "".concat(getAverageSeasson(series));
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.id, "</td>\n                                <td>").concat(c.name, "</td>\n                                <td>").concat(c.channel, "</td>\n                                <td>").concat(c.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getAverageSeasson(series) {
    var averageSeasson = 0;
    series.forEach(function (serie) { return averageSeasson = averageSeasson + serie.seasons; });
    return averageSeasson / series.length;
}
