const strings = [];

// Create frequenly small strings
setInterval(() => {
    const str = spawnString(1024 * 1024);
    strings.push(str);
}, 100);

// Create rarely large strings
setInterval(() => {
    const str = spawnString(1 * 1024 * 1024);
    strings.push(str);
}, 500);

// Flush strings arr
setInterval(() => {
    strings.length = 0;
}, 10000);


function spawnString(size) {
    return new Array(size).fill('a').join('');
}
