import { series } from "./data.js";
var seriesTBody = document.getElementById('series');
var averageSeasonsT = document.getElementById('seriesAve');
function showSerieDetails(id) {
    var serie = series[id - 1];
    var serieDetailTBody = document.getElementById('serieDetail');
    serieDetailTBody.innerHTML = "<img class=\"card-img-top\" src=".concat(serie.image, " referrerpolicy=\"no-referrer\">\n                            <div class=\"card-body\">\n                            <h2 class=\"card-body\">").concat(serie.name, "</h2>\n                            <p class=\"card-text\">").concat(serie.description, "</p>\n                            <a href=\"").concat(serie.url, "\">").concat(serie.url, "</a>\n                            </div>");
}
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.id, "</td>\n                               <td>\n                               <a href=\"#\">").concat(c.name, "</a>\n                               </td>\n                               <td>").concat(c.seasons, "</td>\n                               <td>").concat(c.channel, "</td>");
        trElement.onclick = function () { showSerieDetails(c.id); };
        seriesTBody.appendChild(trElement);
    });
}
function averageSeasons(series) {
    var sum = 0;
    series.forEach(function (c) {
        sum += c.seasons;
    });
    var prom = sum / series.length;
    var pElement = document.createElement("p");
    pElement.innerHTML = "<p>The average number of seasons is: ".concat(prom, "</p>");
    averageSeasonsT.appendChild(pElement);
}
renderSeriesInTable(series);
averageSeasons(series);
