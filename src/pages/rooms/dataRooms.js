import imgRoom1_mobile from '../../assets/roomPage/room1_mobile.jpg'
import imgRoom1_desktop from '../../assets/roomPage/room1_desktop.jpg'
import imgRoom2_mobile from '../../assets/roomPage/room2_mobile.jpg'
import imgRoom2_desktop from '../../assets/roomPage/room2_desktop.jpg'
import imgRoom3_mobile from '../../assets/roomPage/room3_mobile.jpg'
import imgRoom3_desktop from '../../assets/roomPage/room3_desktop.jpg'
import imgRoom4_mobile from '../../assets/roomPage/room4_mobile.jpg'
import imgRoom4_desktop from '../../assets/roomPage/room4_desktop.jpg'

const dataRooms = [
    {
        id: 1,
        title: "roomTitle1",
        description: "roomDescription1",
        servicesRoom: ["room1ServiceRoom1", "room1ServiceRoom2", "room1ServiceRoom3", "room1ServiceRoom4", "room1ServiceRoom5"],
        imgRoom1_mobile: imgRoom1_mobile,
        imgRoom1_desktop: imgRoom1_desktop 
    },
    {
        id: 2,
        title: "roomTitle2",
        description: "roomDescription2",
        servicesRoom: ["room2ServiceRoom1", "room2ServiceRoom2", "room2ServiceRoom3", "room2ServiceRoom4", "room2ServiceRoom5"],
        imgRoom1_mobile: imgRoom2_mobile,
        imgRoom1_desktop: imgRoom2_desktop 
    },
    {
        id: 3,
        title: "roomTitle3",
        description: "roomDescription3",
        servicesRoom: ["room3ServiceRoom1", "room3ServiceRoom2", "room3ServiceRoom3", "room3ServiceRoom4", "room3ServiceRoom5"],
        imgRoom1_mobile: imgRoom3_mobile,
        imgRoom1_desktop: imgRoom3_desktop 
    },
    {
        id: 4,
        title: "roomTitle4",
        description: "roomDescription4",
        servicesRoom: ["room4ServiceRoom1", "room4ServiceRoom2", "room4ServiceRoom3", "room4ServiceRoom4", "room4ServiceRoom5"],
        imgRoom1_mobile: imgRoom4_mobile,
        imgRoom1_desktop: imgRoom4_desktop 
    }
];

export default dataRooms;