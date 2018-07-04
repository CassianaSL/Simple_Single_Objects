export class Livro {
    constructor(titulo, autor, numeroDePaginas) {
        this._titulo = titulo;
        this._autor = autor;
        this._numeroDePaginas = numeroDePaginas;
        this._paginaAtual = 0;
        this._diasLidos = 0;
        this._terminado = false;
    }

    lidoHoje(paginas) {
        if (this._paginaAtual === this._numeroDePaginas) return;

        if (this._paginaAtual+paginas <= this._numeroDePaginas) {
            this._paginaAtual += paginas;
        } else this._paginaAtual = this._numeroDePaginas;

        this._diasLidos++;
    }

    mesmoAutor(livro) {
        return this._autor === livro.autor;
    }

    mesmoDiasLidos(livro) {
        return this._diasLidos === livro.diasLidos;
    }

    get terminado() {
        return this._paginaAtual === this._numeroDePaginas;
    }

    get diasLidos() {
        return this._diasLidos;
    }

    get paraLer() {
        return this._numeroDePaginas - this._paginaAtual;
    }

    get titulo() {
        return this._titulo;
    }

    get autor() {
        return this._autor;
    }

    get numeroDePaginas() {
        return this._numeroDePaginas;
    }

    get paginaAtual() {
        return this._paginaAtual;
    }
}
