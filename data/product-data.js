export const products = [
    {
        id: 123,
        name: 'Tony the Tiger',
        image: '../assets/tony-the-tiger.jpg',
        description: 'Tony the Tiger is looking for a loving home after the bankruptcy of Kellogg\'s. Good with kids, other cats, and dogs. Mildy in the uncanny valley. All IP included.',
        category: 'Corporate Shill Cat',
        price: 400000000
    },
    {
        id: 124,
        name: 'Stella',
        image: '../assets/stella.png',
        description: 'The best cat.',
        category: 'Domestic Long Hair',
        price: 1e500 //1e500 gets interpreted as infinity https://stackoverflow.com/questions/34976378/how-do-you-represent-infinity-in-a-json-api
    },
    {
        id: 125,
        name: 'Wilford Brimley',
        image: '../assets/wilford-brimley.png',
        description: 'Marine Corps veteran, diabetes education advocate.',
        category: 'Big Ole\' Kitty',
        price: 18.32
    },
    {
        id: 126,
        name: 'Steve Buscemi',
        image: '../assets/steve-buscemi.png',
        description: 'Generally plays the role of the dork in a group. Previous experience as a fire fighter. Probably good with kids??',
        category: 'American Overbite',
        price: 1
    },
    {
        id: 127,
        name: 'Adam Driver',
        image: '../assets/adam-driver.png',
        //credit: https://adopt.adopets.com/pet/e58e5562-1525-4505-ae32-7a8e8594af20?tracking=b16277c5-1349-465a-baed-90a179c31ed6
        description: 'I\'m ready to become part of your family! I think the life of a family cat could be the one for me... toys, beds, windows to look out of... yep, I\'m ready for all of that! I have been at the shelter for several months and have become one of the staff favorites! I am a sweet older boy who loves to cuddle, but I still have a playful side!',
        category: 'Abyssinian Mix',
        price: 25
    }
];
