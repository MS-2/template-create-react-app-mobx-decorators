import { observable, action } from 'mobx';

class DemoStore {
  @observable greeting = 'Hello React MobX';

  @observable numero = 0;
  @observable nombre = "";
  @observable lista = ["juan",6,"jose"];

 
  @action plus=()=>{
    this.numero++
  }
  @action push=(e)=>{
    this.lista.push(e)
  }


}

const demoStore = new DemoStore();

export default demoStore;