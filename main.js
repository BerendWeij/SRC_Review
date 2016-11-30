import EntityFactory from './factories/entityfactory';

export default class Main {

  constructor(){
    console.log('Ready. Main application running');

    this.setup();
  }

  setup(){
    let testEntity;

    this.entityFactory = new EntityFactory();

    testEntity = this.entityFactory.create();
  }

}