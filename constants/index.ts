//toLowerCase(): unknown;

import { Product } from '@/types/index';

export const products: Product[] = [
    
    { id: 1, name: 'Cerveza Aguila Sixpack', image: '/src/assets/img/Products-beers/Aguilasixpack.png', price: 21900, category: 'beer', toLowerCase: () => 'aguila sixpack' },
    { id: 2, name: 'Cerveza Andina Sixpack', image: '/src/assets/img/Products-beers/Andinasixpack.png', price: 19900, category: 'beer', toLowerCase: () => 'andina sixpack' },
    { id: 3, name: 'Cerveza Poker Sixpack', image: '/src/assets/img/Products-beers/Pokerlatamax.png', price: 19900, category: 'beer', toLowerCase: () => 'poker sixpack' },
    { id: 4, name: 'Cerveza Aguila en Lata x 24', image: '/src/assets/img/Products-beers/aguila-lata-24.png', price: 79000, category: 'beer', toLowerCase: () => ' cerveza aguila lata x 24' },
    { id: 5, name: 'Cerveza Aguila Light en Lata x 6', image: '/src/assets/img/Products-beers/aguilalight-lata-6.png', price: 29000, category: 'beer', toLowerCase: () => 'cerveza light lata x 6' },
    { id: 6, name: 'Cerveza Aguila Ligth en Lata x 24', image: '/src/assets/img/Products-beers/Aguilalight-lata-24.png', price: 86000, category: 'beer', toLowerCase: () => 'cerveza light lata x 24' },
    { id: 7, name: 'Cerveza Club Colombia Sixpack', image: '/src/assets/img/Products-beers/clubcolombia-lata-6.png', price: 21000,  category: 'beer', toLowerCase: () => 'cerveza club colombia sixpack' },
    { id: 8, name: 'Club Colombia negra Sixpack', image: '/src/assets/img/Products-beers/clubcolombia-negra-lata-6.png', price: 23000,  category: 'beer', toLowerCase: () => 'club colombia negra sixpack' },
    { id: 9, name: 'Cerveza Corona Sixpack', image: '/src/assets/img/Products-beers/corona-6.png', price: 21000,  category: 'beer', toLowerCase: () => 'cerveza corona x 6' },
    { id: 10, name: 'Cerveza Corona en Lata x 6', image: '/src/assets/img/Products-beers/coronalata-6-269ml.png',  category: 'beer', price: 19.900, toLowerCase: () => 'cerveza corona lata x 6' },
    { id: 11, name: 'Cerveza Costeña Bacana x 24', image: '/src/assets/img/Products-beers/costena-bacana-lat.png', price: 66000,  category: 'beer',toLowerCase: () => 'cerveza costeña bacana x 24' },
    { id: 12, name: 'Cerveza Costeña x 24', image: '/src/assets/img/Products-beers/costena-lata-24.png', price: 60000,  category: 'beer', toLowerCase: () => 'cerveza costeña lata x 24' },
    { id: 13, name: 'Cerveza Light Limon Sixpack', image: '/src/assets/img/Products-beers/lightlimonlata.png', price: 23000,  category: 'beer', toLowerCase: () => 'cerveza light limon lata' },
    { id: 14, name: 'Vodka Bacardi añejo', image: '/src/assets/img/Products-vodka/Bacardianejo.png', price: 62000,  category: 'vodka', toLowerCase: () => 'bacardi añejo' },
    { id: 15, name: 'Vodka Bacardi Carta Blanca', image: '/src/assets/img/Products-vodka/BacardiCartaBlanca.png', price: 65000,  category: 'vodka', toLowerCase: () => 'bacardi carta blanca' },
    { id: 16, name: 'Vodka Absolut', image: '/src/assets/img/Products-vodka/vodka-absolut-mandrin.png', price: 89000,  category: 'vodka', toLowerCase: () => 'vodka absolut' },
    { id: 17, name: 'Ginebra Bombay', image: '/src/assets/img/Products-vodka/ginebra-bombay.png', price: 152000,  category: 'vodka', toLowerCase: () => 'ginebra bombay' },
    { id: 18, name: 'Vodka Absolut Pequeño', image: '/src/assets/img/Products-vodka/vodka-absolut-peq.png', price: 12000,  category: 'vodka', toLowerCase: () => 'vodka absolut pequeño' },
    { id: 19, name: 'Vodka Absolut', image: '/src/assets/img/Products-vodka/vodka-absolut.png', price: 89000,  category: 'vodka', toLowerCase: () => 'vodka absolut' },
    { id: 20, name: 'Ginebra Gordons', image: '/src/assets/img/Products-vodka/ginebra-gordons.png', price: 75000,  category: 'vodka', toLowerCase: () => 'ginebra gordons' },
    { id: 21, name: 'Ginebra Hendriks', image: '/src/assets/img/Products-vodka/ginebra-hendriks.png', price: 250000,  category: 'vodka', toLowerCase: () => 'ginebra hendriks' },
    { id: 22, name: 'Ginebra Tanqueray', image: '/src/assets/img/Products-vodka/ginebra-tanqueray.png', price: 138000,  category: 'vodka', toLowerCase: () => 'ginebra tanqueray' },
    { id: 23, name: 'Smirnoff Lulo', image: '/src/assets/img/Products-vodka/Smirnofflulo.png', price: 47000,  category: 'vodka', toLowerCase: () => 'smirnoff lulo' },
    { id: 24, name: 'Smirnoff', image: '/src/assets/img/Products-vodka/Smirnoffvodka.png', price: 47000,  category: 'vodka', toLowerCase: () => 'smirnoff' },
    { id: 25, name: 'Vodka Ketel One', image: '/src/assets/img/Products-vodka/vodka-ketel-one.png', price: 165000,  category: 'vodka', toLowerCase: () => 'vodka ketel' },
    { id: 26, name: 'Vodka Reyka', image: '/src/assets/img/Products-vodka/vodka-reyka.png', price: 150000,  category: 'vodka', toLowerCase: () => 'vodka reyka' },
    { id: 27, name: 'Aguardiente Verde caja', image: '/src/assets/img/Products-others/Nectarcajaverde.png', price: 45000,  category: 'otro', toLowerCase: () => 'nectar verde caja' },
    { id: 28, name: 'Aguardiente Verde Litro Grande', image: '/src/assets/img/Products-others/Nectarverdegrande.png', price: 85000,  category: 'otro', toLowerCase: () => 'nectar verde litro grande' },
    { id: 29, name: 'Aguardiente Verde Mediano', image: '/src/assets/img/Products-others/Nectarverdemed.png', price: 18000,  category: 'otro', toLowerCase: () => 'nectar verde nediano' },
    { id: 30, name: 'Buchanas 12 años', image: '/src/assets/img/Products-others/buchanas-12a.png', price: 175000,  category: 'otro', toLowerCase: () => 'buchanas' },
    { id: 31, name: 'Chivas 12 años', image: '/src/assets/img/Products-others/chivas-12a.png', price: 185000,  category: 'otro', toLowerCase: () => 'chivas' },
    { id: 32, name: 'Dewars 12 años', image: '/src/assets/img/Products-others/dewars-12a.png', price: 165000,  category: 'otro', toLowerCase: () => 'dewars' },
    { id: 33, name: 'Aguardiente Antioqueño Real', image: '/src/assets/img/Products-others/antioqueno-real.png', price: 55000,  category: 'otro', toLowerCase: () => 'aguardiente antioqueño' },
    { id: 34, name: 'Aguardiente Antioqueño sin azucar', image: '/src/assets/img/Products-others/antioqueno-sinazucar.png', price: 135000,  category: 'otro', toLowerCase: () => 'aguardiente antioqueño sin azucar' },
    { id: 35, name: 'Aguardiente Antioqueño Verde', image: '/src/assets/img/Products-others/antioqueno-verde.png', price: 55000,  category: 'otro', toLowerCase: () => 'aguardiente antioqueño verde' },
    { id: 36, name: 'Old Parr 12 años', image: '/src/assets/img/Products-others/old-parr-12a.png', price: 155000,  category: 'otro', toLowerCase: () => 'old parr 12 años' },
    { id: 37, name: 'Ron Havana Club', image: '/src/assets/img/Products-others/ronhavanaclub.png', price: 235000,  category: 'otro', toLowerCase: () => 'ron havanna club' },
    { id: 38, name: 'Ron Medellin 3 años', image: '/src/assets/img/Products-others/ronmedellin-3a.png', price: 105000,  category: 'otro', toLowerCase: () => 'ron medellin 3 años' },
    { id: 39, name: 'Ron Viejo de Caldas', image: '/src/assets/img/Products-others/ronviejodecaldas-med.png', price: 63000,  category: 'otro', toLowerCase: () => 'ron viejo de caldas' },
    { id: 40, name: 'Ron Viejo de Caldas Tradicional', image: '/src/assets/img/Products-others/ronviejodecaldas-trad.png', price: 65000,  category: 'otro', toLowerCase: () => 'ron viejo de caldas tradicional' },
    { id: 41, name: 'Tequila Don Julio Blanco', image: '/src/assets/img/Products-others/teq-donjulio-blanco.png', price: 235000,  category: 'otro', toLowerCase: () => 'tequila don julio blanco' },
    { id: 42, name: 'Tequila Don Julio 70', image: '/src/assets/img/Products-others/teq-donjulio70.png', price: 375000,  category: 'otro', toLowerCase: () => 'tequila don julio 70' },
    { id: 43, name: 'Tequila Jose Cuervo Especial', image: '/src/assets/img/Products-others/tequila-josecuervo-esp.png', price: 95000,  category: 'otro', toLowerCase: () => 'tequila jose cuervo especial' },
    { id: 44, name: 'Tequila Jose Cuervo', image: '/src/assets/img/Products-others/tequila-josecuervo.png', price: 85000,  category: 'otro', toLowerCase: () => 'tequila jose cuervo' },






]
