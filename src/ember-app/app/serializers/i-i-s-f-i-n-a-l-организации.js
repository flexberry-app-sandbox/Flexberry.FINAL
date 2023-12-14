import { Serializer as ОрганизацииSerializer } from
  '../mixins/regenerated/serializers/i-i-s-f-i-n-a-l-организации';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОрганизацииSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
