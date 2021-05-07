export type Rarity = 1 | 2 | 3 | 4 | 5
export type MainStatKeys = typeof allMainStatKeys[number]
export type SubStatKeys = typeof allSubStatKeys[number]
export type SlotKeys = typeof allSlotKeys[number]
export type SubStat = {
    key: SubStatKeys | ''
    value: number

    rolls?: number[]
    efficiency?: number
    accurateValue?: number
}

//prettier-ignore
export const allMainStatKeys = ['hp', 'hp_', 'atk', 'atk_', 'def_', 'eleMas', 'enerRech_', 'critRate_', 'critDMG_', 'physical_dmg_', 'anemo_dmg_', 'geo_dmg_', 'electro_dmg_', 'hydro_dmg_', 'pyro_dmg_', 'cryo_dmg_', 'heal_']
//prettier-ignore
export const allSubStatKeys = ['hp', 'hp_', 'atk', 'atk_', 'def_', 'eleMas', 'enerRech_', 'critRate_', 'critDMG_', 'def']
export const allSlotKeys = ['flower', 'plume', 'sands', 'goblet', 'circlet']

export const ArtifactStarsData: {
    [key in Rarity]?: { subsBaselow: number; subBaseHigh: number; numUpgradesOrUnlocks: number }
} = {
    // 1: { subsBaselow: 0, subBaseHigh: 0, numUpgradesOrUnlocks: 1 },
    // 2: { subsBaselow: 0, subBaseHigh: 1, numUpgradesOrUnlocks: 2 },
    3: { subsBaselow: 1, subBaseHigh: 2, numUpgradesOrUnlocks: 3 },
    4: { subsBaselow: 2, subBaseHigh: 3, numUpgradesOrUnlocks: 4 },
    5: { subsBaselow: 3, subBaseHigh: 4, numUpgradesOrUnlocks: 5 },
}

//prettier-ignore
export const ArtifactMainStatData: { [key in Rarity]: { [key in MainStatKeys]: number[] } } = {
    1: {
        hp: [129, 178, 227, 275, 324],
        atk: [8, 12, 15, 18, 21],
        hp_: [3.1, 4.3, 5.5, 6.7, 7.9],
        atk_: [3.1, 4.3, 5.5, 6.7, 7.9],
        def_: [3.9, 5.4, 6.9, 8.4, 9.9],
        physical_dmg_: [3.9, 5.4, 6.9, 8.4, 9.9],
        ele_dmg_: [3.1, 4.3, 5.5, 6.7, 7.9],
        eleMas: [13, 17, 22, 27, 32],
        enerRech_: [3.5, 4.8, 6.1, 7.5, 8.8],
        critRate_: [2.1, 2.9, 3.7, 4.5, 5.3],
        critDMG_: [4.2, 5.8, 7.4, 9.0, 10.5],
        heal_: [2.4, 3.3, 4.3, 5.2, 6.1],
    },
    2: {
        hp: [258, 331, 404, 478, 551, 624, 697, 770, 843],
        atk: [17, 22, 26, 31, 36, 41, 45, 50, 55],
        hp_: [4.2, 5.4, 6.6, 7.8, 9, 10.1, 11.3, 12.5, 13.7],
        atk_: [4.2, 5.4, 6.6, 7.8, 9, 10.1, 11.3, 12.5, 13.7],
        def_: [5.2, 6.7, 8.2, 9.7, 11.2, 12.7, 14.2, 15.6, 17.1],
        physical_dmg_: [5.2, 6.7, 8.2, 9.7, 11.2, 12.7, 14.2, 15.6, 17.1],
        ele_dmg_: [4.2, 5.4, 6.6, 7.8, 9, 10.1, 11.3, 12.5, 13.7],
        eleMas: [17, 22, 26, 31, 36, 41, 45, 50, 55],
        enerRech_: [4.7, 6, 7.3, 8.6, 9.9, 11.3, 12.6, 13.9, 15.2],
        critRate_: [2.8, 3.6, 4.4, 5.2, 6, 6.8, 7.6, 8.3, 9.1],
        critDMG_: [5.6, 7.2, 8.8, 10.4, 11.9, 13.5, 15.1, 16.7, 18.3],
        heal_: [3.2, 4.1, 5.1, 6, 6.9, 7.8, 8.7, 9.6, 10.5],
    },
    3: {
        hp: [430, 552, 674, 796, 918, 1040, 1162, 1283, 1405, 1527, 1649, 1771, 1893],
        atk: [28, 36, 44, 52, 60, 68, 76, 84, 91, 99, 107, 115, 123],
        hp_: [5.2, 6.7, 8.2, 9.7, 11.2, 12.7, 14.2, 15.6, 17.1, 18.6, 20.1, 21.6, 23.1],
        atk_: [5.2, 6.7, 8.2, 9.7, 11.2, 12.7, 14.2, 15.6, 17.1, 18.6, 20.1, 21.6, 23.1],
        def_: [6.6, 8.4, 10.3, 12.1, 14.0, 15.8, 17.7, 19.6, 21.4, 23.3, 25.1, 27.0, 28.8],
        physical_dmg_: [6.6, 8.4, 10.3, 12.1, 14.0, 15.8, 17.7, 19.6, 21.4, 23.3, 25.1, 27.0, 28.8],
        ele_dmg_: [5.2, 6.7, 8.2, 9.7, 11.2, 12.7, 14.2, 15.6, 17.1, 18.6, 20.1, 21.6, 23.1],
        eleMas: [21, 27, 33, 39, 45, 51, 57, 63, 69, 75, 80, 86, 92],
        enerRech_: [5.8, 7.5, 9.1, 10.8, 12.4, 14.1, 15.7, 17.4, 19.0, 20.7, 22.3, 24.0, 25.6],
        critRate_: [3.5, 4.5, 5.5, 6.5, 7.5, 8.4, 9.4, 10.4, 11.4, 12.4, 13.4, 14.4, 15.4],
        critDMG_: [7.0, 9.0, 11.0, 12.9, 14.9, 16.9, 18.9, 20.9, 22.8, 24.8, 26.8, 28.8, 30.8],
        heal_: [4.0, 5.2, 6.3, 7.5, 8.6, 9.8, 10.9, 12.0, 13.2, 14.3, 15.5, 16.6, 17.8],
    },
    4: {
        hp: [645, 828, 1011, 1194, 1377, 1559, 1742, 1925, 2108, 2291, 2474, 2657, 2839, 3022, 3205, 3388, 3571],
        atk: [42, 54, 66, 78, 90, 102, 113, 125, 137, 149, 161, 173, 185, 197, 209, 221, 232],
        hp_: [6.3, 8.1, 9.9, 11.6, 13.4, 15.2, 17.0, 18.8, 20.6, 22.3, 24.1, 25.9, 27.7, 29.5, 31.3, 33.0, 34.8],
        atk_: [6.3, 8.1, 9.9, 11.6, 13.4, 15.2, 17.0, 18.8, 20.6, 22.3, 24.1, 25.9, 27.7, 29.5, 31.3, 33.0, 34.8],
        def_: [7.9, 10.1, 12.3, 14.6, 16.8, 19.0, 21.2, 23.5, 25.7, 27.9, 30.2, 32.4, 34.6, 36.8, 39.1, 41.3, 43.5],
        physical_dmg_: [7.9, 10.1, 12.3, 14.6, 16.8, 19.0, 21.2, 23.5, 25.7, 27.9, 30.2, 32.4, 34.6, 36.8, 39.1, 41.3, 43.5],
        ele_dmg_: [6.3, 8.1, 9.9, 11.6, 13.4, 15.2, 17.0, 18.8, 20.6, 22.3, 24.1, 25.9, 27.7, 29.5, 31.3, 33.0, 34.8],
        eleMas: [25, 32, 39, 47, 54, 61, 68, 75, 82, 89, 97, 104, 111, 118, 125, 132, 139],
        enerRech_: [7.0, 9.0, 11.0, 12.9, 14.9, 16.9, 18.9, 20.9, 22.8, 24.8, 26.8, 28.8, 30.8, 32.8, 34.7, 36.7, 38.7],
        critRate_: [4.2, 5.4, 6.6, 7.8, 9.0, 10.1, 11.3, 12.5, 13.7, 14.9, 16.1, 17.3, 18.5, 19.7, 20.8, 22.0, 23.2],
        critDMG_: [8.4, 10.8, 13.1, 15.5, 17.9, 20.3, 22.7, 25.0, 27.4, 29.8, 32.2, 34.5, 36.9, 39.3, 41.7, 44.1, 46.4],
        heal_: [4.8, 6.2, 7.6, 9.0, 10.3, 11.7, 13.1, 14.4, 15.8, 17.2, 18.6, 19.9, 21.3, 22.7, 24.0, 25.4, 26.8],
    },
    5: {
        hp: [717, 920, 1123, 1326, 1530, 1733, 1936, 2139, 2342, 2545, 2749, 2952, 3155, 3358, 3561, 3764, 3967, 4171, 4374, 4577, 4780],
        atk: [47, 60, 73, 86, 100, 113, 126, 139, 152, 166, 179, 192, 205, 219, 232, 245, 258, 272, 285, 298, 311],
        hp_: [7.0, 9.0, 11.0, 12.9, 14.9, 16.9, 18.9, 20.9, 22.8, 24.8, 26.8, 28.8, 30.8, 32.8, 34.7, 36.7, 38.7, 40.7, 42.7, 44.6, 46.6],
        atk_: [7.0, 9.0, 11.0, 12.9, 14.9, 16.9, 18.9, 20.9, 22.8, 24.8, 26.8, 28.8, 30.8, 32.8, 34.7, 36.7, 38.7, 40.7, 42.7, 44.6, 46.6],
        def_: [8.7, 11.2, 13.7, 16.2, 18.6, 21.1, 23.6, 26.1, 28.6, 31, 33.5, 36, 38.5, 40.9, 43.4, 45.9, 48.4, 50.8, 53.3, 55.8, 58.3],
        physical_dmg_: [8.7, 11.2, 13.7, 16.2, 18.6, 21.1, 23.6, 26.1, 28.6, 31, 33.5, 36, 38.5, 40.9, 43.4, 45.9, 48.4, 50.8, 53.3, 55.8, 58.3],
        ele_dmg_: [7.0, 9.0, 11.0, 12.9, 14.9, 16.9, 18.9, 20.9, 22.8, 24.8, 26.8, 28.8, 30.8, 32.8, 34.7, 36.7, 38.7, 40.7, 42.7, 44.6, 46.6],
        eleMas: [28, 36, 44, 52, 60, 68, 76, 84, 91, 99, 107, 115, 123, 131, 139, 147, 155, 163, 171, 179, 187],
        enerRech_: [7.8, 10.0, 12.2, 14.4, 16.6, 18.8, 21.0, 23.2, 25.4, 27.6, 29.8, 32.0, 34.2, 36.4, 38.6, 40.8, 43.0, 45.2, 47.4, 49.6, 51.8],
        critRate_: [4.7, 6.0, 7.3, 8.6, 9.9, 11.3, 12.6, 13.9, 15.2, 16.6, 17.9, 19.2, 20.5, 21.8, 23.2, 24.5, 25.8, 27.1, 28.4, 29.8, 31.1],
        critDMG_: [9.3, 12.0, 14.6, 17.3, 19.9, 22.5, 25.2, 27.8, 30.5, 33.1, 35.7, 38.4, 41.0, 43.7, 46.3, 49.0, 51.6, 54.2, 56.9, 59.5, 62.2],
        heal_: [5.4, 6.9, 8.4, 10.0, 11.5, 13.0, 14.5, 16.1, 17.6, 19.1, 20.6, 22.1, 23.7, 25.2, 26.7, 28.2, 29.8, 31.3, 32.8, 34.3, 35.9],
    }
}

