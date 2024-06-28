const importantNodes = [
    { id: 'Kolej Kerawang', x: 500, y: 500, lat: 5.260927, lon: 103.165455, edges: [] },
    { id: 'Gate Kolej Kerawang', x: 540, y: 475, lat: 5.261204, lon: 103.165841, edges: [] },
    { id: 'Gate Blok E', x: 500, y: 450, lat: 5.261307, lon: 103.165733, edges: [] },
    { id: 'Dewan Lestari', x: 520, y: 235, lat: 5.262432, lon: 103.165938, edges: [] },
    { id: "Cafe", x: 530, y: 190, lat: 5.262686, lon: 103.165842, edges: [] },
    { id: 'Surau UiTM', x: 550, y: 420, lat: 5.261557, lon: 103.165987, edges: [] },
    { id: 'Blok E', x: 500, y: 400, lat: 5.261725, lon: 103.165722, edges: [] },
    { id: 'Blok D', x: 520, y: 100, lat: 5.263061, lon: 103.165811, edges: [] },
    { id: 'Blok B', x: 390, y: 100, lat: 5.263102, lon: 103.165157, edges: [] },
    { id: 'Blok C', x: 450, y: 55, lat: 5.263313, lon: 103.165514, edges: [] },
    { id: 'Blok A', x: 450, y: 150, lat: 5.262846, lon: 103.165473, edges: [] }
];

const graph = {
    "Jalan Tar": { id: "Jalan Tar", x: 305, y: 445, lat: 5.261423, lon: 103.164759, edges: [] },
    "Jalan Tar2": { id: "Jalan Tar2", x: 400, y: 280, edges: [] },
    "Jalan Tar3": { id: "Jalan Tar3", x: 410, y: 200, edges: [] },
    "Jalan Tar4": { id: "Jalan Tar4", x: 520, y: 280, edges: [] },
    "Jalan Tar5": { id: "Jalan Tar5", x: 520, y: 180, edges: [] },
    "Alur Gajah": { id: "Alur Gajah", x: 395, y: 160, edges: [] },
    "Alur Gajah2": { id: "Alur Gajah2", x: 505, y: 300, edges: [] },
    "Kelas D-2": { id: "Kelas D-2", x: 520, y:110, edges: [] },
    "Gate Pejabat": { id: "Gate Pejabat", x: 310, y: 280, lat: 5.262192, lon: 103.164790, edges: [] },
    "Kolej Kerawang": { id: "Kolej Kerawang", x: 500, y: 500, lat: 5.260927, lon: 103.165455, edges: [] },
    "Gate Kolej Kerawang": { id: "Gate Kolej Kerawang", x: 540, y: 475, lat: 5.261204, lon: 103.165841, edges: [] },
    "Gate Blok E":  { id: "Gate Blok E", x: 500, y: 450, lat: 5.261307, lon: 103.165733, edges: [] },
    "Dewan Lestari": { id: "Dewan Lestari", x: 520, y: 235, lat: 5.262432, lon: 103.165938, edges: [] },
    "Cafe": { id: "Cafe", x: 530, y: 190, lat: 5.262686, lon: 103.165842, edges: [] },
    "Surau UiTM": { id: "Surau UiTM", x: 550, y: 420, lat: 5.261557, lon: 103.165987, edges: [] },
    "Blok E": { id: "Blok E", x: 500, y: 400, lat: 5.261725, lon: 103.165722, edges: [] }, 
    "Blok D": { id: "Blok D", x: 520, y: 100, lat: 5.263061, lon: 103.165811, edges: [] },
    "Blok B": { id: "Blok B", x: 390, y: 100, lat: 5.263102, lon: 103.165157, edges: [] },
    "Blok C": { id: "Blok C", x: 450, y: 55, lat: 5.263313, lon: 103.165514, edges: [] },
    "Blok A": { id: "Blok A", x: 450, y: 150, lat: 5.262846, lon: 103.165473, edges: [] }
};

