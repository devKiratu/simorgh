import { mergeDeepLeft } from 'ramda';
import cyrillicScript from '../../typography/scripts/cyrillic';
import withThemeProvider from '../../withThemeProvider';
import baseSerbianTheme from './base';

const serbianCyrillicTheme = mergeDeepLeft(
  {
    typography: {
      script: cyrillicScript,
    },
  },
  baseSerbianTheme,
);

export default withThemeProvider(serbianCyrillicTheme);
