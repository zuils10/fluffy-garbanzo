const ANTI_CHEAT_CODE = 'Fe12NAfA3R6z4k0z';
const SALT = 'af0ik392jrmt0nsfdghy0';
const CHARACTERS = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';

function getHash(string) {
    var charaters = string.split();
    charaters.sort();
    var sortedCharaters = charaters.join();
    return CryptoJS.MD5(sortedCharaters + SALT);
}

function sprinkle(string) {
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
}

function encodeData(decodedData) {
    var string = decodedData;
    var base64string = btoa(string);
    var result = sprinkle(base64string) + ANTI_CHEAT_CODE + getHash(base64string);
    return result;
}

function autoLevelAncient() {
    //alert
    alert("You have used the option to autolevel your ancients. Notes that this is considered save-editing. Please make back-ups save and use with caution.");
    var result = rawData;
    for (var k in ancient)
        if ((ancient[k].Visible == "true")&&(ancient[k].Level.gt(0))) {
            result.ancients.ancients[k].level = ancient[k].OptimalLevel.toExponential().toString().replace("+", "");;
            result.ancients.ancients[k].spentHeroSouls = Decimal(result.ancients.ancients[k].spentHeroSouls).plus(ancient[k].CostToOptimal).toExponential().toString().replace("+", "");;
            result.heroSouls = Decimal(result.heroSouls).minus(ancient[k].CostToOptimal).toExponential().toString().replace("+", "");;
        }
    console.log(encodeData(JSON.stringify(result)));
}