const walkablePaths = [
    { from: "Kolej Kerawang", to: "Gate Kolej Kerawang", weight: 50 },
    { from: "Gate Kolej Kerawang", to: "Gate Blok E", weight: 50 },
    { from: "Gate Blok E", to: "Surau UiTM", weight: 50 },
    { from: "Gate Blok E", to: "Blok E", weight: 50 },
    { from: "Surau UiTM", to: "Blok E", weight: 50 },
    { from: "Blok E", to: "Alur Gajah2", weight: 50 },
    { from: "Alur Gajah2", to: "Jalan Tar4", weight: 10 },
   
   
    { from: "Gate Kolej Kerawang", to: "Jalan Tar", weight: 260 },
    { from: "Gate Blok E", to: "Jalan Tar", weight: 230 },
    { from: "Jalan Tar", to: "Gate Pejabat", weight: 250 },
    { from: "Gate Pejabat", to: "Jalan Tar2", weight: 100 },
    { from: "Jalan Tar2", to: "Jalan Tar4", weight: 120 },
    { from: "Jalan Tar4", to: "Dewan Lestari", weight: 50 },
    { from: "Dewan Lestari", to: "Jalan Tar5", weight: 40 },
    { from: "Dewan Lestari", to: "Cafe", weight: 35 },
    { from: "Jalan Tar5", to: "Jalan Tar3", weight: 130 },
    { from: "Jalan Tar5", to: "Blok D", weight: 50 },
    { from: "Jalan Tar5", to: "Blok A", weight: 40 },
    { from: "Jalan Tar5", to: "Cafe", weight: 5 },
    { from: "Jalan Tar2", to: "Jalan Tar3", weight: 70 },
    { from: "Jalan Tar3", to: "Alur Gajah", weight: 20 },

    { from: "Alur Gajah", to: "Blok A", weight: 10 },
    { from: "Alur Gajah", to: "Blok B", weight: 30 },
    { from: "Blok A", to: "Blok D", weight: 40 },
    { from: "Blok A", to: "Blok B", weight: 40 },
    { from: "Blok B", to: "Blok C", weight: 40 },
    { from: "Blok C", to: "Blok D", weight: 40 },
    { from: "Blok C", to: "Blok D", weight: 40 },
    { from: "Blok D", to: "Jalan Tar5", weight: 40 }];

    function viewCafeInfo() {
        // Redirect user to cafe.html
        window.location.href = "cafe.html";
    }

     // Add edges to the graph nodes
     for (let path of walkablePaths) {
        let { from, to, weight } = path;
        graph[from].edges.push({ node: graph[to], weight: weight });
        graph[to].edges.push({ node: graph[from], weight: weight });
    }

    // Function to calculate the Euclidean distance between two points (x, y)
    function distance(node1, node2) {
        return Math.sqrt(Math.pow(node1.x - node2.x, 2) + Math.pow(node1.y - node2.y, 2));
    }

    // Function to calculate the distance between two geographic coordinates (lat, lon)
    function geoDistance(lat1, lon1, lat2, lon2) {
        const toRad = x => x * Math.PI / 180;
        const R = 6371; // Radius of the Earth in km

        const dLat = toRad(lat2 - lat1);
        const dLon = toRad(lon2 - lon1);
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                  Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
                  Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c; // Distance in km
    }

    // Function to find the nearest node to a given latitude and longitude
    function findNearestNode(lat, lon) {
        let minDistance = Infinity;
        let nearestNode = null;

        for (let nodeId in graph) {
            let node = graph[nodeId];
            let dist = geoDistance(lat, lon, node.lat, node.lon);
            if (dist < minDistance) {
                minDistance = dist;
                nearestNode = node;
            }
        }
        return nearestNode;
    }

    // A* pathfinding algorithm(calculate the weight)
    function findShortestPath(graph, startNodeId, endNodeId) {
    // Reset graph nodes
    for (let nodeId in graph) {
        graph[nodeId].distanceFromStart = Infinity;
        graph[nodeId].distanceToEnd = Infinity;
        graph[nodeId].parent = null;
    }

    let openList = [graph[startNodeId]];
    let closedList = [];

    graph[startNodeId].distanceFromStart = 0;
    graph[startNodeId].distanceToEnd = distance(graph[startNodeId], graph[endNodeId]);

    while (openList.length > 0) {
        let currentNode = openList.reduce((acc, node) => node.distanceToEnd < acc.distanceToEnd ? node : acc, openList[0]);

        if (currentNode.id === endNodeId) {
            // Found the path
            let path = [];
            while (currentNode) {
                path.push(currentNode);
                currentNode = currentNode.parent;
            }
            return path.reverse();
        }

    openList = openList.filter(node => node !== currentNode);
    closedList.push(currentNode);

    for (let edge of currentNode.edges) {
        let neighbor = edge.node;
        if (closedList.includes(neighbor)) continue;

        let tentativeDistanceFromStart = currentNode.distanceFromStart + edge.weight;
        if (!openList.includes(neighbor)) {
            openList.push(neighbor);
        } else if (tentativeDistanceFromStart >= neighbor.distanceFromStart) {
            continue;
        }

        neighbor.parent = currentNode;
        neighbor.distanceFromStart = tentativeDistanceFromStart;
        neighbor.distanceToEnd = neighbor.distanceFromStart + distance(neighbor, graph[endNodeId]);
    }
}
return null; // No path found
}


    // Draw the nodes and paths on the canvas
    function drawPath(ctx, path) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        drawNodes(ctx); // Draw the nodes (buildings)
        ctx.beginPath();
        for (let i = 0; i < path.length; i++) {
            let node = path[i];
            if (i === 0) {
                ctx.moveTo(node.x, node.y);
            } else {
                ctx.lineTo(node.x, node.y);
            }
        }
        ctx.strokeStyle = 'green';
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    // Function to draw nodes (buildings) on the canvas
    function drawNodes(ctx) {
        for (let nodeId in importantNodes) {
            let node = importantNodes[nodeId];
            ctx.fillStyle = 'red';
            ctx.beginPath();
            ctx.arc(node.x, node.y, 5, 0, Math.PI * 2);
            ctx.fill();

            ctx.font = '12px Arial';
            ctx.textAlign = 'left';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = 'white';
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'black';
            ctx.strokeText(node.id, node.x + 10, node.y);
            ctx.fillText(node.id, node.x + 10, node.y);
        }
    }

    // Function to find the path based on user input
    function findPath() {
        let startNodeId = document.getElementById('start').value;
        let endNodeId = document.getElementById('end').value;

        if (graph[startNodeId] && graph[endNodeId]) {
            let path = findShortestPath(graph, startNodeId, endNodeId);
            if (path) {
                let ctx = document.getElementById('canvas').getContext('2d');
                drawPath(ctx, path);
            } else {
                alert("No path found");
            }
        } else {
            alert("Invalid node ID(s)");
        }
    }

    // Function to get user's current position and orientation
    function getUserLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const userLat = position.coords.latitude;
                const userLon = position.coords.longitude;
                console.log("User Location:", { lat: userLat, lon: userLon });

                // Display user location in latitude and longitude
                document.getElementById('location-info').innerText = `Your Location: Latitude: ${userLat}, Longitude: ${userLon}`;

                // Find the nearest node to the user's location
                let nearestNode = findNearestNode(userLat, userLon);
                if (nearestNode) {
                    document.getElementById('start').value = nearestNode.id;
                    document.getElementById('nearest-node-info').innerText = `Nearest Node: ${nearestNode.id}`;
                } else {
                    alert("No nearest node found");
                }
            }, error => {
                console.error("Error getting user location:", error);
                alert("Error getting user location. Please check your browser settings and allow location access.");
            });

            // Watch device orientation
            if (window.DeviceOrientationEvent) {
                window.addEventListener('deviceorientation', handleOrientation, false);
            } else {
                alert("Device orientation not supported.");
            }
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    // Function to handle device orientation changes
    function handleOrientation(event) {
        let alpha = event.alpha;
        if (alpha !== null) {
            let direction = getDirection(alpha);
            document.getElementById('direction-info').innerText = `Your device is pointing ${direction}.`;
        }
    }

    // Function to get cardinal direction based on device alpha value
    function getDirection(alpha) {
        if (alpha >= 315 || alpha < 45) {
            return 'north';
        } else if (alpha >= 45 && alpha < 135) {
            return 'east';
        } else if (alpha >= 135 && alpha < 225) {
            return 'south';
        } else {
            return 'west';
        }
    }

    // Find and display the nearest node to the specified coordinates
    document.addEventListener('DOMContentLoaded', () => {
        
        let nearestNode = findNearestNode(userLat, userLon);
        if (nearestNode) {
            document.getElementById('nearest-node-info').innerText = `Nearest Node to Lat: ${userLat}, Lon: ${userLon} is ${nearestNode.id}`;
        }
        let ctx = document.getElementById('canvas').getContext('2d');
        drawNodes(ctx); // Draw the nodes (buildings) on page load
    });
