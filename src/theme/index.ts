import { extendTheme, transition } from '@chakra-ui/react';

const semanticTokens = {
  colors: {
    'chakra-body-bg': '#0F1011',
    'primary': '#FFFFFF',
    'chakra-body-text': '#FFFFFF',
    white: '#FFFFFF',
    whiteTransparent: 'rgba(255, 255, 255, 0.4)',
    whiteTransparentLight: 'rgba(255, 255, 255, 0.2)',
    cardDarkGradient: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.8) 100%)',
    green: '#83FF88',
    blue: '#83B4FF',
    blueHover: '#5599FE',
    yellow: '#FFEB83',
    red: '#FF8383',
    black: '#000000',
    blackLight: '#0F1011',
    dark: '#1A1A1A',
    darkLight: '#262626',
    darkSoft: '#3B3B3B',
    gray: '#A1A1A1',
    grayLight: '#CCCCCC',
    modalOverlay: 'rgba(15, 16, 17, 0.3)',
  },
  transitions: {
    mainTransition: '0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
};
// .current.scrollHeight
const breakpoints = {
  sm: "30em", // 480px
  md: "48em", // 768px
  '840px': "840px", // 840px
  lg: "62em", // 992px
  xl: "80em", // 1280px
  '1300px': "1300px", // 1300px
  "2xl": "96em", // 1536px
}

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
  breakpoints,
  fonts: {
    heading: `"Open Sans", sans-serif`,
    body: `"Open Sans", sans-serif`,
  },
  styles: {
    h2: {
      fontSize: '40px',
      color: COLORS.red,
      fontWeight: 800,
    }
  }
});