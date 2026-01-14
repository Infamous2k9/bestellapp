// Gerichte und Beilagen/Getränke
export const dishes = [
    //  Ramen
    {
        "name": "Shoyu Ramen",
        "description": "Sojasaucenbrühe, Schweinefleisch, Ei, Frühlingszwiebeln",
        "price": 12.90,
        "category": "Ramen",
        "image": "./assets/img/shoyu-ramen.png",
    },
    {
        "name": "Tonkotsu Ramen",
        "description": "Cremige Schweineknochenbrühe, Chashu, Ei, Knoblauchöl",
        "price": 13.90,
        "category": "Ramen",
        "image": "./assets/img/tonkotsu-ramen.png",
    },
    {
        "name": "Miso Ramen",
        "description": "Miso-Brühe, Hackfleisch, Mais, Butter, Frühlingszwiebeln",
        "price": 13.50,
        "category": "Ramen",
        "image": "./assets/img/miso-ramen.png",
    },
    {
        "name": "Veggie Ramen",
        "description": "Gemüsebrühe, Tofu, Pak Choi, Pilze",
        "price": 11.90,
        "category": "Ramen",
        "image": "./assets/img/veggie-ramen.png",
    },
    {
        "name": "Spicy Ramen",
        "description": "Scharfe Brühe, Schweinefleisch, Chiliöl, Ei",
        "price": 14.20,
        "category": "Ramen",
        "image": "./assets/img/spicy-ramen.png",
    },

    //  Sushi
    {
        "name": "Lachs Nigiri",
        "description": "Reis, frischer Lachs",
        "price": 6.50,
        "category": "Sushi",
        "image": "./assets/img/lachs-nigiri.png",
    },
    {
        "name": "Avocado Maki",
        "description": "Reis, Avocado, Nori",
        "price": 5.20,
        "category": "Sushi",
        "image": "./assets/img/avocado-maki.png",
    },
    {
        "name": "California Roll",
        "description": "Surimi, Avocado, Gurke",
        "price": 7.90,
        "category": "Sushi",
        "image": "./assets/img/california-roll.png",
    },
    {
        "name": "Tempura Roll",
        "description": "Garnelen-Tempura, Avocado, Sesam",
        "price": 8.90,
        "category": "Sushi",
        "image": "./assets/img/tempura-roll.png",
    },
    {
        "name": "Veggie Roll",
        "description": "Gurke, Avocado, Karotte",
        "price": 6.80,
        "category": "Sushi",
        "image": "./assets/img/veggie-roll.png",
    },

    //  Beilagen
    {
        "name": "Gyoza",
        "description": "Japanische Teigtaschen mit Fleischfüllung",
        "price": 5.90,
        "category": "Beilagen",
        "image": "./assets/img/gyoza.png",
    },
    {
        "name": "Edamame",
        "description": "Gedämpfte Sojabohnen mit Meersalz",
        "price": 4.50,
        "category": "Beilagen",
        "image": "./assets/img/edamame.png",
    },
    {
        "name": "Wakame Salat",
        "description": "Algen, Sesam, Sojasauce",
        "price": 4.90,
        "category": "Beilagen",
        "image": "./assets/img/wakame.png",
    },
    {
        "name": "Chicken Karaage",
        "description": "Frittiertes Hähnchen, japanisch mariniert",
        "price": 6.90,
        "category": "Beilagen",
        "image": "./assets/img/karaage.png",
    },
    {
        "name": "Reis",
        "description": "Gedämpfter japanischer Reis",
        "price": 2.50,
        "category": "Beilagen",
        "image": "./assets/img/reis.png",
    },

    //  Getränke
    {
        "name": "Grüner Tee",
        "description": "Traditioneller japanischer Grüntee",
        "price": 2.80,
        "category": "Getränke",
        "image": "./assets/img/gruener-tee.png",
    },
    {
        "name": "Ramune",
        "description": "Japanische Limonade",
        "price": 3.50,
        "category": "Getränke",
        "image": "./assets/img/ramune.png",
    },
    {
        "name": "Cola",
        "description": "Erfrischungsgetränk",
        "price": 3.00,
        "category": "Getränke",
        "image": "./assets/img/cola.png",
    },
    {
        "name": "Mineralwasser",
        "description": "Still oder Sprudel",
        "price": 2.50,
        "category": "Getränke",
        "image": "./assets/img/wasser.png",
    },
    {
        "name": "Eistee Pfirsich",
        "description": "Kalter Schwarztee mit Pfirsichgeschmack",
        "price": 3.20,
        "category": "Getränke",
        "image": "./assets/img/eistee.png",
    },
];

// Warenkorb
export let basket = [{
    "item": [{
        "name": "",
        "amount": 0,
        "price": 0,
    }],
    "subotal": 0,
    "total": 0,
    "feeState": false,
}]