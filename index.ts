// Code Atrributes:
// Author: w3schools
// Title: Typescript
// Date published: Copyright 1999-2025
// Link: https:/www.w3schools.com/typescript/
// Date accessed: 2025/11/10

import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
