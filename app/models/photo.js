import DS from 'ember-data';

export default DS.Model.extend({
  photoFileName: DS.attr('string'),
  photoContentType: DS.attr('string'),
  photoFileSize: DS.attr('integer'),
  isPrivate: DS.attr('boolean'),
  photoUpdatedAt: DS.attr('datetime'),
  soda: DS.belongsTo('soda')
  // user: DS.belongsTo('user')

  // How do I declare this in ember model? Couldn't find an answer. has_attached_file :photo

});
