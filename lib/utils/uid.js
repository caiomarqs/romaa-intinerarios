var hash = [];

for (var i = 0; i < 256; i++) {
    hash[i] = (i < 16 ? '0' : '') + (i).toString(16);
}

const uid = () => {
    var d0 = Math.random() * 0xffffffff | 0;
    var d1 = Math.random() * 0xffffffff | 0;
    var d2 = Math.random() * 0xffffffff | 0;
    var d3 = Math.random() * 0xffffffff | 0;
    return hash[d0 & 0xff] + hash[d0 >> 8 & 0xff] + hash[d0 >> 16 & 0xff] + hash[d0 >> 24 & 0xff] + '-' +
        hash[d1 & 0xff] + hash[d1 >> 8 & 0xff] + '-' + hash[d1 >> 16 & 0x0f | 0x40] + hash[d1 >> 24 & 0xff] + '-' +
        hash[d2 & 0x3f | 0x80] + hash[d2 >> 8 & 0xff] + '-' + hash[d2 >> 16 & 0xff] + hash[d2 >> 24 & 0xff] +
        hash[d3 & 0xff] + hash[d3 >> 8 & 0xff] + hash[d3 >> 16 & 0xff] + hash[d3 >> 24 & 0xff];
}

export { uid }