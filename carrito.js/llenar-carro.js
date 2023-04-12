class carrito {
    comprarProducto(e){
        e.preventDefault();
        if (e.target.classList.contains('agregar-carrito btn-3')) {
            const producto= e.target.parentElement.parentElement;
           // this.leerDatosProducto(producto);

            console . log(producto);
        }
    }
}

