let chart = null;

const countryNameMapping = {
  'United States of America': 'United States',
  'South Korea': 'South Korea',
  'North Korea': 'Korea DPR',
  'Democratic Republic of the Congo': 'DR Congo',
  'Republic of the Congo': 'Congo',
  'Ivory Coast': 'Cote d Ivoire',
  'Bosnia and Herzegovina': 'Bosnia and Herz.',
  'United Kingdom': 'United Kingdom',
  'Great Britain': 'United Kingdom',
  'UK': 'United Kingdom',
  'Czech Republic': 'Czechia',
  'Slovak Republic': 'Slovakia',
  'Russian Federation': 'Russia',
  'Iran, Islamic Republic of': 'Iran',
  'Syrian Arab Republic': 'Syria',
  'Vietnam': 'Viet Nam',
  'China': 'China',
  'Taiwan': 'China',
  'Moldova': 'Moldova',
  'North Macedonia': 'Macedonia',
  'Serbia and Montenegro': 'Serbia',
  'Yugoslavia': 'Serbia',
  'Zaire': 'DR Congo',
  'West Germany': 'Germany',
  'East Germany': 'Germany'
};

function initMap() {
  chart = echarts.init(document.getElementById('map'));

  const loadMapData = () => {
    try {
      let geoJson = null;
      
      if (typeof WorldMapGeoJson !== 'undefined') {
        geoJson = WorldMapGeoJson;
      } else if (typeof worldMapGeoJson !== 'undefined') {
        geoJson = worldMapGeoJson;
      } else if (typeof window.worldMapGeoJson !== 'undefined') {
        geoJson = window.worldMapGeoJson;
      }

      if (geoJson) {
        echarts.registerMap('world', geoJson);
        renderMap();
        return;
      }
    } catch (e) {
      console.error('Error accessing map data from script:', e);
    }

    fetch('https://unpkg.com/world-map-geojson@1.0.2/lib/index.min.js')
      .then(response => response.text())
      .then(text => {
        const match = text.match(/JSON\.parse\(["']([\s\S]*?)["']\)/);
        if (match) {
          const geoJson = JSON.parse(match[1]);
          echarts.registerMap('world', geoJson);
          renderMap();
        } else {
          fetchMapFromAlternativeSource();
        }
      })
      .catch(() => {
        fetchMapFromAlternativeSource();
      });
  };

  const fetchMapFromAlternativeSource = () => {
    fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json')
      .then(response => response.json())
      .then(geoJson => {
        echarts.registerMap('world', geoJson);
        renderMap();
      })
      .catch(error => {
        console.error('Failed to load map data:', error);
      });
  };

  loadMapData();

  window.addEventListener('resize', () => {
    if (chart) {
      chart.resize();
    }
  });
}

function renderMap() {
  const heatmapData = Object.keys(worldCupData.countries).map(countryName => ({
    name: countryName,
    value: worldCupData.countries[countryName].appearances
  }));

  const option = {
    backgroundColor: '#1A1A2E',
    visualMap: {
      min: 1,
      max: 23,
      inRange: {
        color: ['#F5E6CA', '#D4A574', '#A8624A', '#6B1D2B']
      },
      text: ['Most Appearances', 'Fewest'],
      textStyle: {
        color: '#A0A0B0',
        fontSize: 12
      },
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: '30px'
    },
    series: [{
      type: 'map',
      map: 'world',
      roam: true,
      zoom: 1.2,
      center: [0, 20],
      data: heatmapData,
      nameMap: countryNameMapping,
      itemStyle: {
        areaColor: '#1A1A2E',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 0.5
      },
      emphasis: {
        itemStyle: {
          areaColor: '#C9A84C',
          borderColor: '#C9A84C',
          borderWidth: 1
        },
        label: {
          show: true,
          color: '#FFFFFF',
          fontSize: 10,
          fontWeight: 500
        }
      },
      label: {
        show: false
      },
      tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(20, 20, 31, 0.95)',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        padding: [12, 16],
        textStyle: {
          color: '#FFFFFF',
          fontSize: 13,
          fontFamily: 'Inter, sans-serif'
        },
        formatter: function(params) {
          let displayName = params.name;
          let country = worldCupData.countries[params.name];
          
          if (!country && (params.name === 'United Kingdom' || params.name === 'Great Britain' || params.name === 'UK')) {
            displayName = 'United Kingdom';
            country = worldCupData.countries['United Kingdom'];
          }
          
          if (country) {
            return `<strong style="font-size: 14px; font-weight: 600;">${displayName}</strong><br/>
                    <span style="color: #A0A0B0;">Appearances:</span> <span style="color: #C9A84C; font-weight: 500;">${country.appearances}</span><br/>
                    <span style="color: #A0A0B0;">Titles:</span> <span style="color: #C9A84C; font-weight: 500;">${country.titles}</span>`;
          }
          return `<strong>${params.name}</strong><br/><span style="color: #A0A0B0;">No World Cup appearances</span>`;
        }
      }
    }]
  };

  chart.setOption(option);

  chart.on('click', function(params) {
    let countryName = params.name;
    
    if (!worldCupData.countries[countryName] && (params.name === 'United Kingdom' || params.name === 'Great Britain' || params.name === 'UK')) {
      countryName = 'United Kingdom';
    }
    
    if (worldCupData.countries[countryName]) {
      openDrawer(countryName);
    }
  });
}

function highlightCountry(countryName) {
  if (!chart) return;

  chart.dispatchAction({
    type: 'highlight',
    name: countryName
  });

  chart.dispatchAction({
    type: 'showTip',
    name: countryName
  });
}

function resetHighlight() {
  if (!chart) return;

  chart.dispatchAction({
    type: 'downplay'
  });
}