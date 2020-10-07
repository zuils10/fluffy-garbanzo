import Decimal from 'decimal.js';
import _ from 'lodash';
import {ANCIENT, PLAY_STYLE} from '@/modules/constants';

const optimize = {
    getGameAttributes: function (saveGame, flag) {
        const {
                highestFinishedZonePersist: ascensionZone,
                ancients: {
                    ancients
                }
            } = saveGame,
            ancientSiya = _.values(ancients).find(v => v.id === ANCIENT.SIYALATAS),
            ancientFrag = _.values(ancients).find(v => v.id === ANCIENT.FRAGSWORTH),
            siyaLevel = new Decimal(ancientSiya.level),
            fragLevel = new Decimal(ancientFrag.level);
        let playStyle = PLAY_STYLE.IDLE, ratio = 1;
        if (siyaLevel.equals(0)) {
            if (fragLevel.gt(0)) {
                playStyle = PLAY_STYLE.ACTIVE;
            }
        } else {
            ratio = fragLevel.div(siyaLevel);
            if (ratio.gt(1000)) {
                playStyle = PLAY_STYLE.ACTIVE;
            } else if (ratio.gte(0.1)) {
                playStyle = PLAY_STYLE.HYBRID;
                ratio = ratio.round().toNumber();
            }
        }

        return {
            ascensionZone: Math.max(ascensionZone, Number(flag.ascensionZone)),
            playStyle: playStyle,
            hybridRatio: playStyle === PLAY_STYLE.HYBRID ? ratio : 1
        }
    },
    spending: function (saveGame, flag) {
        let heroSoul = this.heroSoul(saveGame, flag);
        let ancient = this.ancient(saveGame, flag);
        console.log(heroSoul.toString(), ancient);
    },
    heroSoul: function (saveGame, flag) {
        const {
            heroSouls: ogHeroSouls,
            primalSouls: ogPrimalSouls,
            totalHeroLevels: ogTotalHeroLevels
        } = saveGame;
        let hs = new Decimal(ogHeroSouls);
        if (flag.useSoulsNextAscension) {
            hs = hs.plus(new Decimal(ogPrimalSouls)).plus(new Decimal(ogTotalHeroLevels).div(2000).floor());
        }
        return hs;
    },
    ancient: function (saveGame, flag) {
        const {
            ancientEntrySizes: ancientEntrySizes,
            ancients: {
                ancients
            },
            autoclickers,
            dlcAutoclickers
        } = saveGame;
        let ancientToDisplay = [
                ANCIENT.MAMMON,
                ANCIENT.MIMZEE,
                ANCIENT.DOGCOG,
                ANCIENT.FORTUNA,
                ANCIENT.ATMAN,
                ANCIENT.DORA,
                ANCIENT.MORGULIS,
                ANCIENT.CHRONOS,
                ANCIENT.BUBOS,
                ANCIENT.KUMAWAKAMARU,
                ANCIENT.ARGAIV
            ],
            summonedAncient = Object.keys(ancients).map(i => Number(i)),
            minimizedAncient = Object.keys(ancientEntrySizes).map(i => Number(i));
        switch (flag.playStyle) {
            case PLAY_STYLE.IDLE: {
                let countAutoClickers = autoclickers + dlcAutoclickers;
                ancientToDisplay = [
                    ...ancientToDisplay,
                    ANCIENT.LIBERTAS,
                    ANCIENT.SIYALATAS,
                    ...(countAutoClickers > 0 ? [ANCIENT.NOGARDNIT] : [])
                ];
                break;
            }
            case PLAY_STYLE.ACTIVE: {
                ancientToDisplay = [
                    ...ancientToDisplay,
                    ANCIENT.PLUTO,
                    ANCIENT.BHAAL,
                    ANCIENT.FRAGSWORTH,
                    ANCIENT.JUGGERNAUT
                ];
                break;
            }
            case PLAY_STYLE.HYBRID: {
                let countAutoClickers = autoclickers + dlcAutoclickers;
                ancientToDisplay = [
                    ...ancientToDisplay,
                    ANCIENT.LIBERTAS,
                    ANCIENT.SIYALATAS,
                    ANCIENT.PLUTO,
                    ANCIENT.BHAAL,
                    ANCIENT.FRAGSWORTH,
                    ANCIENT.JUGGERNAUT,
                    ...(countAutoClickers > 0 ? [ANCIENT.NOGARDNIT] : [])
                ];
                break;
            }
        }
        ancientToDisplay = ancientToDisplay
            .filter(id => summonedAncient.includes(id))
            .filter(id => !minimizedAncient.includes(id));
        return ancientToDisplay;
    }
}

export default optimize;