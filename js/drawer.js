const countryFlagMap = {
  'Brazil': '🇧🇷',
  'Germany': '🇩🇪',
  'Argentina': '🇦🇷',
  'Italy': '🇮🇹',
  'Mexico': '🇲🇽',
  'France': '🇫🇷',
  'United Kingdom': '🇬🇧',
  'Spain': '🇪🇸',
  'Belgium': '🇧🇪',
  'Uruguay': '🇺🇾',
  'Serbia': '🇷🇸',
  'Switzerland': '🇨🇭',
  'Sweden': '🇸🇪',
  'United States': '🇺🇸',
  'South Korea': '🇰🇷',
  'Netherlands': '🇳🇱',
  'Russia': '🇷🇺',
  'Poland': '🇵🇱',
  'Hungary': '🇭🇺',
  'Czech Republic': '🇨🇿',
  'Chile': '🇨🇱',
  'Portugal': '🇵🇹',
  'Paraguay': '🇵🇾',
  'Cameroon': '🇨🇲',
  'Japan': '🇯🇵',
  'Australia': '🇦🇺',
  'Iran': '🇮🇷',
  'Bulgaria': '🇧🇬',
  'Romania': '🇷🇴',
  'Austria': '🇦🇹',
  'Croatia': '🇭🇷',
  'Costa Rica': '🇨🇷',
  'Saudi Arabia': '🇸🇦',
  'Tunisia': '🇹🇳',
  'Morocco': '🇲🇦',
  'Denmark': '🇩🇰',
  'Colombia': '🇨🇴',
  'Nigeria': '🇳🇬',
  'Peru': '🇵🇪',
  'Algeria': '🇩🇿',
  'Ghana': '🇬🇭',
  'Ecuador': '🇪🇨',
  'Norway': '🇳🇴',
  'Slovenia': '🇸🇮',
  'Republic of Ireland': '🇮🇪',
  'Egypt': '🇪🇬',
  'Slovakia': '🇸🇰',
  'Ukraine': '🇺🇦',
  'United Arab Emirates': '🇦🇪',
  'Trinidad and Tobago': '🇹🇹',
  'Ivory Coast': '🇨🇮',
  'Bosnia and Herzegovina': '🇧🇦',
  'Jamaica': '🇯🇲',
  'Honduras': '🇭🇳',
  'Greece': '🇬🇷',
  'Iceland': '🇮🇸',
  'Panama': '🇵🇦',
  'Senegal': '🇸🇳',
  'Korea DPR': '🇰🇵',
  'Angola': '🇦🇴',
  'Zambia': '🇿🇲',
  'New Zealand': '🇳🇿',
  'Cuba': '🇨🇺',
  'Indonesia': '🇮🇩',
  'Israel': '🇮🇱',
  'Bolivia': '🇧🇴',
  'Turkey': '🇹🇷',
  'East Germany': '🇩🇪',
  'Dutch East Indies': '🇮🇩',
  'South Africa': '🇿🇦',
  'Canada': '🇨🇦',
  'Jordan': '🇯🇴',
  'Uzbekistan': '🇺🇿',
  'Cape Verde': '🇨🇻',
  'Curaçao': '🇨🇼',
  'Oman': '🇴🇲',
  'Guatemala': '🇬🇹',
  'Guyana': '🇬🇾',
  'Suriname': '🇸🇷',
  'China': '🇨🇳',
  'Northern Ireland': '🏴󠁧󠁢󠁮󠁩󠁲󠁿',
  'Qatar': '🇶🇦',
  'Zaire': '🇨🇩',
  'Haiti': '🇭🇹',
  'El Salvador': '🇸🇻',
  'Kuwait': '🇰🇼',
  'Iraq': '🇮🇶',
  'Togo': '🇹🇬'
};

function getFlagEmoji(countryName) {
  return countryFlagMap[countryName] || '🌍';
}

function getFinishClass(finish) {
  if (finish === 'Champions') return 'champion';
  if (finish === 'Runners-up') return 'runners-up';
  return '';
}

function getTitleYears(country) {
  if (!country || country.titles === 0) return null;
  
  const championYears = country.history
    .filter(item => item.finish === 'Champions')
    .map(item => item.year);
  
  return championYears;
}

function renderDrawerContent(countryName) {
  const country = worldCupData.countries[countryName];
  const contentElement = document.getElementById('drawer-content');
  
  if (!country) {
    contentElement.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🏆</div>
        <div class="empty-state-text">No data available for ${countryName}</div>
      </div>
    `;
    return;
  }

  const flagEmoji = getFlagEmoji(countryName);
  const titleYears = getTitleYears(country);
  
  let titlesHtml = '';
  if (titleYears && titleYears.length > 0) {
    titlesHtml = `
      <div class="titles-info">
        <div class="titles-label">Championship Years</div>
        <div class="titles-years">${titleYears.join(', ')}</div>
      </div>
    `;
  }

  const historyHtml = country.history.map(item => `
    <div class="history-item">
      <div class="history-year">${item.year}</div>
      <div class="history-host">${item.host}</div>
      <div class="history-finish ${getFinishClass(item.finish)}">${item.finish}</div>
    </div>
  `).join('');

  contentElement.innerHTML = `
    <div class="drawer-header">
      <span class="flag-emoji">${flagEmoji}</span>
      <h2 class="country-name">${countryName}</h2>
    </div>
    
    <div class="country-stats">
      <div class="stat-row">
        <span class="stat-label">Appearances</span>
        <span class="stat-value gold">${country.appearances}</span>
      </div>
      <div class="stat-row">
        <span class="stat-label">First Appearance</span>
        <span class="stat-value">${country.firstAppearance}</span>
      </div>
      <div class="stat-row">
        <span class="stat-label">Last Appearance</span>
        <span class="stat-value">${country.lastAppearance}</span>
      </div>
      <div class="stat-row">
        <span class="stat-label">Confederation</span>
        <span class="stat-value">${country.confederation}</span>
      </div>
      <div class="stat-row">
        <span class="stat-label">Titles</span>
        <span class="stat-value gold">${country.titles}</span>
      </div>
      ${titlesHtml}
    </div>
    
    <div class="history-section">
      <h3 class="history-title">History</h3>
      <div class="history-list">
        ${historyHtml}
      </div>
    </div>
  `;
}

function openDrawer(countryName) {
  const overlay = document.getElementById('drawer-overlay');
  const drawer = document.getElementById('drawer');
  
  renderDrawerContent(countryName);
  
  overlay.classList.add('open');
  drawer.classList.add('open');
  
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  const overlay = document.getElementById('drawer-overlay');
  const drawer = document.getElementById('drawer');
  
  overlay.classList.remove('open');
  drawer.classList.remove('open');
  
  document.body.style.overflow = '';
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeDrawer();
  }
});
