import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  номер: DS.attr('number'),
  отправлено: DS.attr('boolean', { defaultValue: false }),
  подпись: DS.attr('boolean', { defaultValue: false }),
  сотрудники: DS.belongsTo('i-i-s-f-i-n-a-l-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-f-i-n-a-l-согласие-на-опд.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-f-i-n-a-l-согласие-на-опд.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  отправлено: {
    descriptionKey: 'models.i-i-s-f-i-n-a-l-согласие-на-опд.validations.отправлено.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  подпись: {
    descriptionKey: 'models.i-i-s-f-i-n-a-l-согласие-на-опд.validations.подпись.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-f-i-n-a-l-согласие-на-опд.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СогласиеНаОпдE', 'i-i-s-f-i-n-a-l-согласие-на-опд', {
    номер: attr('Номер', { index: 0 }),
    дата: attr('Дата составления', { index: 1 }),
    сотрудники: belongsTo('i-i-s-f-i-n-a-l-сотрудники', 'Сотрудники', {
      фамилия: attr('Фамилия', { index: 3, hidden: true }),
      имя: attr('Имя', { index: 4 }),
      отчество: attr('Отчество', { index: 5 }),
      серияП: attr('Серия паспорта', { index: 6 }),
      номерП: attr('Номер паспорта', { index: 7 })
    }, { index: 2, displayMemberPath: 'фамилия' }),
    подпись: attr('Подпись', { index: 8 }),
    отправлено: attr('Отправлено', { index: 9 })
  });

  modelClass.defineProjection('СогласиеНаОпдL', 'i-i-s-f-i-n-a-l-согласие-на-опд', {
    номер: attr('Номер', { index: 0 }),
    дата: attr('Дата согласия', { index: 1 }),
    сотрудники: belongsTo('i-i-s-f-i-n-a-l-сотрудники', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 2 }),
      имя: attr('Имя', { index: 3 }),
      отчество: attr('Отчество', { index: 4 })
    }, { index: -1, hidden: true }),
    подпись: attr('Подпись', { index: 5 }),
    отправлено: attr('Отправлено', { index: 6 })
  });
};
