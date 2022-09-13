
import "../Styles/Entrega.scss";

export default function Entregas() {
  return (
    <>
      <article className="task">
      <span className="si" style={{fontSize: '32px', fontWeight: 'Bold'}}>Tailwind y Bootstrap </span>
        <p>Paulina Sarai Gomez Rodriguez - - 19 sep 2022</p>
        <p className="si">Valor: 3 Pts</p>
        <section className="task__desc border__radius">
          <p className="text">
          Objetivos: 

Organiza un documento en elementos lógicos, tales como: encabezado, párrafo, etc.
Define las operaciones tipográficas y las funciones que debe ejecutar un programa visualizador sobre dichos elementos.
Introducir  diversos elementos de Javascript.
La importancia de los formularios.
La importancia de la creación de diseño de la arquitectura, el esquema general del sistema y la concepción modular.

          </p>
          <br />
          <p className="text">
          Teoría:

Forme equipo de máximo 7 personas, los equipos serán conformados bajo el propio criterio de los alumnos.
Lea y analice los archivos de los siguientes links:

          </p>
          <br />
          <p className="text">
          Deberá crear una página web e-learning para la escuela politecnica. El diseño e implantación  de aprendizaje electrónico (e-learning)  a proponer debe ser esenciale para el desarrollo y la perspectiva de las tecnologías de la informática y las comunicaciones en la gestión del conocimiento y en el proceso de enseñanza-aprendizaje; tome como base la oferta academica de 2 modulos de aprendizaje. Lo anterior hace necesaria la creación de una nueva metodología, con el propósito de estandarizar la concepción, diseño e implantación de este tipo de sistemas, y crear artefactos básicos como soporte de cualquier plataforma desarrollable. Dicho proyecto sostiene, dentro de sus elementos claves,  que viabilizan el proceso de la gestión del conocimiento en este modulo de aprendizaje.
          </p>
          <br />
          <p className="text">
          Deberán realizar un sitio web completo y funcional que contenga los siguientes elementos funcionales:

Registro de usuarios ( para ambas partes: profesores y alumnos)
Inicios de sesión
Bases de datos 
Animaciones
Jerarquía web
Análisis de requerimientos.
El mínimo de paginas para el sitio dependerá del tema y acciones que se puedan hacer dentro del sitio, así como el diseño general del sitio
          </p>
        </section>
        <form className="task__file border__radius">
            <input type="file" id="file" />
            <label className="transition" htmlFor="file">Seleccionar archivo</label>
            <div className="task__file-buttons">
                <button className="button__form border__radius__tiny transition">Enviar</button>
                <button className="button__form__second border__radius__tiny transition">Marcar como completada</button>
            </div>
        </form>
      </article>
    </>
  );
}