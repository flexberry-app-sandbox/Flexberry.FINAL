import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипEnum from '../enums/i-i-s-f-i-n-a-l-тип';

export default FlexberryEnum.extend({
  enum: ТипEnum,
  sourceType: 'IIS.FINAL.Тип'
});
