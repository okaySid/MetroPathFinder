var source = 'source';
var destination = 'destination';

console.log(source);
console.log(destination);
var flag = 0;

  // array of all metro stations.
  var options = [
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
    "Rithala", 
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
    "Shiv Vihar",
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
    "Huda City Centre",
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
    "Noida Electronic City",
    "Yamuna Bank",
    "Laxmi Nagar",
    "Nirman Vihar",
    "Preet Vihar",
    "Karkarduma",
    "Anand Vihar ISBT",
    "Kaushambi",
    "Vaishali", 
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
    "Brigadier Hoshiyar Singh",
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
    "Raja Nahar Singh (Ballabgarh)",
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
    "Botanical Garden",
    "Dwarka",
    "Nangli",
    "Najafgarh",
    "Dhansa Bus Stand",
    "New Delhi (Yellow and Airport Line)",
    "Shivaji Stadium",
    "Dhaula Kuan",
    "Delhi Aerocity",
    "Airport",
    "Dwarka Sector-21",
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


  const dropdownMenuSouce = document.getElementById('dropdownMenu1');


  function updateButtonName(selectedOption , flag) {
  
    if(flag === 1){
      document.getElementById('dropdownMenuButton1').textContent = selectedOption;  
    }
    if(flag === 0){
      document.getElementById('dropdownMenuButton2').textContent = selectedOption;  
    }
    
  }
  dropdownMenuSouce.addEventListener('click', function(event) {
  
      var selectedOption = event.target.textContent;
      
      if(selectedOption !== ''){  
        if(flag === 0){
          source = selectedOption;
          console.log(source);
          flag++;
          updateButtonName(selectedOption , flag );
          return;
        }
        if(flag === 1){
          destination = selectedOption;
          console.log(destination);
          flag = 0; 
          updateButtonName(selectedOption , flag );
          return;
        }
        
      }
  });  


  // Function to populate dropdown menu with options
  function populateDropdown() {
    var dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.innerHTML = ''; // Clear previous content

    options.forEach(function(option) {
      var listItem = document.createElement('a');
      listItem.href = '#';
      listItem.className = 'dropdown-item';
      listItem.textContent = option;
      dropdownContent.appendChild(listItem);
    });
    
  }

  populateDropdown();

  // Search functionality
  var searchInput = document.querySelector('.search-input');
  searchInput.addEventListener('input', function() {
    var searchTerm = this.value.toLowerCase();
    var dropdownItems = document.querySelectorAll('.dropdown-content .dropdown-item');

    dropdownItems.forEach(function(item) {
      var text = item.textContent.toLowerCase();
      if (text.includes(searchTerm)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  
    
  });

function scrollToSection() {
  var section = document.getElementById('find-path');
  section.scrollIntoView({ behavior: 'smooth' });
}


//copy popup
$(document).ready(function(){
  $('#Share').click(function(){
    
    $('#popupShareModal').modal('show');
    
    
    setTimeout(function(){
      $('#popupShareModal').modal('hide');
    }, 3000); 
  });
});

//for copying url 
document.getElementById('Share').addEventListener('click', function() {
 
  var url = window.location.href;

  
  navigator.clipboard.writeText(url).then(function() {
    console.log('URL copied to clipboard: ' + url);
    
  }, function(err) {
    console.error('Failed to copy URL: ', err);
    alert('Failed to copy URL.');
  });
})


