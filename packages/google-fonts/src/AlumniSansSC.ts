import {loadFonts} from './base';

export const getInfo = () => ({
	fontFamily: 'Alumni Sans SC',
	importName: 'AlumniSansSC',
	version: 'v2',
	url: 'https://fonts.googleapis.com/css2?family=Alumni+Sans+SC:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900',
	unicodeRanges: {
		'cyrillic-ext':
			'U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
		cyrillic: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
		vietnamese:
			'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB',
		'latin-ext':
			'U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF',
		latin:
			'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
	},
	fonts: {
		italic: {
			'100': {
				'cyrillic-ext':
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GQYaxzVjArrOeNFYbCvkZ8C0UB0JLZQyYB.woff2',
				cyrillic:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GQYaxzVjArrOeNFYbCvkZ8C0UB0JvZQyYB.woff2',
				vietnamese:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GQYaxzVjArrOeNFYbCvkZ8C0UB0JDZQyYB.woff2',
				'latin-ext':
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GQYaxzVjArrOeNFYbCvkZ8C0UB0JHZQyYB.woff2',
				latin:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GQYaxzVjArrOeNFYbCvkZ8C0UB0J_ZQw.woff2',
			},
			'200': {
				'cyrillic-ext':
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GQYaxzVjArrOeNFYbCvkZ8C0UB0JLZQyYB.woff2',
				cyrillic:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GQYaxzVjArrOeNFYbCvkZ8C0UB0JvZQyYB.woff2',
				vietnamese:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GQYaxzVjArrOeNFYbCvkZ8C0UB0JDZQyYB.woff2',
				'latin-ext':
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GQYaxzVjArrOeNFYbCvkZ8C0UB0JHZQyYB.woff2',
				latin:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GQYaxzVjArrOeNFYbCvkZ8C0UB0J_ZQw.woff2',
			},
			'300': {
				'cyrillic-ext':
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GQYaxzVjArrOeNFYbCvkZ8C0UB0JLZQyYB.woff2',
				cyrillic:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GQYaxzVjArrOeNFYbCvkZ8C0UB0JvZQyYB.woff2',
				vietnamese:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GQYaxzVjArrOeNFYbCvkZ8C0UB0JDZQyYB.woff2',
				'latin-ext':
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GQYaxzVjArrOeNFYbCvkZ8C0UB0JHZQyYB.woff2',
				latin:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GQYaxzVjArrOeNFYbCvkZ8C0UB0J_ZQw.woff2',
			},
			'400': {
				'cyrillic-ext':
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GQYaxzVjArrOeNFYbCvkZ8C0UB0JLZQyYB.woff2',
				cyrillic:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GQYaxzVjArrOeNFYbCvkZ8C0UB0JvZQyYB.woff2',
				vietnamese:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GQYaxzVjArrOeNFYbCvkZ8C0UB0JDZQyYB.woff2',
				'latin-ext':
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GQYaxzVjArrOeNFYbCvkZ8C0UB0JHZQyYB.woff2',
				latin:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GQYaxzVjArrOeNFYbCvkZ8C0UB0J_ZQw.woff2',
			},
			'500': {
				'cyrillic-ext':
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GQYaxzVjArrOeNFYbCvkZ8C0UB0JLZQyYB.woff2',
				cyrillic:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GQYaxzVjArrOeNFYbCvkZ8C0UB0JvZQyYB.woff2',
				vietnamese:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GQYaxzVjArrOeNFYbCvkZ8C0UB0JDZQyYB.woff2',
				'latin-ext':
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GQYaxzVjArrOeNFYbCvkZ8C0UB0JHZQyYB.woff2',
				latin:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GQYaxzVjArrOeNFYbCvkZ8C0UB0J_ZQw.woff2',
			},
			'600': {
				'cyrillic-ext':
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GQYaxzVjArrOeNFYbCvkZ8C0UB0JLZQyYB.woff2',
				cyrillic:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GQYaxzVjArrOeNFYbCvkZ8C0UB0JvZQyYB.woff2',
				vietnamese:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GQYaxzVjArrOeNFYbCvkZ8C0UB0JDZQyYB.woff2',
				'latin-ext':
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GQYaxzVjArrOeNFYbCvkZ8C0UB0JHZQyYB.woff2',
				latin:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GQYaxzVjArrOeNFYbCvkZ8C0UB0J_ZQw.woff2',
			},
			'700': {
				'cyrillic-ext':
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GQYaxzVjArrOeNFYbCvkZ8C0UB0JLZQyYB.woff2',
				cyrillic:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GQYaxzVjArrOeNFYbCvkZ8C0UB0JvZQyYB.woff2',
				vietnamese:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GQYaxzVjArrOeNFYbCvkZ8C0UB0JDZQyYB.woff2',
				'latin-ext':
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GQYaxzVjArrOeNFYbCvkZ8C0UB0JHZQyYB.woff2',
				latin:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GQYaxzVjArrOeNFYbCvkZ8C0UB0J_ZQw.woff2',
			},
			'800': {
				'cyrillic-ext':
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GQYaxzVjArrOeNFYbCvkZ8C0UB0JLZQyYB.woff2',
				cyrillic:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GQYaxzVjArrOeNFYbCvkZ8C0UB0JvZQyYB.woff2',
				vietnamese:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GQYaxzVjArrOeNFYbCvkZ8C0UB0JDZQyYB.woff2',
				'latin-ext':
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GQYaxzVjArrOeNFYbCvkZ8C0UB0JHZQyYB.woff2',
				latin:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GQYaxzVjArrOeNFYbCvkZ8C0UB0J_ZQw.woff2',
			},
			'900': {
				'cyrillic-ext':
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GQYaxzVjArrOeNFYbCvkZ8C0UB0JLZQyYB.woff2',
				cyrillic:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GQYaxzVjArrOeNFYbCvkZ8C0UB0JvZQyYB.woff2',
				vietnamese:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GQYaxzVjArrOeNFYbCvkZ8C0UB0JDZQyYB.woff2',
				'latin-ext':
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GQYaxzVjArrOeNFYbCvkZ8C0UB0JHZQyYB.woff2',
				latin:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GQYaxzVjArrOeNFYbCvkZ8C0UB0J_ZQw.woff2',
			},
		},
		normal: {
			'100': {
				'cyrillic-ext':
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GSYaxzVjArrOeNFYbCvkZ8C0UJ4J3BRw.woff2',
				cyrillic:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GSYaxzVjArrOeNFYbCvkZ8C0UA4J3BRw.woff2',
				vietnamese:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GSYaxzVjArrOeNFYbCvkZ8C0UL4J3BRw.woff2',
				'latin-ext':
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GSYaxzVjArrOeNFYbCvkZ8C0UK4J3BRw.woff2',
				latin:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GSYaxzVjArrOeNFYbCvkZ8C0UE4J0.woff2',
			},
			'200': {
				'cyrillic-ext':
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GSYaxzVjArrOeNFYbCvkZ8C0UJ4J3BRw.woff2',
				cyrillic:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GSYaxzVjArrOeNFYbCvkZ8C0UA4J3BRw.woff2',
				vietnamese:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GSYaxzVjArrOeNFYbCvkZ8C0UL4J3BRw.woff2',
				'latin-ext':
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GSYaxzVjArrOeNFYbCvkZ8C0UK4J3BRw.woff2',
				latin:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GSYaxzVjArrOeNFYbCvkZ8C0UE4J0.woff2',
			},
			'300': {
				'cyrillic-ext':
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GSYaxzVjArrOeNFYbCvkZ8C0UJ4J3BRw.woff2',
				cyrillic:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GSYaxzVjArrOeNFYbCvkZ8C0UA4J3BRw.woff2',
				vietnamese:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GSYaxzVjArrOeNFYbCvkZ8C0UL4J3BRw.woff2',
				'latin-ext':
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GSYaxzVjArrOeNFYbCvkZ8C0UK4J3BRw.woff2',
				latin:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GSYaxzVjArrOeNFYbCvkZ8C0UE4J0.woff2',
			},
			'400': {
				'cyrillic-ext':
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GSYaxzVjArrOeNFYbCvkZ8C0UJ4J3BRw.woff2',
				cyrillic:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GSYaxzVjArrOeNFYbCvkZ8C0UA4J3BRw.woff2',
				vietnamese:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GSYaxzVjArrOeNFYbCvkZ8C0UL4J3BRw.woff2',
				'latin-ext':
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GSYaxzVjArrOeNFYbCvkZ8C0UK4J3BRw.woff2',
				latin:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GSYaxzVjArrOeNFYbCvkZ8C0UE4J0.woff2',
			},
			'500': {
				'cyrillic-ext':
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GSYaxzVjArrOeNFYbCvkZ8C0UJ4J3BRw.woff2',
				cyrillic:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GSYaxzVjArrOeNFYbCvkZ8C0UA4J3BRw.woff2',
				vietnamese:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GSYaxzVjArrOeNFYbCvkZ8C0UL4J3BRw.woff2',
				'latin-ext':
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GSYaxzVjArrOeNFYbCvkZ8C0UK4J3BRw.woff2',
				latin:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GSYaxzVjArrOeNFYbCvkZ8C0UE4J0.woff2',
			},
			'600': {
				'cyrillic-ext':
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GSYaxzVjArrOeNFYbCvkZ8C0UJ4J3BRw.woff2',
				cyrillic:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GSYaxzVjArrOeNFYbCvkZ8C0UA4J3BRw.woff2',
				vietnamese:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GSYaxzVjArrOeNFYbCvkZ8C0UL4J3BRw.woff2',
				'latin-ext':
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GSYaxzVjArrOeNFYbCvkZ8C0UK4J3BRw.woff2',
				latin:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GSYaxzVjArrOeNFYbCvkZ8C0UE4J0.woff2',
			},
			'700': {
				'cyrillic-ext':
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GSYaxzVjArrOeNFYbCvkZ8C0UJ4J3BRw.woff2',
				cyrillic:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GSYaxzVjArrOeNFYbCvkZ8C0UA4J3BRw.woff2',
				vietnamese:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GSYaxzVjArrOeNFYbCvkZ8C0UL4J3BRw.woff2',
				'latin-ext':
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GSYaxzVjArrOeNFYbCvkZ8C0UK4J3BRw.woff2',
				latin:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GSYaxzVjArrOeNFYbCvkZ8C0UE4J0.woff2',
			},
			'800': {
				'cyrillic-ext':
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GSYaxzVjArrOeNFYbCvkZ8C0UJ4J3BRw.woff2',
				cyrillic:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GSYaxzVjArrOeNFYbCvkZ8C0UA4J3BRw.woff2',
				vietnamese:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GSYaxzVjArrOeNFYbCvkZ8C0UL4J3BRw.woff2',
				'latin-ext':
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GSYaxzVjArrOeNFYbCvkZ8C0UK4J3BRw.woff2',
				latin:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GSYaxzVjArrOeNFYbCvkZ8C0UE4J0.woff2',
			},
			'900': {
				'cyrillic-ext':
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GSYaxzVjArrOeNFYbCvkZ8C0UJ4J3BRw.woff2',
				cyrillic:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GSYaxzVjArrOeNFYbCvkZ8C0UA4J3BRw.woff2',
				vietnamese:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GSYaxzVjArrOeNFYbCvkZ8C0UL4J3BRw.woff2',
				'latin-ext':
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GSYaxzVjArrOeNFYbCvkZ8C0UK4J3BRw.woff2',
				latin:
					'https://fonts.gstatic.com/s/alumnisanssc/v2/Y4GSYaxzVjArrOeNFYbCvkZ8C0UE4J0.woff2',
			},
		},
	},
	subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext', 'vietnamese'],
});

export const fontFamily = 'Alumni Sans SC' as const;

type Variants = {
	italic: {
		weights:
			| '100'
			| '200'
			| '300'
			| '400'
			| '500'
			| '600'
			| '700'
			| '800'
			| '900';
		subsets: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese';
	};
	normal: {
		weights:
			| '100'
			| '200'
			| '300'
			| '400'
			| '500'
			| '600'
			| '700'
			| '800'
			| '900';
		subsets: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese';
	};
};

export const loadFont = <T extends keyof Variants>(
	style?: T,
	options?: {
		weights?: Variants[T]['weights'][];
		subsets?: Variants[T]['subsets'][];
		document?: Document;
		ignoreTooManyRequestsWarning?: boolean;
	},
) => {
	return loadFonts(getInfo(), style, options);
};
