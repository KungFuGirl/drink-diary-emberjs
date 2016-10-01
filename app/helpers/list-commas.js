import Ember from 'ember';

export function listCommas(args) {
  let [currentIndex, listLength] = args;
  if (currentIndex < listLength - 1) {
    return ", "
  }
}

export default Ember.Helper.helper(listCommas);
