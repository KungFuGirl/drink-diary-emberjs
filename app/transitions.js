export default function() {
  this.transition(
    this.childOf('#ingredient-list'),
    this.use('explode', {
      matchBy: 'data-ingredient-id',
      use: [ 'fly-to', {easing: 'spring'} ]
    }),
    this.debug()
  );
}
