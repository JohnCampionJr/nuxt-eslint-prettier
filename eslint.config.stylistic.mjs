import antfu from '@antfu/eslint-config'
import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss'

import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    formatters: {
      css: true,
      html: true,
      markdown: 'prettier',
    },
    // unicorn: {
    //   allRecommended: true,
    // },
    stylistic: {
      indent: 2,
      quotes: 'single',
      semi: false,
      trailingComma: 'always-multiline',
      arrowParens: 'always',
      overrides: {
        'style/max-len': [
          'warn',
          {
            code: 100,
            ignoreUrls: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreComments: true,
          },
        ],
      },
      // more specific stylistic customizations are added in the global rules section below
    },
    rules: {
      'style/arrow-parens': ['error', 'always'],
    },
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
      'better-tailwindcss/enforce-consistent-line-wrapping': ['warn', { printWidth: 100, preferSingleLine: true }],
    },
    settings: {
      'better-tailwindcss': {
        // tailwindcss 4: the path to the entry file of the css based tailwind config (eg: `src/global.css`)
        entryPoint: 'app/assets/css/tailwind.css',
      },
    },
  },
)
