var redis = require('./redis').inst;

exports.createData = function() {
  var categories = [
    'Professional Experience',
    'Education',
    'Computer Skills',
    'Languages',
    'Extracurricular activities',
    'About Me'
  ];
  redis.set('categories', JSON.stringify(categories));

  var cat0 = [
    {
      date : 'Since Oct 2010',
      title : 'Civiliz CTO and co-founder, – Paris, France',
      link : true
    }, {
      date : 'Mar 2012',
      title : 'JavaScript trainer – Paris, France',
      link : true
    }, {
      date : 'Jun 2010 - Sep 2010',
      title : 'Web developer at lelivrescolaire.fr (scholar publishing startup company) – Paris, France',
      link : true
    }, {
      date : 'Oct 2009',
      title : 'Teacher assistant at ESCP Europe, “Département PRACTICE” – Paris, France',
      link : true
    }, {
      date : 'Feb 2009 - Jul 2009',
      title : 'French Chamber of Commerce and Industry of Morocco – Casablanca, Morocco',
      link : true
    }, {
      date : 'Jul 2008 - Dec 2008',
      description : 'Mazars, Audit and Advisory company, IT Department – Paris, France',
      link : true
    }
  ];
  var cat0_0 = {
    description : 'Civiliz is a startup which has created a location based feedback service for businesses. It works with companies such as Société Générale, Quick, SNCF or Caisse d’Epargne.',
    activities : [
      'Developed websites and mobile applications (iPad, iPhone and Android with PhoneGap)',
      'managed a 4 people team',
      'designed development process',
      'took part in product conception',
      'designed application, database and system architecture (Amazon EC2)',
      'technology watch'
    ]
  };
  var cat0_1 = {
    description : 'Trained LogSafe company developer team in JavaScript, requirejs, mustache and Backbone.',
    activities : ''
  };
  var cat0_2 = {
    description : '',
    activities : [
      'Website development (server and client side)',
      'product conception',
      'process design',
      'project management and database design'
    ]
  };
  var cat0_3 = {
    description : 'Excel and VBA teacher assistant and in charge of training session for students.',
    activities : ''

  };
  var cat0_4 = {
    description : '',
    activities : [
      'Developed the daily press review website',
      'Realized a business study on the motor industry in Morocco and interviewed numerous Moroccan motor industry CEOs'
    ]
  };
  var cat0_5 = {
    description : '',
    activities : [
      'Realized various IT Audit missions (data analysis, IS mapping, safety and process reviews)',
      'Co- developed (in a team of 4) an IT Corporate tool for accounting data analysis'
    ]
  };
  redis.set('cat0', JSON.stringify(cat0));
  redis.set('cat0:item0', JSON.stringify(cat0_0));
  redis.set('cat0:item1', JSON.stringify(cat0_1));
  redis.set('cat0:item2', JSON.stringify(cat0_2));
  redis.set('cat0:item3', JSON.stringify(cat0_3));
  redis.set('cat0:item4', JSON.stringify(cat0_4));
  redis.set('cat0:item5', JSON.stringify(cat0_5));

  var cat1 = [
    {
      date : 'Sep 2009 - Jun 2010',
      title : 'Ecole Centrale Paris (partnership with ESCP Europe) – Paris, France',
      link : true
    }, {
      date : 'Sep 2006 - Jul 2010',
      title : 'MSc in management ESCP Europe – Paris, France',
      link : true
    }, {
      date : 'Sep 2004 - Jun 2006',
      title : 'Lycée Henri IV, Classes préparatoires ECS – Paris, France',
      link : false
    }
  ];

  var cat1_0 = {
    description : 'Second year of MSc Specialization in “Information Technology”, especially in software conception and computer programming.',
    activities : []
  };

  var cat1_1 = {
    description : '"Grande Ecole" program, specialization in management with a strong focus on information systems and new technologies',
    activities : []
  };
  redis.set('cat1', JSON.stringify(cat1));
  redis.set('cat1:item0', JSON.stringify(cat1_0));
  redis.set('cat1:item1', JSON.stringify(cat1_1));

  var cat2 = [
    {
      date : '',
      title : 'Website development languages',
      link : true
    }, {
      date : '',
      title : 'Frameworks, libraries and tools',
      link : true
    }, {
      date : '',
      title : 'Systems and servers',
      link : true
    }, {
      date : '',
      title : 'Other computer skills',
      link : true
    }, {
      date: '',
      title: 'Office software applications',
      link : true
    }
  ];
  var cat2_0 = {
    description : '',
    activities : [
      'HTML5',
      'CSS3',
      'JavaScript',
      'PHP5',
      'SQL',
      'JSON',
      'XML'
    ]
  };
  var cat2_1 = {
    description : '',
    activities : [
      'Backbone',
      'jQuery',
      'Mustache',
      'jQTouch',
      'PhoneGap',
      'requirejs',
      'jasmine',
      'lesscss',
      'CakePHP',
      'cuke4php (beginner)',
      'node.js (beginner)',
      'Ruby and Rails (beginner)'
    ]
  };
  var cat2_2 = {
    description : '',
    activities : [
      'Good knowledge of Mac OSX',
      'Good knowledge of Linux (Ubuntu and Mint)',
      'Good knowledge of Apache 2 server'
    ]
  };
  var cat2_3 = {
    description : '',
    activities : [
      'git',
      'Amazon AWS (EC2, RDS, SES, S3)',
      'basic knowledge in C, C++ and Java'
    ]
  };
  var cat2_4 = {
    description : 'Microsoft Office',
    activities : [
      'Word',
      'Excel (VBA)',
      'Access (VBA)'
    ]
  };
  redis.set('cat2', JSON.stringify(cat2));
  redis.set('cat2:item0', JSON.stringify(cat2_0));
  redis.set('cat2:item1', JSON.stringify(cat2_1));
  redis.set('cat2:item2', JSON.stringify(cat2_2));
  redis.set('cat2:item3', JSON.stringify(cat2_3));
  redis.set('cat2:item3', JSON.stringify(cat2_4));

  var cat3 = [
    {
      date : '',
      title : 'French (Native)',
      link : false
    }, {
      date : '',
      title : 'English (Fluent)',
      link : false
    }, {
      date : '',
      title : 'Spanish (Proficient)',
      link : false
    }, {
      date : '',
      title : 'Russian (Basic skills)',
      link : false
    }
  ];
  redis.set('cat3', JSON.stringify(cat3));


  var cat4 = [
    {
      date : 'Jun 2012',
      title : 'Transilien hackdays',
      link : true
    }, {
      date : '2006 - 2008',
      title : 'ESCP Polyphony',
      link : true
    }, {
      date : '2008 - 2010',
      title : 'Baobab',
      link : false
    }, {
      date : '',
      title : 'Leisure',
      link : true
    }
  ];
  var cat4_0 = {
    description : 'Lucomo project: a game to help you get your train and to let you gamble on your train line activity',
    activities : [
      'team of 5 people',
      'PhoneGap',
      'Backbone',
      'Mustache',
      'node.js',
      'redis'
    ]
  };
  var cat4_1 = {
    description : 'Managed the ESCP Europe musical club',
    activities : [
      'webmaster',
      'concerts organization',
      'research of financial or material sponsors'
    ]
  };
  var cat4_2 = {
    description : 'Webmaster and lead developer of Baobab’s website, the student website club of ESCP Europe',
    activities : []
  };
  var cat4_3 = {
    description : '',
    activities : [
      'play the bass guitar',
      'rock climbing',
      'sailing',
      'running',
       'technology watch'
    ]
  };

  redis.set('cat4', JSON.stringify(cat4));
  redis.set('cat4:item0', JSON.stringify(cat4_0));
  redis.set('cat4:item1', JSON.stringify(cat4_1));
  redis.set('cat4:item2', JSON.stringify(cat4_2));
  redis.set('cat4:item3', JSON.stringify(cat4_3));

  var cat5 = [
    {
      date : '',
      title : 'Nicolas Blanchot',
      link : false
    }, {
      date : '',
      title : '26 years old',
      link : false
    }, {
      date : '',
      title : 'French',
      link : false
    }, {
      date : '',
      title : 'Twitter: @Plog_',
      link : false
    }
  ];
  redis.set('cat5', JSON.stringify(cat5));
};
