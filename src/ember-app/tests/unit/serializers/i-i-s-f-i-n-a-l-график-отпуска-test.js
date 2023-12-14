import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-f-i-n-a-l-график-отпуска', 'Unit | Serializer | i-i-s-f-i-n-a-l-график-отпуска', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-f-i-n-a-l-график-отпуска',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-f-i-n-a-l-тип',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
