<template>
    <div class="edu-course-area course-area-1 edu-section-gap bg-lighten01">
        <div class="container">
            <SectionTitle
                :preTitle="subTitle"
                :title="title"
                alignment="section-center"
            />
            <div class="row g-5" v-if="categoria === CATEGORIAS.PUBLICACIONES">
                <div
                    v-if="!isLoadingPublicaciones"
                    class="col-md-6 col-xl-4"
                    data-aos-delay="150"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    v-for="(item, index) in getPublicaciones_All(publicaciones).slice(-3)"
                    :key="index"
                >
                    <CourseTypeOne :item="item" :categoria="categoria" />
                </div>
            </div>

            <div class="row g-5" v-if="categoria === CATEGORIAS.NOTICIAS">
                <div
                    v-if="!isLoadingPublicaciones"
                    class="col-md-6 col-xl-4"
                    data-aos-delay="150"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    v-for="(item, index) in getNoticias(publicaciones).slice(-3)"
                    :key="index"
                >
                    <CourseTypeOne :item="item" :categoria="categoria" />
                </div>
            </div>

            <div class="row g-5" v-if="categoria === CATEGORIAS.SERVICIOS">
                <div
                    v-if="!isLoadingPublicaciones"
                    class="col-md-6 col-xl-4"
                    data-aos-delay="150"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    v-for="(item, index) in getServicios(publicaciones).slice(-3)"
                    :key="index"
                >
                    <CourseTypeOne :item="item" :categoria="categoria" />
                </div>
            </div>

            <div class="row g-5" v-if="categoria === CATEGORIAS.EVENTOS">
                <div
                    v-if="!isLoadingEventos"
                    class="col-md-6 col-xl-4"
                    data-aos-delay="150"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    v-for="(item, index) in eventos.slice(-3)"
                    :key="index"
                >
                    <CourseTypeOne :item="item" :categoria="categoria" />
                </div>
            </div>
            <div
                class="course-view-all"
                data-aos-delay="150"
                data-aos="fade-up"
                data-aos-duration="1200"
            >
                <router-link :to="`/Recursos/${categoria}`" class="edu-btn"
                    >Ver Mas de {{ categoria }} <i class="icon-4"></i
                ></router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useQuery } from "vue-query";
import courseData from "../../data/course.json";
import SectionTitle from "../common/SectionTitle.vue";
import CourseTypeOne from "../course/CourseTypeOne.vue";
import { getEventos, getPublicaciones } from "../../api/institucionAPI";
import { CATEGORIAS } from "../../types/types";

const { title, subTitle, categoria } = defineProps(["title", "subTitle", "categoria"]);

const { isLoading: isLoadingPublicaciones, data: publicaciones } = useQuery(
    "publicaciones",
    getPublicaciones
);

const { isLoading: isLoadingEventos, data: eventos } = useQuery("eventos", getEventos);

const getPublicaciones_All = (publicaciones) => {
    return publicaciones.filter(
        (s) =>
            s.publicaciones_tipo != CATEGORIAS.NOTICIA &&
            s.publicaciones_tipo != CATEGORIAS.SERVICIO
    );
};

const getNoticias = (noticias) => {
    return noticias.filter((s) => s.publicaciones_tipo === CATEGORIAS.NOTICIA);
};

const getServicios = (servicios) => {
    return servicios.filter((s) => s.publicaciones_tipo === CATEGORIAS.SERVICIO);
};
</script>
