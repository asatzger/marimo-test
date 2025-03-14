# GitHub Pages Deployment Guide

This document provides detailed instructions for deploying this Marimo app to GitHub Pages.

## Understanding Marimo HTML-WASM Export

After testing, we've discovered that `marimo export html-wasm` generates:

1. An `index.html` file as the main entry point
2. Various asset files (JS, CSS, fonts, images)
3. No file explicitly named after the input Python file

Our solution ensures proper deployment by:

1. Renaming Marimo's generated `index.html` to `marimo_index.html`
2. Using our custom `index.html` that automatically redirects to `marimo_index.html`
3. Including a fallback UI with manual links in case the redirect fails

## GitHub Pages Deployment

The GitHub Actions workflow handles deployment with these steps:

1. Exports the Marimo app to WebAssembly format
2. Renames the Marimo-generated index.html to marimo_index.html
3. Adds our custom index.html that redirects to the app
4. Uploads everything to GitHub Pages

## Command Line Options

The `marimo export html-wasm` command supports these options:

```
Options:
  -o, --output PATH             Output directory to save the HTML to. [required]
  --mode [edit|run]             Whether the notebook code should be editable
                                or readonly.  [default: run; required]
  --watch / --no-watch          Whether to watch the original file and export
                                upon change  [default: no-watch]
  --show-code / --no-show-code  Whether to show code by default in the
                                exported HTML file; only relevant for run
                                mode.  [default: no-show-code]
  --sandbox / --no-sandbox      Run the command in an isolated virtual
                                environment using `uv run --isolated`.
                                Requires `uv`.
  --help                        Show this message and exit.
```

Note that **the `-v` (verbose) flag is not supported** by this command.

## Troubleshooting

### Common Issues:

#### 1. "Launch App" Button Doesn't Work

If clicking the "Launch App" button leads to a 404, it could be because:

- The GitHub Pages deployment is still in progress (wait a few minutes)
- The Marimo export generated files with different names (check Actions logs)
- GitHub Pages is not enabled (see below)

#### 2. GitHub Pages Not Enabled

Before deployment works, you must enable GitHub Pages:

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to the "GitHub Pages" section (or click on "Pages" in the sidebar)
4. Under "Source", select "GitHub Actions"
5. Click "Save"

#### 3. "Not Found" Errors During Deployment

If you see "Error: Failed to create deployment (status: 404)" in your Actions log, GitHub Pages hasn't been properly enabled.

#### 4. Environment Errors in Workflow File

If you see linter errors about `github-pages` not being a valid environment name, you can:

1. Ignore the errors (the workflow often works despite these warnings)
2. Change the environment name to `pages` if the errors persist

## Manual Testing

If you want to test the export locally:

```bash
# Test the export
python test_export.py

# Examine the generated files
ls -la marimo_export_test/

# Run a local server to test
python -m http.server --directory marimo_export_test
```

Then open your browser to http://localhost:8000/ to see the app.

## File Structure

When properly deployed, your Pages site should have:
- `index.html` - The landing page that redirects to the app
- `marimo_index.html` - The Marimo-generated WebAssembly app
- Supporting files for the app (JavaScript, CSS, WebAssembly) 