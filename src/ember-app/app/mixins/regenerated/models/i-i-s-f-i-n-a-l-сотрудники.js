import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  id: DS.attr('number'),
  имя: DS.attr('string'),
  номерП: DS.attr('string'),
  отчество: DS.attr('string'),
  серияП: DS.attr('string'),
  фамилия: DS.attr('string'),
  должности: DS.belongsTo('i-i-s-f-i-n-a-l-должности', { inverse: null, async: false }),
  организации: DS.belongsTo('i-i-s-f-i-n-a-l-организации', { inverse: null, async: false }),
  отделы: DS.belongsTo('i-i-s-f-i-n-a-l-отделы', { inverse: null, async: false })
});

export let ValidationRules = {
  id: {
    descriptionKey: 'models.i-i-s-f-i-n-a-l-сотрудники.validations.id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  имя: {
    descriptionKey: 'models.i-i-s-f-i-n-a-l-сотрудники.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерП: {
    descriptionKey: 'models.i-i-s-f-i-n-a-l-сотрудники.validations.номерП.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  отчество: {
    descriptionKey: 'models.i-i-s-f-i-n-a-l-сотрудники.validations.отчество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  серияП: {
    descriptionKey: 'models.i-i-s-f-i-n-a-l-сотрудники.validations.серияП.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фамилия: {
    descriptionKey: 'models.i-i-s-f-i-n-a-l-сотрудники.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должности: {
    descriptionKey: 'models.i-i-s-f-i-n-a-l-сотрудники.validations.должности.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организации: {
    descriptionKey: 'models.i-i-s-f-i-n-a-l-сотрудники.validations.организации.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  отделы: {
    descriptionKey: 'models.i-i-s-f-i-n-a-l-сотрудники.validations.отделы.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиE', 'i-i-s-f-i-n-a-l-сотрудники', {
    id: attr('Id', { index: 0 }),
    фамилия: attr('Фамилия', { index: 1 }),
    имя: attr('Имя', { index: 2 }),
    отчество: attr('Отчество', { index: 3 }),
    серияП: attr('Серия паспорта', { index: 4 }),
    номерП: attr('Номер паспорта', { index: 5 }),
    должности: belongsTo('i-i-s-f-i-n-a-l-должности', 'Должности', {
      название: attr('Должность', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'название' }),
    отделы: belongsTo('i-i-s-f-i-n-a-l-отделы', 'Отделы', {
      наименование: attr('Отдел', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'наименование' }),
    организации: belongsTo('i-i-s-f-i-n-a-l-организации', 'Организации', {
      название: attr('Организация', { index: 11, hidden: true })
    }, { index: 10, displayMemberPath: 'название' })
  });

  modelClass.defineProjection('СотрудникиL', 'i-i-s-f-i-n-a-l-сотрудники', {
    id: attr('Id', { index: 0 }),
    фамилия: attr('Фамилия', { index: 1 }),
    имя: attr('Имя', { index: 2 }),
    отчество: attr('Отчество', { index: 3 }),
    серияП: attr('Серия паспорта', { index: 4 }),
    номерП: attr('Номер паспорта', { index: 5 }),
    должности: belongsTo('i-i-s-f-i-n-a-l-должности', 'Должность', {
      название: attr('Должность', { index: 6 })
    }, { index: -1, hidden: true }),
    отделы: belongsTo('i-i-s-f-i-n-a-l-отделы', 'Отдел', {
      наименование: attr('Отдел', { index: 7 })
    }, { index: -1, hidden: true }),
    организации: belongsTo('i-i-s-f-i-n-a-l-организации', 'Организация', {
      название: attr('Организация', { index: 8 })
    }, { index: -1, hidden: true })
  });
};
