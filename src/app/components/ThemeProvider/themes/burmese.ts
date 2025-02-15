import { GHOST, WHITE, POSTBOX, POSTBOX_30 } from '../palette';
import burmeseScript from '../typography/scripts/burmese';
import { PADAUK_BOLD, PADAUK_REGULAR } from '../typography/fontFaces';
import { PADAUK } from '../typography/fontFamilies';
import withThemeProvider from '../withThemeProvider';

const burmeseTheme = {
  palette: {
    BRAND_BACKGROUND: POSTBOX,
    BRAND_LOGO: WHITE,
    BRAND_FOREGROUND: GHOST,
    BRAND_HIGHLIGHT: WHITE,
    BRAND_BORDER: POSTBOX_30,
  },
  typography: {
    script: burmeseScript,
    fontFamilies: {
      primary: PADAUK,
    },
    fontFaces: [PADAUK_BOLD, PADAUK_REGULAR],
  },
};

export default withThemeProvider(burmeseTheme);
