import salad from './Components/Images/salad.jpg';
import bruchetta from './Components/Images/bruchetta.jpg';
import pasta from './Components/Images/pasta.jpg';

const recipes = [
    {id: 1,
    title: "Greek Salad",
    price: 12.99,
    image: salad,
    description: "The famous greek salad with crispy lettuce, peppers, olives, and our Chicago style fota cheese, garnished with crunchy garlic and rosemary croutons",
    },
    {id: 2,
    title: "Bruchetta",
    price: 5.99,
    image: bruchetta,
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    {id: 3,
    title: "Penne Pasta",
    price: 15.99,
    image: pasta,
    description: "Our Penne Pasta is a classic Italian favorite, tossed in a rich, homemade tomato basil sauce. Topped with freshly grated Parmesan cheese"

    },
];

export default recipes;