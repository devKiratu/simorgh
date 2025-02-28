import { GHOST, WHITE, POSTBOX, POSTBOX_30 } from '../palette';
import devanagariScript from '../typography/scripts/devanagari';
import { ARIAL } from '../typography/fontFamilies';
import withThemeProvider from '../withThemeProvider';

const nepaliTheme = {
  palette: {
    BRAND_BACKGROUND: POSTBOX,
    BRAND_LOGO: WHITE,
    BRAND_FOREGROUND: GHOST,
    BRAND_HIGHLIGHT: WHITE,
    BRAND_BORDER: POSTBOX_30,
  },
  typography: {
    script: devanagariScript,
    fontFamilies: {
      primary: ARIAL,
    },
    fontFaces: [],
  },
};

export default withThemeProvider(nepaliTheme);
