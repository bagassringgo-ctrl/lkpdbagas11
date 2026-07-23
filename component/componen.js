export class Component {
constructor(props = {}){
   //props adalah data yang di kirim dari luar ke komponen
   this.props = props; 
}
 render() {
    throw new error (`render() class belum di buat`);
}
}