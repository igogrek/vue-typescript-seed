import Vue from 'vue'

Vue.filter('date', (value: Date | number) => {
  if (!(value instanceof Date)) {
    value = new Date(value);
  }
  return value.toDateString();
});
