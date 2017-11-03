// List of Students
var students = [
  {
    name: 'Zak Sakata',
    github_username:'zakattack9',
    medium_username: '@zak.s_',
  },
  {
    name: 'Kayla Diniega',
    github_username:'cutiegirl526',
    medium_username: '@cutiegirl526',
  },
  {
    name: 'Dylan Tucker',
    github_username:'AOE-Dylan',
    medium_username: '@Dylaaaaan',
  },
  {
    name: 'Ian Acosta',
    github_username:'Yoscroll',
    medium_username: '@ianhacosta',
  },
  {
    name: 'Mark Demesillo',
    github_username:'MarkIsNotTaken',
    medium_username: '@Segnis',
  },
  {
    name: 'Angela Geronimo',
    github_username:'ageronimo',
    medium_username: '@angelageroniimo',
  },
  {
    name: 'Kyle Lingat',
    github_username:'kylelingat',
    medium_username: '@kylejlingat',
  },
  {
    name: 'Jomari Jacinto',
    github_username:'Jomos1',
    medium_username: '@Jomos',
  },
  {
    name: 'Zedrick Ara',
    github_username:'zedricka',
    medium_username: '@zedrick.ara',
  },
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


/*//Methods to Change Zak's Info
let zak = $('.student .link_list ul').eq(students.length - 2).append(`<li><a href="https://junior-devleague.github.io/safe/">Final Project: SAFE</a></li>`);
let zakAnim = $('.student').eq(students.length - 2).attr('id', 'zak');
console.log(zak[0])

//Methods to Add Specific Info for No-Internet
let addID = $('.student').last().attr('id', 'no-internet');
let lastStudent = $('.student .link_list ul').last().children().first().children().attr("href", "https://github.com/HACC17/No-Internet");
let noInternetMembers = $('.student .link_list ul').last().children().eq(1).children().text("Members: Zak, Ian, Angela, Dylan, Zedrick");
let changeLink = $('.student .link_list ul').last().children().eq(1).children().attr("href", "https://hacc17.github.io/No-Internet/html/about.html");
let addFinalProj = $('.student .link_list ul').last().append(`<li><a href="https://hacc17.github.io/No-Internet/">Project: DAIZZY</a></li>`);*/



