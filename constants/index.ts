//toLowerCase(): unknown;

import { Product } from '@/types/index';

export const products: Product[] = [
    
    { id: 1, name: 'Cerveza A', image: '/src/assets/img/Products-beers/Aguilasixpack.png', price: 13500, category: 'beer', toLowerCase: () => 'cerveza d' },
    { id: 2, name: 'Cerveza Andina', image: '/src/assets/img/Products-beers/Andinasixpack.png', price: 12600, category: 'beer', toLowerCase: () => 'cerveza andina' },
    { id: 3, name: 'Cerveza Poker lata', image: '/src/assets/img/Products-beers/Pokerlatamax.png', price: 14600, category: 'beer', toLowerCase: () => 'cerveza poker' },
    { id: 4, name: 'Cerveza Aguila lata', image: '/src/assets/img/Products-beers/aguila-lata-24.png', price: 19000, category: 'beer', toLowerCase: () => 'cerveza aguila lata' },
    { id: 5, name: 'Cerveza Light lata', image: '/src/assets/img/Products-beers/aguilalight-lata-6.png', price: 19000, category: 'beer', toLowerCase: () => 'cerveza light lata' },
    { id: 6, name: 'Cerveza aguila ligth', image: '/src/assets/img/Products-beers/Aguilalight-lata-24.png', price: 19000, category: 'beer', toLowerCase: () => 'cerveza light lata' },
    { id: 7, name: 'Cerveza Club Colombia', image: '/src/assets/img/Products-beers/clubcolombia-lata-6.png', price: 19000,  category: 'beer', toLowerCase: () => 'cerveza club colombia' },
    { id: 8, name: 'Club Colombia negra', image: '/src/assets/img/Products-beers/clubcolombia-negra-lata-6.png', price: 19000,  category: 'beer', toLowerCase: () => 'club colombia negra' },
    { id: 9, name: 'Cerveza Corona', image: '/src/assets/img/Products-beers/corona-6.png', price: 19000,  category: 'beer', toLowerCase: () => 'cerveza corona' },
    { id: 10, name: 'Cerveza Corona lata', image: '/src/assets/img/Products-beers/coronalata-6-269ml.png',  category: 'beer', price: 19000, toLowerCase: () => 'cerveza corona lata' },
    { id: 11, name: 'Cerveza Costeña Bacana', image: '/src/assets/img/Products-beers/costena-bacana-lat.png', price: 19000,  category: 'beer',toLowerCase: () => 'cerveza costeña bacana' },
    { id: 12, name: 'Cerveza Costeña', image: '/src/assets/img/Products-beers/costena-lata-24.png', price: 19000,  category: 'beer', toLowerCase: () => 'cerveza costeña lata' },
    { id: 13, name: 'Cerveza Light Limon', image: '/src/assets/img/Products-beers/lightlimonlata.png', price: 19000,  category: 'beer', toLowerCase: () => 'cerveza light limon lata' },
    { id: 14, name: 'Vodka', image: '/src/assets/img/Products-vodka/Bacardianejo.png', price: 45000,  category: 'vodka', toLowerCase: () => 'bacardi añejo' },
    { id: 15, name: 'Vodka', image: '/src/assets/img/Products-vodka/Bacardianejo.png', price: 45000,  category: 'vodka', toLowerCase: () => 'bacardi añejo' },
    { id: 16, name: 'Aguardiente', image: '/src/assets/img/Products-others/Nectarcajaverde.png', price: 35000,  category: 'otro', toLowerCase: () => 'aguardiente amarillo' },


]
