var flag2 = 0 ;
function findPathButton(){
  deleteTable()
  function deleteTable() {
    tableContainer.innerHTML = ''; // Clear the container
    return;
    
  }
  // when no options are selected
  if(source == 'source' || destination == 'destination'){
    return;
  }
class Graph {
    constructor() {
      this.nodes = {};
    }
  
    addNode(node, lines) {
      this.nodes[node] = { lines: lines, neighbors: [] };
    }
  
    addEdge(node1, node2) {
        if (!this.nodes[node1]) {
            console.error(`Node ${node1} does not exist in the graph.`);
            return;
          }
          if (!this.nodes[node2]) {
            console.error(`Node ${node2} does not exist in the graph.`);
            return;
          }
      this.nodes[node1].neighbors.push({ node: node2, weight: 1 });
      this.nodes[node2].neighbors.push({ node: node1, weight: 1 });
    }
  }
  
  // Create a graph for metro stations
  const metroGraph = new Graph();
  
  // Red Line stations
  const redLineStations = [
    "Shaheed Sthal (New Bus Adda)",
    "Hindon River",
    "Arthala",
    "Mohan Nagar",
    "Shyam Park",
    "Major Mohit Sharma Rajendra Nagar",
    "Raj Bagh",
    "Shaheed Nagar",
    "Dilshad Garden",
    "Jhilmil",
    "Mansarovar Park",
    "Shahdara",
    "Welcome",
    "Seelampur",
    "Shastri Park",
    "Kashmere Gate",
    "Tis Hazari",
    "Pulbangash",
    "Pratap Nagar",
    "Shastri Nagar",
    "Inderlok",
    "Kanhaiya Nagar",
    "Keshavpuram",
    "Netaji Subhash Place",
    "Kohat Enclave",
    "Pitampura",
    "Rohini (East)",
    "Rohini (West)",
    "Rithala"
  ];
  
  // Pink Line stations
  const pinkLineStations = [
    "Majlis Park",
    "Azadpur",
    "Shalimar Bagh",
    "Netaji Subhash Place",
    "Shakurpur",
    "Punjabi Bagh West",
    "ESI-Basaidarapur",
    "Rajouri Garden",
    "Mayapuri",
    "Naraina Vihar",
    "Delhi Cantt",
    "Durgabai Deshmukh South Campus",
    "Sir M Vishweshwaraiah Moti Bagh",
    "Bhikaji Cama Place",
    "Sarojini Nagar",
    "Dilli Haat-INA",
    "South Extension",
    "Lajpat Nagar",
    "Vinobapuri",
    "Ashram",
    "Sarai Kale Khan-Nizamuddin",
    "Mayur Vihar Phase-1",
    "Mayur Vihar PKT-1",
    "Trilokpuri Sanjay Lake",
    "East Vinod Nagar Mayur Vihar-II",
    "Mandawali West Vinod Nagar",
    "IP Extension",
    "Anand Vihar ISBT",
    "Karkarduma",
    "Karkarduma Court",
    "Krishna Nagar",
    "East Azad Nagar",
    "Welcome",
    "Jafrabad",
    "Maujpur- Babarpur",
    "Gokulpurim Johri Enclave",
    "Shiv Vihar"
  ];
  //yellow line stations
  const yellowLineStations = [
    "Samaypur Badli",
    "Rohini Sector-18",
    "Rohini Sector-19",
    "Haiderpur Badli Mor",
    "Jahangirpuri",
    "Adarsh Nagar",
    "Azadpur",
    "Model Town",
    "GTB Nagar",
    "Vishwavidyalaya",
    "Vidhan Sabha",
    "Civil Lines",
    "Kashmere Gate",
    "Chandni Chowk",
    "Chawri Bazar",
    "New Delhi (Yellow and Airport Line)",
    "Rajiv Chowk",
    "Patel Chowk",
    "Central Secretariat",
    "Udyog Bhawan",
    "Lok Kalyan Marg",
    "Jor Bagh",
    "Dilli Haat-INA",
    "AIIMS",
    "Green Park",
    "Hauz Khas",
    "Malviya Nagar",
    "Saket",
    "Qutab Minar",
    "Chhattarpur",
    "Sultanpur",
    "Ghitorni",
    "Arjan Garh",
    "Guru Dronacharya",
    "Sikandarpur",
    "MG Road",
    "IFFCO Chowk",
    "Huda City Centre"
  ];

  //blue line station
  const blueLineStations = [
    "Dwarka Sector-21",
    "Dwarka Sector-8",
    "Dwarka Sector-9",
    "Dwarka Sector-10",
    "Dwarka Sector-11",
    "Dwarka Sector-12",
    "Dwarka Sector-13",
    "Dwarka Sector-14",
    "Dwarka",
    "Dwarka Mor",
    "Nawada",
    "Uttam Nagar West",
    "Uttam Nagar East",
    "Janak Puri West",
    "Janak Puri East",
    "Tilak Nagar",
    "Subhash Nagar",
    "Tagore Garden",
    "Rajouri Garden",
    "Ramesh Nagar",
    "Moti Nagar",
    "Kirti Nagar",
    "Shadipur",
    "Patel Nagar",
    "Rajendra Place",
    "Karol Bagh",
    "Jhandewalan",
    "RK Ashram Marg",
    "Rajiv Chowk",
    "Barakhamba Road",
    "Mandi House",
    "Supreme Court",
    "Indraprastha",
    "Yamuna Bank",
    "Akshardham",
    "Mayur Vihar Phase-1",
    "Mayur Vihar Extension",
    "New Ashok Nagar",
    "Noida Sector 15",
    "Noida Sector 16",
    "Noida Sector 18",
    "Botanical Garden",
    "Golf Course",
    "Noida City Centre",
    "Sector 34 Noida",
    "Sector 52 Noida",
    "Sector 61 Noida",
    "Sector 59 Noida",
    "Sector 62 Noida",
    "Noida Electronic City"
  ];

  //additional blue line
  const additionalBlueLineStations = [
    "Yamuna Bank",
    "Laxmi Nagar",
    "Nirman Vihar",
    "Preet Vihar",
    "Karkarduma",
    "Anand Vihar ISBT",
    "Kaushambi",
    "Vaishali"
  ];

  //green line stations
  const greenLineStations = [
    "Kirti Nagar",
    "Satguru Ram Singh Marg",
    "Inderlok",
    "Ashok Park Main",
    "Punjabi Bagh",
    "Punjabi Bagh West",
    "Shivaji Park",
    "Madipur",
    "Paschim Vihar (East)",
    "Paschim Vihar (West)",
    "Peeragarhi",
    "Udyog Nagar",
    "Maharaja Surajmal Stadium",
    "Nangloi",
    "Nangloi Railway Station",
    "Rajdhani Park",
    "Mundka",
    "Mundka Industrial Area",
    "Ghevra",
    "Tikri Kalan",
    "Tikri Border",
    "Pandit Shree Ram Sharma",
    "Bahadurgarh City",
    "Brigadier Hoshiyar Singh"
  ];

  // Violet Line stations
const violetLineStations = [
    "Kashmere Gate",
    "Lal Quila",
    "Jama Masjid",
    "Delhi Gate",
    "ITO",
    "Mandi House",
    "Janpath",
    "Central Secretariat",
    "Khan Market",
    "JLN Stadium",
    "Jangpura",
    "Lajpat Nagar",
    "Moolchand",
    "Kailash Colony",
    "Nehru Place",
    "Kalkaji Mandir",
    "Govindpuri",
    "Harkesh Nagar Okhla",
    "Jasola Apollo",
    "Sarita Vihar",
    "Mohan Estate",
    "Tughlakabad",
    "Badarpur Border",
    "Sarai",
    "NHPC Chowk",
    "Mewala Maharajpur",
    "Sector-28",
    "Badkal Mor",
    "Old Faridabad",
    "Neelam Chowk Ajronda",
    "Bata Chowk",
    "Escorts Mujesar",
    "Sant Surdas (SIHI)",
    "Raja Nahar Singh (Ballabgarh)"
  ];

  // Magenta Line stations
  const magentaLineStations = [
    "Janak Puri West",
    "Dabri Mor-Janakpuri South",
    "Dashrathpuri",
    "Palam",
    "Sadar Bazar Cantonment",
    "Terminal-1 IGI Airport",
    "Shankar Vihar",
    "Vasant Vihar",
    "Munirka",
    "RK Puram",
    "IIT",
    "Hauz Khas",
    "Panchsheel Park",
    "Chirag Delhi",
    "Greater Kailash",
    "Nehru Enclave",
    "Kalkaji Mandir",
    "Okhla NSIC",
    "Sukhdev Vihar",
    "Jamia Millia Islamia",
    "Okhla Vihar",
    "Jasola Vihar Shaheen Bagh",
    "Kalindi Kunj",
    "Okhla Bird Sanctuary",
    "Botanical Garden"
  ];

  // Grey Line stations
  const greyLineStations = [
    "Dwarka",
    "Nangli",
    "Najafgarh",
    "Dhansa Bus Stand"
  ];

  const orangeLineStations = [
    "New Delhi (Yellow and Airport Line)",
    "Shivaji Stadium",
    "Dhaula Kuan",
    "Delhi Aerocity",
    "Airport",
    "Dwarka Sector-21"
  ];

  // Rapid Metro-RMGL stations
  const rapidMetroStations = [
    "Sector 55-56",
    "Sector 54 Chowk",
    "Sector 53-54",
    "Sector 42-43",
    "Phase 1",
    "Sikandarpur",
    "Phase 2",
    "Belvedere Towers",
    "Cyber City",
    "Moulsari Avenue",
    "Phase 3"
  ];

  
  // Add Red Line stations to the graph
  redLineStations.forEach(station => metroGraph.addNode(station, ["Red"]));
  
  // Add Pink Line stations to the graph, handling interchanges
  pinkLineStations.forEach(station => {
    if (redLineStations.includes(station)) {
      metroGraph.nodes[station].lines.push("Pink");
    } else {
      metroGraph.addNode(station, ["Pink"]);
    }
  });
  // Add yellow Line stations to the graph, handling interchanges
  yellowLineStations.forEach(station => {
    if (redLineStations.includes(station)) {
      metroGraph.nodes[station].lines.push("Yellow");
    } else if (pinkLineStations.includes(station)) {
      metroGraph.nodes[station].lines.push("Yellow");
    } else {
      metroGraph.addNode(station, ["Yellow"]);
    }
  });
  // Add blue Line stations to the graph, handling interchanges
  blueLineStations.forEach(station => {
    if (redLineStations.includes(station)) {
      metroGraph.nodes[station].lines.push("Blue");
    } else if (pinkLineStations.includes(station)) {
      metroGraph.nodes[station].lines.push("Blue");
    } else if (yellowLineStations.includes(station)) {
      metroGraph.nodes[station].lines.push("Blue");
    } else {
      metroGraph.addNode(station, ["Blue"]);
    }
  });
  // Add aditional blue Line stations to the graph, handling interchanges
  additionalBlueLineStations.forEach(station => {
    if (redLineStations.includes(station)) {
      metroGraph.nodes[station].lines.push("Blue");
    } else if (pinkLineStations.includes(station)) {
      metroGraph.nodes[station].lines.push("Blue");
    } else if (yellowLineStations.includes(station)) {
      metroGraph.nodes[station].lines.push("Blue");
    } else if(blueLineStations.includes(station)){
        metroGraph.nodes[station].lines.push("Blue");
    } else {
        metroGraph.addNode(station, ["Blue"]);
    }
  });
  // Add green Line stations to the graph, handling interchanges
  greenLineStations.forEach(station => {
    if (redLineStations.includes(station)) {
      metroGraph.nodes[station].lines.push("Green");
    } else if (pinkLineStations.includes(station)) {
      metroGraph.nodes[station].lines.push("Green");
    } else if (yellowLineStations.includes(station)) {
      metroGraph.nodes[station].lines.push("Green");
    } else if (blueLineStations.includes(station) || additionalBlueLineStations.includes(station)) {
      metroGraph.nodes[station].lines.push("Green");
    } else {
      metroGraph.addNode(station, ["Green"]);
    }
  });
  // Add violet Line stations to the graph, handling interchanges
  violetLineStations.forEach(station => {
    if (redLineStations.includes(station)) {
      metroGraph.nodes[station].lines.push("Violet");
    } else if (pinkLineStations.includes(station)) {
      metroGraph.nodes[station].lines.push("Violet");
    } else if (yellowLineStations.includes(station)) {
      metroGraph.nodes[station].lines.push("Violet");
    } else if (blueLineStations.includes(station) || additionalBlueLineStations.includes(station)) {
      metroGraph.nodes[station].lines.push("Violet");
    } else if (greenLineStations.includes(station)) {
      metroGraph.nodes[station].lines.push("Violet");
    } else {
      metroGraph.addNode(station, ["Violet"]);
    }
  });
  // Add magenta Line stations to the graph, handling interchanges
  magentaLineStations.forEach(station => {
    if (redLineStations.includes(station)) {
      metroGraph.nodes[station].lines.push("Magenta");
    } else if (pinkLineStations.includes(station)) {
      metroGraph.nodes[station].lines.push("Magenta");
    } else if (yellowLineStations.includes(station)) {
      metroGraph.nodes[station].lines.push("Magenta");
    } else if (blueLineStations.includes(station) || additionalBlueLineStations.includes(station)) {
      metroGraph.nodes[station].lines.push("Magenta");
    } else if (greenLineStations.includes(station)) {
      metroGraph.nodes[station].lines.push("Magenta");
    } else if (violetLineStations.includes(station)) {
      metroGraph.nodes[station].lines.push("Magenta");
    } else {
      metroGraph.addNode(station, ["Magenta"]);
    }
  });
  // Add grey Line stations to the graph, handling interchanges
  greyLineStations.forEach(station => {
    if (redLineStations.includes(station)) {
      metroGraph.nodes[station].lines.push("Grey");
    } else if (pinkLineStations.includes(station)) {
      metroGraph.nodes[station].lines.push("Grey");
    } else if (yellowLineStations.includes(station)) {
      metroGraph.nodes[station].lines.push("Grey");
    } else if (blueLineStations.includes(station) || additionalBlueLineStations.includes(station)) {
      metroGraph.nodes[station].lines.push("Grey");
    } else if (greenLineStations.includes(station)) {
      metroGraph.nodes[station].lines.push("Grey");
    } else if (violetLineStations.includes(station)) {
      metroGraph.nodes[station].lines.push("Grey");
    } else if (magentaLineStations.includes(station)) {
      metroGraph.nodes[station].lines.push("Grey");
    } else {
      metroGraph.addNode(station, ["Grey"]);
    }
  });
  // Add orange Line stations to the graph, handling interchanges
  orangeLineStations.forEach(station => {
    if (redLineStations.includes(station)) {
      metroGraph.nodes[station].lines.push("Orange");
    } else if (pinkLineStations.includes(station)) {
      metroGraph.nodes[station].lines.push("Orange");
    } else if (yellowLineStations.includes(station)) {
      metroGraph.nodes[station].lines.push("Orange");
    } else if (blueLineStations.includes(station) || additionalBlueLineStations.includes(station)) {
      metroGraph.nodes[station].lines.push("Orange");
    } else if (greenLineStations.includes(station)) {
      metroGraph.nodes[station].lines.push("Orange");
    } else if (violetLineStations.includes(station)) {
      metroGraph.nodes[station].lines.push("Orange");
    } else if (magentaLineStations.includes(station)) {
      metroGraph.nodes[station].lines.push("Orange");
    } else if (greyLineStations.includes(station)) {
      metroGraph.nodes[station].lines.push("Orange");
    } else {
      metroGraph.addNode(station, ["Orange"]);
    }
  });
// Add RMGL Line stations to the graph, handling interchanges
  rapidMetroStations.forEach(station => {
    if (redLineStations.includes(station)) {
      metroGraph.nodes[station].lines.push("RMGL");
    } else if (pinkLineStations.includes(station)) {
      metroGraph.nodes[station].lines.push("RMGL");
    } else if (yellowLineStations.includes(station)) {
      metroGraph.nodes[station].lines.push("RMGL");
    } else if (blueLineStations.includes(station) || additionalBlueLineStations.includes(station)) {
      metroGraph.nodes[station].lines.push("RMGL");
    } else if (greenLineStations.includes(station)) {
      metroGraph.nodes[station].lines.push("RMGL");
    } else if (violetLineStations.includes(station)) {
      metroGraph.nodes[station].lines.push("RMGL");
    } else if (magentaLineStations.includes(station)) {
      metroGraph.nodes[station].lines.push("RMGL");
    } else if (greyLineStations.includes(station)) {
      metroGraph.nodes[station].lines.push("RMGL");
    } else if (orangeLineStations.includes(station)) {
      metroGraph.nodes[station].lines.push("RMGL");
    } else {
      metroGraph.addNode(station, ["RMGL"]);
    }
  });

  
  // Add edges to all stations
  addEdgesBetweenStations(redLineStations);
  addEdgesBetweenStations(pinkLineStations);
  addEdgesBetweenStations(yellowLineStations);
  addEdgesBetweenStations(blueLineStations);
  addEdgesBetweenStations(additionalBlueLineStations);
  addEdgesBetweenStations(greenLineStations);
  addEdgesBetweenStations(violetLineStations);
  addEdgesBetweenStations(magentaLineStations);
  addEdgesBetweenStations(greyLineStations);
  addEdgesBetweenStations(orangeLineStations);
  addEdgesBetweenStations(rapidMetroStations);


  
  function addEdgesBetweenStations(stationNames) {
    for (let i = 0; i < stationNames.length - 1; i++) {
      const station1 = stationNames[i];
      const station2 = stationNames[i + 1];
      metroGraph.addEdge(station1, station2);
    }
  }
  

  function dijkstra(graph, startNode) {
    const distances = {};
    const visited = {};
    const previous = {};
    const queue = [];
  
    // Initialize distances and queue
    for (const node in graph.nodes) {
      distances[node] = Infinity;
      visited[node] = false;
      previous[node] = null;
      queue.push(node);
    }
    distances[startNode] = 0;
  
    while (queue.length) {
      // Find the node with the minimum distance
      let minDistance = Infinity;
      let minNode = null;
      for (const node of queue) {
        if (distances[node] < minDistance && !visited[node]) {
          minDistance = distances[node];
          minNode = node;
        }
      }
  
      // If all remaining nodes are unreachable, stop the loop
      if (minNode === null) break;
  
      // Mark the node as visited
      visited[minNode] = true;
  
      // Update distances to neighbors
      for (const neighbor of graph.nodes[minNode].neighbors) {
        const neighborNode = neighbor.node;
        const weight = neighbor.weight;
        const distanceToNeighbor = distances[minNode] + weight;
        if (distanceToNeighbor < distances[neighborNode]) {
          distances[neighborNode] = distanceToNeighbor;
          previous[neighborNode] = minNode;
        }
      }
    }
  
    return previous;
  }
  
  function shortestPath(graph, startNode, endNode) {
    const previousNodes = dijkstra(graph, startNode);
    const path = [];
    let currentNode = endNode;
    while (currentNode !== null) {
      path.unshift(currentNode);
      currentNode = previousNodes[currentNode];
    }
    console.log(path);
    return path;
  }

  // Define functions and variables here, and populate the table with data
  {
    function stationInfo(graph, station, lines) {
      return station.split(" (")[0];
    }
  }

  function lineInfo(lines) {
    // Define a mapping of line names to their corresponding colors
    const lineColors = {
      "Red": "red",
      "Pink": "pink",
      "Yellow": "yellow",
      "Blue" : "blue",
      "Blue" : "blue",
      "Green" : "green",
      "Violet" : "violet",
      "Magenta" : "magenta",
      "Grey" : "grey" , 
      "Orange" : "orange",
      "RMGL" : "rmgl"
      // Add more lines and their colors as needed
    };

    // Generate HTML code for each line, represented by a colored circle dot
    const linesHTML = lines.map(line => {
      const color = lineColors[line];
      return `<span class="dot ${color}"></span>${line}`;
    }).join(", ");

    return linesHTML;
  }

  function shortestPathInfo(graph, shortestPath) {
    const pathInfo = [];
    let prevLines = [];
    let prevIsInterchange = false;

    for (let i = 0; i < shortestPath.length; i++) {
      const station = shortestPath[i];
      const stationLines = graph.nodes[station].lines;

      // Check if the current station is an interchange
      const isInterchange = stationLines.length > 1;

      if (!prevIsInterchange || !isInterchange) {
        // Add the station to the path information if it's not an interchange or the previous station was not an interchange
        pathInfo.push({ station: station, lines: stationLines });
      }

      // Update previous interchange flag
      prevIsInterchange = isInterchange;
    }
    return pathInfo;
  }

  
      var src = window.source;
      var des = window.destination;
      console.log(src);
      console.log(des);
      var startStation = src;//"Dilshad Garden"
      var endStation = des;//"Sector 54 Chowk"
      const shortestPathResult = shortestPath(metroGraph, startStation, endStation);
      console.log(shortestPathResult);
    
      const pathInfo = shortestPathInfo(metroGraph, shortestPathResult);
      console.log(pathInfo);
      const tableBody = document.getElementById("shortestPathTable").getElementsByTagName("tbody")[0];
      const row = tableBody.insertRow();
      const stationCell = row.insertCell(0);
      const lineCell = row.insertCell(1);
      stationCell.innerHTML = '<span class="highlight">Station</span>';
      lineCell.innerHTML = '<span class="highlight">Lines</span>';
      
      pathInfo.forEach(info => {
        const row = tableBody.insertRow();
        const stationCell = row.insertCell(0);
        const lineCell = row.insertCell(1);
        stationCell.textContent = stationInfo(metroGraph, info.station, info.lines);
        lineCell.innerHTML = lineInfo(info.lines);
        const totalStations = shortestPathResult.length;
        document.getElementById("totalStations").textContent = `Total stations : ${totalStations}`;
      });

}