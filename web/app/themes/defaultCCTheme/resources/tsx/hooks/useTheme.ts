import { theme, createTextStyle, getColor } from '../styles/theme';

// Custom hook for accessing theme values
export const useTheme = () => {
  return {
    theme,
    createTextStyle,
    getColor,
    
    // Quick access to common values
    colors: theme.colors,
    fonts: theme.fonts,
    spacing: theme.spacing,
    text: theme.text,
    
    // Utility functions
    getSpacing: (size: keyof typeof theme.spacing) => theme.spacing[size],
    getFontSize: (size: keyof typeof theme.fontSize) => theme.fontSize[size],
    getBorderRadius: (size: keyof typeof theme.borderRadius) => theme.borderRadius[size],
    
    // Generate className strings for Tailwind (when needed)
    generateClassNames: {
      text: (styleKey: keyof typeof theme.text) => {
        const style = theme.text[styleKey];
        // This would be used for custom utility classes if needed
        return `font-[${style.fontWeight}] text-[${style.fontSize}] leading-[${style.lineHeight}]`;
      }
    }
  };
};

export default useTheme;
