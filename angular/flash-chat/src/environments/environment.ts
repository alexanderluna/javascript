// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBjF3WAsiqHUKfio1qXG0xkbNJGMRCzAX0',
    authDomain: 'flash-chat-ca9f8.firebaseapp.com',
    databaseURL: 'https://flash-chat-ca9f8.firebaseio.com',
    projectId: 'flash-chat-ca9f8',
    storageBucket: 'flash-chat-ca9f8.appspot.com',
    messagingSenderId: '661747648952'
  }
};
