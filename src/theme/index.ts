import { extendTheme, transition } from '@chakra-ui/react';

const semanticTokens = {
  colors: {
    'chakra-body-bg': '#0F1011',
    'primary': '#FFFFFF',
    'chakra-body-text': '#FFFFFF',
    white: '#FFFFFF',
    whiteTransparent: 'rgba(255, 255, 255, 0.4)',
    whiteTransparentLight: 'rgba(255, 255, 255, 0.2)',
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
    mainTransition: '0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
  }
};

// Colors
type SemanticColors = typeof semanticTokens['colors'];

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



// Transitions
type SemanticTransitions = typeof semanticTokens['transitions'];

type Transitions = keyof SemanticTransitions;

type AllTransitions = {
  [K in Transitions]: string;
};

export const TRANSITIONS: AllTransitions = Object.keys(semanticTokens.transitions).reduce(
  (prev, transition) => ({
    ...prev,
    [transition as Transitions]: `var(--chakra-transitions-${transition})`,
  }),
  {} as AllTransitions,
);

export const customTheme = extendTheme({
  semanticTokens,
  fonts: {
    heading: `"Open Sans", sans-serif`,
    body: `"Open Sans", sans-serif`,
  },
});