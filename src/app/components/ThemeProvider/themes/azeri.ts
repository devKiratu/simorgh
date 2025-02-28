import { GHOST, WHITE, POSTBOX, POSTBOX_30 } from '../palette';
import latinWithDiacriticsScript from '../typography/scripts/latinWithDiacritics';
import { HELMET } from '../typography/fontFamilies';
import withThemeProvider from '../withThemeProvider';

const azeriTheme = {
  palette: {
    BRAND_BACKGROUND: POSTBOX,
    BRAND_LOGO: WHITE,
    BRAND_FOREGROUND: GHOST,
    BRAND_HIGHLIGHT: WHITE,
    BRAND_BORDER: POSTBOX_30,
  },
  typography: {
    script: latinWithDiacriticsScript,
    fontFamilies: {
      primary: HELMET,
    },
    fontFaces: [],
  },
};

export default withThemeProvider(azeriTheme);
