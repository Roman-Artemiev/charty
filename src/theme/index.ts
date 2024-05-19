import { extendTheme } from '@chakra-ui/react';

const semanticTokens = {
	colors: {
        'chakra-body-bg': {
			blackLight: '#0F1011'
		},
        white: '#FFFFFF',
        green: '#83FF88',
        blue: '#83B4FF',
        yellow: '#FFEB83',
        red: '#FF8383',
        black: '#000000',
        blackLight: '#0F1011',
        dark: '#1A1A1A',
        darkLight: '#262626',
        darkSoft: '#3B3B3B',
        gray: '#A1A1A1',
        grayLight: '#CCCCCC',
	},
    transitions: {
        mainTransition: `0.3s cubic-bezier(0.34, 1.56, 0.64, 1)`,
    }
};

type SemanticColors = (typeof semanticTokens)['colors'];

type Colors = keyof SemanticColors;

type AllColors = {
	[K in Colors]: string;
};

export const COLORS: AllColors = Object.keys(semanticTokens.colors).reduce(
	(prev, color) => ({
		...prev,
		[color as Colors]: `var(--chakra-colors-${color})`,
	}),
	{} as AllColors,
);

export const customTheme = extendTheme({
	semanticTokens,
	fonts: {
		heading: `"Open Sans", sans-serif`,
		body: `'"Open Sans", sans-serif`,
	},
});