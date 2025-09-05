# Internationalization (i18n) Setup

This directory contains the internationalization configuration for the portfolio application.

## Files

- `index.ts` - Main i18n configuration file
- `locales/en.json` - English translations
- `locales/fr.json` - French translations

## Usage

The application supports English and French languages with automatic language detection based on:

1. Local storage preference
2. Browser language
3. HTML lang attribute

## Adding New Translations

1. Add new translation keys to both `en.json` and `fr.json`
2. Use the `useTranslation` hook in components:

   ```tsx
   import { useTranslation } from "react-i18next";

   function MyComponent() {
   	const { t } = useTranslation();
   	return <h1>{t("myKey")}</h1>;
   }
   ```

## Language Switcher

The language switcher is available in the header navigation and allows users to switch between English and French.

## Supported Languages

- 🇺🇸 English (en)
- 🇫🇷 French (fr)
