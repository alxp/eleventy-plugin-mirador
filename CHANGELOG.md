# Changelog

## 2.0.2

- Add `demo` npm script that builds and serves a minimal Eleventy site with an
  embedded Mirador viewer on port 8080.
- Add Demo section to README with local setup instructions.
- Update example IIIF manifest URL in README.

## 2.0.1

- Add `.gitignore` and `.npmignore` entries for publishing hygiene.
- Update `package.json` metadata (license, repository, keywords).

## 2.0.0

- Update plugin to support Mirador 4.x. The embed script now passes windows
  configuration directly to `Mirador.viewer()` compatible with the v4 API.
- Add `?page=N` URL parameter support via `canvasIdPattern` configuration.
- Update tests for Mirador 4.x output.
