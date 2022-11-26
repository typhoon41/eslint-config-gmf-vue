'use strict';
module.exports = {
  "env": {
    "browser": true,
    "jest": true,
    "node": true
  },
  "overrides": [
    {
      "files": [
        "*.ts"
      ],
      "parser": "@typescript-eslint/parser",
      "parserOptions": {
        "createDefaultProgram": true,
        "ecmaFeatures": {
          "jsx": true
        },
        "ecmaVersion": 2015,
        "project": [
          "tsconfig.json"
        ],
        "sourceType": "module"
      },
      "plugins": [
        "@typescript-eslint",
        "no-loops",
        "no-secrets",
        "no-unsanitized",
        "promise",
        "unused-imports",
        "xss"
      ],
      "rules": {
        "@typescript-eslint/brace-style": [
          "error"
        ],
        "@typescript-eslint/comma-dangle": [
          "error",
          "never"
        ],
        "@typescript-eslint/comma-spacing": [
          "error"
        ],
        "@typescript-eslint/consistent-type-exports": [
          "error",
          {
            "fixMixedExportsWithInlineTypeSpecifier": true
          }
        ],
        "@typescript-eslint/default-param-last": [
          "error"
        ],
        "@typescript-eslint/dot-notation": [
          "error"
        ],
        "@typescript-eslint/func-call-spacing": [
          "error"
        ],
        "@typescript-eslint/indent": [
          "off",
          "tab"
        ],
        "@typescript-eslint/init-declarations": [
          "off"
        ],
        "@typescript-eslint/keyword-spacing": [
          "error"
        ],
        "@typescript-eslint/lines-between-class-members": [
          "error",
          "always",
          {
            "exceptAfterSingleLine": true
          }
        ],
        "@typescript-eslint/no-array-constructor": [
          "error"
        ],
        "@typescript-eslint/no-dupe-class-members": [
          "error"
        ],
        "@typescript-eslint/no-duplicate-enum-values": [
          "error"
        ],
        "@typescript-eslint/no-duplicate-imports": [
          "error"
        ],
        "@typescript-eslint/no-empty-function": [
          "error"
        ],
        "@typescript-eslint/no-extra-parens": [
          "error"
        ],
        "@typescript-eslint/no-extra-semi": [
          "error"
        ],
        "@typescript-eslint/no-implied-eval": [
          "error"
        ],
        "@typescript-eslint/no-invalid-this": [
          "error"
        ],
        "@typescript-eslint/no-loop-func": [
          "error"
        ],
        "@typescript-eslint/no-loss-of-precision": [
          "error"
        ],
        "@typescript-eslint/no-magic-numbers": [
          "error",
          {
            "enforceConst": true,
            "ignore": [
              0,
              1
            ],
            "ignoreArrayIndexes": true,
            "ignoreClassFieldInitialValues": true,
            "ignoreDefaultValues": true,
            "ignoreEnums": true,
            "ignoreNumericLiteralTypes": true,
            "ignoreReadonlyClassProperties": true,
            "ignoreTypeIndexes": true
          }
        ],
        "@typescript-eslint/no-meaningless-void-operator": [
          "error",
          {
            "checkNever": false
          }
        ],
        "@typescript-eslint/no-non-null-assertion": "error",
        "@typescript-eslint/no-redeclare": [
          "error"
        ],
        "@typescript-eslint/no-restricted-imports": "off",
        "@typescript-eslint/no-shadow": [
          "error"
        ],
        "@typescript-eslint/no-throw-literal": [
          "error"
        ],
        "@typescript-eslint/no-unsafe-declaration-merging": "error",
        "@typescript-eslint/no-unused-expressions": [
          "error"
        ],
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            "argsIgnorePattern": "^_"
          }
        ],
        "@typescript-eslint/no-use-before-define": [
          "error"
        ],
        "@typescript-eslint/no-useless-constructor": [
          "error"
        ],
        "@typescript-eslint/object-curly-spacing": [
          "error",
          "always"
        ],
        "@typescript-eslint/quotes": [
          "error",
          "single",
          {
            "allowTemplateLiterals": true
          }
        ],
        "@typescript-eslint/require-await": [
          "error"
        ],
        "@typescript-eslint/return-await": [
          "error"
        ],
        "@typescript-eslint/semi": [
          "error"
        ],
        "@typescript-eslint/space-before-function-paren": [
          "error",
          "never"
        ],
        "@typescript-eslint/space-infix-ops": [
          "error"
        ],
        "accessor-pairs": "error",
        "array-bracket-newline": "off",
        "array-bracket-spacing": [
          "error",
          "never"
        ],
        "array-callback-return": "error",
        "array-element-newline": "off",
        "arrow-body-style": [
          "error",
          "as-needed",
          {
            "requireReturnForObjectLiteral": true
          }
        ],
        "arrow-parens": [
          "error",
          "as-needed",
          {
            "requireForBlockBody": false
          }
        ],
        "arrow-spacing": "error",
        "block-scoped-var": "error",
        "block-spacing": "error",
        "brace-style": "off",
        "camelcase": "warn",
        "capitalized-comments": "error",
        "class-methods-use-this": "off",
        "comma-dangle": "off",
        "comma-spacing": "off",
        "comma-style": "error",
        "complexity": "error",
        "computed-property-spacing": "error",
        "consistent-return": "error",
        "consistent-this": "error",
        "constructor-super": "error",
        "curly": "error",
        "default-case": "warn",
        "default-case-last": "error",
        "default-param-last": "off",
        "dot-location": [
          "error",
          "property"
        ],
        "dot-notation": "off",
        "eol-last": "error",
        "eqeqeq": "error",
        "for-direction": "error",
        "func-call-spacing": "off",
        "func-name-matching": "off",
        "func-names": "error",
        "func-style": "error",
        "function-call-argument-newline": "off",
        "function-paren-newline": "off",
        "generator-star-spacing": "error",
        "getter-return": "error",
        "grouped-accessor-pairs": "warn",
        "guard-for-in": "warn",
        "id-denylist": "off",
        "id-length": [
          "error",
          {
            "exceptionPatterns": [
              "_",
              "\\$[a-z]+"
            ],
            "max": 24,
            "min": 2
          }
        ],
        "id-match": "off",
        "implicit-arrow-linebreak": "off",
        "import/no-duplicates": "off",
        "indent": [
          "off",
          "tab"
        ],
        "init-declarations": "off",
        "jsx-quotes": "error",
        "key-spacing": "error",
        "keyword-spacing": "off",
        "line-comment-position": "error",
        "linebreak-style": "off",
        "lines-around-comment": "error",
        "lines-between-class-members": [
          "off",
          "always",
          {
            "exceptAfterSingleLine": true
          }
        ],
        "max-classes-per-file": [
          "error",
          1
        ],
        "max-depth": [
          "error",
          3
        ],
        "max-len": [
          "error",
          {
            "code": 120,
            "ignoreComments": true
          }
        ],
        "max-lines": [
          "error",
          100
        ],
        "max-lines-per-function": [
          "error",
          35
        ],
        "max-nested-callbacks": [
          "error",
          3
        ],
        "max-params": [
          "error",
          4
        ],
        "max-statements": [
          "error",
          20
        ],
        "max-statements-per-line": "error",
        "multiline-ternary": "off",
        "new-cap": "error",
        "new-parens": "error",
        "newline-per-chained-call": [
          "error",
          {
            "ignoreChainWithDepth": 2
          }
        ],
        "no-alert": "error",
        "no-array-constructor": "off",
        "no-async-promise-executor": "error",
        "no-await-in-loop": "error",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-case-declarations": "error",
        "no-class-assign": "error",
        "no-compare-neg-zero": "error",
        "no-cond-assign": "error",
        "no-confusing-arrow": "error",
        "no-console": "error",
        "no-const-assign": "error",
        "no-constant-condition": "error",
        "no-constructor-return": "error",
        "no-continue": "off",
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-delete-var": "error",
        "no-div-regex": "error",
        "no-dupe-args": "error",
        "no-dupe-class-members": "off",
        "no-dupe-else-if": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-duplicate-imports": "off",
        "no-else-return": "error",
        "no-empty": "off",
        "no-empty-character-class": "error",
        "no-empty-function": "off",
        "no-empty-pattern": "warn",
        "no-empty-static-block": "off",
        "no-eq-null": "error",
        "no-eval": "error",
        "no-ex-assign": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-boolean-cast": "error",
        "no-extra-label": "error",
        "no-extra-parens": "off",
        "no-extra-semi": "error",
        "no-fallthrough": "error",
        "no-floating-decimal": "off",
        "no-func-assign": "error",
        "no-global-assign": "error",
        "no-implicit-coercion": "off",
        "no-implicit-globals": "error",
        "no-implied-eval": "off",
        "no-import-assign": "error",
        "no-inner-declarations": "error",
        "no-invalid-regexp": "error",
        "no-invalid-this": "off",
        "no-irregular-whitespace": "error",
        "no-iterator": "error",
        "no-label-var": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-lonely-if": "error",
        "no-loop-func": "off",
        "no-loops/no-loops": 2,
        "no-loss-of-precision": "off",
        "no-magic-numbers": "off",
        "no-misleading-character-class": "error",
        "no-mixed-operators": "off",
        "no-mixed-spaces-and-tabs": "off",
        "no-multi-assign": "error",
        "no-multi-spaces": "error",
        "no-multi-str": "warn",
        "no-multiple-empty-lines": "error",
        "no-negated-condition": "error",
        "no-nested-ternary": "off",
        "no-new": "off",
        "no-new-func": "error",
        "no-new-native-nonconstructor": "error",
        "no-new-object": "error",
        "no-new-symbol": "error",
        "no-new-wrappers": "error",
        "no-nonoctal-decimal-escape": "error",
        "no-obj-calls": "error",
        "no-octal": "error",
        "no-octal-escape": "error",
        "no-param-reassign": "error",
        "no-plusplus": "off",
        "no-promise-executor-return": "error",
        "no-proto": "error",
        "no-prototype-builtins": "error",
        "no-redeclare": "off",
        "no-redundant-type-constituents": "error",
        "no-regex-spaces": "error",
        "no-restricted-exports": "off",
        "no-restricted-globals": "off",
        "no-restricted-imports": "off",
        "no-restricted-properties": "off",
        "no-restricted-syntax": "off",
        "no-return-assign": "error",
        "no-return-await": "off",
        "no-script-url": "error",
        "no-secrets/no-secrets": [
          "error",
          {
            "ignoreContent": [
              "__zone_symbol__UNPATCHED_EVENTS"
            ]
          }
        ],
        "no-self-assign": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-setter-return": "error",
        "no-shadow": "off",
        "no-shadow-restricted-names": "error",
        "no-sparse-arrays": "error",
        "no-tabs": "off",
        "no-template-curly-in-string": "error",
        "no-ternary": "off",
        "no-this-before-super": "error",
        "no-throw-literal": "off",
        "no-trailing-spaces": "error",
        "no-undef": "off",
        "no-undef-init": "error",
        "no-undefined": "off",
        "no-underscore-dangle": "off",
        "no-unexpected-multiline": "error",
        "no-unmodified-loop-condition": "error",
        "no-unneeded-ternary": "error",
        "no-unreachable": "error",
        "no-unreachable-loop": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-unsafe-optional-chaining": "error",
        "no-unsanitized/method": "error",
        "no-unsanitized/property": "error",
        "no-unused-expressions": "off",
        "no-unused-labels": "error",
        "no-unused-private-class-members": "error",
        "no-unused-vars": "off",
        "no-use-before-define": "off",
        "no-useless-backreference": "error",
        "no-useless-call": "error",
        "no-useless-catch": "error",
        "no-useless-computed-key": "error",
        "no-useless-concat": "error",
        "no-useless-constructor": "off",
        "no-useless-empty-export": "off",
        "no-useless-escape": "error",
        "no-useless-rename": "error",
        "no-useless-return": "error",
        "no-var": "error",
        "no-void": "error",
        "no-warning-comments": "warn",
        "no-whitespace-before-property": "error",
        "no-with": "error",
        "nonblock-statement-body-position": [
          "error",
          "below"
        ],
        "object-curly-newline": "off",
        "object-curly-spacing": "off",
        "object-property-newline": [
          "error",
          {
            "allowAllPropertiesOnSameLine": true
          }
        ],
        "object-shorthand": "error",
        "one-var": "off",
        "one-var-declaration-per-line": "off",
        "operator-assignment": "error",
        "operator-linebreak": "off",
        "padded-blocks": [
          "error",
          "never"
        ],
        "padding-line-between-statements": "off",
        "prefer-arrow-callback": "error",
        "prefer-const": "error",
        "prefer-destructuring": "off",
        "prefer-exponentiation-operator": "off",
        "prefer-named-capture-group": "off",
        "prefer-numeric-literals": "warn",
        "prefer-object-has-own": "off",
        "prefer-object-spread": "off",
        "prefer-promise-reject-errors": "off",
        "prefer-regex-literals": "off",
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "prefer-template": "error",
        "promise/always-return": "error",
        "promise/avoid-new": "warn",
        "promise/catch-or-return": [
          "error",
          {
            "allowThen": true,
            "terminationMethod": [
              "catch",
              "finally"
            ]
          }
        ],
        "promise/no-callback-in-promise": "off",
        "promise/no-native": "off",
        "promise/no-nesting": "off",
        "promise/no-new-statics": "error",
        "promise/no-promise-in-callback": "off",
        "promise/no-return-in-finally": "warn",
        "promise/no-return-wrap": [
          "error",
          {
            "allowReject": true
          }
        ],
        "promise/param-names": "error",
        "promise/valid-params": "warn",
        "quote-props": [
          "error",
          "as-needed"
        ],
        "quotes": "off",
        "radix": "error",
        "require-atomic-updates": "error",
        "require-await": "off",
        "require-unicode-regexp": "warn",
        "require-yield": "error",
        "semi": "off",
        "semi-spacing": "error",
        "semi-style": "off",
        "sort-imports": "off",
        "sort-keys": "off",
        "sort-vars": "off",
        "space-before-blocks": "error",
        "space-before-function-paren": "off",
        "space-in-parens": "error",
        "space-infix-ops": "off",
        "space-unary-ops": "error",
        "spaced-comment": "error",
        "strict": "off",
        "switch-colon-spacing": "error",
        "symbol-description": "error",
        "template-curly-spacing": "error",
        "template-tag-spacing": "error",
        "typescript-eslint/consistent-type-imports": "off",
        "unicode-bom": "off",
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": [
          "warn",
          {
            "args": "after-used",
            "argsIgnorePattern": "^_",
            "vars": "all",
            "varsIgnorePattern": "^_"
          }
        ],
        "use-isnan": "error",
        "valid-typeof": "error",
        "vars-on-top": "off",
        "wrap-iife": "off",
        "wrap-regex": "off",
        "xss/no-location-href-assign": [
          2,
          {
            "escapeFunc": "escapeHref"
          }
        ],
        "xss/no-mixed-html": [
          2,
          {
            "functions": {
              ".html": {
                "htmlInput": true,
                "htmlOutput": true
              },
              ".join": {
                "passthrough": {
                  "args": true,
                  "obj": true
                }
              },
              "$": {
                "htmlInput": true,
                "safe": [
                  "document",
                  "this"
                ]
              }
            },
            "htmlFunctionRules": [
              ".asHtml/i",
              "toHtml"
            ],
            "htmlVariableRules": [
              "AsHtml",
              "HtmlEncoded/i",
              "^html$"
            ]
          }
        ],
        "yield-star-spacing": "error",
        "yoda": "warn"
      }
    },
    {
      "files": [
        "*.vue"
      ],
      "parser": "vue-eslint-parser",
      "parserOptions": {
        "createDefaultProgram": true,
        "ecmaFeatures": {
          "jsx": true
        },
        "ecmaVersion": 2015,
        "parser": "@typescript-eslint/parser",
        "project": [
          "tsconfig.json"
        ],
        "sourceType": "module"
      },
      "plugins": [
        "@typescript-eslint",
        "vue"
      ],
      "rules": {
        "@typescript-eslint/brace-style": [
          "error"
        ],
        "@typescript-eslint/comma-dangle": [
          "error",
          "never"
        ],
        "@typescript-eslint/comma-spacing": [
          "error"
        ],
        "@typescript-eslint/consistent-generic-constructors": "error",
        "@typescript-eslint/consistent-type-exports": [
          "error",
          {
            "fixMixedExportsWithInlineTypeSpecifier": true
          }
        ],
        "@typescript-eslint/default-param-last": [
          "error"
        ],
        "@typescript-eslint/dot-notation": [
          "error"
        ],
        "@typescript-eslint/func-call-spacing": [
          "error"
        ],
        "@typescript-eslint/indent": [
          "off",
          "tab"
        ],
        "@typescript-eslint/init-declarations": [
          "off"
        ],
        "@typescript-eslint/keyword-spacing": [
          "error"
        ],
        "@typescript-eslint/lines-between-class-members": [
          "error",
          "always",
          {
            "exceptAfterSingleLine": true
          }
        ],
        "@typescript-eslint/no-array-constructor": [
          "error"
        ],
        "@typescript-eslint/no-dupe-class-members": [
          "error"
        ],
        "@typescript-eslint/no-duplicate-enum-values": [
          "error"
        ],
        "@typescript-eslint/no-duplicate-imports": [
          "error"
        ],
        "@typescript-eslint/no-empty-function": [
          "error"
        ],
        "@typescript-eslint/no-extra-parens": [
          "error"
        ],
        "@typescript-eslint/no-extra-semi": [
          "error"
        ],
        "@typescript-eslint/no-implied-eval": [
          "error"
        ],
        "@typescript-eslint/no-invalid-this": [
          "error"
        ],
        "@typescript-eslint/no-loop-func": [
          "error"
        ],
        "@typescript-eslint/no-loss-of-precision": [
          "error"
        ],
        "@typescript-eslint/no-magic-numbers": [
          "error",
          {
            "enforceConst": true,
            "ignore": [
              0,
              1
            ],
            "ignoreArrayIndexes": true,
            "ignoreClassFieldInitialValues": true,
            "ignoreDefaultValues": true,
            "ignoreEnums": true,
            "ignoreNumericLiteralTypes": true,
            "ignoreReadonlyClassProperties": true,
            "ignoreTypeIndexes": true
          }
        ],
        "@typescript-eslint/no-meaningless-void-operator": [
          "error",
          {
            "checkNever": false
          }
        ],
        "@typescript-eslint/no-non-null-assertion": "error",
        "@typescript-eslint/no-redeclare": [
          "error"
        ],
        "@typescript-eslint/no-restricted-imports": "off",
        "@typescript-eslint/no-shadow": [
          "error"
        ],
        "@typescript-eslint/no-throw-literal": [
          "error"
        ],
        "@typescript-eslint/no-unsafe-declaration-merging": "error",
        "@typescript-eslint/no-unused-expressions": [
          "error"
        ],
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            "argsIgnorePattern": "^_"
          }
        ],
        "@typescript-eslint/no-use-before-define": [
          "error"
        ],
        "@typescript-eslint/no-useless-constructor": [
          "error"
        ],
        "@typescript-eslint/object-curly-spacing": [
          "error",
          "always"
        ],
        "@typescript-eslint/quotes": [
          "error",
          "single",
          {
            "allowTemplateLiterals": true
          }
        ],
        "@typescript-eslint/require-await": [
          "error"
        ],
        "@typescript-eslint/return-await": [
          "error"
        ],
        "@typescript-eslint/semi": [
          "error"
        ],
        "@typescript-eslint/space-before-function-paren": [
          "error",
          "never"
        ],
        "@typescript-eslint/space-infix-ops": [
          "error"
        ],
        "accessor-pairs": "error",
        "array-bracket-newline": "off",
        "array-bracket-spacing": [
          "error",
          "never"
        ],
        "array-callback-return": "error",
        "array-element-newline": "off",
        "arrow-body-style": [
          "error",
          "as-needed",
          {
            "requireReturnForObjectLiteral": true
          }
        ],
        "arrow-parens": [
          "error",
          "as-needed",
          {
            "requireForBlockBody": false
          }
        ],
        "arrow-spacing": "error",
        "block-scoped-var": "error",
        "block-spacing": "error",
        "brace-style": "off",
        "camelcase": "warn",
        "capitalized-comments": "error",
        "class-methods-use-this": "off",
        "comma-dangle": "off",
        "comma-spacing": "off",
        "comma-style": "error",
        "complexity": "error",
        "computed-property-spacing": "error",
        "consistent-return": "error",
        "consistent-this": "error",
        "constructor-super": "error",
        "curly": "error",
        "default-case": "warn",
        "default-case-last": "error",
        "default-param-last": "off",
        "dot-location": [
          "error",
          "property"
        ],
        "dot-notation": "off",
        "eol-last": "error",
        "eqeqeq": "error",
        "for-direction": "error",
        "func-call-spacing": "off",
        "func-name-matching": "off",
        "func-names": "error",
        "func-style": "error",
        "function-call-argument-newline": "off",
        "function-paren-newline": "off",
        "generator-star-spacing": "error",
        "getter-return": "error",
        "grouped-accessor-pairs": "warn",
        "guard-for-in": "warn",
        "id-denylist": "off",
        "id-length": [
          "error",
          {
            "exceptionPatterns": [
              "_",
              "\\$[a-z]+"
            ],
            "max": 24,
            "min": 2
          }
        ],
        "id-match": "off",
        "implicit-arrow-linebreak": "off",
        "import/no-duplicates": "off",
        "indent": [
          "off",
          "tab"
        ],
        "init-declarations": "off",
        "jsx-quotes": "error",
        "key-spacing": "error",
        "keyword-spacing": "off",
        "line-comment-position": "error",
        "linebreak-style": "off",
        "lines-around-comment": "error",
        "lines-between-class-members": [
          "off",
          "always",
          {
            "exceptAfterSingleLine": true
          }
        ],
        "max-classes-per-file": [
          "error",
          1
        ],
        "max-depth": [
          "error",
          3
        ],
        "max-len": [
          "error",
          {
            "code": 120,
            "ignoreComments": true
          }
        ],
        "max-lines": [
          "error",
          120
        ],
        "max-lines-per-function": [
          "error",
          35
        ],
        "max-nested-callbacks": [
          "error",
          3
        ],
        "max-params": [
          "error",
          4
        ],
        "max-statements": [
          "error",
          20
        ],
        "max-statements-per-line": "error",
        "multiline-ternary": "off",
        "new-cap": "error",
        "new-parens": "error",
        "newline-per-chained-call": [
          "error",
          {
            "ignoreChainWithDepth": 2
          }
        ],
        "no-alert": "error",
        "no-array-constructor": "off",
        "no-async-promise-executor": "error",
        "no-await-in-loop": "error",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-case-declarations": "error",
        "no-class-assign": "error",
        "no-compare-neg-zero": "error",
        "no-cond-assign": "error",
        "no-confusing-arrow": "error",
        "no-console": "error",
        "no-const-assign": "error",
        "no-constant-condition": "error",
        "no-constructor-return": "error",
        "no-continue": "off",
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-delete-var": "error",
        "no-div-regex": "error",
        "no-dupe-args": "error",
        "no-dupe-class-members": "off",
        "no-dupe-else-if": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-else-return": "error",
        "no-empty": "off",
        "no-empty-character-class": "error",
        "no-empty-function": "off",
        "no-empty-pattern": "warn",
        "no-empty-static-block": "off",
        "no-eq-null": "error",
        "no-eval": "error",
        "no-ex-assign": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-boolean-cast": "error",
        "no-extra-label": "error",
        "no-extra-parens": "off",
        "no-extra-semi": "error",
        "no-fallthrough": "error",
        "no-floating-decimal": "off",
        "no-func-assign": "error",
        "no-global-assign": "error",
        "no-implicit-coercion": "off",
        "no-implicit-globals": "error",
        "no-implied-eval": "off",
        "no-import-assign": "error",
        "no-inner-declarations": "error",
        "no-invalid-regexp": "error",
        "no-invalid-this": "off",
        "no-irregular-whitespace": "error",
        "no-iterator": "error",
        "no-label-var": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-lonely-if": "error",
        "no-loop-func": "off",
        "no-loops/no-loops": 2,
        "no-loss-of-precision": "off",
        "no-magic-numbers": "off",
        "no-misleading-character-class": "error",
        "no-mixed-operators": "off",
        "no-mixed-spaces-and-tabs": "off",
        "no-multi-assign": "error",
        "no-multi-spaces": "error",
        "no-multi-str": "warn",
        "no-multiple-empty-lines": "error",
        "no-negated-condition": "error",
        "no-nested-ternary": "off",
        "no-new": "off",
        "no-new-func": "error",
        "no-new-native-nonconstructor": "error",
        "no-new-object": "error",
        "no-new-symbol": "error",
        "no-new-wrappers": "error",
        "no-nonoctal-decimal-escape": "error",
        "no-obj-calls": "error",
        "no-octal": "error",
        "no-octal-escape": "error",
        "no-param-reassign": "error",
        "no-plusplus": "off",
        "no-promise-executor-return": "error",
        "no-proto": "error",
        "no-prototype-builtins": "error",
        "no-redeclare": "off",
        "no-redundant-type-constituents": "error",
        "no-regex-spaces": "error",
        "no-restricted-exports": "off",
        "no-restricted-globals": "off",
        "no-restricted-imports": "off",
        "no-restricted-properties": "off",
        "no-restricted-syntax": "off",
        "no-return-assign": "error",
        "no-return-await": "off",
        "no-script-url": "error",
        "no-secrets/no-secrets": [
          "error",
          {
            "ignoreContent": [
              "__zone_symbol__UNPATCHED_EVENTS"
            ]
          }
        ],
        "no-self-assign": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-setter-return": "error",
        "no-shadow": "off",
        "no-shadow-restricted-names": "error",
        "no-sparse-arrays": "error",
        "no-tabs": "off",
        "no-template-curly-in-string": "error",
        "no-ternary": "off",
        "no-this-before-super": "error",
        "no-throw-literal": "off",
        "no-trailing-spaces": "error",
        "no-undef": "off",
        "no-undef-init": "error",
        "no-undefined": "off",
        "no-underscore-dangle": "off",
        "no-unexpected-multiline": "error",
        "no-unmodified-loop-condition": "error",
        "no-unneeded-ternary": "error",
        "no-unreachable": "error",
        "no-unreachable-loop": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-unsafe-optional-chaining": "error",
        "no-unsanitized/method": "error",
        "no-unsanitized/property": "error",
        "no-unused-expressions": "off",
        "no-unused-labels": "error",
        "no-unused-private-class-members": "error",
        "no-unused-vars": "off",
        "no-use-before-define": "off",
        "no-useless-backreference": "error",
        "no-useless-call": "error",
        "no-useless-catch": "error",
        "no-useless-computed-key": "error",
        "no-useless-concat": "error",
        "no-useless-constructor": "off",
        "no-useless-empty-export": "off",
        "no-useless-escape": "error",
        "no-useless-rename": "error",
        "no-useless-return": "error",
        "no-var": "error",
        "no-void": "error",
        "no-warning-comments": "warn",
        "no-whitespace-before-property": "error",
        "no-with": "error",
        "nonblock-statement-body-position": [
          "error",
          "below"
        ],
        "object-curly-newline": "off",
        "object-curly-spacing": "off",
        "object-property-newline": [
          "error",
          {
            "allowAllPropertiesOnSameLine": true
          }
        ],
        "object-shorthand": "error",
        "one-var": "off",
        "one-var-declaration-per-line": "off",
        "operator-assignment": "error",
        "operator-linebreak": "off",
        "padded-blocks": [
          "error",
          "never"
        ],
        "padding-line-between-statements": "off",
        "prefer-arrow-callback": "error",
        "prefer-const": "error",
        "prefer-destructuring": "off",
        "prefer-exponentiation-operator": "off",
        "prefer-named-capture-group": "off",
        "prefer-numeric-literals": "warn",
        "prefer-object-has-own": "off",
        "prefer-object-spread": "off",
        "prefer-promise-reject-errors": "off",
        "prefer-regex-literals": "off",
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "prefer-template": "error",
        "promise/always-return": "error",
        "promise/avoid-new": "warn",
        "promise/catch-or-return": [
          "error",
          {
            "allowThen": true,
            "terminationMethod": [
              "catch",
              "finally"
            ]
          }
        ],
        "promise/no-callback-in-promise": "off",
        "promise/no-native": "off",
        "promise/no-nesting": "off",
        "promise/no-new-statics": "error",
        "promise/no-promise-in-callback": "off",
        "promise/no-return-in-finally": "warn",
        "promise/no-return-wrap": [
          "error",
          {
            "allowReject": true
          }
        ],
        "promise/param-names": "error",
        "promise/valid-params": "warn",
        "quote-props": [
          "error",
          "as-needed"
        ],
        "quotes": "off",
        "radix": "error",
        "require-atomic-updates": "error",
        "require-await": "off",
        "require-unicode-regexp": "warn",
        "require-yield": "error",
        "semi": "off",
        "semi-spacing": "error",
        "semi-style": "off",
        "sort-imports": "off",
        "sort-keys": "off",
        "sort-vars": "off",
        "space-before-blocks": "error",
        "space-before-function-paren": "off",
        "space-in-parens": "error",
        "space-infix-ops": "off",
        "space-unary-ops": "error",
        "spaced-comment": "error",
        "strict": "off",
        "switch-colon-spacing": "error",
        "symbol-description": "error",
        "template-curly-spacing": "error",
        "template-tag-spacing": "error",
        "typescript-eslint/consistent-type-imports": "off",
        "unicode-bom": "off",
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": [
          "warn",
          {
            "args": "after-used",
            "argsIgnorePattern": "^_",
            "vars": "all",
            "varsIgnorePattern": "^_"
          }
        ],
        "use-isnan": "error",
        "valid-typeof": "error",
        "vars-on-top": "off",
        "vue/array-bracket-newline": "off",
        "vue/arrow-spacing": "error",
        "vue/attribute-hyphenation": "error",
        "vue/attributes-order": "off",
        "vue/block-spacing": "error",
        "vue/block-tag-newline": "off",
        "vue/brace-style": "error",
        "vue/camelcase": "warn",
        "vue/comma-dangle": [
          "error",
          "never"
        ],
        "vue/comma-spacing": "error",
        "vue/comma-style": "error",
        "vue/comment-directive": [
          "error",
          {
            "reportUnusedDisableDirectives": false
          }
        ],
        "vue/component-api-style": "off",
        "vue/component-definition-name-casing": "error",
        "vue/component-name-in-template-casing": [
          "error",
          "kebab-case",
          {
            "registeredComponentsOnly": false
          }
        ],
        "vue/component-options-name-casing rule": "error",
        "vue/component-tags-order": [
          "error",
          {
            "order": [
              [
                "template",
                "script"
              ],
              "style"
            ]
          }
        ],
        "vue/custom-event-name-casing": [
          "error",
          "camelCase"
        ],
        "vue/define-emits-declaration": "error",
        "vue/define-macros-order": "error",
        "vue/define-props-declaration": "error",
        "vue/dot-location": [
          "error",
          "property"
        ],
        "vue/dot-notation": "off",
        "vue/eqeqeq": "error",
        "vue/first-attribute-linebreak": "error",
        "vue/func-call-spacing": "error",
        "vue/html-button-has-type": [
          "error"
        ],
        "vue/html-closing-bracket-newline": [
          "error",
          {
            "multiline": "never",
            "singleline": "never"
          }
        ],
        "vue/html-closing-bracket-spacing": [
          "error",
          {
            "endTag": "never",
            "selfClosingTag": "always",
            "startTag": "never"
          }
        ],
        "vue/html-comment-content-newline": "off",
        "vue/html-comment-content-spacing": "off",
        "vue/html-comment-indent": "off",
        "vue/html-end-tags": "error",
        "vue/html-indent": [
          "error",
          "tab"
        ],
        "vue/html-quotes": "error",
        "vue/html-self-closing": "off",
        "vue/jsx-uses-vars": "off",
        "vue/key-spacing": "error",
        "vue/keyword-spacing": "error",
        "vue/match-component-file-name": "off",
        "vue/match-component-import-name": "error",
        "vue/max-attributes-per-line": "off",
        "vue/max-len": [
          "error",
          {
            "code": 120,
            "ignoreComments": true
          }
        ],
        "vue/multi-word-component-names": "error",
        "vue/multiline-html-element-content-newline": "off",
        "vue/multiline-ternary": "off",
        "vue/mustache-interpolation-spacing": [
          "error",
          "always"
        ],
        "vue/new-line-between-multi-line-property": "off",
        "vue/next-tick-style": "error",
        "vue/no-arrow-functions-in-watch": "error",
        "vue/no-async-in-computed-properties": "error",
        "vue/no-bare-strings-in-template": [
          "error",
          {
            "allowlist": [
              "Loading...",
              "*",
              "Error!"
            ]
          }
        ],
        "vue/no-boolean-default": "error",
        "vue/no-child-content": "error",
        "vue/no-computed-properties-in-data": "error",
        "vue/no-constant-condition": "error",
        "vue/no-custom-modifiers-on-v-model": "error",
        "vue/no-deprecated-data-object-declaration": "error",
        "vue/no-deprecated-destroyed-lifecycle": "error",
        "vue/no-deprecated-dollar-listeners-api": "error",
        "vue/no-deprecated-dollar-scopedslots-api": "error",
        "vue/no-deprecated-events-api": "error",
        "vue/no-deprecated-filter": "error",
        "vue/no-deprecated-functional-template": "error",
        "vue/no-deprecated-html-element-is": "error",
        "vue/no-deprecated-inline-template": "error",
        "vue/no-deprecated-props-default-this": "error",
        "vue/no-deprecated-router-link-tag-prop": "error",
        "vue/no-deprecated-scope-attribute": "error",
        "vue/no-deprecated-slot-attribute": "error",
        "vue/no-deprecated-slot-scope-attribute": "error",
        "vue/no-deprecated-v-bind-sync": "error",
        "vue/no-deprecated-v-is": "error",
        "vue/no-deprecated-v-on-native-modifier": "error",
        "vue/no-deprecated-v-on-number-modifiers": "error",
        "vue/no-deprecated-vue-config-keycodes": "error",
        "vue/no-dupe-keys": "error",
        "vue/no-dupe-v-else-if": "error",
        "vue/no-duplicate-attr-inheritance": "error",
        "vue/no-duplicate-attributes": "error",
        "vue/no-empty-component-block": "error",
        "vue/no-empty-pattern": "warn",
        "vue/no-export-in-script-setup": "error",
        "vue/no-expose-after-await": "error",
        "vue/no-extra-parens": "error",
        "vue/no-irregular-whitespace": "error",
        "vue/no-lifecycle-after-await": "error",
        "vue/no-lone-template": [
          "error"
        ],
        "vue/no-loss-of-precision": "error",
        "vue/no-multi-spaces": "error",
        "vue/no-multiple-objects-in-class": "error",
        "vue/no-multiple-slot-args": "error",
        "vue/no-multiple-template-root": "error",
        "vue/no-mutating-props": "error",
        "vue/no-parsing-error": "error",
        "vue/no-potential-component-option-typo": "error",
        "vue/no-ref-as-operand": "error",
        "vue/no-ref-object-destructure": "error",
        "vue/no-required-prop-with-default": "error",
        "vue/no-reserved-component-names": "error",
        "vue/no-reserved-keys": "off",
        "vue/no-reserved-props": "error",
        "vue/no-restricted-block": "error",
        "vue/no-restricted-call-after-await": "error",
        "vue/no-restricted-component-options": "error",
        "vue/no-restricted-custom-event": "off",
        "vue/no-restricted-html-elements": [
          "error",
          "hr",
          "br",
          "style",
          "marquee",
          "font",
          "image",
          "strike"
        ],
        "vue/no-restricted-props": "off",
        "vue/no-restricted-static-attribute": "off",
        "vue/no-restricted-syntax": "off",
        "vue/no-restricted-v-bind": "off",
        "vue/no-setup-props-destructure": "error",
        "vue/no-shared-component-data": "error",
        "vue/no-side-effects-in-computed-properties": "error",
        "vue/no-spaces-around-equal-signs-in-attribute": "error",
        "vue/no-sparse-arrays": "error",
        "vue/no-static-inline-styles": "error",
        "vue/no-template-key": "error",
        "vue/no-template-shadow": "error",
        "vue/no-template-target-blank": "error",
        "vue/no-textarea-mustache": "error",
        "vue/no-this-in-before-route-enter": "error",
        "vue/no-undef-components": "off",
        "vue/no-undef-properties": "error",
        "vue/no-unsupported-features": "error",
        "vue/no-unused-components": "error",
        "vue/no-unused-properties": [
          "error",
          {
            "deepData": true,
            "groups": [
              "props"
            ],
            "ignorePublicMembers": false
          }
        ],
        "vue/no-unused-refs": "error",
        "vue/no-unused-vars": [
          "error",
          {
            "ignorePattern": "^_"
          }
        ],
        "vue/no-use-computed-property-like-method": "error",
        "vue/no-use-v-if-with-v-for": [
          "error",
          {
            "allowUsingIterationVar": true
          }
        ],
        "vue/no-useless-concat": "error",
        "vue/no-useless-template-attributes": "error",
        "vue/no-useless-v-bind": "error",
        "vue/no-v-for-template-key": "error",
        "vue/no-v-for-template-key-on-child": "off",
        "vue/no-v-html": "error",
        "vue/no-v-model-argument": "error",
        "vue/no-v-text": "error",
        "vue/no-v-text-v-html-on-component": "error",
        "vue/no-watch-after-await": "error",
        "vue/object-curly-newline": "off",
        "vue/object-property-newline": [
          "error",
          {
            "allowAllPropertiesOnSameLine": true
          }
        ],
        "vue/object-shorthand": "error",
        "vue/one-component-per-file": "error",
        "vue/operator-linebreak": "off",
        "vue/order-in-components": "error",
        "vue/padding-line-between-blocks": "warn",
        "vue/padding-line-between-tags": [
          "error",
          [
            {
              "blankLine": "never",
              "next": "*",
              "prev": "*"
            }
          ]
        ],
        "vue/prefer-import-from-vue": "error",
        "vue/prefer-prop-type-boolean-first": "off",
        "vue/prefer-separate-static-class": "error",
        "vue/prefer-template": "error",
        "vue/prefer-true-attribute-shorthand": "error",
        "vue/prop-name-casing": "error",
        "vue/quote-props": "error",
        "vue/require-component-is": "error",
        "vue/require-default-prop": "off",
        "vue/require-direct-export": "off",
        "vue/require-emit-validator": "error",
        "vue/require-explicit-emits": [
          "error",
          {
            "allowProps": false
          }
        ],
        "vue/require-expose": "error",
        "vue/require-name-property": "error",
        "vue/require-prop-type-constructor": "error",
        "vue/require-prop-types": "error",
        "vue/require-render-return": "error",
        "vue/require-slots-as-functions": "error",
        "vue/require-toggle-inside-transition": "error",
        "vue/require-v-for-key": "error",
        "vue/require-valid-default-prop": "error",
        "vue/return-in-computed-property": "error",
        "vue/return-in-emits-validator": "error",
        "vue/script-indent": [
          "error",
          "tab"
        ],
        "vue/singleline-html-element-content-newline": "off",
        "vue/sort-keys": "off",
        "vue/space-in-parens": "error",
        "vue/space-infix-ops": "off",
        "vue/space-unary-ops": "error",
        "vue/static-class-names-order": "off",
        "vue/template-curly-spacing": "error",
        "vue/this-in-template": "error",
        "vue/use-v-on-exact": [
          "error"
        ],
        "vue/v-bind-style": "error0",
        "vue/v-for-delimiter-style": "error",
        "vue/v-on-event-hyphenation": "error",
        "vue/v-on-function-call": [
          "error",
          "never"
        ],
        "vue/v-on-handler-style": "error",
        "vue/v-on-style": "error",
        "vue/v-slot-style": "error",
        "vue/valid-attribute-name": "error",
        "vue/valid-define-emits": "error",
        "vue/valid-define-props": "error",
        "vue/valid-model-definition ": "error",
        "vue/valid-next-tick": "error",
        "vue/valid-template-root": "error",
        "vue/valid-v-bind": "error",
        "vue/valid-v-bind-sync": "error",
        "vue/valid-v-cloak": "error",
        "vue/valid-v-else": "error",
        "vue/valid-v-else-if": "error",
        "vue/valid-v-for": "error",
        "vue/valid-v-html": "error",
        "vue/valid-v-if": "error",
        "vue/valid-v-is": "error",
        "vue/valid-v-memo": "error",
        "vue/valid-v-model": "error",
        "vue/valid-v-on": "error",
        "vue/valid-v-once": "error",
        "vue/valid-v-pre": "error",
        "vue/valid-v-show": "error",
        "vue/valid-v-slot": "error",
        "vue/valid-v-text": "error",
        "wrap-iife": "off",
        "wrap-regex": "off",
        "xss/no-location-href-assign": [
          2,
          {
            "escapeFunc": "escapeHref"
          }
        ],
        "xss/no-mixed-html": [
          2,
          {
            "functions": {
              ".html": {
                "htmlInput": true,
                "htmlOutput": true
              },
              ".join": {
                "passthrough": {
                  "args": true,
                  "obj": true
                }
              },
              "$": {
                "htmlInput": true,
                "safe": [
                  "document",
                  "this"
                ]
              }
            },
            "htmlFunctionRules": [
              ".asHtml/i",
              "toHtml"
            ],
            "htmlVariableRules": [
              "AsHtml",
              "HtmlEncoded/i",
              "^html$"
            ]
          }
        ],
        "yield-star-spacing": "error",
        "yoda": "warn"
      }
    }
  ],
  "root": true
}