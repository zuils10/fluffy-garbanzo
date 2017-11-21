const ANTI_CHEAT_CODE = 'Fe12NAfA3R6z4k0z';
const SALT = 'af0ik392jrmt0nsfdghy0';
const CHARACTERS = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';

var encoder = {
    encode_main: function(obj) {
        var output = '';
        if ($('#saveGameType').val() == 'zlib') {
            output = encoder.encode_zlib(JSON.stringify(obj));
        }
        else {
            output = encoder.encode_base64(JSON.stringify(obj));
        }
        return output;
    },

    encode_base64: function(data) {
        var base64string = btoa(data);
        var output = encoder.sprinkle(base64string) + ANTI_CHEAT_CODE + encoder.getHash(base64string);
        return output;
    },

    encode_zlib: function(data) {
        var header = '7a990d405d2c6fb93aa8fbb0ec1a3b23';
        var pako = window.pako;
        var compressedData = pako.deflate(data, {to: 'string'});
        var output = header + btoa(compressedData);
        return output;
    },

    getHash: function(string) {
        return CryptoJS.MD5(string + SALT);
    },

    sprinkle: function(string) {
        var characters;
        var randomIndex;
        var array = string.split("");
        var result = [];
        var counter = 0;
        while (counter < array.length) {
            result[counter * 2] = array[counter];
            characters = CHARACTERS;
            randomIndex = Math.floor(Math.random() * (characters.length - 1));
            result[counter * 2 + 1] = characters.substr(randomIndex, 1);
            counter++;
        }
        return result.join("");
    },
    autoLevelAncient: function() {
        let result = arguments[0];
        let _totalHeroSoulSpent = Decimal(0);
        for (var k in ancient)
            if ((ancient[k].Visible == "true") && (ancient[k].Level.gt(0))) {
                result.ancients.ancients[k].level = Decimal.max(ancient[k].OptimalLevel, ancient[k].Level).toExponential().toString().replace("+", "");;
                result.ancients.ancients[k].spentHeroSouls = Decimal(result.ancients.ancients[k].spentHeroSouls).plus(ancient[k].CostToOptimal).toExponential().toString().replace("+", "");;
                _totalHeroSoulSpent = _totalHeroSoulSpent.plus(ancient[k].CostToOptimal);
            }
        result.heroSouls = Decimal(result.heroSouls).minus(_totalHeroSoulSpent).toExponential().toString().replace("+", "");
        let x = encoder.encode_main(result);
        $('#modalShow textarea').text(x);
    }
};
