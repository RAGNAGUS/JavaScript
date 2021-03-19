// arguments & parameters

const speak = function(name = 'Luigi', time = 'night') {
    console.log(`good ${time} ${name}`);
};

const calcArea = function(radius) {
    return 3.14 * radius ** 2;
}

const calcVol = function(area) {
    console.log(area);
}

const area = calcArea(5);

calcVol(area);
