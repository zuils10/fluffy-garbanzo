import pako from 'pako';

let codec = {
    ANTI_CHEAT_CODE: 'Fe12NAfA3R6z4k0z',
    SALT: 'af0ik392jrmt0nsfdghy0',
    ZLIB_HEADER: '7a990d405d2c6fb93aa8fbb0ec1a3b23',
    decoder: function (string) {
        string = String(string);
        let output = '';
        if (string.substring(0, 32) === this.ZLIB_HEADER) {
            output = this.decodeZLib(string);
        } else {
            output = this.decodeBase64(string);
        }
        return output;
    },
    decodeZLib: function (string) {
        try {
            string = String(string);
            const _loc1 = string.substring(32),
                _loc2 = atob(_loc1);
            return JSON.parse(pako.inflate(_loc2, {to: 'string'}));
        } catch (e) {
            throw new Error('Save corrupted!')
        }
    },
    decodeBase64: function (string) {
        try {
            string = String(string);
            if (string.indexOf(this.ANTI_CHEAT_CODE) > 0) {
                string = string.substring(32)
                    .split('')
                    .filter((_, i) => i % 2 === 0)
                    .join('');
                return JSON.parse(atob(string));
            } else {
                return JSON.parse(string);
            }
        } catch (e) {
            throw new Error('Save corrupted!')
        }
    },
}

export default codec;