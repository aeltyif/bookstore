import Publisher from './publisher';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Publisher.extend({
  name: attr(),
  books: hasMany()
});
