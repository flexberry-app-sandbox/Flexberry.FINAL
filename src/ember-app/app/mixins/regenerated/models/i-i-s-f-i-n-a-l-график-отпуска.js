import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  датаНач: DS.attr('date'),
  колДней: DS.attr('number'),
  номер: DS.attr('number'),
  отправлено: DS.attr('boolean', { defaultValue: false }),
  сотрудники: DS.belongsTo('i-i-s-f-i-n-a-l-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-f-i-n-a-l-график-отпуска.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаНач: {
    descriptionKey: 'models.i-i-s-f-i-n-a-l-график-отпуска.validations.датаНач.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  колДней: {
    descriptionKey: 'models.i-i-s-f-i-n-a-l-график-отпуска.validations.колДней.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-f-i-n-a-l-график-отпуска.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  отправлено: {
    descriptionKey: 'models.i-i-s-f-i-n-a-l-график-отпуска.validations.отправлено.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-f-i-n-a-l-график-отпуска.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГрафикОтпускаE', 'i-i-s-f-i-n-a-l-график-отпуска', {
    номер: attr('Номер', { index: 0 }),
    дата: attr('Дата составления', { index: 1 }),
    датаНач: attr('Дата начала отпуска', { index: 2 }),
    колДней: attr('Количество дней', { index: 3 }),
    сотрудники: belongsTo('i-i-s-f-i-n-a-l-сотрудники', 'Сотрудники', {
      фамилия: attr('Фамилия', { index: 5, hidden: true }),
      имя: attr('Имя', { index: 6 }),
      отчество: attr('Отчество', { index: 7 })
    }, { index: 4, displayMemberPath: 'фамилия' }),
    отправлено: attr('Отправлено', { index: 8 })
  });

  modelClass.defineProjection('ГрафикОтпускаL', 'i-i-s-f-i-n-a-l-график-отпуска', {
    номер: attr('Номер', { index: 0 }),
    дата: attr('Дата составления', { index: 1 }),
    датаНач: attr('Дата начала', { index: 2 }),
    колДней: attr('Количество дней', { index: 3 }),
    сотрудники: belongsTo('i-i-s-f-i-n-a-l-сотрудники', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 4 }),
      имя: attr('Имя', { index: 5 }),
      отчество: attr('Отчество', { index: 6 })
    }, { index: -1, hidden: true }),
    отправлено: attr('Отправлено', { index: 7 })
  });
};
