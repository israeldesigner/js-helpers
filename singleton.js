//criação de um objeto e garantir uma única instância de sua classe.
let _instance = Symbol();
let _singletonEnforcer = Symbol();

class Foo {
  constructor(enforce) {
    console.log('new instance');
    if (enforce !== _singletonEnforcer) {
      throw('Cannot constructor singleton')
    }
  }

  static get getInstance() {
    if(!this[_instance]) {
      this[_instance] = new Foo(_singletonEnforcer);
    }

    return this[_instance];
  }
}

Foo.getInstance // => new instance
Foo.getInstance // => return object instantied