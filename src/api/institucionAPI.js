import axios from "axios";

const institucionAPI = axios.create({
    baseURL: "https://serviciopagina.upea.bo/api",
});

//https://serviciopagina.upea.bo/api/UpeaCarrera/7

/* DATOS OBTENIDOS DESDE LA API ================== */
export const getInstitucion = async () => {
    const res = await institucionAPI.get(
        "/InstitucionUPEA/" + import.meta.env.VITE_APP_ID_INSTITUCION
    );
    return res.data.Descripcion;
};

export const getAreas = async () => {
    const res = await institucionAPI.get(
        "/area/"
    );
    return res.data;
};

//https://serviciopagina.upea.bo/api/UpeaCarrera
export const getCarreras = async () => {
    const res = await institucionAPI.get(
        "/UpeaCarrera/"
    );
    return res.data;
};

export const getCarrera = async (data) => {
    const res = await institucionAPI.get(
        "/InstitucionUPEA/"+data.queryKey[1]
    );
    return res.data.Descripcion;
};

export const getLinksInstExtAllOne = async (data) => {
    const res = await institucionAPI.get(
        "/linksIntExtAll/" + data.queryKey[1]
    );
    return res.data;
};

export const getConvocatorias = async () => {
    const res = await institucionAPI.get(
        "/convocatoriasAll/" + import.meta.env.VITE_APP_ID_CARRERA
    );
    return res.data;
};

export const getCursos = async () => {
    const res = await institucionAPI.get(
        "/cursosAll/" + import.meta.env.VITE_APP_ID_CARRERA
    );
    return res.data;
};

export const getLinksInstExtAll = async () => {
    const res = await institucionAPI.get(
        "/linksIntExtAll/" + import.meta.env.VITE_APP_ID_INSTITUCION
    );
    return res.data;
};

export const getServicios = async () => {
    const res = await institucionAPI.get(
        "/ServicioAll/" + import.meta.env.VITE_APP_ID_INSTITUCION
    );
    return res.data;
};

export const getOfertasAcademicas = async () => {
    const res = await institucionAPI.get(
        "/OfertasAcademicasAll/" + import.meta.env.VITE_APP_ID_CARRERA
    );
    return res.data;
};

export const getPublicaciones = async () => {
    const res = await institucionAPI.get(
        "/publicacionesAll/" + import.meta.env.VITE_APP_ID_INSTITUCION
    );
    return res.data;
};

export const getPublicacion = async (id) => {
    const res = await institucionAPI.get(
        "/publicaciones/" + id
    );
    return res.data.Descripcion;
};

export const getGacetas = async () => {
    const res = await institucionAPI.get(
        "/gacetaunivAll/" + import.meta.env.VITE_APP_ID_INSTITUCION
    );
    return res.data;
};


export const getEventos = async () => {
    const res = await institucionAPI.get(
        "/eventoAll/" + import.meta.env.VITE_APP_ID_INSTITUCION
    );
    return res.data;
};


export const getEvento = async (id) => {
    const res = await institucionAPI.get(
        "/evento/" + id
    );
    return res.data.Descripcion;
};

export const getVideos = async () => {
    const res = await institucionAPI.get(
        "/VideosAll/" + import.meta.env.VITE_APP_ID_INSTITUCION
    );
    return res.data;
};
