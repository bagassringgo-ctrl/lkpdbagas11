import { Component } from "./componen.js";
export class Navbar extends Component {
    render() {
        const  { namaSekolah } = this.props;
        return`
        <nav>
           <h2>${namaSekolah}</h2>
           <a href="#/home">home</a>
           <a href="#/home">about</a>
           <a href="#/home">kontak</a>
        `

    }
}