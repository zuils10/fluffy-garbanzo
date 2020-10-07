export const VIEW_MODE = {
    DARK: 'dark',
    LIGHT: 'light'
};

export const PLAY_STYLE = {
    IDLE: 1,
    HYBRID: 2,
    ACTIVE: 3
}

export const PLAY_STYLE_NAME = {
    [PLAY_STYLE.IDLE]: 'Idle',
    [PLAY_STYLE.HYBRID]: 'Hybrid',
    [PLAY_STYLE.ACTIVE]: 'Active',
}

export const ANCIENT = {
    LIBERTAS: 4,
    SIYALATAS: 5,
    MAMMON: 8,
    MIMZEE: 9,
    PLUTO: 10,
    DOGCOG: 11,
    FORTUNA: 12,
    ATMAN: 13,
    DORA: 14,
    BHAAL: 15,
    MORGULIS: 16,
    CHRONOS: 17,
    BUBOS: 18,
    FRAGSWORTH: 19,
    VAAGUR: 20,
    KUMAWAKAMARU: 21,
    CHAWEDO: 22,
    HECATONCHEIR: 23,
    BERSERKER: 24,
    SNIPERINO: 25,
    KLEPTOS: 26,
    ENERGON: 27,
    ARGAIV: 28,
    JUGGERNAUT: 29,
    REVOLC: 31,
    NOGARDNIT: 32
};

export const ANCIENT_INFO = [
    {
        id: ANCIENT.LIBERTAS,
        name: 'Libertas'
    },
    {
        id: ANCIENT.SIYALATAS,
        name: 'Siyalatas'
    },
    {
        id: ANCIENT.MAMMON,
        name: 'Mammon'
    },
    {
        id: ANCIENT.MIMZEE,
        name: 'Mimzee'
    },
    {
        id: ANCIENT.PLUTO,
        name: 'Pluto'
    },
    {
        id: ANCIENT.DOGCOG,
        name: 'Dogcog'
    },
    {
        id: ANCIENT.FORTUNA,
        name: 'Fortuna'
    },
    {
        id: ANCIENT.ATMAN,
        name: 'Atman'
    },
    {
        id: ANCIENT.DORA,
        name: 'Dora'
    },
    {
        id: ANCIENT.BHAAL,
        name: 'Bhaal'
    },
    {
        id: ANCIENT.MORGULIS,
        name: 'Morgulis'
    },
    {
        id: ANCIENT.CHRONOS,
        name: 'Chronos'
    },
    {
        id: ANCIENT.BUBOS,
        name: 'Bubos'
    },
    {
        id: ANCIENT.FRAGSWORTH,
        name: 'Fragsworth'
    },
    {
        id: ANCIENT.VAAGUR,
        name: 'Vaagur'
    },
    {
        id: ANCIENT.KUMAWAKAMARU,
        name: 'Kumawakamaru'
    },
    {
        id: ANCIENT.CHAWEDO,
        name: 'Chawedo'
    },
    {
        id: ANCIENT.HECATONCHEIR,
        name: 'Hecatoncheir'
    },
    {
        id: ANCIENT.BERSERKER,
        name: 'Berserker'
    },
    {
        id: ANCIENT.SNIPERINO,
        name: 'Sniperino'
    },
    {
        id: ANCIENT.KLEPTOS,
        name: 'Kleptos'
    },
    {
        id: ANCIENT.ENERGON,
        name: 'Energon'
    },
    {
        id: ANCIENT.ARGAIV,
        name: 'Argaiv'
    },
    {
        id: ANCIENT.JUGGERNAUT,
        name: 'Juggernaut'
    },
    {
        id: ANCIENT.REVOLC,
        name: 'Revolc'
    },
    {
        id: ANCIENT.NOGARDNIT,
        name: 'Nogardnit'
    },
];

export const LEVEL_OTHER_ANCIENT_BASE_NAME = ANCIENT_INFO.filter(v => [
    ANCIENT.ATMAN, ANCIENT.BUBOS, ANCIENT.CHRONOS,
    ANCIENT.DOGCOG, ANCIENT.DORA, ANCIENT.FORTUNA,
    ANCIENT.KUMAWAKAMARU
].includes(v.id)).map(v => ({
    text: v.name,
    value: v.id
}));