export const ArtifactSubStatData: { [key in SubStatKeys]: { [key in Rarity]?: number[] } } = {
    hp: {
        3: [100.38, 114.72, 129.06, 143.4],
        4: [167.3, 191.2, 215.1, 239],
        5: [209.13, 239, 268.88, 298.75],
    },
    atk: {
        3: [6.54, 7.47, 8.4, 9.34],
        4: [10.89, 12.45, 14.0, 15.56],
        5: [13.62, 15.56, 17.51, 19.45],
    },
    def: {
        3: [7.78, 8.89, 10, 11.11],
        4: [12.96, 14.82, 16.67, 18.52],
        5: [16.2, 18.52, 20.83, 23.15],
    },
    eleMas: {
        3: [9.79, 11.19, 12.59, 13.99],
        4: [13.06, 14.92, 16.79, 18.65],
        5: [16.32, 18.65, 20.98, 23.31],
    },
    atk_: {
        3: [2.45, 2.8, 3.15, 3.5],
        4: [3.26, 3.73, 4.2, 4.66],
        5: [4.08, 4.66, 5.25, 5.83],
    },
    hp_: {
        3: [2.45, 2.8, 3.15, 3.5],
        4: [3.26, 3.73, 4.2, 4.66],
        5: [4.08, 4.66, 5.25, 5.83],
    },
    def_: {
        3: [3.06, 3.5, 3.93, 4.37],
        4: [4.08, 4.66, 5.25, 5.83],
        5: [5.1, 5.8, 6.56, 7.29],
    },
    enerRech_: {
        3: [2.72, 3.11, 3.5, 3.89],
        4: [3.63, 4.14, 4.66, 5.18],
        5: [4.53, 5.18, 5.83, 6.48],
    },
    critRate_: {
        3: [1.63, 1.86, 2.1, 2.33],
        4: [2.18, 2.49, 2.8, 3.11],
        5: [2.72, 3.11, 3.5, 3.89],
    },
    critDMG_: {
        3: [3.26, 3.73, 4.2, 4.66],
        4: [4.35, 4.97, 5.6, 6.22],
        5: [5.44, 6.22, 6.99, 7.77],
    },
}

// Produce something that looks like this:
// hp: {
//     max: { '3': 143.4, '4': 239, '5': 298.75 },
//     min: { '3': 100.38, '4': 167.3, '5': 209.13 }
// },
// ...
export const ArtifactSubStatMinMax = Object.fromEntries(
    Object.entries(ArtifactSubStatData).map(([statKey, rarityData]) => [
        statKey,
        {
            max: Object.fromEntries(
                Object.keys(rarityData).map((rarity) => [
                    rarity,
                    rarityData[(rarity as unknown) as Rarity]![3],
                ])
            ),
            min: Object.fromEntries(
                Object.keys(rarityData).map((rarity) => [
                    rarity,
                    rarityData[(rarity as unknown) as Rarity]![0],
                ])
            ),
        },
    ])
)

//prettier-ignore
export const ArtifactSlotsData: { [key in SlotKeys]: { name:string, stats: MainStatKeys[] }} = {
    flower: { name: 'Flower of Life', stats: ['hp'] },
    plume: { name: 'Plume of Death', stats: ['atk'] },
    sands: { name: 'Sands of Eon', stats: ['hp_', 'def_', 'atk_', 'eleMas', 'enerRech_'] },
    goblet: { name: 'Goblet of Eonothem', stats: ['hp_', 'def_', 'atk_', 'eleMas', 'physical_dmg_', 'anemo_dmg_', 'geo_dmg_', 'electro_dmg_', 'hydro_dmg_', 'pyro_dmg_', 'cryo_dmg_',] },
    circlet: { name: 'Circlet of Logos', stats: ['hp_', 'def_', 'atk_', 'eleMas', 'critRate_', 'critDMG_', 'heal_'] },
}

