import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISFINALГрафикОтпускаLForm from './forms/i-i-s-f-i-n-a-l-график-отпуска-l';
import IISFINALДолжностиLForm from './forms/i-i-s-f-i-n-a-l-должности-l';
import IISFINALОрганизацииLForm from './forms/i-i-s-f-i-n-a-l-организации-l';
import IISFINALОтделыLForm from './forms/i-i-s-f-i-n-a-l-отделы-l';
import IISFINALРасчетныйЛистLForm from './forms/i-i-s-f-i-n-a-l-расчетный-лист-l';
import IISFINALСогласиеНаОпдLForm from './forms/i-i-s-f-i-n-a-l-согласие-на-опд-l';
import IISFINALСотрудникиLForm from './forms/i-i-s-f-i-n-a-l-сотрудники-l';
import IISFINALГрафикОтпускаEForm from './forms/i-i-s-f-i-n-a-l-график-отпуска-e';
import IISFINALДолжностиEForm from './forms/i-i-s-f-i-n-a-l-должности-e';
import IISFINALОрганизацииEForm from './forms/i-i-s-f-i-n-a-l-организации-e';
import IISFINALОтделыEForm from './forms/i-i-s-f-i-n-a-l-отделы-e';
import IISFINALРасчетныйЛистEForm from './forms/i-i-s-f-i-n-a-l-расчетный-лист-e';
import IISFINALСогласиеНаОпдEForm from './forms/i-i-s-f-i-n-a-l-согласие-на-опд-e';
import IISFINALСотрудникиEForm from './forms/i-i-s-f-i-n-a-l-сотрудники-e';
import IISFINALГрафикОтпускаModel from './models/i-i-s-f-i-n-a-l-график-отпуска';
import IISFINALДолжностиModel from './models/i-i-s-f-i-n-a-l-должности';
import IISFINALОрганизацииModel from './models/i-i-s-f-i-n-a-l-организации';
import IISFINALОтделыModel from './models/i-i-s-f-i-n-a-l-отделы';
import IISFINALРасчетныйЛистModel from './models/i-i-s-f-i-n-a-l-расчетный-лист';
import IISFINALСогласиеНаОпдModel from './models/i-i-s-f-i-n-a-l-согласие-на-опд';
import IISFINALСоставРасчетаModel from './models/i-i-s-f-i-n-a-l-состав-расчета';
import IISFINALСотрудникиModel from './models/i-i-s-f-i-n-a-l-сотрудники';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-f-i-n-a-l-график-отпуска': IISFINALГрафикОтпускаModel,
    'i-i-s-f-i-n-a-l-должности': IISFINALДолжностиModel,
    'i-i-s-f-i-n-a-l-организации': IISFINALОрганизацииModel,
    'i-i-s-f-i-n-a-l-отделы': IISFINALОтделыModel,
    'i-i-s-f-i-n-a-l-расчетный-лист': IISFINALРасчетныйЛистModel,
    'i-i-s-f-i-n-a-l-согласие-на-опд': IISFINALСогласиеНаОпдModel,
    'i-i-s-f-i-n-a-l-состав-расчета': IISFINALСоставРасчетаModel,
    'i-i-s-f-i-n-a-l-сотрудники': IISFINALСотрудникиModel
  },

  'application-name': 'Модуль КЭДО',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Модуль КЭДО',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Модуль КЭДО',
          title: 'Модуль КЭДО'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'кадровые-документы': {
          caption: 'Кадровые документы',
          title: 'Кадровые документы',
          'i-i-s-f-i-n-a-l-организации-l': {
            caption: 'Организации',
            title: ''
          },
          'i-i-s-f-i-n-a-l-отделы-l': {
            caption: 'Отделы',
            title: ''
          },
          'i-i-s-f-i-n-a-l-согласие-на-опд-l': {
            caption: 'Согласие на опд',
            title: ''
          },
          'i-i-s-f-i-n-a-l-график-отпуска-l': {
            caption: 'График отпуска',
            title: ''
          },
          'i-i-s-f-i-n-a-l-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-f-i-n-a-l-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          }
        },
        'расчетные-документы': {
          caption: 'Расчетные документы',
          title: 'Расчетные документы',
          'i-i-s-f-i-n-a-l-расчетный-лист-l': {
            caption: 'Расчетный лист',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-f-i-n-a-l-график-отпуска-l': IISFINALГрафикОтпускаLForm,
    'i-i-s-f-i-n-a-l-должности-l': IISFINALДолжностиLForm,
    'i-i-s-f-i-n-a-l-организации-l': IISFINALОрганизацииLForm,
    'i-i-s-f-i-n-a-l-отделы-l': IISFINALОтделыLForm,
    'i-i-s-f-i-n-a-l-расчетный-лист-l': IISFINALРасчетныйЛистLForm,
    'i-i-s-f-i-n-a-l-согласие-на-опд-l': IISFINALСогласиеНаОпдLForm,
    'i-i-s-f-i-n-a-l-сотрудники-l': IISFINALСотрудникиLForm,
    'i-i-s-f-i-n-a-l-график-отпуска-e': IISFINALГрафикОтпускаEForm,
    'i-i-s-f-i-n-a-l-должности-e': IISFINALДолжностиEForm,
    'i-i-s-f-i-n-a-l-организации-e': IISFINALОрганизацииEForm,
    'i-i-s-f-i-n-a-l-отделы-e': IISFINALОтделыEForm,
    'i-i-s-f-i-n-a-l-расчетный-лист-e': IISFINALРасчетныйЛистEForm,
    'i-i-s-f-i-n-a-l-согласие-на-опд-e': IISFINALСогласиеНаОпдEForm,
    'i-i-s-f-i-n-a-l-сотрудники-e': IISFINALСотрудникиEForm
  },

});

export default translations;
