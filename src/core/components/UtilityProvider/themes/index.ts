import { colors, Palette, responsiveFontSizes } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { Theme } from '@mui/material/styles/createTheme';
import baseOptions from './baseOptions';
import { softShadows, strongShadows } from './shadows';

type ThemeNameType = 'LIGHT' | 'ONE_DARK' | 'UNICORN';

interface ThemeConfigModel {
  theme?: ThemeNameType;
  direction?: 'rtl' | 'ltr';
  responsiveFontSizes?: any;
}

export interface CustomTheme extends Theme {
  name: string;
  palette: Palette;
}

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
      success: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
      success?: string;
    };
  }
}

const themesOptions: Record<ThemeNameType, any> = {
  LIGHT: {
    overrides: {
      MuiInputBase: {
        input: {
          '&::placeholder': {
            opacity: 1,
            color: colors.green[600],
          },
        },
      },
    },
    palette: {
      mode: 'light',
      action: {
        active: colors.green[600],
      },
      background: {
        default: colors.common.white,
        dark: '#f4f6f8',
        paper: colors.common.white,
      },
      primary: {
        main: colors.green[600],
      },
      secondary: {
        main: '#5850EC',
      },
      info: {
        main: '#2F80ED',
      },
      text: {
        primary: colors.grey[900],
        secondary: colors.grey[600],
      },
    },
    status: {
      danger: 'orange',
      success: 'green',
      info: 'light-blue',
      error: 'red',
    },
    shadows: softShadows,
  },
  ONE_DARK: {
    palette: {
      mode: 'dark',
      action: {
        active: 'rgba(255, 255, 255, 0.54)',
        hover: 'rgba(255, 255, 255, 0.04)',
        selected: 'rgba(255, 255, 255, 0.08)',
        disabled: 'rgba(255, 255, 255, 0.26)',
        disabledBackground: 'rgba(255, 255, 255, 0.12)',
        focus: 'rgba(255, 255, 255, 0.12)',
      },
      background: {
        default: 'whitesmoke',
        dark: '#1c2025',
        paper: '#282C34',
      },
      primary: {
        main: '#8a85ff',
      },
      secondary: {
        main: '#8a85ff',
      },
      text: {
        primary: '#4f4f4f',
        secondary: '#adb0bb',
      },
    },
    status: {
      danger: 'orange',
    },
    shadows: strongShadows,
  },
  UNICORN: {
    palette: {
      mode: 'light',
      action: {
        // active: 'rgba(255, 255, 255, 0.54)',
        // hover: 'rgba(255, 255, 255, 0.04)',
        // selected: 'rgba(255, 255, 255, 0.08)',
        // disabled: 'rgba(94, 94, 94, 0.3)',
        // disabledBackground: 'rgba(255, 255, 255, 0.12)',
        // focus: 'rgba(255, 255, 255, 0.12)',
      },
      background: {
        default: 'whitesmoke',
        dark: '#222431',
        paper: 'white',
      },
      primary: {
        main: '#9A99FF',
        contrastText: 'white',
      },
      secondary: {
        main: '#a67dff',
      },
      warning: {
        main: '#F2994A',
      },
      info: {
        main: '#2F80ED',
      },
      error: {
        main: '#EB5757',
      },
      success: {
        main: '#27AE60',
      },
      text: {
        primary: '#5E5E5E',
        secondary: '#4f4f4f',
      },
      common: {
        black: '#200E32',
      },
    },
    status: {
      danger: 'orange',
    },
    shadows: strongShadows,
  },
};

export const createCustomTheme = (config: ThemeConfigModel = {}) => {
  let themeOptions = themesOptions[config.theme || 'UNICORN'];

  let theme = createTheme({
    ...baseOptions,
    ...themeOptions,
    ...{ direction: config.direction },
  });

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};
