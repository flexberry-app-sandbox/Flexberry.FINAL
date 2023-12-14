import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаЛиста: DS.attr('date', { defaultValue() { return new Date(); } }),
  номерЛиста: DS.attr('number'),
  отправлено: DS.attr('boolean', { defaultValue: false }),
  сотрудники: DS.belongsTo('i-i-s-f-i-n-a-l-сотрудники', { inverse: null, async: false }),
  составРасчета: DS.hasMany('i-i-s-f-i-n-a-l-состав-расчета', { inverse: 'расчетныйЛист', async: false })
});

export let ValidationRules = {
  датаЛиста: {
    descriptionKey: 'models.i-i-s-f-i-n-a-l-расчетный-лист.validations.датаЛиста.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерЛиста: {
    descriptionKey: 'models.i-i-s-f-i-n-a-l-расчетный-лист.validations.номерЛиста.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  отправлено: {
    descriptionKey: 'models.i-i-s-f-i-n-a-l-расчетный-лист.validations.отправлено.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-f-i-n-a-l-расчетный-лист.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  составРасчета: {
    descriptionKey: 'models.i-i-s-f-i-n-a-l-расчетный-лист.validations.составРасчета.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РасчетныйЛистE', 'i-i-s-f-i-n-a-l-расчетный-лист', {
    номерЛиста: attr('Номер листа', { index: 0 }),
    датаЛиста: attr('Дата составления листа', { index: 1 }),
    отправлено: attr('Отправлено', { index: 2 }),
    сотрудники: belongsTo('i-i-s-f-i-n-a-l-сотрудники', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 3 }),
      имя: attr('Имя', { index: 4 }),
      отчество: attr('Отчество', { index: 5 })
    }, { index: 6 }),
    составРасчета: hasMany('i-i-s-f-i-n-a-l-состав-расчета', 'Состав расчета', {
      тип: attr('Тип', { index: 0 }),
      наименование: attr('Наименование', { index: 1 }),
      сумма: attr('Сумма', { index: 2 }),
      ндфл: attr('Ндфл', { index: 3 }),
      взносы: attr('Взносы', { index: 4 }),
      всего: attr('Всего', { index: 5 })
    })
  });

  modelClass.defineProjection('РасчетныйЛистL', 'i-i-s-f-i-n-a-l-расчетный-лист', {
    номерЛиста: attr('Номер листа', { index: 0 }),
    датаЛиста: attr('Дата составления листа', { index: 1 }),
    отправлено: attr('Отправлено', { index: 5 })
  });
};
