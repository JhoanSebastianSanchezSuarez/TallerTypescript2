import { series } from "./data.js";
var seriesTBody = document.getElementById('series');
var averageSeasonsT = document.getElementById('seriesAve');
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.id, "</td>\n                               <td>").concat(c.name, "</td>\n                               <td>").concat(c.seasons, "</td>\n                               <td>").concat(c.channel, "</td>");
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
