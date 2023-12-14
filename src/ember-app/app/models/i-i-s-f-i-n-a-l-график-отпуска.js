import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ГрафикОтпускаMixin
} from '../mixins/regenerated/models/i-i-s-f-i-n-a-l-график-отпуска';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ГрафикОтпускаMixin, Validations, {
});

defineProjections(Model);

export default Model;
