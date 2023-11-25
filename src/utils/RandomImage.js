/* ----------------------------------------------------------------
    DESCRIPCIÓN : esta función retorna una imagen de manera 
        aleatoria siempre que se le pase un array de imágenes.
---------------------------------------------------------------- */
const RandomImage = (portada) => {
    /* IMAGENES ALEATORIAS */
    const indiceAleatorio = Math.floor(Math.random() * portada.length);
    const imagenSeleccionada = portada[indiceAleatorio].portada_imagen;
    return `${
        import.meta.env.VITE_APP_ROOT_API
    }/InstitucionUpea/Portada/${imagenSeleccionada}`;
};
export default RandomImage;
