
function initMap() {
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 40.785091,
            lng: -73.968285
        }
    });
    let labels="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let locations = [ 
        { lat: 40.785091, lng: -73.968285 }, 
        { lat: 41.084045, lng: -73.874245 }, 
        { lat: 40.754932, lng: -73.984016 },                 
    ];

    let markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length],
        });
    });

    var markerCluster = new MarkerClusterer(map, markers,
    {imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"});
}
