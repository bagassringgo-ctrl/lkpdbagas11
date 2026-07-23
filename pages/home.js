import { Component } from "../component/componen.js";
import { Navbar } from "../component/navbar.js";
import { Footer } from "../component/footer.js";
 
export class HomePage extends Component {
    render() {
        const navbar = new Navbar({
            namaSekolah: "SMK YADIKA SOREANG - Home"
        }).render();
        const footer = new Footer().render();

        return `${navbar}
        <main>
        <h1> selamat datang di website yadika soreang (yaso) -home </h1>
        <P> ini adalah halaman utama (home) dari website sekolah kami </p>
        </main>
        ${footer}
        `
    }
}
