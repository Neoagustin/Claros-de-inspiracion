import img from '../../../assets/img/imgCurso.jpg';

const courses =
  [
    {
      id: 1,
      title: "Curso de React",
      authorName: "Sebastian Ancona",
      authorImg: "img.jpg",
      date: "Febrero 16 2024",
      img: img,
      description: "Aprende a construir aplicaciones web utilizando ReactJS",
      introductoryVideo: "https://www.youtube.com/watch?v=example",
      classes: [
        {
          id: 1,
          title: "Introducción a React",
          videos: [
            {
              id: 1,
              title: "Video 1: Conceptos básicos de React",
              url: "https://www.youtube.com/watch?v=video1"
            }
          ]
        },
        {
          id: 2,
          title: "Componentes en React",
          videos: [
            {
              id: 1,
              title: "Video 1: Creación de componentes",
              url: "https://www.youtube.com/watch?v=video2"
            },
            {
              id: 2,
              title: "Video 2: Propiedades y estado",
              url: "https://www.youtube.com/watch?v=video3"
            }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Curso de JavaScript",
      authorName: "Sebastian Ancona",
      authorImg: "img.jpg",
      date: "Febrero 16 2024",
      img: "img.jpg",
      description: "Aprende los fundamentos del lenguaje de programación JavaScript",
      introductoryVideo: "https://www.youtube.com/watch?v=example",
      classes: [
        // Clases para el curso de JavaScript...
      ]
    },
    {
      id: 3,
      title: "Curso de NodeJS",
      authorName: "Sebastian Ancona",
      authorImg: "img.jpg",
      date: "Febrero 16 2024",
      img: "img.jpg",
      description: "Aprende a construir aplicaciones backend utilizando Node.js",
      introductoryVideo: "https://www.youtube.com/watch?v=example",
      classes: [
        // Clases para el curso de NodeJS...
      ]
    }
  ]

export default courses;