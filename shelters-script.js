// Shelter locations in Pakistan
const shelterLocations = [
    { name: "Hyderabad Relief Camp", lat: 25.396, lng: 68.377, description: "Relief camp in Hyderabad for Sindh flood victims." },
    { name: "Dadu Relief Camp", lat: 26.733, lng: 67.776, description: "Shelters set up in schools and community centers." },
    { name: "Jaffarabad Emergency Shelter", lat: 28.130, lng: 68.255, description: "Managed by local NGOs and government." },
    { name: "Rajanpur Shelter", lat: 29.104, lng: 70.330, description: "Flood relief camp in Punjab for displaced residents." },
    { name: "Swat Relief Shelter", lat: 35.222, lng: 72.425, description: "Temporary shelters in schools and community centers." },
    { name: "Muzaffarabad Shelter", lat: 34.370, lng: 73.471, description: "Emergency shelters for AJK flood victims." }
];

// Initialize the map
const map = L.map('map').setView([30.3753, 69.3451], 6); // Centered on Pakistan

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add shelter markers
shelterLocations.forEach(shelter => {
    L.marker([shelter.lat, shelter.lng])
        .addTo(map)
        .bindPopup(`<b>${shelter.name}</b><br>${shelter.description}`);
});
