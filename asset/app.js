const sekolahGroup = L.layerGroup();
const masjidGroup = L.layerGroup();
const tokoGroup = L.layerGroup();
const puskesmasGroup = L.layerGroup();
const pasarGroup = L.layerGroup();




const iconSekolah = L.icon({
    iconUrl: 'asset/leaflet/images/pendidikan1.png',
    iconSize: [50, 50], // size of the icon
    iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -26] // point from which the popup should open relative to the iconAnchor
});
const iconmasjid = L.icon({
    iconUrl: 'asset/leaflet/images/ibadah.png',
    iconSize: [50, 50], // size of the icon
    iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -26] // point from which the popup should open relative to the iconAnchor
});
const iconToko = L.icon({
    iconUrl: 'asset/leaflet/images/toko.png',
    iconSize: [50, 50], // size of the icon
    iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -26] // point from which the popup should open relative to the iconAnchor
});
const iconpuskesmas = L.icon({
    iconUrl: 'asset/leaflet/images/hospital-building.png',
    iconSize: [50, 50], // size of the icon
    iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -26] // point from which the popup should open relative to the iconAnchor
});



// ===================== Marker ===========================
var masjid = [
    L.marker([-8.677515951059807, 116.38385883520856], { icon: iconmasjid }).addTo(masjidGroup).bindPopup(` <img src="asset/leaflet/images/masjid.png">`),
    L.marker([-8.682469365673192, 116.39268530761792], { icon: iconmasjid }).addTo(masjidGroup).bindPopup(` <img src="asset/leaflet/images/masjid2.jpg">`),
    L.marker([-8.684406024284081, 116.37981123382843], { icon: iconmasjid }).addTo(masjidGroup).bindPopup(` <img src="asset/leaflet/images/masjid3.png">`),
    L.marker([-8.68644459717959, 116.38020377875124], { icon: iconmasjid }).addTo(masjidGroup).bindPopup(` <img src="asset/leaflet/images/masjid4.png">`),
    L.marker([-8.689994358325256, 116.37850259054836], { icon: iconmasjid }).addTo(masjidGroup).bindPopup(` <img src="asset/leaflet/images/masjid5.png">`),
    // Tambahkan Kornat jika lebih dari 1
];

var sekolah = [
    L.marker([-8.676932655098593, 116.38356575237906], { icon: iconSekolah }).addTo(sekolahGroup).bindPopup(` <img src="asset/leaflet/images/sd1.png">`),
    L.marker([-8.671900467057917, 116.37844713188714], { icon: iconSekolah }).addTo(sekolahGroup).bindPopup(` <img src="asset/leaflet/images/sma.jpg">`),
    L.marker([-8.681255621199423, 116.39189511535928], { icon: iconSekolah }).addTo(sekolahGroup).bindPopup(` <img src="asset/leaflet/images/smp.jpeg">`),
    L.marker([-8.676643363313556, 116.38587104058853], { icon: iconSekolah }).addTo(sekolahGroup).bindPopup(` <img src="asset/leaflet/images/mi.png">`),
    L.marker([-8.685773277062644, 116.38537995420967], { icon: iconSekolah }).addTo(sekolahGroup).bindPopup(` <img src="asset/leaflet/images/paud.jpg">`),
    // Tambahkan Kornat jika lebih dari 1
];
var puskesmas = [
    L.marker([-8.675317583548328, 116.38574561175794], { icon: iconpuskesmas }).addTo(puskesmasGroup).bindPopup(` <img src="asset/leaflet/images/puskesmas.jpeg">`),
    L.marker([-8.675503066433745, 116.38196028497936], { icon: iconpuskesmas }).addTo(puskesmasGroup).bindPopup(` <img src="asset/leaflet/images/polindes.jpeg">`),
    // Tambahkan Kornat jika lebih dari 1
];
var toko = [
    L.marker([-8.669194169214569, 116.37810996625676], { icon: iconToko }).addTo(tokoGroup).bindPopup(` <img src="asset/leaflet/images/toko_beson.jpg">`),
    L.marker([-8.673689559035157, 116.37699771720047], { icon: iconToko }).addTo(tokoGroup).bindPopup(` <img src="asset/leaflet/images/toko_beson2.jpg">`),
    // Tambahkan Kornat jika lebih dari 1
];

var layer1 = L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});



var layer2 = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

const map = L.map('map', {
    center: [-8.805767160537458, 116.4695320549471],
    zoom: 13,
    layers: [layer2, sekolahGroup, masjidGroup, tokoGroup, puskesmasGroup]
});


const baseLayers = {
    'Layer 1': layer1,
    'Layer 2': layer2
};

const overlays = {
    'Sekolah': sekolahGroup,
    'Masjid': masjidGroup,
    'Toko': tokoGroup,
    'puskesmas': puskesmasGroup,
};

const layerControl = L.control.layers(baseLayers, overlays).addTo(map);



//  Menampilkan geojSON
L.geoJSON(pendem).addTo(map);
