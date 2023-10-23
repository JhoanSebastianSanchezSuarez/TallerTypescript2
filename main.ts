import { series } from "./data.js";
import { Serie } from "./series.js";

const seriesTBody: HTMLElement = document.getElementById('series')!;

const averageSeasonsT : HTMLElement = document.getElementById('seriesAve')!;



function showSerieDetails(id: number): void {
    let serie = series[id-1];
    let serieDetailTBody: HTMLElement = document.getElementById('serieDetail')!;
    serieDetailTBody.innerHTML = `<img class="card-img-top" src=${serie.image} referrerpolicy="no-referrer">
                            <div class="card-body">
                            <h2 class="card-body">${serie.name}</h2>
                            <p class="card-text">${serie.description}</p>
                            <a href="${serie.url}">${serie.url}</a>
                            </div>`;
}


function renderSeriesInTable(series: Serie[]): void {
    series.forEach(c => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${c.id}</td>
                               <td>
                               <a href="#">${c.name}</a>
                               </td>
                               <td>${c.seasons}</td>
                               <td>${c.channel}</td>`;
                               trElement.onclick = function() { showSerieDetails(c.id); };
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