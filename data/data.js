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
    date : 'Since Oct 2010',
    title : 'Civiliz CTO and co-founder, – Paris, France',
    link : true,
    cat: 0,
    description : 'Civiliz is a startup which has created a location based feedback service for businesses. It works with companies such as Société Générale, Quick, SNCF or Caisse d’Epargne.'
  }, {
    date : 'Mar 2012',
    title : 'JavaScript trainer – Paris, France',
    link : true,
    cat: 0,
    description : 'Trained LogSafe company developer team in JavaScript, requirejs, mustache and Backbone.'
  }, {
    date : 'Jun 2010 - Sep 2010',
    title : 'Web developer at lelivrescolaire.fr (scholar publishing startup company) – Paris, France',
    link : true,
    cat: 0,
    description : ''
  }, {
    date : 'Oct 2009',
    title : 'Teacher assistant at ESCP Europe, “Département PRACTICE” – Paris, France',
    link : true,
    cat: 0,
    description : 'Excel and VBA teacher assistant and in charge of training session for students.'
  }, {
    date : 'Feb 2009 - Jul 2009',
    title : 'French Chamber of Commerce and Industry of Morocco – Casablanca, Morocco',
    link : true,
    cat: 0,
    description : ''
  }, {
    date : 'Jul 2008 - Dec 2008',
    title : 'Mazars, Audit and Advisory company, IT Department – Paris, France',
    link : true,
    cat: 0,
    description : ''
  }, {
    date : 'Sep 2009 - Jun 2010',
    title : 'Ecole Centrale Paris (partnership with ESCP Europe) – Paris, France',
    link : true,
    cat: 1,
    description : 'Second year of MSc Specialization in “Information Technology”, especially in software conception and computer programming.'
  }, {
    date : 'Sep 2006 - Jul 2010',
    title : 'MSc in management ESCP Europe – Paris, France',
    link : true,
    cat: 1,
    description: '"Grande Ecole" program, specialization in management with a strong focus on information systems and new technologies'
  }, {
    date : 'Sep 2004 - Jun 2006',
    title : 'Lycée Henri IV, Classes préparatoires ECS – Paris, France',
    link : false,
    cat: 1,
    description : ''
  },{
    date : '',
    title : 'Website development languages',
    link : true,
    cat: 2,
    description : ''
  }, {
    date : '',
    title : 'Frameworks, libraries and tools',
    link : true,
    cat: 2,
    description : ''
  }, {
    date : '',
    title : 'Systems and servers',
    link : true,
    cat: 2,
    description : ''
  }, {
    date : '',
    title : 'Other computer skills',
    link : true,
    cat: 2,
    description : ''
  }, {
    date: '',
    title: 'Office software applications',
    link : true,
    cat: 2,
    description : 'Microsoft Office'
  }, {
    date : '',
    title : 'French (Native)',
    link : false,
    cat: 3,
    description : ''
  }, {
    date : '',
    title : 'English (Fluent)',
    link : false,
    cat: 3,
    description: ''
  }, {
    date : '',
    title : 'Spanish (Proficient)',
    link : false,
    cat: 3,
    description: ''
  }, {
    date : '',
    title : 'Russian (Basic skills)',
    link : false,
    cat: 3,
    description: ''
  }, {
    date : 'Jun 2012',
    title : 'Transilien hackdays',
    link : true,
    cat: 4,
    description : 'Lucomo project: a game to help you get your train and to let you gamble on your train line activity'
  }, {
    date : '2006 - 2008',
    title : 'ESCP Polyphony',
    link : true,
    cat: 4,
    description : 'Managed the ESCP Europe musical club'
  }, {
    date : '2008 - 2010',
    title : 'Baobab',
    link : false,
    cat: 4,
    description : 'Webmaster and lead developer of Baobab’s website, the student website club of ESCP Europe'
  }, {
    date : '',
    title : 'Leisure',
    link : true,
    cat: 4,
    description : ''
  },{
    date : '',
    title : 'Nicolas Blanchot',
    link : false,
    cat: 5,
    description : ''
  }, {
    date : '',
    title : '26 years old',
    link : false,
    cat: 5,
    description : ''
  }, {
    date : '',
    title : 'French',
    link : false,
    cat: 5,
    description : ''
  }, {
    date : '',
    title : 'Twitter: @Plog_',
    link : false,
    cat: 5,
    description : ''
  }];
