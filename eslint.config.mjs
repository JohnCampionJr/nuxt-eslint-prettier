import antfu from '@antfu/eslint-config'
import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss'
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'

import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    // ...@antfu/eslint-config options
    stylistic: false,
    imports: {
      overrides: {
        'perfectionist/sort-imports': [
          'error',
          {
            newlinesBetween: 1,
          },
        ],
      },
    },
  }),
  {
    plugins: {
      'better-tailwindcss': eslintPluginBetterTailwindcss,
    },
    rules: {
      ...eslintPluginBetterTailwindcss.configs.recommended.rules,
      // or configure rules individually
      'better-tailwindcss/enforce-consistent-line-wrapping': [
        'off',
        { printWidth: 100, preferSingleLine: true, group: 'never' },
      ],
      //'better-tailwindcss/no-unregistered-classes': ['off', { ignore: [''], detectComponentClasses: true }],
    },
    settings: {
      'better-tailwindcss': {
        // tailwindcss 4: the path to the entry file of the css based tailwind config (eg: `src/global.css`)
        entryPoint: 'app/assets/css/tailwind.css',
      },
    },
  },
  eslintPluginPrettier,
  {
    ignores: ['prettier.classnames.cjs'],
  },
)

/*
  "devDependencies": {
    "@antfu/eslint-config": "6.2.0",
    "@ianvs/prettier-plugin-sort-imports": "^4.7.0",
    "eslint-config-prettier": "^10.1.8",
    "eslint-plugin-better-tailwindcss": "^3.7.11",
    "eslint-plugin-format": "^1.0.2",
    "eslint-plugin-prettier": "^5.5.4",
    "prettier": "3.6.2",
    "prettier-plugin-classnames": "^0.8.5",
    "prettier-plugin-packagejson": "2.5.20",
    "prettier-plugin-tailwindcss": "^0.7.1",
    "tailwindcss": "^4.1.17",
    "vue-eslint-parser": "^10.2.0"
  }

*/
