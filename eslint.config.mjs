import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});
const eslintConfig = [
    ...compat.extends('next/core-web-vitals'),
    ...tseslint.config(
        tseslint.configs.strict,
        tseslint.configs.stylistic,
    ),
];

export default eslintConfig;