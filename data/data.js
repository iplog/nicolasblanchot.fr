var categories = [
  'Professional Experience',
  'Education',
  'Computer Skills',
  'Languages',
  'Extracurricular activities',
  'About Me'
];
exports.categories = categories;

var activities = [{
  id: 0,
  date : 'Since Oct 2010',
  title : 'Civiliz CTO and co-founder – Paris, France',
  link : true,
  target : '',
  logo : '',
  cat: 0,
  description : 'Civiliz is a startup which has created a location based feedback service for businesses. It works with companies such as Société Générale, Quick, SNCF or Caisse d’Epargne.'
}, {
  id: 1,
  date : 'Mar 2012',
  title : 'JavaScript trainer – Paris, France',
  link : true,
  target : '',
  logo : '',
  cat: 0,
  description : 'Trained LogSafe company developer team in JavaScript, requirejs, mustache and Backbone.'
}, {
  id: 2,
  date : 'Jun 2010 - Sep 2010',
  title : 'Web developer at lelivrescolaire.fr (scholar publishing startup company) – Paris, France',
  link : true,
  target : '',
  logo : '',
  cat: 0,
  description : ''
}, {
  id: 3,
  date : 'Oct 2009',
  title : 'Teacher assistant at ESCP Europe, “Département PRACTICE” – Paris, France',
  link : true,
  target : '',
  logo : '',
  cat: 0,
  description : 'Excel and VBA teacher assistant and in charge of training session for students.'
}, {
  id: 4,
  date : 'Feb 2009 - Jul 2009',
  title : 'French Chamber of Commerce and Industry of Morocco – Casablanca, Morocco',
  link : true,
  target : '',
  logo : '',
  cat: 0,
  description : ''
}, {
  id: 5,
  date : 'Jul 2008 - Dec 2008',
  title : 'Mazars, Audit and Advisory company, IT Department – Paris, France',
  link : true,
  target : '',
  logo : '',
  cat: 0,
  description : ''
}, {
  id: 6,
  date : 'Sep 2009 - Jun 2010',
  title : 'Ecole Centrale Paris (partnership with ESCP Europe) – Paris, France',
  link : true,
  target : '',
  logo : '',
  cat: 1,
  description : 'Second year of MSc Specialization in “Information Technology”, especially in software conception and computer programming.'
}, {
  id: 7,
  date : 'Sep 2006 - Jul 2010',
  title : 'MSc in management ESCP Europe – Paris, France',
  link : true,
  target : '',
  logo : '',
  cat: 1,
  description: '"Grande Ecole" program, specialization in management with a strong focus on information systems and new technologies'
}, {
  id: 8,
  date : 'Sep 2004 - Jun 2006',
  title : 'Lycée Henri IV, Classes préparatoires ECS – Paris, France',
  link : false,
  target : '',
  logo : '',
  cat: 1,
  description : ''
},{
  id: 9,
  date : '',
  title : 'Website development languages',
  link : true,
  target : '',
  logo : '',
  cat: 2,
  description : ''
}, {
  id: 10,
  date : '',
  title : 'Frameworks, libraries and tools',
  link : true,
  target : '',
  logo : '',
  cat: 2,
  description : ''
}, {
  id: 11,
  date : '',
  title : 'Systems and servers',
  link : true,
  target : '',
  logo : '',
  cat: 2,
  description : ''
}, {
  id: 12,
  date : '',
  title : 'Other computer skills',
  link : true,
  target : '',
  logo : '',
  cat: 2,
  description : ''
}, {
  id: 13,
  date: '',
  title: 'Office software applications',
  link : true,
  target : '',
  logo : '',
  cat: 2,
  description : 'Microsoft Office'
}, {
  id: 14,
  date : '',
  title : 'French (Native)',
  link : false,
  target : '',
  logo : '',
  cat: 3,
  description : ''
}, {
  id: 15,
  date : '',
  title : 'English (Fluent)',
  link : false,
  target : '',
  logo : '',
  cat: 3,
  description: ''
}, {
  id: 16,
  date : '',
  title : 'Spanish (Proficient)',
  link : false,
  target : '',
  logo : '',
  cat: 3,
  description: ''
}, {
  id: 17,
  date : '',
  title : 'Russian (Basic skills)',
  link : false,
  target : '',
  logo : '',
  cat: 3,
  description: ''
}, {
  id: 18,
  date : 'Jun 2012',
  title : 'Transilien hackdays',
  link : true,
  target : '',
  logo : '',
  cat: 4,
  description : 'Lucomo project: a game to help you get your train and to let you gamble on your train line activity'
}, {
  id: 19,
  date : '2006 - 2008',
  title : 'ESCP Polyphony',
  link : true,
  target : '',
  logo : '',
  cat: 4,
  description : 'Managed the ESCP Europe musical club'
}, {
  id: 20,
  date : '2008 - 2010',
  title : 'Baobab',
  link : false,
  target : '',
  logo : '',
  cat: 4,
  description : 'Webmaster and lead developer of Baobab’s website, the student website club of ESCP Europe'
}, {
  id: 21,
  date : '',
  title : 'Leisure',
  link : true,
  target : '',
  logo : '',
  cat: 4,
  description : ''
},{
  id: 22,
  date : '',
  title : 'Nicolas Blanchot',
  link : false,
  target : '',
  logo : 'U',
  cat: 5,
  description : ''
}, {
  id: 23,
  date : '',
  title : '26 years old',
  link : false,
  target : '',
  logo : '',
  cat: 5,
  description : ''
}, {
  id: 24,
  date : '',
  title : 'French',
  link : false,
  target : '',
  logo : '',
  cat: 5,
  description : ''
}, {
  id: 25,
  date : '',
  title : 'Twitter: @Plog_',
  link : true,
  target : 'https://twitter.com/Plog_',
  logo : 't',
  cat: 5,
  description : ''
}, {
  id: 26,
  date : '',
  title : 'My resume (PDF)',
  link : true,
  target : 'files/CV_nicolas_blanchot_201205.pdf',
  logo : 'a',
  cat: 5,
  description : ''
}, {
  id: 27,
  date : '',
  title : 'LinkedIn',
  link : true,
  target : 'http://fr.linkedin.com/pub/nicolas-blanchot/1a/8b0/b9',
  logo : 'l',
  cat: 5,
  description : ''
}];
exports.activities = activities;


