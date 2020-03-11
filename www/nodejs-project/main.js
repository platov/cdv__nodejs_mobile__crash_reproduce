const strings = [];

setInterval(() => {
    const str = spawnString(1024 * 1024);
    strings.push(str);
}, 100);

setInterval(() => {
    const str = spawnString(1 * 1024 * 1024);
    strings.push(str);
}, 500);

setInterval(() => {
    strings.length = 0;
}, 10000);


function spawnString(size) {
    return new Array(size).fill('a').join('');
}
