// Utility functions to help refactor existing components to use editable styles

import { editableStyles, createTextStyle } from '../config/editable-styles';

// Common style patterns to replace
export const stylePatterns = {
  // Font family patterns
  lexendFont: "[font-family:'Lexend',Helvetica]",
  
  // Color patterns
  primaryBlue: '#0156ff',
  secondaryBlue: '#709df6',
  darkBlue: '#0039a6',
  darkText: '#010326',
  mutedText: '#010326cc',
  lightText: '#01032699',
  borderGray: '#f0f2f2',
  backgroundLight: '#f9fafb',
  backgroundDark: '#131e32',
  
  // Common class patterns
  tailwindClasses: {
    'text-blue-600': `color: ${editableStyles.colors.brand.primary}`,
    'text-gray-900': `color: ${editableStyles.colors.text.primary}`,
    'text-gray-600': `color: ${editableStyles.colors.text.secondary}`,
    'bg-gray-50': `backgroundColor: ${editableStyles.colors.backgrounds.light}`,
    'font-bold': `fontWeight: ${editableStyles.typography.bodyText.weight}`,
    'font-medium': `fontWeight: ${editableStyles.typography.smallText.weight}`,
    'text-lg': `fontSize: ${editableStyles.typography.bodyText.size}`,
    'text-sm': `fontSize: ${editableStyles.typography.smallText.size}`,
    'mb-4': `marginBottom: ${editableStyles.spacing.components.normal}`,
    'mb-6': `marginBottom: ${editableStyles.spacing.components.loose}`,
    'mb-12': `marginBottom: ${editableStyles.spacing.sections.medium}`,
    'py-20': `padding: ${editableStyles.spacing.sections.large} 0`,
    'px-6': `padding: 0 ${editableStyles.layout.containerPadding}`,
    'gap-8': `gap: ${editableStyles.layout.gridGap.large}`,
    'max-w-7xl': `maxWidth: ${editableStyles.layout.maxWidth}`,
  }
};

// Helper to generate style objects
export const generateStyleObject = (type: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'small' | 'subtitle') => {
  switch (type) {
    case 'subtitle':
      return {
        ...createTextStyle('small'),
        color: editableStyles.colors.brand.primary,
      };
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
      return createTextStyle(type);
    case 'body':
      return createTextStyle('body');
    case 'small':
      return createTextStyle('small');
    default:
      return {};
  }
};

// Helper to replace common patterns
export const replaceCommonPatterns = (content: string): string => {
  let result = content;
  
  // Replace color values
  result = result.replace(/#0156ff/g, 'editableStyles.colors.brand.primary');
  result = result.replace(/#709df6/g, 'editableStyles.colors.brand.secondary');
  result = result.replace(/#0039a6/g, 'editableStyles.colors.brand.accent');
  result = result.replace(/#010326/g, 'editableStyles.colors.text.primary');
  result = result.replace(/#010326cc/g, 'editableStyles.colors.text.secondary');
  result = result.replace(/#01032699/g, 'editableStyles.colors.text.light');
  result = result.replace(/#f0f2f2/g, 'editableStyles.colors.borders.light');
  result = result.replace(/#131e32/g, 'editableStyles.colors.backgrounds.dark');
  
  // Replace font family
  result = result.replace(/\[font-family:'Lexend',Helvetica\]/g, 'editableStyles.typography.primaryFont');
  
  return result;
};

// Component patterns
export const componentStyles = {
  section: {
    padding: `${editableStyles.spacing.sections.large} 0`,
    maxWidth: editableStyles.layout.maxWidth,
    margin: '0 auto',
  },
  container: {
    padding: `0 ${editableStyles.layout.containerPadding}`,
    maxWidth: editableStyles.layout.maxWidth,
    margin: '0 auto',
  },
  card: editableStyles.components.cards,
  button: editableStyles.components.buttons.primary,
  grid: {
    gap: editableStyles.layout.gridGap.large,
  },
};

export default {
  stylePatterns,
  generateStyleObject,
  replaceCommonPatterns,
  componentStyles,
};
