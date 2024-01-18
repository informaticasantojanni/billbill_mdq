import Bar from "../../../../src/pages/services/components/svg/Bar";
import Cocina from "../../../../src/pages/services/components/svg/Cocina";
import Dormitorio from "../../../../src/pages/services/components/svg/Dormitorio";
import Entretenimiento from "../../../../src/pages/services/components/svg/Entretenimiento";
import Lavadero from "../../../../src/pages/services/components/svg/Lavadero";
import Refrigeracion from "../../../../src/pages/services/components/svg/Refrigeracion";


const servicesData = [
    {
        id: 1,
        card: "card_1",
        image: Bar,
        title: 'title',
        items: ['item1', 'item2', 'item3', 'item4']
    },
    {
        id: 2,
        card: "card_2",
        image: Cocina,
        title: 'title',
        items: ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7' ]
    },
    {
        id: 3,
        card: "card_3",
        image: Dormitorio,
        title: 'title',
        items: ['item1', 'item2', 'item3', 'item4', 'item5' ]
    },
    {
        id: 4,
        card: "card_4",
        image: Entretenimiento,
        title: 'title',
        items: ['item1', 'item2', 'item3', 'item4' ]
    },
    {
        id: 5,
        card: "card_5",
        image: Lavadero,
        title: 'title',
        items: ['item1', 'item2']
    },
    {
        id: 6,
        card: "card_6",
        image: Refrigeracion,
        title: 'title',
        items: ['item1', 'item2', 'item3', 'item4', 'item5' ]
    }
]

export default servicesData;