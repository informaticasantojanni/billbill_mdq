import img1 from "../../../assets/rooms/shared_boys.jpg";
import img2 from "../../../assets/rooms/shared_girls.jpg";
import img3 from "../../../assets/rooms/shared_mix.jpg";
import img4 from "../../../assets/rooms/private.jpg";


const roomsList = [
  {
    id: 1,
    image: img1,
    category: "Habitaciones compartidas",
    type: "Solo chicos",
    bathroom: "Baño compartido",
    color1: 'var(--secondary-1)',
    color2: 'var(--secondary-1)'
  },
  {
    id: 2,
    image: img2,
    category: "Habitaciones compartidas",
    type: "Solo chicas",
    bathroom: "Baño compartido",
    color1: 'var(--secondary-1)',
    color2: 'var(--secondary-1)'
  },
  {
    id: 3,
    image: img3,
    category: "Habitaciones compartidas",
    type: "Mixtas",
    bathroom: "Baño compartido",
    color1: 'var(--secondary-1)',
    color2: 'var(--secondary-1)'
  },
  {
    id: 4,
    image: img4,
    category: "Habitaciones privadas",
    type: "",
    bathroom: "Baño privado",
    color1: 'var(--secondary-1)',
    color2: 'var(--secondary-1)'
  },
];

export default roomsList;
