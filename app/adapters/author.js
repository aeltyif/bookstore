import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({
  shouldReloadRecord() {
    return false;
  },
  shouldBackgroundReloadRecord(store, snapshot) {
    const loadedAt = snapshot.record.get('loadedAt');

    if (Date.now() - loadedAt > 3600000) {
      return true;
    } else {
      return false;
    }
  }
});
