import { series } from './data.js';
var seriesTbody = document.getElementById('series');
var btnfilterByName = document.getElementById("button-filterByName");
var inputSearchBox = document.getElementById("search-box");
var seassonAverageElm = document.getElementById("seasson-average");
renderSeriesInTable(series);
seassonAverageElm.innerHTML = "".concat(getAverageSeasson(series));
function renderSeriesInTable(series) {
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                              <td>").concat(serie.name, "</td>\n                              <td>").concat(serie.channel, "</td>\n                              <td>").concat(serie.seasons, "</td>");
        trElement.addEventListener('click', function () { return showDetails(serie); });
        seriesTbody.appendChild(trElement);
    });
}
function showDetails(serie) {
    var detailsSection = document.getElementById('details-section');
    if (detailsSection) {
        detailsSection.innerHTML = "\n                <div class=\"card\" style=\"width: 18rem;\">\n                    <img class=\"card-img-top\" src=\"".concat(serie.picture, "\" alt=\"Card image cap\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">").concat(serie.name, "</h5>\n                        <p class=\"card-text\">").concat(serie.description, "</p>\n                        <a href=\"").concat(serie.link, "\" class=\"btn btn-primary\">Go to series</a>\n                    </div>\n                </div>\n            ");
    }
}
function getAverageSeasson(series) {
    var averageSeasson = 0;
    series.forEach(function (serie) { return averageSeasson = averageSeasson + serie.seasons; });
    return averageSeasson / series.length;
}
