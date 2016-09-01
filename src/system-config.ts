// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  '@angular2-material': 'vendor/@angular2-material',
  'angular2-jwt': 'vendor/angular2-jwt',
  'ng2-translate': 'vendor/ng2-translate',
};

/** User packages configuration. */
const packages: any = {
  'ng2-translate': {
    defaultExtension: 'js',
    main: 'ng2-translate.js',
    format: 'cjs'
  },
  'angular2-jwt': {
    defaultExtension: 'js',
    main: 'angular2-jwt.js'
  },
};
const materialComponents = [
  'button',
  'card',
  'core',
  'checkbox',
  'dialog',
  'grid-list',
  'icon',
  'input',
  'list',
  'menu',
  'progress-bar',
  'progress-circle',
  'radio',
  'sidenav',
  'slider',
  'slide-toggle',
  'button-toggle',
  'tabs',
  'toolbar',
  'tooltip',
];

materialComponents.forEach(name => {
  packages[`@angular2-material/${name}`] = {
    format: 'cjs',
    defaultExtension: 'js',
    main: `${name}.js`,
  };
});
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/forms',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/about',
  'app/profile',
  'app/todo',
  'app/dashboard',
  'app/directives/user-logout',
  'app/directives/user-login-form',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js',
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
