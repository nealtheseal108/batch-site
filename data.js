// BatCH site data. Edit this file to update the roster or the history, then push.
//
// ROSTER: the 2026-27 roster, names only. Sources: USA Ultimate's 2025-26 North Carolina-B roster
// plus every player in the 2026-27 game stats (BatCH26-27-stats.csv). The stats sheet records
// some players by first name or first name + initial only, so they appear that way here.
window.ROSTER_2627 = [
  "Matthew Bain",
  "Ethan Berson",
  "Gavin Blurr",
  "Andrew Carneiro",
  "Brian Chen",
  "King Cheung",
  "Micah Dubnoff",
  "Dylan Edwards",
  "Adam Eligator",
  "Owen Evans",
  "Riley Fahy",
  "Jeremy Ferraro",
  "Parker Hanson",
  "Isaac Ho",
  "Michael Hopfinger",
  "Bryce Jensen",
  "Joshua Lo",
  "Neal Parekh",
  "Drake Parker",
  "Caleb Promislow",
  "Daniel Rabinovich",
  "Aashay Rathi",
  "Nate Scofield",
  "Oliver Spiller",
  "Coleman Stephens",
  "Centurion Tzendzalian",
  "Dax Welborn",
  "Ben Horton",
  "Carson Jewell",
  "Eli Card",
  "Elliot",
  "JT",
  "Jack Herring",
  "Kent",
  "Luke Sellers",
  "Max",
  "Michael Sun",
  "Noah Goldblatt",
  "Noah Biggers",
  "Patrick",
  "Peter D.",
  "Ryan B.",
  "William"
];