// details list
var details = [{
  id: 0,
  activityId: 0,
  text: 'Developed websites and mobile applications (iPad, iPhone and Android with PhoneGap)'
}, {
  id: 1,
  activityId: 0,
  text: 'Managed a 4 people team'
}, {
  id: 2,
  activityId: 0,
  text: 'Designed development process'
}, {
  id: 3,
  activityId: 0,
  text: 'Took part in product conception'
},{
  id: 4,
  activityId: 0,
  text: 'Designed application, database and system architecture (Amazon EC2)'
}, {
  id: 5,
  activityId: 0,
  text: 'Technology watch'
}, {
  id: 6,
  activityId: 2,
  text: 'Website development (server and client side)'
}, {
  id: 7,
  activityId: 2,
  text: 'Product conception'
}, {
  id: 8,
  activityId: 2,
  text: 'Process design'
}, {
  id: 9,
  activityId: 2,
  text: 'Project management and database design'
}, {
  id: 10,
  activityId: 4,
  text: 'Developed the daily press review website'
}, {
  id: 11,
  activityId: 4,
  text: 'Realized a business study on the motor industry in Morocco and interviewed numerous Moroccan motor industry CEOs'
}, {
  id: 12,
  activityId: 5,
  text: 'Realized various IT Audit missions (data analysis, IS mapping, safety text: and process reviews)'
}, {
  id: 13,
  activityId: 5,
  text: 'Co-developed (in a team of 4) an IT Corporate tool for accounting data analysis'
}, {
  id: 14,
  activityId: 9,
  text: 'HTML5'
}, {
  id: 15,
  activityId: 9,
  text: 'CSS3'
}, {
  id: 16,
  activityId: 9,
  text: 'JavaScript'
}, {
  id: 17,
  activityId: 9,
  text: 'PHP5'
}, {
  id: 18,
  activityId: 9,
  text: 'SQL'
}, {
  id: 19,
  activityId: 9,
  text: 'JSON'
}, {
  id: 20,
  activityId: 9,
  text: 'XML'
}, {
  id: 21,
  activityId: 10,
  text: 'Backbone'
}, {
  id: 22,
  activityId: 10,
  text: 'jQuery'
}, {
  id: 23,
  activityId: 10,
  text: 'Mustache'
}, {
  id: 24,
  activityId: 10,
  text: 'jQTouch'
}, {
  id: 25,
  activityId: 10,
  text: 'PhoneGap'
}, {
  id: 26,
  activityId: 10,
  text: 'requirejs'
}, {
  id: 27,
  activityId: 10,
  text: 'jasmine'
}, {
  id: 28,
  activityId: 10,
  text: 'lesscss'
}, {
  id: 29,
  activityId: 10,
  text: 'CakePHP'
}, {
  id: 30,
  activityId: 10,
  text: 'Cuke4php (beginner)'
}, {
  id: 31,
  activityId: 10,
  text: 'Node.js (beginner)'
}, {
  id: 32,
  activityId: 10,
  text: 'Ruby and Rails (beginner)'
}, {
  id: 33,
  activityId: 11,
  text: 'Good knowledge of Mac OSX'
}, {
  id: 34,
  activityId: 11,
  text: 'Good knowledge of Linux (Ubuntu and Mint)'
}, {
  id: 35,
  activityId: 11,
  text: 'Good knowledge of Apache 2 server'
}, {
  id: 36,
  activityId: 12,
  text: 'Git'
}, {
  id: 37,
  activityId: 12,
  text: 'Amazon AWS (EC2, RDS, SES, S3)'
}, {
  id: 38,
  activityId: 12,
  text: 'Basic knowledge in C, C++ and Java'
}, {
  id: 39,
  activityId: 13,
  text: 'Word'
}, {
  id: 40,
  activityId: 13,
  text: 'Excel (VBA)'
}, {
  id: 41,
  activityId: 13,
  text: 'Access (VBA)'
}, {
  id: 42,
  activityId: 18,
  text: 'Team of 5 people'
}, {
  id: 43,
  activityId: 18,
  text: 'PhoneGap'
}, {
  id: 44,
  activityId: 18,
  text: 'Backbone'
}, {
  id: 45,
  activityId: 18,
  text: 'Mustache'
}, {
  id: 46,
  activityId: 18,
  text: 'Node.js'
}, {
  id: 47,
  activityId: 18,
  text: 'Redis'
}, {
  id: 48,
  activityId: 19,
  text: 'Webmaster'
}, {
  id: 49,
  activityId: 19,
  text: 'Concerts organization'
}, {
  id: 50,
  activityId: 19,
  text: 'Research of financial or material sponsors'
}, {
  id: 51,
  activityId: 21,
  text: 'Play the bass guitar'
}, {
  id: 52,
  activityId: 21,
  text: 'Rock climbing'
}, {
  id: 53,
  activityId: 21,
  text: 'Sailing'
}, {
  id: 54,
  activityId: 21,
  text: 'Running'
}, {
  id: 55,
  activityId: 21,
  text: 'Technology watch'
}];
exports.details = details;
