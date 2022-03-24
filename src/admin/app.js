// path: ./my-app/src/admin/app.js

import AuthLogo from './extensions/TCDSenseMapLogo.svg';
import MenuLogo from './extensions/TCDSenseMapLogo.svg';
import favicon from './extensions/TCDSenseMapLogo.svg';

export default {
  config: {
    // Replace the Strapi logo in auth (login) views
    auth: {
      logo: AuthLogo,
    },
   // Replace the favicon
    head: {
      favicon: favicon,
    },
    // Add a new locale, other than 'en'
    // locales: ['fr', 'de'],
    // Replace the Strapi logo in the main navigation
    menu: {
      logo: MenuLogo,
    },
    // Override or extend the theme
    theme: {
      colors: {
        primary100: '#e4f7fb', // New superlight Blue (#f6ecfc)
        primary200: '#e0c1f4',
        primary500: '#c2f4fe', // Blue 2 (#ac73e6)
        primary600: '#0087a2', // Blue 1 (#9736e8)
        primary700: '#0087a2', // Blue 1 (#8312d1)
        danger700: '#b72b1a'
      },
    },
    // Rebranding
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "TCDSense Map",
        "app.components.LeftMenu.navbrand.workplace": "Content Management System",
      },
    },
   // Disable video tutorials
    tutorials: false,
   // Disable notifications about new Strapi releases
    notifications: { release: false },
  },

  bootstrap() {},
};