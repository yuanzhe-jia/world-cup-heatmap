function initApp() {
  initMap();
  initSearch();
}

function initSearch() {
  const searchInput = document.getElementById('search-input');
  
  searchInput.addEventListener('input', function(event) {
    const query = event.target.value.trim().toLowerCase();
    
    if (query.length === 0) {
      resetHighlight();
      return;
    }
    
    const matchedCountry = findCountry(query);
    
    if (matchedCountry) {
      highlightCountry(matchedCountry);
    } else {
      resetHighlight();
    }
  });
  
  searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      const query = event.target.value.trim().toLowerCase();
      const matchedCountry = findCountry(query);
      
      if (matchedCountry) {
        openDrawer(matchedCountry);
        searchInput.value = '';
        resetHighlight();
      }
    }
  });
}

function findCountry(query) {
  const countryNames = Object.keys(worldCupData.countries);
  
  const exactMatch = countryNames.find(name => 
    name.toLowerCase() === query
  );
  
  if (exactMatch) {
    return exactMatch;
  }
  
  const partialMatch = countryNames.find(name => 
    name.toLowerCase().includes(query)
  );
  
  return partialMatch || null;
}

document.addEventListener('DOMContentLoaded', function() {
  initApp();
});