//prettier-ignore
export const ArtifactSubStatLookupTable: Record<SubStatKeys, { [key in Rarity]?: { [rounded: string]: number[][] }}> = {
    hp: {
        3: { '100.0': [[0]], '115.0': [[1]], '129.0': [[2]], '143.0': [[3]], '201.0': [[0, 0]], '215.0': [[0, 1]], '229.0': [[1, 1]], '244.0': [[1, 2]], '258.0': [[2, 2]], '272.0': [[2, 3]], '287.0': [[3, 3]], },
        4: { '167.0': [[0]], '191.0': [[1]], '215.0': [[2]], '239.0': [[3]], '335.0': [[0, 0]], '359.0': [[0, 1]], '382.0': [[1, 1]], '406.0': [[1, 2]], '430.0': [[2, 2]], '454.0': [[2, 3]], '478.0': [[3, 3]], '502.0': [[0, 0, 0]], '526.0': [[0, 0, 1]], '550.0': [[0, 1, 1]], '574.0': [[1, 1, 1]], '598.0': [[1, 1, 2]], '621.0': [[1, 2, 2]], '645.0': [[2, 2, 2]], '669.0': [[2, 2, 3], [0, 0, 0, 0]], '693.0': [[2, 3, 3], [0, 0, 0, 1]], '717.0': [[0, 0, 1, 1], [3, 3, 3]], '741.0': [[0, 1, 1, 1]], '765.0': [[1, 1, 1, 1]], '789.0': [[1, 1, 1, 2]], '813.0': [[1, 1, 2, 2]], '837.0': [[1, 2, 2, 2]], '860.0': [[2, 2, 2, 2]], '884.0': [[2, 2, 2, 3]], '908.0': [[2, 2, 3, 3]], '932.0': [[2, 3, 3, 3]], '956.0': [[3, 3, 3, 3]], },
        5: { '209.0': [[0]], '239.0': [[1]], '269.0': [[2]], '299.0': [[3]], '418.0': [[0, 0]], '448.0': [[0, 1]], '478.0': [[1, 1]], '508.0': [[1, 2]], '538.0': [[1, 3]], '568.0': [[2, 3]], '598.0': [[3, 3]], '627.0': [[0, 0, 0]], '657.0': [[0, 0, 1]], '687.0': [[0, 1, 1]], '717.0': [[1, 1, 1]], '747.0': [[1, 1, 2]], '777.0': [[1, 1, 3]], '807.0': [[1, 2, 3]], '837.0': [[0, 0, 0, 0], [1, 3, 3]], '866.0': [[2, 3, 3], [0, 0, 0, 1]], '896.0': [[3, 3, 3], [0, 0, 1, 1]], '926.0': [[0, 1, 1, 1]], '956.0': [[1, 1, 1, 1]], '986.0': [[1, 1, 1, 2]], '1016.0': [[1, 1, 1, 3]], '1046.0': [[0, 0, 0, 0, 0], [1, 1, 2, 3]], '1076.0': [[0, 0, 0, 0, 1], [1, 1, 3, 3]], '1105.0': [[0, 0, 0, 1, 1], [1, 2, 3, 3]], '1135.0': [[1, 3, 3, 3], [0, 0, 1, 1, 1]], '1165.0': [[0, 1, 1, 1, 1], [2, 3, 3, 3]], '1195.0': [[1, 1, 1, 1, 1], [3, 3, 3, 3]], '1225.0': [[1, 1, 1, 1, 2]], '1255.0': [[1, 1, 1, 1, 3], [0, 0, 0, 0, 0, 0]], '1285.0': [[1, 1, 1, 2, 3], [0, 0, 0, 0, 0, 1]], '1315.0': [[1, 1, 1, 3, 3], [0, 0, 0, 0, 1, 1]], '1344.0': [[0, 0, 0, 1, 1, 1], [1, 1, 2, 3, 3]], '1374.0': [[1, 1, 3, 3, 3], [0, 0, 1, 1, 1, 1]], '1404.0': [[1, 2, 3, 3, 3], [0, 1, 1, 1, 1, 1]], '1434.0': [[1, 3, 3, 3, 3], [1, 1, 1, 1, 1, 1]], '1464.0': [[2, 3, 3, 3, 3], [1, 1, 1, 1, 1, 2]], '1494.0': [[1, 1, 1, 1, 1, 3], [3, 3, 3, 3, 3]], '1524.0': [[1, 1, 1, 1, 2, 3]], '1554.0': [[1, 1, 1, 1, 3, 3]], '1583.0': [[1, 1, 1, 2, 3, 3]], '1613.0': [[1, 1, 1, 3, 3, 3]], '1643.0': [[1, 1, 2, 3, 3, 3]], '1673.0': [[1, 1, 3, 3, 3, 3]], '1703.0': [[1, 2, 3, 3, 3, 3]], '1733.0': [[1, 3, 3, 3, 3, 3]], '1763.0': [[2, 3, 3, 3, 3, 3]], '1793.0': [[3, 3, 3, 3, 3, 3]], },
    },
    eleMas: {
        3: { '10.0': [[0]], '11.0': [[1]], '13.0': [[2]], '14.0': [[3]], '20.0': [[0, 0]], '21.0': [[0, 1]], '22.0': [[1, 1]], '24.0': [[1, 2]], '25.0': [[2, 2]], '27.0': [[2, 3]], '28.0': [[3, 3]], },
        4: { '13.0': [[0]], '15.0': [[1]], '17.0': [[2]], '19.0': [[3]], '26.0': [[0, 0]], '28.0': [[0, 1]], '30.0': [[1, 1]], '32.0': [[1, 2]], '34.0': [[1, 3]], '35.0': [[2, 3]], '37.0': [[3, 3]], '39.0': [[0, 0, 0]], '41.0': [[0, 0, 1]], '43.0': [[0, 1, 1]], '45.0': [[1, 1, 1]], '47.0': [[1, 1, 2]], '48.0': [[1, 1, 3]], '49.0': [[1, 2, 2]], '50.0': [[1, 2, 3]], '52.0': [[1, 3, 3], [0, 0, 0, 0]], '54.0': [[2, 3, 3], [0, 0, 0, 1]], '56.0': [[3, 3, 3], [0, 0, 1, 1]], '58.0': [[0, 1, 1, 1]], '60.0': [[1, 1, 1, 1]], '62.0': [[1, 1, 1, 2]], '63.0': [[1, 1, 1, 3]], '65.0': [[1, 1, 2, 3]], '67.0': [[1, 1, 3, 3]], '69.0': [[1, 2, 3, 3]], '71.0': [[1, 3, 3, 3]], '73.0': [[2, 3, 3, 3]], '75.0': [[3, 3, 3, 3]], },
        5: { '16.0': [[0]], '19.0': [[1]], '21.0': [[2]], '23.0': [[3]], '33.0': [[0, 0]], '35.0': [[0, 1]], '37.0': [[1, 1]], '40.0': [[1, 2]], '42.0': [[2, 2]], '44.0': [[2, 3]], '47.0': [[3, 3]], '49.0': [[0, 0, 0]], '51.0': [[0, 0, 1]], '54.0': [[0, 1, 1]], '56.0': [[1, 1, 1]], '58.0': [[1, 1, 2]], '61.0': [[1, 2, 2]], '63.0': [[2, 2, 2]], '65.0': [[0, 0, 0, 0], [2, 2, 3]], '68.0': [[0, 0, 0, 1], [2, 3, 3]], '70.0': [[3, 3, 3], [0, 0, 1, 1]], '72.0': [[0, 1, 1, 1]], '75.0': [[1, 1, 1, 1]], '77.0': [[1, 1, 1, 2]], '79.0': [[1, 1, 2, 2]], '82.0': [[0, 0, 0, 0, 0], [1, 2, 2, 2]], '84.0': [[0, 0, 0, 0, 1], [2, 2, 2, 2]], '86.0': [[2, 2, 2, 3], [0, 0, 0, 1, 1]], '89.0': [[2, 2, 3, 3], [0, 0, 1, 1, 1]], '91.0': [[0, 1, 1, 1, 1], [2, 3, 3, 3]], '93.0': [[3, 3, 3, 3], [1, 1, 1, 1, 1]], '96.0': [[1, 1, 1, 1, 2]], '98.0': [[1, 1, 1, 2, 2], [0, 0, 0, 0, 0, 0]], '100.0': [[1, 1, 2, 2, 2], [0, 0, 0, 0, 0, 1]], '103.0': [[0, 0, 0, 0, 1, 1], [1, 2, 2, 2, 2]], '105.0': [[0, 0, 0, 1, 1, 1], [2, 2, 2, 2, 2]], '107.0': [[2, 2, 2, 2, 3], [0, 0, 1, 1, 1, 1]], '110.0': [[2, 2, 2, 3, 3], [0, 1, 1, 1, 1, 1]], '112.0': [[2, 2, 3, 3, 3], [1, 1, 1, 1, 1, 1]], '114.0': [[2, 3, 3, 3, 3], [1, 1, 1, 1, 1, 2]], '117.0': [[3, 3, 3, 3, 3], [1, 1, 1, 1, 2, 2]], '119.0': [[1, 1, 1, 2, 2, 2]], '121.0': [[1, 1, 2, 2, 2, 2]], '124.0': [[1, 2, 2, 2, 2, 2]], '126.0': [[2, 2, 2, 2, 2, 2]], '128.0': [[2, 2, 2, 2, 2, 3]], '131.0': [[2, 2, 2, 2, 3, 3]], '133.0': [[2, 2, 2, 3, 3, 3]], '135.0': [[2, 2, 3, 3, 3, 3]], '138.0': [[2, 3, 3, 3, 3, 3]], '140.0': [[3, 3, 3, 3, 3, 3]], },
    },
    atk: {
        3: { '7.0': [[0]], '8.0': [[2]], '9.0': [[3]], '13.0': [[0, 0]], '14.0': [[0, 1]], '15.0': [[1, 1]], '16.0': [[1, 2]], '17.0': [[2, 2]], '18.0': [[2, 3]], '19.0': [[3, 3]], },
        4: { '11.0': [[0]], '12.0': [[1]], '14.0': [[2]], '16.0': [[3]], '22.0': [[0, 0]], '23.0': [[0, 1]], '25.0': [[0, 2]], '26.0': [[1, 2]], '28.0': [[2, 2]], '30.0': [[2, 3]], '31.0': [[3, 3]], '33.0': [[0, 0, 0]], '34.0': [[0, 0, 1]], '36.0': [[0, 0, 2]], '37.0': [[0, 1, 2]], '39.0': [[0, 2, 2]], '40.0': [[1, 2, 2]], '42.0': [[2, 2, 2]], '44.0': [[0, 0, 0, 0], [2, 2, 3]], '45.0': [[2, 3, 3], [0, 0, 0, 1]], '47.0': [[3, 3, 3], [0, 0, 0, 2]], '48.0': [[0, 0, 1, 2]], '50.0': [[0, 0, 2, 2]], '51.0': [[0, 1, 2, 2]], '53.0': [[0, 2, 2, 2]], '54.0': [[1, 2, 2, 2]], '56.0': [[2, 2, 2, 2]], '58.0': [[2, 2, 2, 3]], '59.0': [[2, 2, 3, 3]], '61.0': [[2, 3, 3, 3]], '62.0': [[3, 3, 3, 3]], },
        5: { '14.0': [[0]], '16.0': [[1]], '18.0': [[2]], '19.0': [[3]], '27.0': [[0, 0]], '29.0': [[0, 1]], '31.0': [[1, 1]], '33.0': [[1, 2]], '35.0': [[1, 3]], '37.0': [[2, 3]], '39.0': [[3, 3]], '41.0': [[0, 0, 0]], '43.0': [[0, 0, 1]], '45.0': [[0, 1, 1]], '47.0': [[1, 1, 1]], '49.0': [[1, 1, 2]], '51.0': [[1, 1, 3]], '53.0': [[1, 2, 3]], '54.0': [[1, 3, 3], [0, 0, 0, 0]], '56.0': [[0, 0, 0, 1], [2, 3, 3]], '58.0': [[3, 3, 3], [0, 0, 1, 1]], '60.0': [[0, 1, 1, 1]], '62.0': [[1, 1, 1, 1]], '64.0': [[1, 1, 1, 2]], '66.0': [[1, 1, 1, 3]], '68.0': [[0, 0, 0, 0, 0], [1, 1, 2, 3]], '70.0': [[0, 0, 0, 0, 1], [1, 1, 3, 3]], '72.0': [[0, 0, 0, 1, 1], [1, 2, 3, 3]], '74.0': [[0, 0, 1, 1, 1], [1, 3, 3, 3]], '76.0': [[2, 3, 3, 3], [0, 1, 1, 1, 1]], '78.0': [[1, 1, 1, 1, 1], [3, 3, 3, 3]], '80.0': [[1, 1, 1, 1, 2]], '82.0': [[0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 3]], '84.0': [[1, 1, 1, 2, 3], [0, 0, 0, 0, 0, 1]], '86.0': [[0, 0, 0, 0, 1, 1], [1, 1, 1, 3, 3]], '88.0': [[1, 1, 2, 3, 3], [0, 0, 0, 1, 1, 1]], '89.0': [[0, 0, 1, 1, 1, 1], [1, 1, 3, 3, 3]], '90.0': [[0, 0, 0, 0, 2, 2]], '91.0': [[0, 1, 1, 1, 1, 1], [1, 2, 3, 3, 3]], '93.0': [[1, 3, 3, 3, 3], [1, 1, 1, 1, 1, 1]], '95.0': [[1, 1, 1, 1, 1, 2], [2, 3, 3, 3, 3]], '97.0': [[1, 1, 1, 1, 1, 3], [3, 3, 3, 3, 3]], '99.0': [[1, 1, 1, 1, 2, 3]], '101.0': [[1, 1, 1, 1, 3, 3]], '103.0': [[1, 1, 1, 2, 3, 3]], '105.0': [[1, 1, 1, 3, 3, 3]], '107.0': [[1, 1, 2, 3, 3, 3]], '109.0': [[1, 1, 3, 3, 3, 3]], '111.0': [[1, 2, 3, 3, 3, 3]], '113.0': [[1, 3, 3, 3, 3, 3]], '115.0': [[2, 3, 3, 3, 3, 3]], '117.0': [[3, 3, 3, 3, 3, 3]], },
    },
    def: {
        3: { '8.0': [[0]], '9.0': [[1]], '10.0': [[2]], '11.0': [[3]], '16.0': [[0, 0]], '17.0': [[0, 1]], '18.0': [[1, 1]], '19.0': [[1, 2]], '20.0': [[2, 2]], '21.0': [[2, 3]], '22.0': [[3, 3]], },
        4: { '13.0': [[0]], '15.0': [[1]], '17.0': [[2]], '19.0': [[3]], '26.0': [[0, 0]], '28.0': [[0, 1]], '30.0': [[0, 2]], '31.0': [[0, 3]], '33.0': [[2, 2]], '35.0': [[2, 3]], '37.0': [[3, 3]], '39.0': [[0, 0, 0]], '41.0': [[0, 0, 1]], '43.0': [[0, 0, 2]], '44.0': [[0, 0, 3]], '46.0': [[0, 2, 2]], '48.0': [[0, 2, 3]], '50.0': [[0, 3, 3]], '52.0': [[0, 0, 0, 0], [2, 2, 3]], '54.0': [[0, 0, 0, 1], [2, 3, 3]], '56.0': [[0, 0, 0, 2], [3, 3, 3]], '57.0': [[0, 0, 0, 3]], '59.0': [[0, 0, 2, 2]], '61.0': [[0, 0, 2, 3]], '63.0': [[0, 0, 3, 3]], '65.0': [[0, 2, 2, 3]], '67.0': [[0, 2, 3, 3]], '69.0': [[0, 3, 3, 3]], '70.0': [[2, 2, 3, 3]], '72.0': [[2, 3, 3, 3]], '74.0': [[3, 3, 3, 3]], },
        5: { '16.0': [[0]], '19.0': [[1]], '21.0': [[2]], '23.0': [[3]], '32.0': [[0, 0]], '35.0': [[0, 1]], '37.0': [[0, 2]], '39.0': [[1, 2]], '42.0': [[2, 2]], '44.0': [[2, 3]], '46.0': [[3, 3]], '49.0': [[0, 0, 0]], '51.0': [[0, 0, 1]], '53.0': [[0, 0, 2]], '56.0': [[0, 1, 2]], '58.0': [[0, 2, 2]], '60.0': [[1, 2, 2]], '62.0': [[2, 2, 2]], '63.0': [[1, 2, 3]], '65.0': [[0, 0, 0, 0], [2, 2, 3]], '67.0': [[0, 0, 0, 1], [2, 3, 3]], '69.0': [[3, 3, 3], [0, 0, 0, 2]], '72.0': [[0, 0, 1, 2]], '74.0': [[0, 0, 2, 2]], '76.0': [[0, 1, 2, 2]], '79.0': [[0, 2, 2, 2]], '81.0': [[0, 0, 0, 0, 0], [1, 2, 2, 2]], '83.0': [[0, 0, 0, 0, 1], [2, 2, 2, 2]], '86.0': [[2, 2, 2, 3], [0, 0, 0, 0, 2]], '88.0': [[2, 2, 3, 3], [0, 0, 0, 1, 2]], '90.0': [[0, 0, 0, 2, 2], [2, 3, 3, 3]], '93.0': [[3, 3, 3, 3], [0, 0, 1, 2, 2]], '95.0': [[0, 0, 2, 2, 2]], '97.0': [[0, 0, 0, 0, 0, 0], [0, 1, 2, 2, 2]], '100.0': [[0, 0, 0, 0, 0, 1], [0, 2, 2, 2, 2]], '102.0': [[1, 2, 2, 2, 2], [0, 0, 0, 0, 0, 2]], '104.0': [[0, 0, 0, 0, 1, 2], [2, 2, 2, 2, 2]], '106.0': [[0, 0, 0, 0, 2, 2], [2, 2, 2, 2, 3]], '109.0': [[2, 2, 2, 3, 3], [0, 0, 0, 1, 2, 2]], '111.0': [[0, 0, 0, 2, 2, 2], [2, 2, 3, 3, 3]], '113.0': [[2, 3, 3, 3, 3], [0, 0, 1, 2, 2, 2]], '116.0': [[3, 3, 3, 3, 3], [0, 0, 2, 2, 2, 2]], '118.0': [[0, 1, 2, 2, 2, 2]], '120.0': [[0, 2, 2, 2, 2, 2]], '123.0': [[1, 2, 2, 2, 2, 2]], '125.0': [[2, 2, 2, 2, 2, 2]], '127.0': [[2, 2, 2, 2, 2, 3]], '130.0': [[2, 2, 2, 2, 3, 3]], '132.0': [[2, 2, 2, 3, 3, 3]], '134.0': [[2, 2, 3, 3, 3, 3]], '137.0': [[2, 3, 3, 3, 3, 3]], '139.0': [[3, 3, 3, 3, 3, 3]], },
    },
    def_: {
        3: { '3.1': [[0]], '3.5': [[1]], '3.9': [[2]], '4.4': [[3]], '6.1': [[0, 0]], '6.6': [[0, 1]], '7.0': [[0, 2]], '7.4': [[1, 2]], '7.9': [[2, 2]], '8.3': [[2, 3]], '8.7': [[3, 3]], },
        4: { '4.1': [[0]], '4.7': [[1]], '5.3': [[2]], '5.8': [[3]], '8.2': [[0, 0]], '8.7': [[0, 1]], '9.3': [[1, 1]], '9.9': [[1, 2]], '10.5': [[1, 3]], '11.1': [[2, 3]], '11.7': [[3, 3]], '12.2': [[0, 0, 0]], '12.8': [[0, 0, 1]], '13.4': [[0, 1, 1]], '14.0': [[1, 1, 1]], '14.6': [[1, 1, 2]], '15.2': [[1, 1, 3]], '15.7': [[1, 2, 3]], '15.8': [[2, 2, 2]], '16.3': [[0, 0, 0, 0], [1, 3, 3]], '16.9': [[0, 0, 0, 1], [2, 3, 3]], '17.5': [[0, 0, 1, 1], [3, 3, 3]], '18.1': [[0, 1, 1, 1]], '18.6': [[1, 1, 1, 1]], '18.7': [[0, 1, 1, 2]], '19.2': [[1, 1, 1, 2]], '19.8': [[1, 1, 1, 3]], '20.4': [[1, 1, 2, 3]], '21.0': [[1, 1, 3, 3]], '21.6': [[1, 2, 3, 3]], '22.2': [[1, 3, 3, 3]], '22.7': [[2, 3, 3, 3]], '23.3': [[3, 3, 3, 3]], },
        5: { '5.1': [[0]], '5.8': [[1]], '6.6': [[2]], '7.3': [[3]], '10.2': [[0, 0]], '10.9': [[0, 1]], '11.6': [[1, 1]], '11.7': [[0, 2]], '12.4': [[1, 2]], '13.1': [[1, 3]], '13.9': [[2, 3]], '14.6': [[3, 3]], '15.3': [[0, 0, 0]], '16.0': [[0, 0, 1]], '16.7': [[0, 1, 1]], '16.8': [[0, 0, 2]], '17.4': [[1, 1, 1]], '17.5': [[0, 1, 2]], '18.2': [[1, 1, 2]], '18.9': [[1, 1, 3]], '19.0': [[0, 2, 3]], '19.7': [[1, 2, 3]], '20.4': [[0, 0, 0, 0], [1, 3, 3]], '21.1': [[2, 3, 3], [0, 0, 0, 1]], '21.8': [[0, 0, 1, 1]], '21.9': [[0, 0, 0, 2], [3, 3, 3]], '22.5': [[0, 1, 1, 1]], '22.6': [[0, 0, 1, 2]], '23.2': [[1, 1, 1, 1]], '23.3': [[0, 1, 1, 2]], '24.0': [[1, 1, 1, 2]], '24.1': [[0, 0, 2, 3]], '24.7': [[1, 1, 1, 3]], '24.8': [[0, 1, 2, 3]], '25.5': [[1, 1, 2, 3], [0, 0, 0, 0, 0]], '26.2': [[1, 1, 3, 3], [0, 0, 0, 0, 1]], '26.9': [[0, 0, 0, 1, 1], [1, 2, 3, 3]], '27.0': [[0, 0, 0, 0, 2], [2, 2, 2, 3]], '27.6': [[0, 0, 1, 1, 1]], '27.7': [[1, 3, 3, 3], [0, 0, 0, 1, 2]], '28.3': [[0, 1, 1, 1, 1]], '28.4': [[2, 3, 3, 3], [0, 0, 1, 1, 2]], '29.0': [[1, 1, 1, 1, 1]], '29.1': [[0, 1, 1, 1, 2]], '29.2': [[3, 3, 3, 3], [0, 0, 0, 2, 3]], '29.8': [[1, 1, 1, 1, 2]], '29.9': [[0, 0, 1, 2, 3]], '30.5': [[1, 1, 1, 1, 3]], '30.6': [[0, 1, 1, 2, 3], [0, 0, 0, 0, 0, 0]], '31.3': [[1, 1, 1, 2, 3], [0, 0, 0, 0, 0, 1]], '32.0': [[0, 0, 0, 0, 1, 1], [1, 1, 1, 3, 3]], '32.1': [[0, 2, 2, 2, 3], [0, 0, 0, 0, 0, 2]], '32.7': [[0, 0, 0, 1, 1, 1], [1, 1, 2, 3, 3]], '32.8': [[0, 0, 0, 0, 1, 2], [1, 2, 2, 2, 3]], '33.4': [[0, 0, 1, 1, 1, 1]], '33.5': [[0, 0, 0, 1, 1, 2], [1, 1, 3, 3, 3]], '34.1': [[0, 1, 1, 1, 1, 1]], '34.2': [[1, 2, 3, 3, 3], [0, 0, 1, 1, 1, 2]], '34.3': [[0, 0, 0, 0, 2, 3], [2, 2, 2, 3, 3]], '34.8': [[1, 1, 1, 1, 1, 1]], '34.9': [[0, 1, 1, 1, 1, 2]], '35.0': [[0, 0, 0, 1, 2, 3], [1, 3, 3, 3, 3]], '35.6': [[1, 1, 1, 1, 1, 2]], '35.7': [[0, 0, 1, 1, 2, 3], [2, 3, 3, 3, 3]], '36.3': [[1, 1, 1, 1, 1, 3]], '36.4': [[0, 1, 1, 1, 2, 3]], '36.5': [[3, 3, 3, 3, 3]], '37.1': [[1, 1, 1, 1, 2, 3]], '37.2': [[0, 0, 2, 2, 2, 3]], '37.8': [[1, 1, 1, 1, 3, 3]], '37.9': [[0, 1, 2, 2, 2, 3]], '38.5': [[1, 1, 1, 2, 3, 3]], '38.6': [[1, 1, 2, 2, 2, 3]], '39.3': [[1, 1, 1, 3, 3, 3]], '39.4': [[2, 2, 2, 2, 2, 2]], '40.0': [[1, 1, 2, 3, 3, 3]], '40.1': [[1, 2, 2, 2, 3, 3]], '40.8': [[1, 1, 3, 3, 3, 3]], '41.5': [[1, 2, 3, 3, 3, 3]], '41.6': [[2, 2, 2, 3, 3, 3]], '42.3': [[1, 3, 3, 3, 3, 3]], '43.0': [[2, 3, 3, 3, 3, 3]], '43.7': [[3, 3, 3, 3, 3, 3]], },
    },
    critRate_: {
        3: { '1.6': [[0]], '1.9': [[1]], '2.1': [[2]], '2.3': [[3]], '3.3': [[0, 0]], '3.5': [[0, 1]], '3.7': [[1, 1]], '4.0': [[1, 2]], '4.2': [[1, 3]], '4.4': [[2, 3]], '4.7': [[3, 3]], },
        4: { '2.2': [[0]], '2.5': [[1]], '2.8': [[2]], '3.1': [[3]], '4.4': [[0, 0]], '4.7': [[0, 1]], '5.0': [[1, 1]], '5.3': [[1, 2]], '5.6': [[2, 2]], '5.9': [[2, 3]], '6.2': [[3, 3]], '6.5': [[0, 0, 0]], '6.9': [[0, 0, 1]], '7.2': [[0, 1, 1]], '7.5': [[1, 1, 1]], '7.8': [[1, 1, 2]], '8.1': [[1, 2, 2]], '8.4': [[2, 2, 2]], '8.7': [[0, 0, 0, 0], [2, 2, 3]], '9.0': [[2, 3, 3], [0, 0, 0, 1]], '9.3': [[3, 3, 3], [0, 0, 1, 1]], '9.7': [[0, 1, 1, 1]], '10.0': [[1, 1, 1, 1]], '10.3': [[1, 1, 1, 2]], '10.6': [[1, 1, 2, 2]], '10.9': [[1, 2, 2, 2]], '11.2': [[2, 2, 2, 2]], '11.5': [[2, 2, 2, 3]], '11.8': [[2, 2, 3, 3]], '12.1': [[2, 3, 3, 3]], '12.4': [[3, 3, 3, 3]], },
        5: { '2.7': [[0]], '3.1': [[1]], '3.5': [[2]], '3.9': [[3]], '5.4': [[0, 0]], '5.8': [[0, 1]], '6.2': [[1, 1]], '6.6': [[1, 2]], '7.0': [[2, 2]], '7.4': [[2, 3]], '7.8': [[3, 3]], '8.2': [[0, 0, 0]], '8.6': [[0, 0, 1]], '8.9': [[0, 1, 1]], '9.3': [[1, 1, 1]], '9.7': [[1, 1, 2]], '10.1': [[1, 2, 2]], '10.5': [[2, 2, 2]], '10.9': [[0, 0, 0, 0], [2, 2, 3]], '11.3': [[2, 3, 3], [0, 0, 0, 1]], '11.7': [[0, 0, 1, 1], [3, 3, 3]], '12.1': [[0, 1, 1, 1]], '12.4': [[1, 1, 1, 1]], '12.8': [[1, 1, 1, 2]], '13.2': [[1, 1, 2, 2]], '13.6': [[0, 0, 0, 0, 0], [1, 2, 2, 2]], '14.0': [[2, 2, 2, 2], [0, 0, 0, 0, 1]], '14.4': [[0, 0, 0, 1, 1], [2, 2, 2, 3]], '14.8': [[0, 0, 1, 1, 1], [2, 2, 3, 3]], '15.2': [[0, 1, 1, 1, 1], [2, 3, 3, 3]], '15.6': [[3, 3, 3, 3], [1, 1, 1, 1, 1]], '15.9': [[1, 1, 1, 1, 2]], '16.3': [[0, 0, 0, 0, 0, 0], [1, 1, 1, 2, 2]], '16.7': [[0, 0, 0, 0, 0, 1], [1, 1, 2, 2, 2]], '17.1': [[1, 2, 2, 2, 2], [0, 0, 0, 0, 1, 1]], '17.5': [[0, 0, 0, 1, 1, 1], [2, 2, 2, 2, 2]], '17.9': [[2, 2, 2, 2, 3], [0, 0, 1, 1, 1, 1]], '18.3': [[2, 2, 2, 3, 3], [0, 1, 1, 1, 1, 1]], '18.7': [[1, 1, 1, 1, 1, 1], [2, 2, 3, 3, 3]], '19.1': [[1, 1, 1, 1, 1, 2], [2, 3, 3, 3, 3]], '19.4': [[1, 1, 1, 1, 2, 2]], '19.5': [[3, 3, 3, 3, 3]], '19.8': [[1, 1, 1, 2, 2, 2]], '20.2': [[1, 1, 2, 2, 2, 2]], '20.6': [[1, 2, 2, 2, 2, 2]], '21.0': [[2, 2, 2, 2, 2, 2]], '21.4': [[2, 2, 2, 2, 2, 3]], '21.8': [[2, 2, 2, 2, 3, 3]], '22.2': [[2, 2, 2, 3, 3, 3]], '22.6': [[2, 2, 3, 3, 3, 3]], '23.0': [[2, 3, 3, 3, 3, 3]], '23.3': [[3, 3, 3, 3, 3, 3]], },
    },
    atk_: {
        3: { '2.5': [[0]], '2.8': [[1]], '3.2': [[2]], '3.5': [[3]], '4.9': [[0, 0]], '5.3': [[0, 1]], '5.6': [[1, 1]], '6.0': [[1, 2]], '6.3': [[2, 2]], '6.7': [[2, 3]], '7.0': [[3, 3]], },
        4: { '3.3': [[0]], '3.7': [[1]], '4.2': [[2]], '4.7': [[3]], '6.5': [[0, 0]], '7.0': [[0, 1]], '7.5': [[1, 1]], '7.9': [[0, 3]], '8.4': [[1, 3]], '8.9': [[2, 3]], '9.3': [[3, 3]], '9.8': [[0, 0, 0]], '10.3': [[0, 0, 1]], '10.7': [[0, 1, 1]], '11.2': [[0, 0, 3]], '11.7': [[0, 1, 3]], '12.1': [[1, 1, 3]], '12.6': [[0, 3, 3]], '13.0': [[0, 0, 0, 0]], '13.1': [[1, 3, 3]], '13.5': [[2, 3, 3], [0, 0, 0, 1]], '14.0': [[3, 3, 3], [0, 0, 1, 1]], '14.4': [[0, 0, 0, 3]], '14.5': [[0, 1, 1, 1]], '14.9': [[0, 0, 1, 3]], '15.4': [[0, 1, 1, 3]], '15.8': [[0, 0, 3, 3]], '15.9': [[1, 1, 1, 3]], '16.3': [[0, 1, 3, 3]], '16.8': [[1, 1, 3, 3]], '17.2': [[0, 3, 3, 3]], '17.3': [[1, 2, 3, 3]], '17.7': [[1, 3, 3, 3]], '18.2': [[2, 3, 3, 3]], '18.6': [[3, 3, 3, 3]], },
        5: { '4.1': [[0]], '4.7': [[1]], '5.3': [[2]], '5.8': [[3]], '8.2': [[0, 0]], '8.7': [[0, 1]], '9.3': [[1, 1]], '9.9': [[1, 2]], '10.5': [[1, 3]], '11.1': [[2, 3]], '11.7': [[3, 3]], '12.2': [[0, 0, 0]], '12.8': [[0, 0, 1]], '13.4': [[0, 1, 1]], '14.0': [[1, 1, 1]], '14.6': [[1, 1, 2]], '15.2': [[1, 1, 3]], '15.7': [[1, 2, 3]], '15.8': [[2, 2, 2]], '16.3': [[0, 0, 0, 0], [1, 3, 3]], '16.9': [[0, 0, 0, 1], [2, 3, 3]], '17.5': [[3, 3, 3], [0, 0, 1, 1]], '18.1': [[0, 1, 1, 1]], '18.6': [[1, 1, 1, 1]], '18.7': [[0, 1, 1, 2]], '19.2': [[1, 1, 1, 2]], '19.8': [[1, 1, 1, 3]], '20.4': [[0, 0, 0, 0, 0], [1, 1, 2, 3]], '21.0': [[1, 1, 3, 3], [0, 0, 0, 0, 1]], '21.6': [[0, 0, 0, 1, 1], [1, 2, 3, 3]], '22.1': [[0, 0, 1, 1, 1]], '22.2': [[0, 0, 0, 1, 2], [1, 3, 3, 3]], '22.7': [[2, 3, 3, 3], [0, 1, 1, 1, 1]], '23.3': [[1, 1, 1, 1, 1], [3, 3, 3, 3]], '23.9': [[1, 1, 1, 1, 2]], '24.5': [[1, 1, 1, 1, 3], [0, 0, 0, 0, 0, 0]], '25.1': [[1, 1, 1, 2, 3], [0, 0, 0, 0, 0, 1]], '25.6': [[0, 0, 0, 0, 1, 1], [1, 1, 1, 3, 3]], '25.7': [[1, 1, 2, 2, 3], [0, 0, 0, 0, 0, 2]], '26.2': [[1, 1, 2, 3, 3], [0, 0, 0, 1, 1, 1]], '26.3': [[2, 2, 2, 2, 2]], '26.8': [[1, 1, 3, 3, 3], [0, 0, 1, 1, 1, 1]], '27.4': [[1, 2, 3, 3, 3], [0, 1, 1, 1, 1, 1]], '28.0': [[1, 3, 3, 3, 3], [1, 1, 1, 1, 1, 1]], '28.6': [[1, 1, 1, 1, 1, 2], [2, 3, 3, 3, 3]], '29.1': [[1, 1, 1, 1, 1, 3]], '29.2': [[3, 3, 3, 3, 3], [0, 1, 1, 2, 2, 2]], '29.7': [[1, 1, 1, 1, 2, 3]], '30.3': [[1, 1, 1, 1, 3, 3]], '30.9': [[1, 1, 1, 2, 3, 3]], '31.5': [[1, 1, 1, 3, 3, 3]], '32.1': [[1, 1, 2, 3, 3, 3]], '32.6': [[1, 1, 3, 3, 3, 3]], '32.7': [[1, 2, 2, 3, 3, 3]], '33.2': [[1, 2, 3, 3, 3, 3]], '33.8': [[1, 3, 3, 3, 3, 3]], '34.4': [[2, 3, 3, 3, 3, 3]], '35.0': [[3, 3, 3, 3, 3, 3]], },
    },
    critDMG_: {
        5: { '5.4': [[0]], '6.2': [[1]], '7.0': [[2]], '7.8': [[3]], '10.9': [[0, 0]], '11.7': [[0, 1]], '12.4': [[0, 2]], '13.2': [[1, 2]], '14.0': [[2, 2]], '14.8': [[2, 3]], '15.5': [[3, 3]], '16.3': [[0, 0, 0]], '17.1': [[0, 0, 1]], '17.9': [[0, 0, 2]], '18.7': [[0, 1, 2]], '19.4': [[0, 2, 2]], '20.2': [[1, 2, 2]], '21.0': [[2, 2, 2]], '21.8': [[0, 0, 0, 0], [2, 2, 3]], '22.5': [[2, 3, 3], [0, 0, 0, 1]], '23.3': [[3, 3, 3], [0, 0, 0, 2]], '24.1': [[0, 0, 1, 2]], '24.9': [[0, 0, 2, 2]], '25.6': [[0, 1, 2, 2]], '25.7': [[1, 1, 1, 2]], '26.4': [[0, 2, 2, 2]], '27.2': [[0, 0, 0, 0, 0], [1, 2, 2, 2]], '28.0': [[2, 2, 2, 2], [0, 0, 0, 0, 1]], '28.7': [[2, 2, 2, 3]], '28.8': [[1, 2, 3, 3], [0, 0, 0, 0, 2]], '29.5': [[0, 0, 0, 1, 2], [2, 2, 3, 3]], '30.3': [[0, 0, 0, 2, 2], [2, 3, 3, 3]], '31.1': [[3, 3, 3, 3], [0, 0, 1, 2, 2]], '31.9': [[0, 0, 2, 2, 2]], '32.6': [[0, 1, 2, 2, 2], [0, 0, 0, 0, 0, 0]], '32.7': [[1, 1, 1, 1, 3]], '33.4': [[0, 2, 2, 2, 2], [0, 0, 0, 0, 0, 1]], '34.2': [[0, 0, 0, 0, 0, 2], [1, 2, 2, 2, 2]], '35.0': [[2, 2, 2, 2, 2], [0, 0, 0, 0, 1, 2]], '35.7': [[0, 0, 0, 0, 2, 2], [2, 2, 2, 2, 3]], '35.8': [[0, 0, 0, 1, 1, 2], [1, 1, 3, 3, 3]], '36.5': [[2, 2, 2, 3, 3], [0, 0, 0, 1, 2, 2]], '37.3': [[0, 0, 0, 2, 2, 2], [2, 2, 3, 3, 3]], '38.1': [[0, 0, 1, 2, 2, 2], [2, 3, 3, 3, 3]], '38.8': [[0, 0, 2, 2, 2, 2]], '38.9': [[0, 1, 1, 2, 2, 2], [3, 3, 3, 3, 3]], '39.6': [[0, 1, 2, 2, 2, 2]], '40.4': [[0, 2, 2, 2, 2, 2]], '41.2': [[1, 2, 2, 2, 2, 2]], '41.9': [[2, 2, 2, 2, 2, 2]], '42.0': [[1, 2, 2, 2, 2, 3]], '42.7': [[2, 2, 2, 2, 2, 3]], '43.5': [[2, 2, 2, 2, 3, 3]], '44.3': [[2, 2, 2, 3, 3, 3]], '45.1': [[2, 2, 3, 3, 3, 3]], '45.8': [[2, 3, 3, 3, 3, 3]], '46.6': [[3, 3, 3, 3, 3, 3]], },
        3: { '3.3': [[0]], '3.7': [[1]], '4.2': [[2]], '4.7': [[3]], '6.5': [[0, 0]], '7.0': [[0, 1]], '7.5': [[1, 1]], '7.9': [[0, 3]], '8.4': [[1, 3]], '8.9': [[2, 3]], '9.3': [[3, 3]], },
        4: { '4.4': [[0]], '5.0': [[1]], '5.6': [[2]], '6.2': [[3]], '8.7': [[0, 0]], '9.3': [[0, 1]], '9.9': [[1, 1]], '10.0': [[0, 2]], '10.6': [[1, 2]], '11.2': [[1, 3]], '11.8': [[2, 3]], '12.4': [[3, 3]], '13.1': [[0, 0, 0]], '13.7': [[0, 0, 1]], '14.3': [[0, 1, 1]], '14.9': [[1, 1, 1]], '15.5': [[1, 1, 2]], '15.6': [[0, 2, 2]], '16.2': [[1, 1, 3]], '16.8': [[1, 2, 3]], '17.4': [[0, 0, 0, 0], [1, 3, 3]], '18.0': [[0, 0, 0, 1], [2, 3, 3]], '18.6': [[0, 0, 1, 1]], '18.7': [[3, 3, 3], [0, 0, 0, 2]], '19.3': [[0, 1, 1, 1]], '19.9': [[1, 1, 1, 1]], '20.5': [[1, 1, 1, 2]], '21.1': [[1, 1, 1, 3]], '21.2': [[0, 2, 2, 2]], '21.8': [[1, 1, 2, 3]], '22.4': [[1, 1, 3, 3]], '23.0': [[1, 2, 3, 3]], '23.6': [[1, 3, 3, 3]], '24.3': [[2, 3, 3, 3]], '24.9': [[3, 3, 3, 3]], },
    },
    hp_: {
        3: { '2.5': [[0]], '2.8': [[1]], '3.2': [[2]], '3.5': [[3]], '4.9': [[0, 0]], '5.3': [[0, 1]], '5.6': [[1, 1]], '6.0': [[1, 2]], '6.3': [[2, 2]], '6.7': [[2, 3]], '7.0': [[3, 3]], },
        4: { '3.3': [[0]], '3.7': [[1]], '4.2': [[2]], '4.7': [[3]], '6.5': [[0, 0]], '7.0': [[0, 1]], '7.5': [[1, 1]], '7.9': [[0, 3]], '8.4': [[1, 3]], '8.9': [[2, 3]], '9.3': [[3, 3]], '9.8': [[0, 0, 0]], '10.3': [[0, 0, 1]], '10.7': [[0, 1, 1]], '11.2': [[0, 0, 3]], '11.7': [[0, 1, 3]], '12.1': [[1, 1, 3]], '12.6': [[0, 3, 3]], '13.0': [[0, 0, 0, 0]], '13.1': [[1, 3, 3]], '13.5': [[2, 3, 3], [0, 0, 0, 1]], '14.0': [[3, 3, 3], [0, 0, 1, 1]], '14.4': [[0, 0, 0, 3]], '14.5': [[0, 1, 1, 1]], '14.9': [[0, 0, 1, 3]], '15.4': [[0, 1, 1, 3]], '15.8': [[0, 0, 3, 3]], '15.9': [[1, 1, 1, 3]], '16.3': [[0, 1, 3, 3]], '16.8': [[1, 1, 3, 3]], '17.2': [[0, 3, 3, 3]], '17.3': [[1, 2, 3, 3]], '17.7': [[1, 3, 3, 3]], '18.2': [[2, 3, 3, 3]], '18.6': [[3, 3, 3, 3]], },
        5: { '4.1': [[0]], '4.7': [[1]], '5.3': [[2]], '5.8': [[3]], '8.2': [[0, 0]], '8.7': [[0, 1]], '9.3': [[1, 1]], '9.9': [[1, 2]], '10.5': [[1, 3]], '11.1': [[2, 3]], '11.7': [[3, 3]], '12.2': [[0, 0, 0]], '12.8': [[0, 0, 1]], '13.4': [[0, 1, 1]], '14.0': [[1, 1, 1]], '14.6': [[1, 1, 2]], '15.2': [[1, 1, 3]], '15.7': [[1, 2, 3]], '15.8': [[2, 2, 2]], '16.3': [[1, 3, 3], [0, 0, 0, 0]], '16.9': [[2, 3, 3], [0, 0, 0, 1]], '17.5': [[3, 3, 3], [0, 0, 1, 1]], '18.1': [[0, 1, 1, 1]], '18.6': [[1, 1, 1, 1]], '18.7': [[0, 1, 1, 2]], '19.2': [[1, 1, 1, 2]], '19.8': [[1, 1, 1, 3]], '20.4': [[1, 1, 2, 3], [0, 0, 0, 0, 0]], '21.0': [[1, 1, 3, 3], [0, 0, 0, 0, 1]], '21.6': [[1, 2, 3, 3], [0, 0, 0, 1, 1]], '22.1': [[0, 0, 1, 1, 1]], '22.2': [[1, 3, 3, 3], [0, 0, 0, 1, 2]], '22.7': [[2, 3, 3, 3], [0, 1, 1, 1, 1]], '23.3': [[3, 3, 3, 3], [1, 1, 1, 1, 1]], '23.9': [[1, 1, 1, 1, 2]], '24.5': [[0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 3]], '25.1': [[1, 1, 1, 2, 3], [0, 0, 0, 0, 0, 1]], '25.6': [[0, 0, 0, 0, 1, 1], [1, 1, 1, 3, 3]], '25.7': [[1, 1, 2, 2, 3], [0, 0, 0, 0, 0, 2]], '26.2': [[0, 0, 0, 1, 1, 1], [1, 1, 2, 3, 3]], '26.3': [[2, 2, 2, 2, 2]], '26.8': [[0, 0, 1, 1, 1, 1], [1, 1, 3, 3, 3]], '27.4': [[0, 1, 1, 1, 1, 1], [1, 2, 3, 3, 3]], '28.0': [[1, 3, 3, 3, 3], [1, 1, 1, 1, 1, 1]], '28.6': [[2, 3, 3, 3, 3], [1, 1, 1, 1, 1, 2]], '29.1': [[1, 1, 1, 1, 1, 3]], '29.2': [[0, 1, 1, 2, 2, 2], [3, 3, 3, 3, 3]], '29.7': [[1, 1, 1, 1, 2, 3]], '30.3': [[1, 1, 1, 1, 3, 3]], '30.9': [[1, 1, 1, 2, 3, 3]], '31.5': [[1, 1, 1, 3, 3, 3]], '32.1': [[1, 1, 2, 3, 3, 3]], '32.6': [[1, 1, 3, 3, 3, 3]], '32.7': [[1, 2, 2, 3, 3, 3]], '33.2': [[1, 2, 3, 3, 3, 3]], '33.8': [[1, 3, 3, 3, 3, 3]], '34.4': [[2, 3, 3, 3, 3, 3]], '35.0': [[3, 3, 3, 3, 3, 3]], },
    },
    enerRech_: {
        3: { '2.7': [[0]], '3.1': [[1]], '3.5': [[2]], '3.9': [[3]], '5.4': [[0, 0]], '5.8': [[0, 1]], '6.2': [[1, 1]], '6.6': [[1, 2]], '7.0': [[2, 2]], '7.4': [[2, 3]], '7.8': [[3, 3]], },
        4: { '3.6': [[0]], '4.1': [[1]], '4.7': [[2]], '5.2': [[3]], '7.3': [[0, 0]], '7.8': [[0, 1]], '8.3': [[1, 1]], '8.8': [[1, 2]], '9.3': [[2, 2]], '9.8': [[2, 3]], '10.4': [[3, 3]], '10.9': [[0, 0, 0]], '11.4': [[0, 0, 1]], '11.9': [[0, 1, 1]], '12.4': [[1, 1, 1]], '12.9': [[1, 1, 2]], '13.0': [[0, 2, 2]], '13.5': [[1, 2, 2]], '14.0': [[2, 2, 2]], '14.5': [[0, 0, 0, 0], [2, 2, 3]], '15.0': [[2, 3, 3], [0, 0, 0, 1]], '15.5': [[3, 3, 3], [0, 0, 1, 1]], '15.6': [[0, 0, 0, 2]], '16.1': [[0, 1, 1, 1]], '16.6': [[1, 1, 1, 1]], '17.1': [[1, 1, 1, 2]], '17.6': [[1, 1, 2, 2]], '18.1': [[1, 2, 2, 2]], '18.6': [[2, 2, 2, 2]], '18.7': [[0, 2, 3, 3]], '19.2': [[2, 2, 2, 3]], '19.7': [[2, 2, 3, 3]], '20.2': [[2, 3, 3, 3]], '20.7': [[3, 3, 3, 3]], },
        5: { '4.5': [[0]], '5.2': [[1]], '5.8': [[2]], '6.5': [[3]], '9.1': [[0, 0]], '9.7': [[0, 1]], '10.4': [[1, 1]], '11.0': [[1, 2]], '11.7': [[2, 2]], '12.3': [[2, 3]], '13.0': [[3, 3]], '13.6': [[0, 0, 0]], '14.2': [[0, 0, 1]], '14.9': [[0, 1, 1]], '15.5': [[1, 1, 1]], '16.2': [[1, 1, 2]], '16.8': [[1, 2, 2]], '17.5': [[2, 2, 2]], '18.1': [[2, 2, 3], [0, 0, 0, 0]], '18.8': [[0, 0, 0, 1], [2, 3, 3]], '19.4': [[3, 3, 3], [0, 0, 1, 1]], '20.1': [[0, 1, 1, 1]], '20.7': [[1, 1, 1, 1]], '21.4': [[1, 1, 1, 2]], '22.0': [[1, 1, 2, 2]], '22.7': [[0, 0, 0, 0, 0], [1, 2, 2, 2]], '23.3': [[0, 0, 0, 0, 1], [2, 2, 2, 2]], '24.0': [[2, 2, 2, 3], [0, 0, 0, 1, 1]], '24.6': [[0, 0, 1, 1, 1], [2, 2, 3, 3]], '25.3': [[0, 1, 1, 1, 1], [2, 3, 3, 3]], '25.9': [[3, 3, 3, 3], [1, 1, 1, 1, 1]], '26.6': [[1, 1, 1, 1, 2]], '27.2': [[0, 0, 0, 0, 0, 0], [1, 1, 1, 2, 2]], '27.8': [[0, 0, 0, 0, 0, 1]], '27.9': [[1, 1, 2, 2, 2]], '28.5': [[0, 0, 0, 0, 1, 1], [1, 2, 2, 2, 2]], '29.1': [[0, 0, 0, 1, 1, 1]], '29.2': [[2, 2, 2, 2, 2]], '29.8': [[0, 0, 1, 1, 1, 1], [2, 2, 2, 2, 3]], '30.4': [[0, 1, 1, 1, 1, 1]], '30.5': [[2, 2, 2, 3, 3]], '31.1': [[2, 2, 3, 3, 3], [1, 1, 1, 1, 1, 1]], '31.7': [[1, 1, 1, 1, 1, 2]], '31.8': [[2, 3, 3, 3, 3]], '32.4': [[3, 3, 3, 3, 3], [1, 1, 1, 1, 2, 2]], '33.0': [[1, 1, 1, 2, 2, 2]], '33.7': [[1, 1, 2, 2, 2, 2]], '34.3': [[1, 2, 2, 2, 2, 2]], '35.0': [[2, 2, 2, 2, 2, 2]], '35.6': [[2, 2, 2, 2, 2, 3]], '36.3': [[2, 2, 2, 2, 3, 3]], '36.9': [[2, 2, 2, 3, 3, 3]], '37.6': [[2, 2, 3, 3, 3, 3]], '38.2': [[2, 3, 3, 3, 3, 3]], '38.9': [[3, 3, 3, 3, 3, 3]], },
    },
}
