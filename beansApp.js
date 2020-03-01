//Coffee Expirience options
const coffeeExp = {
    a: 'I\'m fairly new to this',
    b: 'I\m a regular coffee drinker',
    c: 'I\m pretty advanced',
    d: 'Coffee Guru'
}

//Brew method options
const brewMethod = {
    a: 'French Press',
    b: 'Chemex',
    c: 'Aeropress',
    d: 'Pour Over',
    e: 'Moka Pot',
    f: 'Espresso Machine'
}
console.log(brewMethod, coffeeExp);

html = `
    <ul>
        <li>Coffee Expirience: $(coffeeExp)</li>
    </ul>
`;

document.body.innerHTML = html;