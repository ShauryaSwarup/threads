// prettier.config.ts
import { Options } from 'prettier';

const prettierConfig: Options = {
  semi: false,
  trailingComma: 'es5',
  arrowParens: 'always',
  plugins: ['prettier-plugin-tailwind'],
};

export default prettierConfig;
