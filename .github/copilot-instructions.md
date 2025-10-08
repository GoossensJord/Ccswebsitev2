# Copilot Instructions for AI Agents

## Project Overview
This codebase is a WordPress project using the Roots Bedrock boilerplate for improved structure, dependency management, and environment configuration. Themes leverage the Sage starter (see `web/app/themes/defaultCCTheme` and `craftcodephp`), which integrates Laravel Blade templating, Vite-powered front-end builds, and Tailwind CSS.

## Architecture & Key Components
- **Bedrock Structure**: Core WordPress files are in `web/`, with configuration in `config/` and environment-specific overrides in `config/environments/`.
- **Themes**: Located in `web/app/themes/`. Themes use Sage conventions: Blade templates, Vite for asset bundling, and Tailwind CSS for styling.
- **Acorn Integration**: Laravel features are available in themes via Acorn (see `vendor/roots/acorn`).
- **Composer**: PHP dependencies managed via `composer.json`.
- **Node/JS**: Front-end assets managed via `package.json` and Vite config (see theme folders).

## Developer Workflows
- **Install dependencies**:
  - PHP: `composer install`
  - JS: `npm install` (run in theme directory)
- **Build assets**:
  - `npm run build` (theme directory)
  - `npm run dev` for hot-reloading
- **WordPress config**:
  - Environment variables set in `.env` (see Dotenv usage)
  - Override config per environment in `config/environments/`
- **Debugging**:
  - Use Laravel/Acorn debugging tools in themes
  - PHP errors surfaced via standard WordPress/Bedrock mechanisms

## Project-Specific Patterns
- **Blade Templates**: All theme views use Blade (`resources/views/` in each theme)
- **Component-Based Frontend**: React/TSX components in `resources/tsx/components/` (see `TerminalWindow.tsx`)
- **Vite**: Asset pipeline for JS/CSS; config in theme root
- **Tailwind CSS**: Utility-first CSS framework, configured per theme
- **Environment Separation**: Use `config/environments/development.php`, `staging.php`, etc. for overrides

## Integration Points
- **Acorn**: Enables Laravel features in WordPress themes
- **Composer**: Manages PHP packages (see `vendor/`)
- **Vite/Tailwind**: Modern JS/CSS workflow in themes

## Examples
- To add a Blade view: `web/app/themes/defaultCCTheme/resources/views/example.blade.php`
- To add a React component: `web/app/themes/defaultCCTheme/resources/tsx/components/NewComponent.tsx`
- To override config for staging: `config/environments/staging.php`

## References
- [Bedrock Docs](https://roots.io/bedrock/docs/)
- [Sage Docs](https://roots.io/sage/docs/)
- [Acorn Docs](https://roots.io/acorn/docs/)

---

**For updates, merge new conventions with existing instructions. If unclear, consult the referenced docs or key files.**
