<?php
/*
 * Template Name: Plantilla API
 * Template Post Type: page
 */
get_header();
?>

<div class="container mt-5">
    <h1 class="h1 mt-5 text-center"><?php the_title(); ?></h1>
    <div class="container col-12 d-flex justify-content-center" id="divPromociones"></div>
</div>

<template id="plantillaPromocion">
    <div id="plantillaNumero" class="my-5 mx-2">
        <div class="caja-promocion">
            <img id="plantillaImagen" alt="Imagen de la promoción">
            <div class="datos-promocion">
                <h3 id="plantillaProducto"></h3>
                <h4 id="plantillaVigencia"></h4>
                <p id="plantillaUbicacion"></p>
            </div>
        </div>
    </div>
</template>

<script src="<?php echo get_template_directory_uri(); ?>/js/tarjetas.js"></script>

<?php
get_footer();
