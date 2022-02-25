'use strict';

let myUsers = [
    { name: 'shark', likes: 'ocean' },
    { name: 'turtle', likes: 'pond' },
    { name: 'otter', likes: 'fish biscuits' }
]

let usersByLikes = myUsers.map(item => {
    let container = {};

    container[item.name] = item.likes;
    container.age = item.name.length * 10;

    return container;
})

console.log(usersByLikes);