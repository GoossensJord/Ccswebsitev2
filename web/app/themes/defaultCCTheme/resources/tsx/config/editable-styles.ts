export const editableStyles = {
  // TYPOGRAPHY - Easy to edit font settings
  typography: {
    // Primary font family (used throughout the site) - Now using local Lexend font
    primaryFont: "'Lexend', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
    
    // Heading font sizes (edit these to make headings bigger/smaller)
    headingSizes: {
      h1: "3rem",      // Main page titles - EDIT THIS to change H1 size
      h2: "2.25rem",   // Section titles - EDIT THIS to change H2 size  
      h3: "1.875rem",  // Subsection titles - EDIT THIS to change H3 size
      h4: "1.25rem",   // Small headings - EDIT THIS to change H4 size
    },
    
    // Body text settings
    bodyText: {
      size: "1.125rem",   
      lineHeight: "1.75", 
      weight: "400",      
    },
    
    // Small text settings (captions, meta info)
    smallText: {
      size: "0.875rem",   
      weight: "500",      
    }
  },

  // COLORS - Easy to edit color scheme
  colors: {
    // Primary brand colors 
    brand: {
      primary: "#0156ff",     
      secondary: "#709df6",   
      accent: "#0039a6",      
    },
    
    // Text colors
    text: {
      primary: "#010326",    
      secondary: "#010326cc",
      light: "#01032699",    
    },
    
    // Background colors - EDIT THESE to change backgrounds
    backgrounds: {
      light: "#f9fafb",  
      dark: "#131e32",   
      accent: "#002266", 
    },
    
    borders: {
      light: "#f0f2f2",   
      medium: "#e5e7eb",  
    }
  },

  // SPACING - Edit these to change spacing throughout the site
  spacing: {
    // Section spacing (between major sections)
    sections: {
      small: "3rem",    
      medium: "4rem",   
      large: "6rem",    
    },
    
    // Component spacing (inside components)
    components: {
      tight: "0.5rem", 
      normal: "1rem",  
      loose: "1.5rem", 
    }
  },

  components: {
    buttons: {
      primary: {
        backgroundColor: "#0156ff", 
        textColor: "#ffffff",       // Button text - ALWAYS WHITE
        padding: "1rem 2rem",       
        borderRadius: "0.375rem",   
        fontSize: "1.125rem",       
        fontWeight: "bold",         // Button text - ALWAYS BOLD
      }
    },
    
    // Card styles - EDIT THESE to change card appearance  
    cards: {
      backgroundColor: "#ffffff",  
      borderRadius: "1.25rem",     
      padding: "1.5rem",           
      shadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)", 
      borderColor: "#f0f2f2",       
    }
  },

  // LAYOUT - Edit layout and container settings
  layout: {
    // EDIT THIS: Maximum content width - prevents content from being too wide on large screens
    maxWidth: "1200px",        
    containerPadding: "1rem",  
    
    // Content width breakpoints for different screen sizes
    responsive: {
      mobile: "95%",     
      tablet: "90%",     
      desktop: "1200px", 
      wide: "1400px",    
    },
    
    gridGap: {
      small: "1rem", 
      medium: "2rem",
      large: "3rem", 
    }
  }
};

// UTILITY FUNCTIONS - Use these in your components
export const getEditableStyle = (path: string) => {
  const keys = path.split('.');
  let value: any = editableStyles;
  for (const key of keys) {
    value = value[key];
    if (!value) return undefined;
  }
  return value;
};

export const getColor = (colorPath: string) => getEditableStyle(`colors.${colorPath}`);
export const getSpacing = (spacingPath: string) => getEditableStyle(`spacing.${spacingPath}`);
export const getTypography = (typePath: string) => getEditableStyle(`typography.${typePath}`);

// Get responsive width for different screen sizes
export const getResponsiveWidth = (breakpoint?: 'mobile' | 'tablet' | 'desktop' | 'wide') => {
  if (breakpoint && editableStyles.layout.responsive[breakpoint]) {
    return editableStyles.layout.responsive[breakpoint];
  }
  return editableStyles.layout.maxWidth;
};


export const createTextStyle = (type: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'small') => {
  const styles = editableStyles;
  
  switch (type) {
    case 'h1':
      return {
        fontFamily: styles.typography.primaryFont,
        fontSize: styles.typography.headingSizes.h1,
        fontWeight: '700',
        color: styles.colors.text.primary,
        lineHeight: '1.2',
      };
    case 'h2':
      return {
        fontFamily: styles.typography.primaryFont,
        fontSize: styles.typography.headingSizes.h2,
        fontWeight: '700',
        color: styles.colors.text.primary,
        lineHeight: '1.2',
      };
    case 'h3':
      return {
        fontFamily: styles.typography.primaryFont,
        fontSize: styles.typography.headingSizes.h3,
        fontWeight: '600',
        color: styles.colors.text.primary,
        lineHeight: '1.3',
      };
    case 'h4':
      return {
        fontFamily: styles.typography.primaryFont,
        fontSize: styles.typography.headingSizes.h4,
        fontWeight: '600',
        color: styles.colors.text.primary,
        lineHeight: '1.4',
      };
    case 'body':
      return {
        fontFamily: styles.typography.primaryFont,
        fontSize: styles.typography.bodyText.size,
        fontWeight: styles.typography.bodyText.weight,
        color: styles.colors.text.secondary,
        lineHeight: styles.typography.bodyText.lineHeight,
      };
    case 'small':
      return {
        fontFamily: styles.typography.primaryFont,
        fontSize: styles.typography.smallText.size,
        fontWeight: styles.typography.smallText.weight,
        color: styles.colors.text.light,
        lineHeight: '1.5',
      };
    default:
      return {};
  }
};

export default editableStyles;
