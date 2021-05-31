import { Magic } from 'magic-sdk';
import { OAuthExtension } from '@magic-ext/oauth';

export const magic = new Magic(process.env.ELECTRON_WEBPACK_APP_MAGIC_PUBLISHABLE_KEY, {
  extensions: [new OAuthExtension()],
});