exports.activities = activities;


// details list
var details = [{
  activityId: 0,
  text: 'Developed websites and mobile applications (iPad, iPhone and Android text: with PhoneGap)'
}, {
  activityId: 0,
  text: 'managed a 4 people team'
}, {
  activityId: 0,
  text: 'designed development process'
}, {
  activityId: 0,
  text: 'took part in product conception'
},{
  activityId: 0,
  text: 'designed application, database and system architecture (Amazon EC2)'
}, {
  activityId: 0,
  text: 'technology watch'
}, {
  activityId: 2,
  text: 'Website development (server and client side)'
}, {
  activityId: 2,
  text: 'product conception'
}, {
  activityId: 2,
  text: 'process design'
}, {
  activityId: 2,
  text: 'project management and database design'
}, {
  activityId: 4,
  text: 'Developed the daily press review website'
}, {
  activityId: 4,
  text: 'Realized a business study on the motor industry in Morocco and interviewed numerous Moroccan motor industry CEOs'
}, {
  activityId: 5,
  text: 'Realized various IT Audit missions (data analysis, IS mapping, safety text: and process reviews)'
}, {
  activityId: 5,
  text: 'Co-developed (in a team of 4) an IT Corporate tool for accounting data analysis'
}, {
  activityId: 9,
  text: 'HTML5'
}, {
  activityId: 9,
  text: 'CSS3'
}, {
  activityId: 9,
  text: 'JavaScript'
}, {
  activityId: 9,
  text: 'PHP5'
}, {
  activityId: 9,
  text: 'SQL'
}, {
  activityId: 9,
  text: 'JSON'
}, {
  activityId: 9,
  text: 'XML'
}, {
  activityId: 10,
  text: 'Backbone'
}, {
  activityId: 10,
  text: 'jQuery'
}, {
  activityId: 10,
  text: 'Mustache'
}, {
  activityId: 10,
  text: 'jQTouch'
}, {
  activityId: 10,
  text: 'PhoneGap'
}, {
  activityId: 10,
  text: 'requirejs'
}, {
  activityId: 10,
  text: 'jasmine'
}, {
  activityId: 10,
  text: 'lesscss'
}, {
  activityId: 10,
  text: 'CakePHP'
}, {
  activityId: 10,
  text: 'cuke4php (beginner)'
}, {
  activityId: 10,
  text: 'node.js (beginner)'
}, {
  activityId: 10,
  text: 'Ruby and Rails (beginner)'
}, {
  activityId: 11,
  text: 'Good knowledge of Mac OSX'
}, {
  activityId: 11,
  text: 'Good knowledge of Linux (Ubuntu and Mint)'
}, {
  activityId: 11,
  text: 'Good knowledge of Apache 2 server'
}, {
  activityId: 12,
  text: 'git'
}, {
  activityId: 12,
  text: 'Amazon AWS (EC2, RDS, SES, S3)'
}, {
  activityId: 12,
  text: 'basic knowledge in C, C++ and Java'
}, {
  activityId: 13,
  text: 'Word'
}, {
  activityId: 13,
  text: 'Excel (VBA)'
}, {
  activityId: 13,
  text: 'Access (VBA)'
}, {
  activityId: 18,
  text: 'team of 5 people'
}, {
  activityId: 18,
  text: 'PhoneGap'
}, {
  activityId: 18,
  text: 'Backbone'
}, {
  activityId: 18,
  text: 'Mustache'
}, {
  activityId: 18,
  text: 'node.js'
}, {
  activityId: 18,
  text: 'redis'
}, {
  activityId: 19,
  text: 'webmaster'
}, {
  activityId: 19,
  text: 'concerts organization'
}, {
  activityId: 19,
  text: 'research of financial or material sponsors'
}, {
  activityId: 20,
  text: 'play the bass guitar'
}, {
  activityId: 20,
  text: 'rock climbing'
}, {
  activityId: 20,
  text: 'sailing'
}, {
  activityId: 20,
  text: 'running'
}, {
  activityId: 20,
  text: 'technology watch'
}];
exports.details = details;
