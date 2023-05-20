"use strict";

 let map = L.map('map').setView([28.9, 2.5], 2);

//Basemap
let Stamen_Terrain = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 18,
    ext: 'png'
}).addTo(map);

// icons
let mapIcon = L.Icon.extend({
    options: {
        iconSize:     [38, 38], // size of the icon
        iconAnchor:   [15, 15], // point of the icon which will correspond to marker's location
        popupAnchor:  [4, -12] // point from which the popup should open relative to the iconAnchor
    }
});

let uniIcon = new mapIcon({iconUrl: './images/uni_pin.svg'}),
    treeIcon = new mapIcon({iconUrl: './images/tree_pin.svg'}),
    energyIcon = new mapIcon({iconUrl: './images/energy_pin.svg'}),
    floodIcon = new mapIcon({iconUrl: './images/flood_pin.svg'}),
    marineIcon = new mapIcon({iconUrl: './images/marine_pin.svg'}),
    sharkIcon = new mapIcon({iconUrl: './images/shark_pin.svg'});

// Education layer:
let education = L.layerGroup();
let UoE = L.marker([55.947, -3.184], {icon: uniIcon}, {alt: "UoE"}).addTo(map).bindPopup("University of Edinburgh:  MSc GIS").addTo(education);
let HWU = L.marker([55.912, -3.321], {icon: uniIcon}, {alt: "HMU"}).addTo(map).bindPopup("Heriot-Watt University:  MSc MRDP").addTo(education);
let MU = L.marker([-33.775, 151.113], {icon: uniIcon}, {alt: "MU"}).addTo(map).bindPopup("Macquarie University:  BA").addTo(education);

// Project layer:
let projects = L.layerGroup();
let Iceland = L.marker([64.259, -21.12], {icon: treeIcon}, {alt: "Dissertation2"}).addTo(map).bindPopup("Dissertation: Recreating Ancient Forests").addTo(projects);
let Caymans = L.marker([19.30, -81.362], {icon: sharkIcon}, {alt: "Dissertation1"}).addTo(map).bindPopup("Dissertation: Species Action and Conservation Plans").addTo(projects);
let Flood = L.marker([55.917, -3.308], {icon: floodIcon}, {alt: "Flood"}).addTo(map).bindPopup("Flood Management in Edinburgh").addTo(projects);
let BlueCarb = L.marker([58.855, -3.19], {icon: marineIcon}, {alt: "BlueCarbon"}).addTo(map).bindPopup("Blue Carbon Study").addTo(projects);
let Churchhill = L.marker([58.89, -2.896], {icon: energyIcon}, {alt: "ChurchhillBarrier"}).addTo(map).bindPopup("Removing the Churchill Barriers").addTo(projects);

// Work Experience layer:
let experience = L.layerGroup();
let FishLab = L.marker([-33.775, 151.115], {icon: marineIcon}, {alt: "FishLab"}).addTo(map).bindPopup("Macquarie Fish Lab: Temporary Assistant").addTo(experience);
let DoE = L.marker([19.302, -81.362], {icon: marineIcon}, {alt: "DoE"}).addTo(map).bindPopup("Department of Environment: Research Intern").addTo(experience);
let PA = L.marker([-18.243, 178.088], {icon: marineIcon}, {alt: "DoE"}).addTo(map).bindPopup("Project Abroad:  Research Volunteer").addTo(experience);

//Layer control
let overlays = {
    "Education" : education,    
    "Projects" : projects,
    "Experience" : experience,
}

let baseLayers = {
    "Steamer" : Stamen_Terrain
};

let layerControl = L.control.layers(baseLayers, overlays).addTo(map)
for(let overlay of Object.values(overlays)){
    map.addLayer(overlay);
}