import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-f-i-n-a-l-расчетный-лист', 'Unit | Model | i-i-s-f-i-n-a-l-расчетный-лист', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-f-i-n-a-l-график-отпуска',
    'model:i-i-s-f-i-n-a-l-должности',
    'model:i-i-s-f-i-n-a-l-организации',
    'model:i-i-s-f-i-n-a-l-отделы',
    'model:i-i-s-f-i-n-a-l-расчетный-лист',
    'model:i-i-s-f-i-n-a-l-согласие-на-опд',
    'model:i-i-s-f-i-n-a-l-состав-расчета',
    'model:i-i-s-f-i-n-a-l-сотрудники',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
