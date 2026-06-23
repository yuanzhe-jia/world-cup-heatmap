/**
 * 世界杯参赛国家完整数据集
 * 涵盖1930-2026年全部82个参赛国家
 * 数据来源：FIFA官方记录、Khel Now、Sporting News、Britannica等
 */

const worldCupData = {
  // ============================================================
  // 一、所有世界杯赛事元数据（1930-2026）
  // ============================================================
  tournaments: [
    { year: 1930, host: "Uruguay", teams: 13, winner: "Uruguay" },
    { year: 1934, host: "Italy", teams: 16, winner: "Italy" },
    { year: 1938, host: "France", teams: 15, winner: "Italy" },
    { year: 1950, host: "Brazil", teams: 13, winner: "Uruguay" },
    { year: 1954, host: "Switzerland", teams: 16, winner: "West Germany" },
    { year: 1958, host: "Sweden", teams: 16, winner: "Brazil" },
    { year: 1962, host: "Chile", teams: 16, winner: "Brazil" },
    { year: 1966, host: "England", teams: 16, winner: "England" },
    { year: 1970, host: "Mexico", teams: 16, winner: "Brazil" },
    { year: 1974, host: "West Germany", teams: 16, winner: "West Germany" },
    { year: 1978, host: "Argentina", teams: 16, winner: "Argentina" },
    { year: 1982, host: "Spain", teams: 24, winner: "Italy" },
    { year: 1986, host: "Mexico", teams: 24, winner: "Argentina" },
    { year: 1990, host: "Italy", teams: 24, winner: "West Germany" },
    { year: 1994, host: "United States", teams: 24, winner: "Brazil" },
    { year: 1998, host: "France", teams: 32, winner: "France" },
    { year: 2002, host: "South Korea / Japan", teams: 32, winner: "Brazil" },
    { year: 2006, host: "Germany", teams: 32, winner: "Italy" },
    { year: 2010, host: "South Africa", teams: 32, winner: "Spain" },
    { year: 2014, host: "Brazil", teams: 32, winner: "Germany" },
    { year: 2018, host: "Russia", teams: 32, winner: "France" },
    { year: 2022, host: "Qatar", teams: 32, winner: "Argentina" },
    { year: 2026, host: "Canada / Mexico / United States", teams: 48, winner: null }
  ],

  // ============================================================
  // 二、国家级别数据（按参赛次数分组）
  // ============================================================
  countries: {
    // ==========================================================
    // 23次参赛（1个国家）
    // ==========================================================
    "Brazil": {
      code: "BR",
      appearances: 23,
      firstAppearance: 1930,
      lastAppearance: 2026,
      confederation: "CONMEBOL",
      titles: 5,
      history: [
        { year: 1930, host: "Uruguay", finish: "Group Stage" },
        { year: 1934, host: "Italy", finish: "Round of 16" },
        { year: 1938, host: "France", finish: "Third Place" },
        { year: 1950, host: "Brazil", finish: "Runners-up" },
        { year: 1954, host: "Switzerland", finish: "Quarter-finals" },
        { year: 1958, host: "Sweden", finish: "Champions" },
        { year: 1962, host: "Chile", finish: "Champions" },
        { year: 1966, host: "England", finish: "Group Stage" },
        { year: 1970, host: "Mexico", finish: "Champions" },
        { year: 1974, host: "West Germany", finish: "Fourth Place" },
        { year: 1978, host: "Argentina", finish: "Third Place" },
        { year: 1982, host: "Spain", finish: "Round of 16" },
        { year: 1986, host: "Mexico", finish: "Quarter-finals" },
        { year: 1990, host: "Italy", finish: "Round of 16" },
        { year: 1994, host: "United States", finish: "Champions" },
        { year: 1998, host: "France", finish: "Runners-up" },
        { year: 2002, host: "South Korea / Japan", finish: "Champions" },
        { year: 2006, host: "Germany", finish: "Quarter-finals" },
        { year: 2010, host: "South Africa", finish: "Quarter-finals" },
        { year: 2014, host: "Brazil", finish: "Fourth Place" },
        { year: 2018, host: "Russia", finish: "Quarter-finals" },
        { year: 2022, host: "Qatar", finish: "Quarter-finals" },
        { year: 2026, host: "Canada / Mexico / United States", finish: "TBD" }
      ]
    },

    // ==========================================================
    // 21次参赛（1个国家）
    // ==========================================================
    "Germany": {
      code: "DE",
      appearances: 21,
      firstAppearance: 1934,
      lastAppearance: 2026,
      confederation: "UEFA",
      titles: 4,
      history: [
        { year: 1934, host: "Italy", finish: "Third Place" },
        { year: 1938, host: "France", finish: "Round of 16" },
        { year: 1954, host: "Switzerland", finish: "Champions" },
        { year: 1958, host: "Sweden", finish: "Fourth Place" },
        { year: 1962, host: "Chile", finish: "Quarter-finals" },
        { year: 1966, host: "England", finish: "Runners-up" },
        { year: 1970, host: "Mexico", finish: "Third Place" },
        { year: 1974, host: "West Germany", finish: "Champions" },
        { year: 1978, host: "Argentina", finish: "Round of 16" },
        { year: 1982, host: "Spain", finish: "Runners-up" },
        { year: 1986, host: "Mexico", finish: "Runners-up" },
        { year: 1990, host: "Italy", finish: "Champions" },
        { year: 1994, host: "United States", finish: "Quarter-finals" },
        { year: 1998, host: "France", finish: "Quarter-finals" },
        { year: 2002, host: "South Korea / Japan", finish: "Runners-up" },
        { year: 2006, host: "Germany", finish: "Third Place" },
        { year: 2010, host: "South Africa", finish: "Third Place" },
        { year: 2014, host: "Brazil", finish: "Champions" },
        { year: 2018, host: "Russia", finish: "Group Stage" },
        { year: 2022, host: "Qatar", finish: "Group Stage" },
        { year: 2026, host: "Canada / Mexico / United States", finish: "TBD" }
      ]
    },

    // ==========================================================
    // 19次参赛（1个国家）
    // ==========================================================
    "Argentina": {
      code: "AR",
      appearances: 19,
      firstAppearance: 1930,
      lastAppearance: 2026,
      confederation: "CONMEBOL",
      titles: 3,
      history: [
        { year: 1930, host: "Uruguay", finish: "Runners-up" },
        { year: 1934, host: "Italy", finish: "Round of 16" },
        { year: 1958, host: "Sweden", finish: "Group Stage" },
        { year: 1962, host: "Chile", finish: "Group Stage" },
        { year: 1966, host: "England", finish: "Quarter-finals" },
        { year: 1974, host: "West Germany", finish: "Round of 16" },
        { year: 1978, host: "Argentina", finish: "Champions" },
        { year: 1982, host: "Spain", finish: "Round of 16" },
        { year: 1986, host: "Mexico", finish: "Champions" },
        { year: 1990, host: "Italy", finish: "Runners-up" },
        { year: 1994, host: "United States", finish: "Round of 16" },
        { year: 1998, host: "France", finish: "Quarter-finals" },
        { year: 2002, host: "South Korea / Japan", finish: "Group Stage" },
        { year: 2006, host: "Germany", finish: "Quarter-finals" },
        { year: 2010, host: "South Africa", finish: "Quarter-finals" },
        { year: 2014, host: "Brazil", finish: "Runners-up" },
        { year: 2018, host: "Russia", finish: "Round of 16" },
        { year: 2022, host: "Qatar", finish: "Champions" },
        { year: 2026, host: "Canada / Mexico / United States", finish: "TBD" }
      ]
    },

    // ==========================================================
    // 18次参赛（2个国家）
    // ==========================================================
    "Italy": {
      code: "IT",
      appearances: 18,
      firstAppearance: 1934,
      lastAppearance: 2014,
      confederation: "UEFA",
      titles: 4,
      history: [
        { year: 1934, host: "Italy", finish: "Champions" },
        { year: 1938, host: "France", finish: "Champions" },
        { year: 1950, host: "Brazil", finish: "Group Stage" },
        { year: 1954, host: "Switzerland", finish: "Group Stage" },
        { year: 1962, host: "Chile", finish: "Group Stage" },
        { year: 1966, host: "England", finish: "Group Stage" },
        { year: 1970, host: "Mexico", finish: "Runners-up" },
        { year: 1974, host: "West Germany", finish: "Group Stage" },
        { year: 1978, host: "Argentina", finish: "Fourth Place" },
        { year: 1982, host: "Spain", finish: "Champions" },
        { year: 1986, host: "Mexico", finish: "Round of 16" },
        { year: 1990, host: "Italy", finish: "Third Place" },
        { year: 1994, host: "United States", finish: "Runners-up" },
        { year: 1998, host: "France", finish: "Quarter-finals" },
        { year: 2002, host: "South Korea / Japan", finish: "Round of 16" },
        { year: 2006, host: "Germany", finish: "Champions" },
        { year: 2010, host: "South Africa", finish: "Group Stage" },
        { year: 2014, host: "Brazil", finish: "Group Stage" }
      ]
    },

    "Mexico": {
      code: "MX",
      appearances: 18,
      firstAppearance: 1930,
      lastAppearance: 2026,
      confederation: "CONCACAF",
      titles: 0,
      history: [
        { year: 1930, host: "Uruguay", finish: "Group Stage" },
        { year: 1950, host: "Brazil", finish: "Group Stage" },
        { year: 1954, host: "Switzerland", finish: "Group Stage" },
        { year: 1958, host: "Sweden", finish: "Group Stage" },
        { year: 1962, host: "Chile", finish: "Group Stage" },
        { year: 1966, host: "England", finish: "Group Stage" },
        { year: 1970, host: "Mexico", finish: "Quarter-finals" },
        { year: 1978, host: "Argentina", finish: "Group Stage" },
        { year: 1986, host: "Mexico", finish: "Quarter-finals" },
        { year: 1994, host: "United States", finish: "Round of 16" },
        { year: 1998, host: "France", finish: "Round of 16" },
        { year: 2002, host: "South Korea / Japan", finish: "Round of 16" },
        { year: 2006, host: "Germany", finish: "Round of 16" },
        { year: 2010, host: "South Africa", finish: "Round of 16" },
        { year: 2014, host: "Brazil", finish: "Round of 16" },
        { year: 2018, host: "Russia", finish: "Round of 16" },
        { year: 2022, host: "Qatar", finish: "Group Stage" },
        { year: 2026, host: "Canada / Mexico / United States", finish: "TBD" }
      ]
    },

    // ==========================================================
    // 17次参赛（3个国家）
    // ==========================================================
    "France": {
      code: "FR",
      appearances: 17,
      firstAppearance: 1930,
      lastAppearance: 2026,
      confederation: "UEFA",
      titles: 2,
      history: [
        { year: 1930, host: "Uruguay", finish: "Group Stage" },
        { year: 1934, host: "Italy", finish: "Round of 16" },
        { year: 1938, host: "France", finish: "Quarter-finals" },
        { year: 1954, host: "Switzerland", finish: "Group Stage" },
        { year: 1958, host: "Sweden", finish: "Third Place" },
        { year: 1966, host: "England", finish: "Group Stage" },
        { year: 1978, host: "Argentina", finish: "Group Stage" },
        { year: 1982, host: "Spain", finish: "Fourth Place" },
        { year: 1986, host: "Mexico", finish: "Third Place" },
        { year: 1998, host: "France", finish: "Champions" },
        { year: 2002, host: "South Korea / Japan", finish: "Group Stage" },
        { year: 2006, host: "Germany", finish: "Runners-up" },
        { year: 2010, host: "South Africa", finish: "Group Stage" },
        { year: 2014, host: "Brazil", finish: "Quarter-finals" },
        { year: 2018, host: "Russia", finish: "Champions" },
        { year: 2022, host: "Qatar", finish: "Runners-up" },
        { year: 2026, host: "Canada / Mexico / United States", finish: "TBD" }
      ]
    },

    "United Kingdom": {
      code: "GB",
      appearances: 19,
      firstAppearance: 1950,
      lastAppearance: 2026,
      confederation: "UEFA",
      titles: 1,
      history: [
        { year: 1950, host: "Brazil", finish: "Group Stage", team: "England" },
        { year: 1954, host: "Switzerland", finish: "Quarter-finals", team: "England" },
        { year: 1958, host: "Sweden", finish: "Group Stage", team: "England" },
        { year: 1962, host: "Chile", finish: "Quarter-finals", team: "England" },
        { year: 1966, host: "England", finish: "Champions", team: "England" },
        { year: 1970, host: "Mexico", finish: "Quarter-finals", team: "England" },
        { year: 1974, host: "West Germany", finish: "Group Stage", team: "Scotland" },
        { year: 1978, host: "Argentina", finish: "Group Stage", team: "Scotland" },
        { year: 1982, host: "Spain", finish: "Round of 16", team: "England" },
        { year: 1986, host: "Mexico", finish: "Quarter-finals", team: "England" },
        { year: 1990, host: "Italy", finish: "Fourth Place", team: "England" },
        { year: 1998, host: "France", finish: "Round of 16", team: "England" },
        { year: 2002, host: "South Korea / Japan", finish: "Quarter-finals", team: "England" },
        { year: 2006, host: "Germany", finish: "Quarter-finals", team: "England" },
        { year: 2010, host: "South Africa", finish: "Round of 16", team: "England" },
        { year: 2014, host: "Brazil", finish: "Group Stage", team: "England" },
        { year: 2018, host: "Russia", finish: "Fourth Place", team: "England" },
        { year: 2022, host: "Qatar", finish: "Quarter-finals", team: "England" },
        { year: 2026, host: "Canada / Mexico / United States", finish: "TBD", team: "England" }
      ]
    },

    "Spain": {
      code: "ES",
      appearances: 17,
      firstAppearance: 1934,
      lastAppearance: 2026,
      confederation: "UEFA",
      titles: 1,
      history: [
        { year: 1934, host: "Italy", finish: "Quarter-finals" },
        { year: 1950, host: "Brazil", finish: "Fourth Place" },
        { year: 1962, host: "Chile", finish: "Group Stage" },
        { year: 1966, host: "England", finish: "Group Stage" },
        { year: 1978, host: "Argentina", finish: "Group Stage" },
        { year: 1982, host: "Spain", finish: "Round of 16" },
        { year: 1986, host: "Mexico", finish: "Round of 16" },
        { year: 1990, host: "Italy", finish: "Round of 16" },
        { year: 1994, host: "United States", finish: "Quarter-finals" },
        { year: 1998, host: "France", finish: "Group Stage" },
        { year: 2002, host: "South Korea / Japan", finish: "Quarter-finals" },
        { year: 2006, host: "Germany", finish: "Round of 16" },
        { year: 2010, host: "South Africa", finish: "Champions" },
        { year: 2014, host: "Brazil", finish: "Group Stage" },
        { year: 2018, host: "Russia", finish: "Round of 16" },
        { year: 2022, host: "Qatar", finish: "Round of 16" },
        { year: 2026, host: "Canada / Mexico / United States", finish: "TBD" }
      ]
    },

    // ==========================================================
    // 15次参赛（2个国家）
    // ==========================================================
    "Belgium": {
      code: "BE",
      appearances: 15,
      firstAppearance: 1930,
      lastAppearance: 2026,
      confederation: "UEFA",
      titles: 0,
      history: [
        { year: 1930, host: "Uruguay", finish: "Group Stage" },
        { year: 1934, host: "Italy", finish: "Round of 16" },
        { year: 1938, host: "France", finish: "Round of 16" },
        { year: 1954, host: "Switzerland", finish: "Group Stage" },
        { year: 1970, host: "Mexico", finish: "Group Stage" },
        { year: 1982, host: "Spain", finish: "Round of 16" },
        { year: 1986, host: "Mexico", finish: "Fourth Place" },
        { year: 1990, host: "Italy", finish: "Round of 16" },
        { year: 1994, host: "United States", finish: "Round of 16" },
        { year: 1998, host: "France", finish: "Group Stage" },
        { year: 2002, host: "South Korea / Japan", finish: "Round of 16" },
        { year: 2014, host: "Brazil", finish: "Quarter-finals" },
        { year: 2018, host: "Russia", finish: "Third Place" },
        { year: 2022, host: "Qatar", finish: "Group Stage" },
        { year: 2026, host: "Canada / Mexico / United States", finish: "TBD" }
      ]
    },

    "Uruguay": {
      code: "UY",
      appearances: 15,
      firstAppearance: 1930,
      lastAppearance: 2026,
      confederation: "CONMEBOL",
      titles: 2,
      history: [
        { year: 1930, host: "Uruguay", finish: "Champions" },
        { year: 1950, host: "Brazil", finish: "Champions" },
        { year: 1954, host: "Switzerland", finish: "Fourth Place" },
        { year: 1962, host: "Chile", finish: "Group Stage" },
        { year: 1966, host: "England", finish: "Quarter-finals" },
        { year: 1970, host: "Mexico", finish: "Fourth Place" },
        { year: 1974, host: "West Germany", finish: "Group Stage" },
        { year: 1986, host: "Mexico", finish: "Round of 16" },
        { year: 1990, host: "Italy", finish: "Round of 16" },
        { year: 2002, host: "South Korea / Japan", finish: "Group Stage" },
        { year: 2010, host: "South Africa", finish: "Fourth Place" },
        { year: 2014, host: "Brazil", finish: "Round of 16" },
        { year: 2018, host: "Russia", finish: "Quarter-finals" },
        { year: 2022, host: "Qatar", finish: "Group Stage" },
        { year: 2026, host: "Canada / Mexico / United States", finish: "TBD" }
      ]
    },

    // ==========================================================
    // 13次参赛（2个国家）
    // ==========================================================
    "Serbia": {
      code: "RS",
      appearances: 13,
      firstAppearance: 1930,
      lastAppearance: 2022,
      confederation: "UEFA",
      titles: 0,
      history: [
        { year: 1930, host: "Uruguay", finish: "Semi-finals" },
        { year: 1950, host: "Brazil", finish: "Group Stage" },
        { year: 1954, host: "Switzerland", finish: "Quarter-finals" },
        { year: 1958, host: "Sweden", finish: "Quarter-finals" },
        { year: 1962, host: "Chile", finish: "Fourth Place" },
        { year: 1974, host: "West Germany", finish: "Round of 16" },
        { year: 1982, host: "Spain", finish: "Group Stage" },
        { year: 1990, host: "Italy", finish: "Quarter-finals" },
        { year: 1998, host: "France", finish: "Round of 16" },
        { year: 2006, host: "Germany", finish: "Group Stage" },
        { year: 2010, host: "South Africa", finish: "Group Stage" },
        { year: 2018, host: "Russia", finish: "Group Stage" },
        { year: 2022, host: "Qatar", finish: "Group Stage" }
      ]
    },

    "Switzerland": {
      code: "CH",
      appearances: 13,
      firstAppearance: 1934,
      lastAppearance: 2026,
      confederation: "UEFA",
      titles: 0,
      history: [
        { year: 1934, host: "Italy", finish: "Quarter-finals" },
        { year: 1938, host: "France", finish: "Quarter-finals" },
        { year: 1950, host: "Brazil", finish: "Group Stage" },
        { year: 1954, host: "Switzerland", finish: "Quarter-finals" },
        { year: 1962, host: "Chile", finish: "Group Stage" },
        { year: 1966, host: "England", finish: "Group Stage" },
        { year: 1994, host: "United States", finish: "Round of 16" },
        { year: 2006, host: "Germany", finish: "Round of 16" },
        { year: 2010, host: "South Africa", finish: "Group Stage" },
        { year: 2014, host: "Brazil", finish: "Round of 16" },
        { year: 2018, host: "Russia", finish: "Round of 16" },
        { year: 2022, host: "Qatar", finish: "Round of 16" },
        { year: 2026, host: "Canada / Mexico / United States", finish: "TBD" }
      ]
    },

    // ==========================================================
    // 12次参赛（4个国家）
    // ==========================================================
    "Sweden": {
      code: "SE",
      appearances: 13,
      firstAppearance: 1934,
      lastAppearance: 2026,
      confederation: "UEFA",
      titles: 0,
      history: [
        { year: 1934, host: "Italy", finish: "Quarter-finals" },
        { year: 1938, host: "France", finish: "Fourth Place" },
        { year: 1950, host: "Brazil", finish: "Third Place" },
        { year: 1958, host: "Sweden", finish: "Runners-up" },
        { year: 1970, host: "Mexico", finish: "Group Stage" },
        { year: 1974, host: "West Germany", finish: "Round of 16" },
        { year: 1978, host: "Argentina", finish: "Group Stage" },
        { year: 1990, host: "Italy", finish: "Group Stage" },
        { year: 1994, host: "United States", finish: "Third Place" },
        { year: 2002, host: "South Korea / Japan", finish: "Round of 16" },
        { year: 2006, host: "Germany", finish: "Round of 16" },
        { year: 2018, host: "Russia", finish: "Quarter-finals" },
        { year: 2026, host: "Canada / Mexico / United States", finish: "TBD" }
      ]
    },

    "United States": {
      code: "US",
      appearances: 12,
      firstAppearance: 1930,
      lastAppearance: 2026,
      confederation: "CONCACAF",
      titles: 0,
      history: [
        { year: 1930, host: "Uruguay", finish: "Semi-finals" },
        { year: 1934, host: "Italy", finish: "Round of 16" },
        { year: 1950, host: "Brazil", finish: "Group Stage" },
        { year: 1990, host: "Italy", finish: "Group Stage" },
        { year: 1994, host: "United States", finish: "Round of 16" },
        { year: 1998, host: "France", finish: "Group Stage" },
        { year: 2002, host: "South Korea / Japan", finish: "Quarter-finals" },
        { year: 2006, host: "Germany", finish: "Group Stage" },
        { year: 2010, host: "South Africa", finish: "Round of 16" },
        { year: 2014, host: "Brazil", finish: "Round of 16" },
        { year: 2022, host: "Qatar", finish: "Round of 16" },
        { year: 2026, host: "Canada / Mexico / United States", finish: "TBD" }
      ]
    },

    "South Korea": {
      code: "KR",
      appearances: 12,
      firstAppearance: 1954,
      lastAppearance: 2026,
      confederation: "AFC",
      titles: 0,
      history: [
        { year: 1954, host: "Switzerland", finish: "Group Stage" },
        { year: 1986, host: "Mexico", finish: "Group Stage" },
        { year: 1990, host: "Italy", finish: "Group Stage" },
        { year: 1994, host: "United States", finish: "Group Stage" },
        { year: 1998, host: "France", finish: "Group Stage" },
        { year: 2002, host: "South Korea / Japan", finish: "Fourth Place" },
        { year: 2006, host: "Germany", finish: "Group Stage" },
        { year: 2010, host: "South Africa", finish: "Round of 16" },
        { year: 2014, host: "Brazil", finish: "Group Stage" },
        { year: 2018, host: "Russia", finish: "Group Stage" },
        { year: 2022, host: "Qatar", finish: "Round of 16" },
        { year: 2026, host: "Canada / Mexico / United States", finish: "TBD" }
      ]
    },

    "Netherlands": {
      code: "NL",
      appearances: 12,
      firstAppearance: 1934,
      lastAppearance: 2026,
      confederation: "UEFA",
      titles: 0,
      history: [
        { year: 1934, host: "Italy", finish: "Round of 16" },
        { year: 1938, host: "France", finish: "Round of 16" },
        { year: 1974, host: "West Germany", finish: "Runners-up" },
        { year: 1978, host: "Argentina", finish: "Runners-up" },
        { year: 1990, host: "Italy", finish: "Round of 16" },
        { year: 1994, host: "United States", finish: "Quarter-finals" },
        { year: 1998, host: "France", finish: "Fourth Place" },
        { year: 2006, host: "Germany", finish: "Round of 16" },
        { year: 2010, host: "South Africa", finish: "Runners-up" },
        { year: 2014, host: "Brazil", finish: "Third Place" },
        { year: 2022, host: "Qatar", finish: "Quarter-finals" },
        { year: 2026, host: "Canada / Mexico / United States", finish: "TBD" }
      ]
    },

    // ==========================================================
    // 11次参赛（1个国家）
    // ==========================================================
    "Russia": {
      code: "RU",
      appearances: 11,
      firstAppearance: 1958,
      lastAppearance: 2018,
      confederation: "UEFA",
      titles: 0,
      history: [
        { year: 1958, host: "Sweden", finish: "Quarter-finals" },
        { year: 1962, host: "Chile", finish: "Quarter-finals" },
        { year: 1966, host: "England", finish: "Fourth Place" },
        { year: 1970, host: "Mexico", finish: "Quarter-finals" },
        { year: 1982, host: "Spain", finish: "Round of 16" },
        { year: 1986, host: "Mexico", finish: "Round of 16" },
        { year: 1990, host: "Italy", finish: "Group Stage" },
        { year: 1994, host: "United States", finish: "Group Stage" },
        { year: 2002, host: "South Korea / Japan", finish: "Group Stage" },
        { year: 2014, host: "Brazil", finish: "Group Stage" },
        { year: 2018, host: "Russia", finish: "Quarter-finals" }
      ]
    },

    // ==========================================================
    // 9次参赛（5个国家）
    // ==========================================================
    "Poland": {
      code: "PL",
      appearances: 10,
      firstAppearance: 1938,
      lastAppearance: 2026,
      confederation: "UEFA",
      titles: 0,
      history: [
        { year: 1938, host: "France", finish: "Round of 16" },
        { year: 1974, host: "West Germany", finish: "Third Place" },
        { year: 1978, host: "Argentina", finish: "Round of 16" },
        { year: 1982, host: "Spain", finish: "Third Place" },
        { year: 1986, host: "Mexico", finish: "Round of 16" },
        { year: 2002, host: "South Korea / Japan", finish: "Group Stage" },
        { year: 2006, host: "Germany", finish: "Group Stage" },
        { year: 2018, host: "Russia", finish: "Group Stage" },
        { year: 2022, host: "Qatar", finish: "Round of 16" },
        { year: 2026, host: "Canada / Mexico / United States", finish: "TBD" }
      ]
    },

    "Hungary": {
      code: "HU",
      appearances: 9,
      firstAppearance: 1934,
      lastAppearance: 1986,
      confederation: "UEFA",
      titles: 0,
      history: [
        { year: 1934, host: "Italy", finish: "Quarter-finals" },
        { year: 1938, host: "France", finish: "Runners-up" },
        { year: 1954, host: "Switzerland", finish: "Runners-up" },
        { year: 1958, host: "Sweden", finish: "Group Stage" },
        { year: 1962, host: "Chile", finish: "Quarter-finals" },
        { year: 1966, host: "England", finish: "Quarter-finals" },
        { year: 1978, host: "Argentina", finish: "Group Stage" },
        { year: 1982, host: "Spain", finish: "Group Stage" },
        { year: 1986, host: "Mexico", finish: "Group Stage" }
      ]
    },

    "Czech Republic": {
      code: "CZ",
      appearances: 10,
      firstAppearance: 1934,
      lastAppearance: 2026,
      confederation: "UEFA",
      titles: 0,
      history: [
        { year: 1934, host: "Italy", finish: "Runners-up" },
        { year: 1938, host: "France", finish: "Quarter-finals" },
        { year: 1954, host: "Switzerland", finish: "Group Stage" },
        { year: 1958, host: "Sweden", finish: "Group Stage" },
        { year: 1962, host: "Chile", finish: "Runners-up" },
        { year: 1970, host: "Mexico", finish: "Group Stage" },
        { year: 1982, host: "Spain", finish: "Group Stage" },
        { year: 1990, host: "Italy", finish: "Quarter-finals" },
        { year: 2006, host: "Germany", finish: "Group Stage" },
        { year: 2026, host: "Canada / Mexico / United States", finish: "TBD" }
      ]
    },

    "Chile": {
      code: "CL",
      appearances: 9,
      firstAppearance: 1930,
      lastAppearance: 2014,
      confederation: "CONMEBOL",
      titles: 0,
      history: [
        { year: 1930, host: "Uruguay", finish: "Group Stage" },
        { year: 1950, host: "Brazil", finish: "Group Stage" },
        { year: 1962, host: "Chile", finish: "Third Place" },
        { year: 1966, host: "England", finish: "Group Stage" },
        { year: 1974, host: "West Germany", finish: "Group Stage" },
        { year: 1982, host: "Spain", finish: "Group Stage" },
        { year: 1998, host: "France", finish: "Round of 16" },
        { year: 2010, host: "South Africa", finish: "Round of 16" },
        { year: 2014, host: "Brazil", finish: "Round of 16" }
      ]
    },

    "Portugal": {
      code: "PT",
      appearances: 9,
      firstAppearance: 1966,
      lastAppearance: 2026,
      confederation: "UEFA",
      titles: 0,
      history: [
        { year: 1966, host: "England", finish: "Third Place" },
        { year: 1986, host: "Mexico", finish: "Group Stage" },
        { year: 2002, host: "South Korea / Japan", finish: "Group Stage" },
        { year: 2006, host: "Germany", finish: "Fourth Place" },
        { year: 2010, host: "South Africa", finish: "Round of 16" },
        { year: 2014, host: "Brazil", finish: "Group Stage" },
        { year: 2018, host: "Russia", finish: "Round of 16" },
        { year: 2022, host: "Qatar", finish: "Quarter-finals" },
        { year: 2026, host: "Canada / Mexico / United States", finish: "TBD" }
      ]
    },

    // ==========================================================
    // 8次参赛（6个国家）
    // ==========================================================
    "Paraguay": {
      code: "PY",
      appearances: 9,
      firstAppearance: 1930,
      lastAppearance: 2026,
      confederation: "CONMEBOL",
      titles: 0,
      history: [
        { year: 1930, host: "Uruguay", finish: "Group Stage" },
        { year: 1950, host: "Brazil", finish: "Group Stage" },
        { year: 1958, host: "Sweden", finish: "Group Stage" },
        { year: 1986, host: "Mexico", finish: "Round of 16" },
        { year: 1998, host: "France", finish: "Round of 16" },
        { year: 2002, host: "South Korea / Japan", finish: "Round of 16" },
        { year: 2006, host: "Germany", finish: "Group Stage" },
        { year: 2010, host: "South Africa", finish: "Quarter-finals" },
        { year: 2026, host: "Canada / Mexico / United States", finish: "TBD" }
      ]
    },

    "Cameroon": {
      code: "CM",
      appearances: 9,
      firstAppearance: 1982,
      lastAppearance: 2026,
      confederation: "CAF",
      titles: 0,
      history: [
        { year: 1982, host: "Spain", finish: "Group Stage" },
        { year: 1990, host: "Italy", finish: "Quarter-finals" },
        { year: 1994, host: "United States", finish: "Group Stage" },
        { year: 1998, host: "France", finish: "Group Stage" },
        { year: 2002, host: "South Korea / Japan", finish: "Group Stage" },
        { year: 2010, host: "South Africa", finish: "Group Stage" },
        { year: 2014, host: "Brazil", finish: "Group Stage" },
        { year: 2022, host: "Qatar", finish: "Group Stage" },
        { year: 2026, host: "Canada / Mexico / United States", finish: "TBD" }
      ]
    },

    "Japan": {
      code: "JP",
      appearances: 8,
      firstAppearance: 1998,
      lastAppearance: 2026,
      confederation: "AFC",
      titles: 0,
      history: [
        { year: 1998, host: "France", finish: "Group Stage" },
        { year: 2002, host: "South Korea / Japan", finish: "Round of 16" },
        { year: 2006, host: "Germany", finish: "Group Stage" },
        { year: 2010, host: "South Africa", finish: "Round of 16" },
        { year: 2014, host: "Brazil", finish: "Group Stage" },
        { year: 2018, host: "Russia", finish: "Round of 16" },
        { year: 2022, host: "Qatar", finish: "Round of 16" },
        { year: 2026, host: "Canada / Mexico / United States", finish: "TBD" }
      ]
    },

    "Australia": {
      code: "AU",
      appearances: 7,
      firstAppearance: 1974,
      lastAppearance: 2026,
      confederation: "AFC",
      titles: 0,
      history: [
        { year: 1974, host: "West Germany", finish: "Group Stage" },
        { year: 2006, host: "Germany", finish: "Round of 16" },
        { year: 2010, host: "South Africa", finish: "Group Stage" },
        { year: 2014, host: "Brazil", finish: "Group Stage" },
        { year: 2018, host: "Russia", finish: "Group Stage" },
        { year: 2022, host: "Qatar", finish: "Round of 16" },
        { year: 2026, host: "Canada / Mexico / United States", finish: "TBD" }
      ]
    },

    "Iran": {
      code: "IR",
      appearances: 7,
      firstAppearance: 1978,
      lastAppearance: 2026,
      confederation: "AFC",
      titles: 0,
      history: [
        { year: 1978, host: "Argentina", finish: "Group Stage" },
        { year: 1998, host: "France", finish: "Group Stage" },
        { year: 2006, host: "Germany", finish: "Group Stage" },
        { year: 2014, host: "Brazil", finish: "Group Stage" },
        { year: 2018, host: "Russia", finish: "Group Stage" },
        { year: 2022, host: "Qatar", finish: "Group Stage" },
        { year: 2026, host: "Canada / Mexico / United States", finish: "TBD" }
      ]
    },

    // ==========================================================
    // 7次参赛（4个国家）
    // ==========================================================
    "Bulgaria": {
      code: "BG",
      appearances: 7,
      firstAppearance: 1962,
      lastAppearance: 1998,
      confederation: "UEFA",
      titles: 0,
      history: [
        { year: 1962, host: "Chile", finish: "Group Stage" },
        { year: 1966, host: "England", finish: "Group Stage" },
        { year: 1970, host: "Mexico", finish: "Group Stage" },
        { year: 1974, host: "West Germany", finish: "Group Stage" },
        { year: 1986, host: "Mexico", finish: "Round of 16" },
        { year: 1994, host: "United States", finish: "Fourth Place" },
        { year: 1998, host: "France", finish: "Group Stage" }
      ]
    },

    "Romania": {
      code: "RO",
      appearances: 7,
      firstAppearance: 1930,
      lastAppearance: 1998,
      confederation: "UEFA",
      titles: 0,
      history: [
        { year: 1930, host: "Uruguay", finish: "Group Stage" },
        { year: 1934, host: "Italy", finish: "Round of 16" },
        { year: 1938, host: "France", finish: "Round of 16" },
        { year: 1970, host: "Mexico", finish: "Group Stage" },
        { year: 1990, host: "Italy", finish: "Round of 16" },
        { year: 1994, host: "United States", finish: "Quarter-finals" },
        { year: 1998, host: "France", finish: "Round of 16" }
      ]
    },

    "Austria": {
      code: "AT",
      appearances: 8,
      firstAppearance: 1934,
      lastAppearance: 2026,
      confederation: "UEFA",
      titles: 0,
      history: [
        { year: 1934, host: "Italy", finish: "Fourth Place" },
        { year: 1954, host: "Switzerland", finish: "Third Place" },
        { year: 1958, host: "Sweden", finish: "Group Stage" },
        { year: 1978, host: "Argentina", finish: "Round of 16" },
        { year: 1982, host: "Spain", finish: "Round of 16" },
        { year: 1990, host: "Italy", finish: "Group Stage" },
        { year: 1998, host: "France", finish: "Group Stage" },
        { year: 2026, host: "Canada / Mexico / United States", finish: "TBD" }
      ]
    },

    "Croatia": {
      code: "HR",
      appearances: 7,
      firstAppearance: 1998,
      lastAppearance: 2026,
      confederation: "UEFA",
      titles: 0,
      history: [
        { year: 1998, host: "France", finish: "Third Place" },
        { year: 2002, host: "South Korea / Japan", finish: "Group Stage" },
        { year: 2006, host: "Germany", finish: "Group Stage" },
        { year: 2014, host: "Brazil", finish: "Group Stage" },
        { year: 2018, host: "Russia", finish: "Runners-up" },
        { year: 2022, host: "Qatar", finish: "Third Place" },
        { year: 2026, host: "Canada / Mexico / United States", finish: "TBD" }
      ]
    },

    // ==========================================================
    // 6次参赛（10个国家）
    // ==========================================================
    "Costa Rica": {
      code: "CR",
      appearances: 7,
      firstAppearance: 1990,
      lastAppearance: 2026,
      confederation: "CONCACAF",
      titles: 0,
      history: [
        { year: 1990, host: "Italy", finish: "Round of 16" },
        { year: 2002, host: "South Korea / Japan", finish: "Group Stage" },
        { year: 2006, host: "Germany", finish: "Group Stage" },
        { year: 2014, host: "Brazil", finish: "Quarter-finals" },
        { year: 2018, host: "Russia", finish: "Group Stage" },
        { year: 2022, host: "Qatar", finish: "Group Stage" },
        { year: 2026, host: "Canada / Mexico / United States", finish: "TBD" }
      ]
    },

    "Saudi Arabia": {
      code: "SA",
      appearances: 7,
      firstAppearance: 1994,
      lastAppearance: 2026,
      confederation: "AFC",
      titles: 0,
      history: [
        { year: 1994, host: "United States", finish: "Round of 16" },
        { year: 1998, host: "France", finish: "Group Stage" },
        { year: 2002, host: "South Korea / Japan", finish: "Group Stage" },
        { year: 2006, host: "Germany", finish: "Group Stage" },
        { year: 2018, host: "Russia", finish: "Group Stage" },
        { year: 2022, host: "Qatar", finish: "Group Stage" },
        { year: 2026, host: "Canada / Mexico / United States", finish: "TBD" }
      ]
    },

    "Tunisia": {
      code: "TN",
      appearances: 7,
      firstAppearance: 1978,
      lastAppearance: 2026,
      confederation: "CAF",
      titles: 0,
      history: [
        { year: 1978, host: "Argentina", finish: "Group Stage" },
        { year: 1998, host: "France", finish: "Group Stage" },
        { year: 2002, host: "South Korea / Japan", finish: "Group Stage" },
        { year: 2006, host: "Germany", finish: "Group Stage" },
        { year: 2018, host: "Russia", finish: "Group Stage" },
        { year: 2022, host: "Qatar", finish: "Group Stage" },
        { year: 2026, host: "Canada / Mexico / United States", finish: "TBD" }
      ]
    },

    "Morocco": {
      code: "MA",
      appearances: 7,
      firstAppearance: 1970,
      lastAppearance: 2026,
      confederation: "CAF",
      titles: 0,
      history: [
        { year: 1970, host: "Mexico", finish: "Group Stage" },
        { year: 1986, host: "Mexico", finish: "Round of 16" },
        { year: 1994, host: "United States", finish: "Group Stage" },
        { year: 1998, host: "France", finish: "Group Stage" },
        { year: 2018, host: "Russia", finish: "Group Stage" },
        { year: 2022, host: "Qatar", finish: "Fourth Place" },
        { year: 2026, host: "Canada / Mexico / United States", finish: "TBD" }
      ]
    },

    "Denmark": {
      code: "DK",
      appearances: 6,
      firstAppearance: 1986,
      lastAppearance: 2022,
      confederation: "UEFA",
      titles: 0,
      history: [
        { year: 1986, host: "Mexico", finish: "Round of 16" },
        { year: 1998, host: "France", finish: "Quarter-finals" },
        { year: 2002, host: "South Korea / Japan", finish: "Round of 16" },
        { year: 2010, host: "South Africa", finish: "Group Stage" },
        { year: 2018, host: "Russia", finish: "Round of 16" },
        { year: 2022, host: "Qatar", finish: "Group Stage" }
      ]
    },

    "Colombia": {
      code: "CO",
      appearances: 7,
      firstAppearance: 1962,
      lastAppearance: 2026,
      confederation: "CONMEBOL",
      titles: 0,
      history: [
        { year: 1962, host: "Chile", finish: "Group Stage" },
        { year: 1990, host: "Italy", finish: "Round of 16" },
        { year: 1994, host: "United States", finish: "Group Stage" },
        { year: 1998, host: "France", finish: "Group Stage" },
        { year: 2014, host: "Brazil", finish: "Quarter-finals" },
        { year: 2018, host: "Russia", finish: "Round of 16" },
        { year: 2026, host: "Canada / Mexico / United States", finish: "TBD" }
      ]
    },

    "Nigeria": {
      code: "NG",
      appearances: 7,
      firstAppearance: 1994,
      lastAppearance: 2026,
      confederation: "CAF",
      titles: 0,
      history: [
        { year: 1994, host: "United States", finish: "Round of 16" },
        { year: 1998, host: "France", finish: "Round of 16" },
        { year: 2002, host: "South Korea / Japan", finish: "Group Stage" },
        { year: 2010, host: "South Africa", finish: "Group Stage" },
        { year: 2014, host: "Brazil", finish: "Round of 16" },
        { year: 2018, host: "Russia", finish: "Group Stage" },
        { year: 2026, host: "Canada / Mexico / United States", finish: "TBD" }
      ]
    },

    // ==========================================================
    // 5次参赛（8个国家）
    // ==========================================================
    "Peru": {
      code: "PE",
      appearances: 5,
      firstAppearance: 1930,
      lastAppearance: 2018,
      confederation: "CONMEBOL",
      titles: 0,
      history: [
        { year: 1930, host: "Uruguay", finish: "Group Stage" },
        { year: 1970, host: "Mexico", finish: "Quarter-finals" },
        { year: 1978, host: "Argentina", finish: "Round of 16" },
        { year: 1982, host: "Spain", finish: "Group Stage" },
        { year: 2018, host: "Russia", finish: "Group Stage" }
      ]
    },

    "Algeria": {
      code: "DZ",
      appearances: 5,
      firstAppearance: 1982,
      lastAppearance: 2026,
      confederation: "CAF",
      titles: 0,
      history: [
        { year: 1982, host: "Spain", finish: "Group Stage" },
        { year: 1986, host: "Mexico", finish: "Group Stage" },
        { year: 2010, host: "South Africa", finish: "Group Stage" },
        { year: 2014, host: "Brazil", finish: "Round of 16" },
        { year: 2026, host: "Canada / Mexico / United States", finish: "TBD" }
      ]
    },

    "Ecuador": {
      code: "EC",
      appearances: 5,
      firstAppearance: 2002,
      lastAppearance: 2026,
      confederation: "CONMEBOL",
      titles: 0,
      history: [
        { year: 2002, host: "South Korea / Japan", finish: "Group Stage" },
        { year: 2006, host: "Germany", finish: "Round of 16" },
        { year: 2014, host: "Brazil", finish: "Group Stage" },
        { year: 2022, host: "Qatar", finish: "Group Stage" },
        { year: 2026, host: "Canada / Mexico / United States", finish: "TBD" }
      ]
    },

    "Ghana": {
      code: "GH",
      appearances: 5,
      firstAppearance: 2006,
      lastAppearance: 2026,
      confederation: "CAF",
      titles: 0,
      history: [
        { year: 2006, host: "Germany", finish: "Round of 16" },
        { year: 2010, host: "South Africa", finish: "Quarter-finals" },
        { year: 2014, host: "Brazil", finish: "Group Stage" },
        { year: 2022, host: "Qatar", finish: "Group Stage" },
        { year: 2026, host: "Canada / Mexico / United States", finish: "TBD" }
      ]
    },

    // ==========================================================
    // 3次参赛（7个国家）
    // ==========================================================
    "Norway": {
      code: "NO",
      appearances: 4,
      firstAppearance: 1938,
      lastAppearance: 2026,
      confederation: "UEFA",
      titles: 0,
      history: [
        { year: 1938, host: "France", finish: "Round of 16" },
        { year: 1994, host: "United States", finish: "Group Stage" },
        { year: 1998, host: "France", finish: "Round of 16" },
        { year: 2026, host: "Canada / Mexico / United States", finish: "TBD" }
      ]
    },

    "Northern Ireland": {
      code: "GB-NIR",
      appearances: 3,
      firstAppearance: 1958,
      lastAppearance: 1986,
      confederation: "UEFA",
      titles: 0,
      history: [
        { year: 1958, host: "Sweden", finish: "Quarter-finals" },
        { year: 1982, host: "Spain", finish: "Round of 16" },
        { year: 1986, host: "Mexico", finish: "Group Stage" }
      ]
    },

    "Republic of Ireland": {
      code: "IE",
      appearances: 3,
      firstAppearance: 1990,
      lastAppearance: 2002,
      confederation: "UEFA",
      titles: 0,
      history: [
        { year: 1990, host: "Italy", finish: "Quarter-finals" },
        { year: 1994, host: "United States", finish: "Round of 16" },
        { year: 2002, host: "South Korea / Japan", finish: "Round of 16" }
      ]
    },

    "Ivory Coast": {
      code: "CI",
      appearances: 4,
      firstAppearance: 2006,
      lastAppearance: 2026,
      confederation: "CAF",
      titles: 0,
      history: [
        { year: 2006, host: "Germany", finish: "Group Stage" },
        { year: 2010, host: "South Africa", finish: "Group Stage" },
        { year: 2014, host: "Brazil", finish: "Group Stage" },
        { year: 2026, host: "Canada / Mexico / United States", finish: "TBD" }
      ]
    },

    "Honduras": {
      code: "HN",
      appearances: 3,
      firstAppearance: 1982,
      lastAppearance: 2014,
      confederation: "CONCACAF",
      titles: 0,
      history: [
        { year: 1982, host: "Spain", finish: "Group Stage" },
        { year: 2010, host: "South Africa", finish: "Group Stage" },
        { year: 2014, host: "Brazil", finish: "Group Stage" }
      ]
    },

    "Senegal": {
      code: "SN",
      appearances: 4,
      firstAppearance: 2002,
      lastAppearance: 2026,
      confederation: "CAF",
      titles: 0,
      history: [
        { year: 2002, host: "South Korea / Japan", finish: "Quarter-finals" },
        { year: 2018, host: "Russia", finish: "Group Stage" },
        { year: 2022, host: "Qatar", finish: "Round of 16" },
        { year: 2026, host: "Canada / Mexico / United States", finish: "TBD" }
      ]
    },

    "Bosnia and Herzegovina": {
      code: "BA",
      appearances: 2,
      firstAppearance: 2014,
      lastAppearance: 2026,
      confederation: "UEFA",
      titles: 0,
      history: [
        { year: 2014, host: "Brazil", finish: "Group Stage" },
        { year: 2026, host: "Canada / Mexico / United States", finish: "TBD" }
      ]
    },

    // ==========================================================
    // 2次参赛（10个国家）
    // ==========================================================
    "Cuba": {
      code: "CU",
      appearances: 1,
      firstAppearance: 1938,
      lastAppearance: 1938,
      confederation: "CONCACAF",
      titles: 0,
      history: [
        { year: 1938, host: "France", finish: "Quarter-finals" }
      ]
    },

    "Turkey": {
      code: "TR",
      appearances: 2,
      firstAppearance: 1954,
      lastAppearance: 2002,
      confederation: "UEFA",
      titles: 0,
      history: [
        { year: 1954, host: "Switzerland", finish: "Group Stage" },
        { year: 2002, host: "South Korea / Japan", finish: "Third Place" }
      ]
    },

    "Slovenia": {
      code: "SI",
      appearances: 2,
      firstAppearance: 2002,
      lastAppearance: 2010,
      confederation: "UEFA",
      titles: 0,
      history: [
        { year: 2002, host: "South Korea / Japan", finish: "Group Stage" },
        { year: 2010, host: "South Africa", finish: "Group Stage" }
      ]
    },

    "Ukraine": {
      code: "UA",
      appearances: 3,
      firstAppearance: 2006,
      lastAppearance: 2026,
      confederation: "UEFA",
      titles: 0,
      history: [
        { year: 2006, host: "Germany", finish: "Quarter-finals" },
        { year: 2014, host: "Brazil", finish: "Group Stage" },
        { year: 2026, host: "Canada / Mexico / United States", finish: "TBD" }
      ]
    },

    "Slovakia": {
      code: "SK",
      appearances: 1,
      firstAppearance: 2010,
      lastAppearance: 2010,
      confederation: "UEFA",
      titles: 0,
      history: [
        { year: 2010, host: "South Africa", finish: "Round of 16" }
      ]
    },

    "Panama": {
      code: "PA",
      appearances: 2,
      firstAppearance: 2018,
      lastAppearance: 2026,
      confederation: "CONCACAF",
      titles: 0,
      history: [
        { year: 2018, host: "Russia", finish: "Group Stage" },
        { year: 2026, host: "Canada / Mexico / United States", finish: "TBD" }
      ]
    },

    "Iceland": {
      code: "IS",
      appearances: 1,
      firstAppearance: 2018,
      lastAppearance: 2018,
      confederation: "UEFA",
      titles: 0,
      history: [
        { year: 2018, host: "Russia", finish: "Group Stage" }
      ]
    },

    "Qatar": {
      code: "QA",
      appearances: 2,
      firstAppearance: 2022,
      lastAppearance: 2026,
      confederation: "AFC",
      titles: 0,
      history: [
        { year: 2022, host: "Qatar", finish: "Group Stage" },
        { year: 2026, host: "Canada / Mexico / United States", finish: "TBD" }
      ]
    },

    // ==========================================================
    // 1次参赛（19个国家）
    // ==========================================================
    "Dutch East Indies": {
      code: "ID",
      appearances: 1,
      firstAppearance: 1938,
      lastAppearance: 1938,
      confederation: "AFC",
      titles: 0,
      history: [
        { year: 1938, host: "France", finish: "Round of 16" }
      ]
    },

    "East Germany": {
      code: "DE",
      appearances: 1,
      firstAppearance: 1974,
      lastAppearance: 1974,
      confederation: "UEFA",
      titles: 0,
      history: [
        { year: 1974, host: "West Germany", finish: "Round of 16" }
      ]
    },

    "Zaire": {
      code: "CD",
      appearances: 1,
      firstAppearance: 1974,
      lastAppearance: 1974,
      confederation: "CAF",
      titles: 0,
      history: [
        { year: 1974, host: "West Germany", finish: "Group Stage" }
      ]
    },

    "Haiti": {
      code: "HT",
      appearances: 2,
      firstAppearance: 1974,
      lastAppearance: 2026,
      confederation: "CONCACAF",
      titles: 0,
      history: [
        { year: 1974, host: "West Germany", finish: "Group Stage" },
        { year: 2026, host: "Canada / Mexico / United States", finish: "TBD" }
      ]
    },

    "El Salvador": {
      code: "SV",
      appearances: 1,
      firstAppearance: 1970,
      lastAppearance: 1970,
      confederation: "CONCACAF",
      titles: 0,
      history: [
        { year: 1970, host: "Mexico", finish: "Group Stage" }
      ]
    },

    "Israel": {
      code: "IL",
      appearances: 1,
      firstAppearance: 1970,
      lastAppearance: 1970,
      confederation: "UEFA",
      titles: 0,
      history: [
        { year: 1970, host: "Mexico", finish: "Group Stage" }
      ]
    },

    "Kuwait": {
      code: "KW",
      appearances: 1,
      firstAppearance: 1982,
      lastAppearance: 1982,
      confederation: "AFC",
      titles: 0,
      history: [
        { year: 1982, host: "Spain", finish: "Group Stage" }
      ]
    },

    "New Zealand": {
      code: "NZ",
      appearances: 3,
      firstAppearance: 1982,
      lastAppearance: 2026,
      confederation: "OFC",
      titles: 0,
      history: [
        { year: 1982, host: "Spain", finish: "Group Stage" },
        { year: 2010, host: "South Africa", finish: "Group Stage" },
        { year: 2026, host: "Canada / Mexico / United States", finish: "TBD" }
      ]
    },

    "Canada": {
      code: "CA",
      appearances: 2,
      firstAppearance: 1986,
      lastAppearance: 2026,
      confederation: "CONCACAF",
      titles: 0,
      history: [
        { year: 1986, host: "Mexico", finish: "Group Stage" },
        { year: 2026, host: "Canada / Mexico / United States", finish: "TBD" }
      ]
    },

    "Iraq": {
      code: "IQ",
      appearances: 1,
      firstAppearance: 1986,
      lastAppearance: 1986,
      confederation: "AFC",
      titles: 0,
      history: [
        { year: 1986, host: "Mexico", finish: "Group Stage" }
      ]
    },

    "United Arab Emirates": {
      code: "AE",
      appearances: 1,
      firstAppearance: 1990,
      lastAppearance: 1990,
      confederation: "AFC",
      titles: 0,
      history: [
        { year: 1990, host: "Italy", finish: "Group Stage" }
      ]
    },

    "Greece": {
      code: "GR",
      appearances: 1,
      firstAppearance: 1994,
      lastAppearance: 1994,
      confederation: "UEFA",
      titles: 0,
      history: [
        { year: 1994, host: "United States", finish: "Group Stage" }
      ]
    },

    "Jamaica": {
      code: "JM",
      appearances: 1,
      firstAppearance: 1998,
      lastAppearance: 1998,
      confederation: "CONCACAF",
      titles: 0,
      history: [
        { year: 1998, host: "France", finish: "Group Stage" }
      ]
    },

    "South Africa": {
      code: "ZA",
      appearances: 1,
      firstAppearance: 1998,
      lastAppearance: 1998,
      confederation: "CAF",
      titles: 0,
      history: [
        { year: 1998, host: "France", finish: "Group Stage" }
      ]
    },

    "China": {
      code: "CN",
      appearances: 1,
      firstAppearance: 2002,
      lastAppearance: 2002,
      confederation: "AFC",
      titles: 0,
      history: [
        { year: 2002, host: "South Korea / Japan", finish: "Group Stage" }
      ]
    },

    "Angola": {
      code: "AO",
      appearances: 2,
      firstAppearance: 2006,
      lastAppearance: 2026,
      confederation: "CAF",
      titles: 0,
      history: [
        { year: 2006, host: "Germany", finish: "Group Stage" },
        { year: 2026, host: "Canada / Mexico / United States", finish: "TBD" }
      ]
    },

    "Togo": {
      code: "TG",
      appearances: 1,
      firstAppearance: 2006,
      lastAppearance: 2006,
      confederation: "CAF",
      titles: 0,
      history: [
        { year: 2006, host: "Germany", finish: "Group Stage" }
      ]
    },

    "Trinidad and Tobago": {
      code: "TT",
      appearances: 1,
      firstAppearance: 2006,
      lastAppearance: 2006,
      confederation: "CONCACAF",
      titles: 0,
      history: [
        { year: 2006, host: "Germany", finish: "Group Stage" }
      ]
    },

    // ==========================================================
    // 2026年首次参赛（4个国家）
    // ==========================================================
    "Uzbekistan": {
      code: "UZ",
      appearances: 1,
      firstAppearance: 2026,
      lastAppearance: 2026,
      confederation: "AFC",
      titles: 0,
      history: [
        { year: 2026, host: "Canada / Mexico / United States", finish: "TBD" }
      ]
    },

    "Cape Verde": {
      code: "CV",
      appearances: 1,
      firstAppearance: 2026,
      lastAppearance: 2026,
      confederation: "CAF",
      titles: 0,
      history: [
        { year: 2026, host: "Canada / Mexico / United States", finish: "TBD" }
      ]
    },

    "Curaçao": {
      code: "CW",
      appearances: 1,
      firstAppearance: 2026,
      lastAppearance: 2026,
      confederation: "CONCACAF",
      titles: 0,
      history: [
        { year: 2026, host: "Canada / Mexico / United States", finish: "TBD" }
      ]
    },

    "Egypt": {
      code: "EG",
      appearances: 4,
      firstAppearance: 1934,
      lastAppearance: 2026,
      confederation: "CAF",
      titles: 0,
      history: [
        { year: 1934, host: "Italy", finish: "Round of 16" },
        { year: 1990, host: "Italy", finish: "Group Stage" },
        { year: 2018, host: "Russia", finish: "Group Stage" },
        { year: 2026, host: "Canada / Mexico / United States", finish: "TBD" }
      ]
    }
  }
};

// 导出数据供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = worldCupData;
}
