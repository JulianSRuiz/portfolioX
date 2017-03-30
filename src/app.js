//assets
import 'bootstrap/dist/css/bootstrap.min.css';
require('./img/jr2.jpg');
require('./img/32/social-011_linkedin.png');
require('./img/32/social-003_twitter.png');
require('./img/32/social-006_facebook.png');
require('./img/32/social-041_github.png');
require('./img/jables_home.png');
require('./img/julian_resume.pdf');
require('./img/jables_complete.png');
require('./img/alien_hunt.png');
require('./img/mountenus.png');
require('./img/vidmeo_mockups.png');
require('./img/indy.png');

//css
import './assets/css/stylesheet.css';

//modules
import angular from 'angular';
import uiRouter from 'angular-ui-router';

//views
import homeHTML from './views/home.html';
import portfolioHTML from './views/portfolio.html';
import contactHTML from './views/contact.html';
import aboutHTML from './views/about.html';
import resumeHTML from './views/resume.html';

angular
  .module('portfolioApp', [uiRouter])
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('home', {
        url: '/',
        template: homeHTML
      })
      .state('portfolio', {
        url: '/projects',
        template: portfolioHTML
      })
      .state('contact', {
        url: '/contact',
        template: contactHTML
      })
      .state('about', {
        url: '/about',
        template: aboutHTML
      })
      .state('resume', {
        url: '/resume',
        template: resumeHTML
      })
    $urlRouterProvider.otherwise('/');
  });
