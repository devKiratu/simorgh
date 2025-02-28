import { GHOST, WHITE, BLUEJAY, POSTBOX_30 } from '../palette';
import latin from '../typography/scripts/latin';
import { HELMET } from '../typography/fontFamilies';
import withThemeProvider from '../withThemeProvider';

const pidginTheme = {
  palette: {
    BRAND_BACKGROUND: BLUEJAY,
    BRAND_LOGO: WHITE,
    BRAND_FOREGROUND: GHOST,
    BRAND_HIGHLIGHT: WHITE,
    BRAND_BORDER: POSTBOX_30,
  },
  typography: {
    script: latin,
    fontFamilies: {
      primary: HELMET,
    },
    fontFaces: [],
  },
};

export default withThemeProvider(pidginTheme);
