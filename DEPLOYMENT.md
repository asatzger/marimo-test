# GitHub Pages Deployment Guide

This document provides detailed instructions for deploying this Marimo app to GitHub Pages.

## The Problem

When deploying Marimo apps to GitHub Pages, you might encounter these common issues:

1. **GitHub Pages shows the README instead of the app**: GitHub Pages defaults to showing README.md when there's no index.html file.

2. **Environment errors in the GitHub workflow**: The "github-pages" environment name may cause linter errors in some GitHub setups.

3. **"Not Found" errors during deployment**: This happens when GitHub Pages hasn't been properly enabled.

## The Solution

We've implemented a comprehensive solution:

### 1. Custom Index.html

We've created a custom `index.html` file that:
- Has a nice loading spinner while checking for the app files
- Automatically redirects to the Marimo-generated app file
- Falls back to manual links if the app files aren't found
- Provides a nice UI instead of a blank page or README

### 2. Updated GitHub Workflow

Our `.github/workflows/deploy-wasm.yml` file:
- Builds the Marimo WASM app
- Copies our custom index.html to the build directory
- Sets up proper GitHub Pages deployment

### 3. Troubleshooting Steps

If you still encounter issues:

#### First Time Setup

1. **Enable GitHub Pages**: 
   - Go to your repository on GitHub
   - Click on "Settings" → "Pages"
   - Under "Source", select "GitHub Actions"
   - Save changes

2. **Run the Workflow Manually**:
   - Go to "Actions" tab
   - Select the "Deploy Marimo WASM App to GitHub Pages" workflow
   - Click "Run workflow"

#### Linter Errors in Workflow File

If you see an error like `Value 'github-pages' is not valid`, there are two options:

1. Change the environment name to something else, such as:
   ```yaml
   environment:
     name: pages
     url: ${{ steps.deployment.outputs.page_url }}
   ```

2. Ignore the linter error - the workflow will often still work despite this warning.

#### After Deployment

- The app will be available at: `https://<your-github-username>.github.io/<repository-name>/`
- It might take a few minutes for changes to propagate

## File Structure

When properly deployed, your Pages site should have:
- `index.html` - The landing page that redirects to the app
- `surface_plot_app.html` - The Marimo-generated WebAssembly app
- Supporting files for the app (JavaScript, CSS, WebAssembly) 