// SEASONS: one entry per USA Ultimate season (play.usaultimate.org team pages, fetched 2026-11-07).
// players = how many names that season's USA Ultimate roster lists. gap = no season listed.
window.SEASONS = [
  {
    "season": "2014-15",
    "name": "B-atCH",
    "url": "https://play.usaultimate.org/teams/events/Eventteam/?TeamId=mOqZoYfLZ6GLG%2fVJTIksQKPGkRNiKkxqX3GhzlXLwJo%3d",
    "players": 20,
    "events": [
      "River City Tune Up V",
      "Carolina Dev College Men's CC",
      "Atlantic Coast Dev College Men's Regionals"
    ],
    "note": "Listed as B-atCH. The first season in USA Ultimate's online records."
  },
  {
    "season": "2015-16",
    "name": "BatCH",
    "url": "https://play.usaultimate.org/teams/events/Eventteam/?TeamId=gL8TZeCb8vcp9hanGZoXTOgQpoeGLx%2bFXB8g7MZS%2bDU%3d",
    "players": 27,
    "events": [
      "Carolina Dev College Men's CC",
      "Atlantic Coast Dev College Men's Regionals"
    ],
    "note": ""
  },
  {
    "season": "2016-17",
    "name": "BatCH",
    "url": "https://play.usaultimate.org/teams/events/Eventteam/?TeamId=geOQ9ClZ5%2fbn9o0pd9lGn5GxqQ0Mpn3KeRIiMS9FxyI%3d",
    "players": 36,
    "events": [
      "Market Crash 2017",
      "Atlantic Coast Open 2017",
      "Carolina Dev College Men's CC",
      "Atlantic Coast Dev College Men's Regionals"
    ],
    "note": ""
  },
  {
    "season": "2017-18",
    "name": "BatCH",
    "url": "https://play.usaultimate.org/teams/events/Eventteam/?TeamId=fsv7xaj8V0lm%2fOOWoiBJRyz4ynqll2MKeyHToOsxcCA%3d",
    "players": 35,
    "events": [
      "Oak Creek Invite 2018",
      "Atlantic Coast Open 2018",
      "Southern Atlantic Coast Dev College Men's CC",
      "Atlantic Coast Dev College Men's Regionals"
    ],
    "note": ""
  },
  {
    "season": "2018-19",
    "name": "BatCH",
    "url": "https://play.usaultimate.org/teams/events/Eventteam/?TeamId=BEX1S5MHrAe1%2fr9GJ3hBiKS8xljBZoOKgxb8jVZdCO4%3d",
    "players": 29,
    "events": [
      "Mid-Atlantic Warmup 2019",
      "Oak Creek Challenge 2019",
      "Atlantic Coast Open 2019",
      "Southern Atlantic Coast Dev College Men's CC",
      "Atlantic Coast D-I College Men's Regionals"
    ],
    "note": "Played Atlantic Coast D-I Regionals."
  },
  {
    "season": "2019-20",
    "name": "BatCH",
    "url": "https://play.usaultimate.org/teams/events/Eventteam/?TeamId=t6hg2P8u51x%2fvJ4TKcSh5kFpW65Kj5c7HwVK2CG5UiA%3d",
    "players": 28,
    "events": [
      "Mid-Atlantic Warmup 2020",
      "BatCH Bash 2020"
    ],
    "note": "Hosted its own tournament, BatCH Bash."
  },
  {
    "season": "2020-21",
    "gap": true
  },
  {
    "season": "2021-22",
    "name": "BatCH",
    "url": "https://play.usaultimate.org/teams/events/Eventteam/?TeamId=LsT8uOsgeW4ZPwyzGcFOEUsP68q6Vb07sILD6kQRTvo%3d",
    "players": 49,
    "events": [
      "Oak Creek Challenge",
      "Rodeo",
      "Southern Atlantic Coast Dev College Men's CC"
    ],
    "note": "The biggest roster on record: 49 players."
  },
  {
    "season": "2022-23",
    "name": "BatCH",
    "url": "https://play.usaultimate.org/teams/events/Eventteam/?TeamId=AwtWv7ci%2f7FlerwIN9rWkXxlfiND93DmNpfy7l0uX%2bQ%3d",
    "players": 26,
    "events": [
      "Commonwealth Cup Weekend1 2023",
      "Needle in a Ho-Stack",
      "Southern Atlantic Coast Dev College Men's CC"
    ],
    "note": "First trips to Commonwealth Cup and Needle in a Ho-Stack, both on the schedule every season since."
  },
  {
    "season": "2023-24",
    "name": "BatCH",
    "url": "https://play.usaultimate.org/teams/events/Eventteam/?TeamId=RbojdrCI5wRHyGlXp%2fqzjPuL6UtXpX6h8nYxfV%2bduJE%3d",
    "players": 30,
    "events": [
      "Carolina Kickoff 2024",
      "Commonwealth Cup Weekend 1 2024",
      "Needle in a Ho-Stack 2024",
      "Southern Atlantic Coast Dev College Men's Conferences",
      "Atlantic Coast Dev College Men's Regionals"
    ],
    "note": ""
  },
  {
    "season": "2024-25",
    "name": "BatCH",
    "url": "https://play.usaultimate.org/teams/events/Eventteam/?TeamId=yh5Vp%2bTGNecqlceZ17zB8oh8y5zdvGV2r1cx3753XXk%3d",
    "players": 23,
    "events": [
      "2025 Commonwealth Cup Weekend 1",
      "Joint Summit 2025",
      "Needle in a Ho-Stack 2025",
      "Southern Atlantic Coast Dev Men's Conferences"
    ],
    "note": ""
  },
  {
    "season": "2025-26",
    "name": "BatCH",
    "url": "https://play.usaultimate.org/teams/events/Eventteam/?TeamId=7Yj7kpsLgQbsoKb%2bDYDfPHoYuhXCzWbxrv06fRehAj4%3d",
    "players": 27,
    "events": [
      "Carolina Kickoff 2026",
      "Commonwealth Cup 2026 Weekend 1",
      "Needle in a Ho-Stack 2026",
      "Southern Atlantic Coast Dev Men's Conferences",
      "Atlantic Coast D-I College Men's Regionals"
    ],
    "note": "Back at Atlantic Coast D-I Regionals for the first time since 2019. BatCH also hosted BatCH Bash again in March 2026."
  }
];

// LEADERSHIP & SPONSORS. Groups with no names are hidden on the page, so fill these in as they're confirmed.
// President: from the 2026-27 Furthering sponsorship agreement. Furthering: logo on the back of every 2026 jersey.
window.LEADERSHIP = {
  coaches: [],                       // e.g. { name: "First Last", role: "Head coach" }
  captains: [],                      // e.g. { name: "First Last", role: "Captain" }
  officers: [{ name: "Neal Parekh", role: "President" }],
};
window.SPONSORS = [
  { name: "Furthering Leadership", who: "Mike Hanas", url: "https://furtheringleadership.com/",
    blurb: "Executive coaching and leadership consulting. Our 2026–27 jersey sponsor: the Furthering logo is on the back of every BatCH jersey." },
];
