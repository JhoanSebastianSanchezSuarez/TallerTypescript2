import { series } from "./data.js";
import { Serie } from "./series.js";

const seriesTBody: HTMLElement = document.getElementById('series')!;

const averageSeasonsT : HTMLElement = document.getElementById('seriesAve')!;

function renderSeriesInTable(series: Serie[]): void {
    series.forEach(c => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${c.id}</td>
                               <td>${c.name}</td>
                               <td>${c.seasons}</td>
                               <td>${c.channel}</td>`
        seriesTBody.appendChild(trElement);
    });
}

function averageSeasons(series: Serie[]): void {
    let sum= 0;
    series.forEach(c => {
        sum += c.seasons;
    });
    let prom = sum / series.length;
    let pElement = document.createElement("p");
    pElement.innerHTML = `<p>The average number of seasons is: ${prom}</p>`;
    averageSeasonsT.appendChild(pElement);
}

renderSeriesInTable(series);
averageSeasons(series);