export const REGISTERED_FEATURES = {
    Android: {
        'LDPI': {name: 'LDPI', string_rep: '1'},
        'MDPI': {name: 'MDPI', string_rep: '2'},
        'HDPI': {name: 'HDPI', string_rep: '3'},
        'XHDPI': {name: 'XHDPI', string_rep: '4'},
        'XXHDPI': {name: 'XXHDPI', string_rep: '5'},
        'XXXHDPI': {name: 'XXXHDPI', string_rep: '6'},
        ALL: [
            {name: 'LDPI', size: "(36 x 36)"}, {name: 'MDPI', size: "(48 x 48)"},
            {name: 'HDPI', size: "(72 x 72)"}, {name: 'XHDPI', size: "(96 x 96)"},
            {name: 'XXHDPI', size: "(144 x 144)"}, {name: 'XXXHDPI', size: "(192 x 192)"}
        ],
        SELECT_ALL: {
            'LDPI': 'LDPI',
            'MDPI': 'MDPI',
            'HDPI': 'HDPI',
            'XHDPI': 'XHDPI',
            'XXHDPI': 'XXHDPI',
            'XXXHDPI': 'XXXHDPI',
        }
    },
    Web: {
        'Compress image': {name: 'Compress image', string_rep: '1'},
        'Create favicon': {name: 'Create favicon', string_rep: '2'},
        ALL: ['Compress image', 'Create favicon'],
        SELECT_ALL: {'Compress image': 'Compress image', 'Create favicon': 'Create favicon'}
    },
    Ios: {
        '@X': {name: '@X', string_rep: '1'},
        '@2X': {name: '@2X', string_rep: '2'},
        '@3X': {name: '@3X', string_rep: '3'},
        'ALL': [
            {name: '@X', size: "(100 x 100)"}, {name: '@2X', size: "(200 x 200)"},
            {name: '@3X', size: "(300 x 300)"}
        ],
        SELECT_ALL: {
            '@X': '@X',
            '@2X': '@2X',
            '@3X': '@3X',
        }
    }
}