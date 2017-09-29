// List of Students
var students = [
  {
    name: 'Khasper Balisacan',
    github_username:'khasperbali',
    medium_username: '@khasperbali'
  },
  {
    name: 'Angelo Barangan',
    github_username:'AAngeloB',
    medium_username: '@asvpangelob'
  },
  {
    name: 'Aragon Bernard',
    github_username:'sty.maxxy',
    medium_username: '@aragonbernard808'
  },
  {
    name: 'Jarren Calizo',
    github_username:'AlohaJarren',
    medium_username: '@calizo.jarren'
  },
  {
    name: 'Jeraldy Cascayan',
    github_username:'c0p',
    medium_username: '@jeraldydcascayan'
  },
  {
    name: 'Jeriel Cauton',
    github_username: 'PocketTaCo',
    medium_username: '@jerielcauton29'
  },
  {
    name: 'Miguel Delacruz',
    github_username: 'MiguelDelacruz',
    medium_username: '@delacruzsmiguel'
  },
  {
    name: 'John Espiritu',
    github_username: 'John7x',
    medium_username: '@johnespiritu.7x'
  },
  {
    name: 'Taylor Fujimoto',
    github_username: 'taytayfujif',
    medium_username: '@taytayfujif'
  },
  {
    name: 'Laron Gibson',
    github_username: 'SilverNeko21',
    medium_username: '@larong2122'
  },
  {
    name: 'Jacob Harris',
    github_username: 'jakes2020',
    medium_username: '@19jacris'
  },
  {
    name: 'Elliah Herradura',
    github_username: 'ElliahSon',
    medium_username: '@elliahson'
  },
  {
    name: 'Keegan Kolbeinsen',
    github_username: 'keegan18',
    medium_username: '@kolbeinsen.tafaoa'
  },
  {
    name: 'Anghelo Macha',
    github_username: 'AngheloM',
    medium_username: '@macha.anghelo'
  },
  {
    name: 'Kelii McCrary',
    github_username: 'WildcherryBazzaire',
    medium_username: '@eieghtbitdolphin',
  },
  {
    name: 'Jameson Miyashiro',
    github_username: 'jameson141',
    medium_username: '@jamesonmiyashiro'
  },
  {
    name: 'Logan Moniz',
    github_username: 'lmoniz01',
    medium_username: '@honowai.lmoniz01'
  },
  {
    name: 'Jordan Muraoka',
    github_username: 'Aoiryuu',
    medium_username: '@19joroka'
  },
  {
    name: 'Marvin Pilar',
    github_username: 'Marvkuroway',
    medium_username: '@Skidzay'
  },
  {
    name: 'Rodelio Ponce',
    github_username: 'gawigwen',
    medium_username: '@19rodnce'
  },
  {
    name: 'Kengo Raganit',
    github_username: 'KengoRag',
    medium_username: '@19kennit'
  },
  {
    name: 'Daniel Ranada',
    github_username: 'KingKamui',
    medium_username: '@ancientdragonkingofvalla'
  }, 
  {
    name: 'Richard Ribucan',
    github_username: 'richardribucanperales',
    medium_username: '@richardribucanperales'
  },
  {
    name: 'Evan Sugiyama',
    github_username: 'Astrocat2374',
    medium_username: '@sugiyama.evan'
  },
  {
    name: 'Timoteo Sumalinog',
    github_username: 'TimsTomatos',
    medium_username: '@imshiny808'
  },
  {
    name: 'Zak Sakata',
    github_username:'zakattack9',
    medium_username: '@zak.s_',
  },
  {
    name: 'No-Internet',
    github_username:'No-Internet',
  }
];


students.forEach(function( person ) {
  $('.students').append(
  `<div class="student">
    <h3>${person.name}</h3>
    <div class="link_list">
      <ul>
        <li><a href="https://github.com/${person.github_username}">${'Github: ' + person.github_username}</a></li>
        <li><a href="https://medium.com/${person.medium_username}">${'Medium: ' + person.medium_username}</a></li>
      </ul>
    </div>
  </div>`)
});


//Methods to Change Zak's Info
let zak = $('.student .link_list ul').eq(students.length - 2).append(`<li><a href="https://junior-devleague.github.io/safe/">Final Project: SAFE</a></li>`);
let zakAnim = $('.student').eq(students.length - 2).attr('id', 'zak');
console.log(zak[0])

//Methods to Add Specific Info for No-Internet
let addID = $('.student').last().attr('id', 'no-internet');
let lastStudent = $('.student .link_list ul').last().children().first().children().attr("href", "https://github.com/HACC17/No-Internet");
let noInternetMembers = $('.student .link_list ul').last().children().eq(1).children().text("Members: Zak, Ian, Angela, Dylan, Zedrick");
let changeLink = $('.student .link_list ul').last().children().eq(1).children().attr("href", "https://hacc17.github.io/No-Internet/html/about.html");
let addFinalProj = $('.student .link_list ul').last().append(`<li><a href="https://hacc17.github.io/No-Internet/">Project: DAIZZY</a></li>`);



