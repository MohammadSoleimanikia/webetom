import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

function createGradient(color1: string, color2: string) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// ----------------------------------------------------------------------

export type ColorSchema =
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "error";

interface GradientsPaletteOptions {
  primary: string;
  secondary: string;
  primarySecondary: string;
  primaryDark: string;
  secondaryDark: string;
  info: string;
  success: string;
  warning: string;
  error: string;
  widget: string;
}

interface CustomPaletteOptions {
  overlay: string;
  overlayStrong: string;
  secondaryOverlay: string;
  secondaryOverlayStrong: string;
  border: string;
  surface: string;

  green: string;
  lightGreen: string;

  customGreen: string;
  customPurple: string;
  customRed: string;
  customBlue: string;
}

// ----------------------------------------------------------------------
// MUI MODULE AUGMENTATION

declare module "@mui/material/styles" {
  interface SimplePaletteColorOptions {
    lighter?: string;
    darker?: string;
  }

  interface PaletteColor {
    lighter: string;
    darker: string;
  }

  interface Palette {
    gradients: GradientsPaletteOptions;
    custom: CustomPaletteOptions;
  }

  interface PaletteOptions {
    gradients?: GradientsPaletteOptions;
    custom?: CustomPaletteOptions;
  }
}

declare module "@mui/material" {
  interface Color {
    0: string;
    600_8: string;
    600_12: string;
    600_16: string;
    600_24: string;
    600_32: string;
    600_48: string;
    600_56: string;
    600_80: string;
  }
}

// ----------------------------------------------------------------------
// COLORS

const PRIMARY = {
  lighter:"#C0E1FD",
  light: "#4D7DDA",
  main: "#0141C6",
  dark: "#01308F",
  darker: "#00215F",
};

const SECONDARY = {
  lighter: "#FFF0E5",
  light: "#FF9D4D",
  main: "#FE720C",
  dark: "#C45A00",
  darker: "#8A3D00",
};

const ERROR = {
  lighter: "#FDEBEB",
  light: "#EF5350",
  main: "#D32F2F",
  dark: "#C62828",
  darker: "#8E0000",
};

const WARNING = {
  lighter: "#FFF3E0",
  light: "#FF9800",
  main: "#ED6C02",
  dark: "#E65100",
  darker: "#9C2F00",
};

const SUCCESS = {
  lighter: "#E8F5E9",
  light: "#4CAF50",
  main: "#2E7D32",
  dark: "#1B5E20",
  darker: "#0D3511",
};

const INFO = {
  lighter: "#E1F5FE",
  light: "#03A9F4",
  main: "#0288D1",
  dark: "#01579B",
  darker: "#003C6C",
};

// ----------------------------------------------------------------------
// GREY

const GREY = {
  0: "#FFFFFF",
  100: "#F8F9FA",
  200: "#E9ECEF",
  300: "#DEE2E6",
  400: "#CED4DA",
  500: "#ADB5BD",
  600: "#6C757D",
  700: "#495057",
  800: "#343A40",
  900: "#212529",

  600_8: alpha("#6C757D", 0.08),
  600_12: alpha("#6C757D", 0.12),
  600_16: alpha("#6C757D", 0.16),
  600_24: alpha("#6C757D", 0.24),
  600_32: alpha("#6C757D", 0.32),
  600_48: alpha("#6C757D", 0.48),
  600_56: alpha("#6C757D", 0.56),
  600_80: alpha("#6C757D", 0.8),
};

// ----------------------------------------------------------------------
// GRADIENTS

const GRADIENTS = {
  primary: createGradient(PRIMARY.lighter, "#fff"),

  secondary: createGradient(SECONDARY.light, SECONDARY.main),

  primarySecondary: `linear-gradient(
    135deg,
    ${PRIMARY.main} 0%,
    ${SECONDARY.main} 100%
  )`,

  primaryDark: createGradient(PRIMARY.main, PRIMARY.dark),

  secondaryDark: createGradient(SECONDARY.main, SECONDARY.dark),

  info: createGradient(INFO.light, INFO.main),

  success: createGradient(SUCCESS.light, SUCCESS.main),

  warning: createGradient(WARNING.light, WARNING.main),

  error: createGradient(ERROR.light, ERROR.main),

  widget: "linear-gradient(180deg, #FFFFFF 0%, transparent 100%)",
};

// ----------------------------------------------------------------------
// CUSTOM

const CUSTOM = {
  overlay: alpha(PRIMARY.main, 0.08),
  overlayStrong: alpha(PRIMARY.main, 0.16),

  secondaryOverlay: alpha(SECONDARY.main, 0.08),
  secondaryOverlayStrong: alpha(SECONDARY.main, 0.16),

  border: "#E3EAF5",

  surface: "#F4F7FC",

  green: "#16C79A",
  lightGreen: "#A2E9D7",

  customGreen: "#039747",
  customPurple: "#722CDB",
  customRed: "#F53641",
  customBlue: "#2072D9",
};

// ----------------------------------------------------------------------
// PALETTE

export const palette = {
  mode: "light",

  common: {
    black: "#000000",
    white: "#FFFFFF",
  },

  primary: {
    ...PRIMARY,
    contrastText: "#FFFFFF",
  },

  secondary: {
    ...SECONDARY,
    contrastText: "#FFFFFF",
  },

  error: {
    ...ERROR,
    contrastText: "#FFFFFF",
  },

  warning: {
    ...WARNING,
    contrastText: "#FFFFFF",
  },

  success: {
    ...SUCCESS,
    contrastText: "#FFFFFF",
  },

  info: {
    ...INFO,
    contrastText: "#FFFFFF",
  },

  grey: GREY,

  gradients: GRADIENTS,

  custom: CUSTOM,

  background: {
    
    default: "#F9F9FA",
    paper: "#FFFFFF",
  },

  text: {
    primary: "#212121",
    secondary: "#757575",
    disabled: "#BDBDBD",
  },

  divider: "#E0E0E0",

  action: {
    active: GREY[600],
    hover: GREY[600_8],
    selected: GREY[600_16],
    disabled: GREY[600_80],
    disabledBackground: GREY[600_24],
    focus: GREY[600_24],

    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
} as const;