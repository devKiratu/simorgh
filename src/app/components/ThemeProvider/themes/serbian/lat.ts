import { mergeDeepLeft } from 'ramda';
import latinWithDiacriticsScript from '../../typography/scripts/latinWithDiacritics';
import withThemeProvider from '../../withThemeProvider';
import baseSerbianTheme from './base';

const serbianLatinTheme = mergeDeepLeft(
  {
    typography: {
      script: latinWithDiacriticsScript,
    },
  },
  baseSerbianTheme,
);

export default withThemeProvider(serbianLatinTheme);
