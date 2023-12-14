import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-f-i-n-a-l-график-отпуска-l');
  this.route('i-i-s-f-i-n-a-l-график-отпуска-e',
  { path: 'i-i-s-f-i-n-a-l-график-отпуска-e/:id' });
  this.route('i-i-s-f-i-n-a-l-график-отпуска-e.new',
  { path: 'i-i-s-f-i-n-a-l-график-отпуска-e/new' });
  this.route('i-i-s-f-i-n-a-l-должности-l');
  this.route('i-i-s-f-i-n-a-l-должности-e',
  { path: 'i-i-s-f-i-n-a-l-должности-e/:id' });
  this.route('i-i-s-f-i-n-a-l-должности-e.new',
  { path: 'i-i-s-f-i-n-a-l-должности-e/new' });
  this.route('i-i-s-f-i-n-a-l-организации-l');
  this.route('i-i-s-f-i-n-a-l-организации-e',
  { path: 'i-i-s-f-i-n-a-l-организации-e/:id' });
  this.route('i-i-s-f-i-n-a-l-организации-e.new',
  { path: 'i-i-s-f-i-n-a-l-организации-e/new' });
  this.route('i-i-s-f-i-n-a-l-отделы-l');
  this.route('i-i-s-f-i-n-a-l-отделы-e',
  { path: 'i-i-s-f-i-n-a-l-отделы-e/:id' });
  this.route('i-i-s-f-i-n-a-l-отделы-e.new',
  { path: 'i-i-s-f-i-n-a-l-отделы-e/new' });
  this.route('i-i-s-f-i-n-a-l-расчетный-лист-l');
  this.route('i-i-s-f-i-n-a-l-расчетный-лист-e',
  { path: 'i-i-s-f-i-n-a-l-расчетный-лист-e/:id' });
  this.route('i-i-s-f-i-n-a-l-расчетный-лист-e.new',
  { path: 'i-i-s-f-i-n-a-l-расчетный-лист-e/new' });
  this.route('i-i-s-f-i-n-a-l-согласие-на-опд-l');
  this.route('i-i-s-f-i-n-a-l-согласие-на-опд-e',
  { path: 'i-i-s-f-i-n-a-l-согласие-на-опд-e/:id' });
  this.route('i-i-s-f-i-n-a-l-согласие-на-опд-e.new',
  { path: 'i-i-s-f-i-n-a-l-согласие-на-опд-e/new' });
  this.route('i-i-s-f-i-n-a-l-сотрудники-l');
  this.route('i-i-s-f-i-n-a-l-сотрудники-e',
  { path: 'i-i-s-f-i-n-a-l-сотрудники-e/:id' });
  this.route('i-i-s-f-i-n-a-l-сотрудники-e.new',
  { path: 'i-i-s-f-i-n-a-l-сотрудники-e/new' });
});

export default Router;
