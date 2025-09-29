// Centralized theme configuration for easy editing
export const theme = {
  // Font Families
  fonts: {
    primary: "'Lexend', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
    craftcode: {
      h1: "var(--craftcode-h1-font-family, 'Lexend', Helvetica, sans-serif)",
      h2: "var(--craftcode-h2-font-family, 'Lexend', Helvetica, sans-serif)",
      h3: "var(--craftcode-h3-font-family, 'Lexend', Helvetica, sans-serif)",
      h4: "var(--craftcode-h4-font-family, 'Lexend', Helvetica, sans-serif)",
    }
  },

  // Font Sizes
  fontSize: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    base: '1rem',      // 16px
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    craftcode: {
      h1: 'var(--craftcode-h1-font-size, 3rem)',
      h2: 'var(--craftcode-h2-font-size, 2.25rem)',
      h3: 'var(--craftcode-h3-font-size, 1.875rem)',
      h4: 'var(--craftcode-h4-font-size, 1.25rem)',
    }
  },

  // Font Weights
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    craftcode: {
      h1: 'var(--craftcode-h1-font-weight, 700)',
      h2: 'var(--craftcode-h2-font-weight, 700)',
      h3: 'var(--craftcode-h3-font-weight, 600)',
      h4: 'var(--craftcode-h4-font-weight, 600)',
    }
  },

  // Line Heights
  lineHeight: {
    none: '1',
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
    craftcode: {
      h1: 'var(--craftcode-h1-line-height, 1.2)',
      h2: 'var(--craftcode-h2-line-height, 1.2)',
      h3: 'var(--craftcode-h3-line-height, 1.3)',
      h4: 'var(--craftcode-h4-line-height, 1.4)',
    }
  },

  // Letter Spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
    craftcode: {
      h1: 'var(--craftcode-h1-letter-spacing, 0)',
      h2: 'var(--craftcode-h2-letter-spacing, 0)',
      h3: 'var(--craftcode-h3-letter-spacing, 0)',
      h4: 'var(--craftcode-h4-letter-spacing, 0)',
    }
  },

  // Colors
  colors: {
    primary: {
      blue: '#0156ff',
      lightBlue: '#709df6',
      darkBlue: '#0039a6',
    },
    neutral: {
      dark: '#010326',
      darkMuted: '#010326cc',
      darkLight: '#01032699',
      gray: '#f0f2f2',
      lightGray: '#f9fafb',
      white: '#ffffff',
    },
    backgrounds: {
      dark: '#131e32',
      blue: '#002266',
      lightGray: 'rgb(249, 250, 251)',
    }
  },

  // Spacing
  spacing: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    '2xl': '3rem',   // 48px
    '3xl': '4rem',   // 64px
    '4xl': '5rem',   // 80px
    '5xl': '6rem',   // 96px
  },

  // Border Radius
  borderRadius: {
    sm: '0.25rem',   // 4px
    md: '0.375rem',  // 6px
    lg: '0.5rem',    // 8px
    xl: '0.75rem',   // 12px
    '2xl': '1rem',   // 16px
    '3xl': '1.25rem', // 20px
    full: '9999px',
  },

  // Shadows
  boxShadow: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  },

  // Common Combinations
  text: {
    // Primary text styles
    body: {
      fontFamily: "'Lexend', Helvetica, sans-serif",
      fontSize: '1.125rem', // 18px
      fontWeight: '400',
      lineHeight: '1.75', // 28px
      letterSpacing: '0',
      color: '#010326cc',
    },
    // Heading styles
    h1: {
      fontFamily: "var(--craftcode-h1-font-family, 'Lexend', Helvetica, sans-serif)",
      fontSize: 'var(--craftcode-h1-font-size, 3rem)',
      fontWeight: 'var(--craftcode-h1-font-weight, 700)',
      lineHeight: 'var(--craftcode-h1-line-height, 1.2)',
      letterSpacing: 'var(--craftcode-h1-letter-spacing, 0)',
      color: '#010326',
    },
    h2: {
      fontFamily: "var(--craftcode-h2-font-family, 'Lexend', Helvetica, sans-serif)",
      fontSize: 'var(--craftcode-h2-font-size, 2.25rem)',
      fontWeight: 'var(--craftcode-h2-font-weight, 700)',
      lineHeight: 'var(--craftcode-h2-line-height, 1.2)',
      letterSpacing: 'var(--craftcode-h2-letter-spacing, 0)',
      color: '#010326',
    },
    h3: {
      fontFamily: "var(--craftcode-h3-font-family, 'Lexend', Helvetica, sans-serif)",
      fontSize: 'var(--craftcode-h3-font-size, 1.875rem)',
      fontWeight: 'var(--craftcode-h3-font-weight, 600)',
      lineHeight: 'var(--craftcode-h3-line-height, 1.3)',
      letterSpacing: 'var(--craftcode-h3-letter-spacing, 0)',
      color: '#010326',
    },
    h4: {
      fontFamily: "var(--craftcode-h4-font-family, 'Lexend', Helvetica, sans-serif)",
      fontSize: 'var(--craftcode-h4-font-size, 1.25rem)',
      fontWeight: 'var(--craftcode-h4-font-weight, 600)',
      lineHeight: 'var(--craftcode-h4-line-height, 1.4)',
      letterSpacing: 'var(--craftcode-h4-letter-spacing, 0)',
      color: '#010326',
    },
    // Special text styles
    subtitle: {
      fontFamily: "'Lexend', Helvetica, sans-serif",
      fontSize: '1rem',
      fontWeight: '500',
      lineHeight: '1.5',
      letterSpacing: '0',
      color: '#0156ff',
    },
    caption: {
      fontFamily: "'Lexend', Helvetica, sans-serif",
      fontSize: '0.75rem',
      fontWeight: '500',
      lineHeight: '1.75',
      letterSpacing: '0',
      color: '#01032699',
    }
  },

  // Component-specific styles
  components: {
    button: {
      primary: {
        backgroundColor: '#0156ff',
        color: '#ffffff',
        padding: '26px 32px',
        borderRadius: '0.375rem',
        fontSize: '1.125rem',
        fontWeight: '500',
        fontFamily: "'Lexend', Helvetica, sans-serif",
      }
    },
    card: {
      backgroundColor: '#ffffff',
      borderRadius: '1.25rem',
      padding: '1.5rem',
      boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      border: '1px solid #f0f2f2',
    }
  }
};

// Utility function to create style objects
export const createTextStyle = (styleKey: keyof typeof theme.text) => {
  const style = theme.text[styleKey];
  return {
    fontFamily: style.fontFamily,
    fontSize: style.fontSize,
    fontWeight: style.fontWeight,
    lineHeight: style.lineHeight,
    letterSpacing: style.letterSpacing,
    color: style.color,
  };
};

// Utility function to get color values
export const getColor = (path: string) => {
  const keys = path.split('.');
  let value: any = theme.colors;
  for (const key of keys) {
    value = value[key];
  }
  return value;
};

export default theme;
