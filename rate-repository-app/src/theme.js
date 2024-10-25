import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    appbar: '#24292e',
    background: '#e1e4e8',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    // main: 'System',
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'Sans-serif'
    })
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;