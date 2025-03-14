# 3D Surface Plot Marimo App

This is an interactive 3D surface plot visualization created using Marimo, a Python library for creating reactive notebooks.

## Features

- Interactive UI to control the X and Y range of the plot
- Adjustable resolution slider
- Real-time updates of the 3D surface plot
- Visualization of the sine function of the Euclidean distance from the origin
- Color map selection for different visual styles
- One-click reset button to return to default values

## Installation

1. Clone this repository:
   ```
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Activate the virtual environment:
   ```
   # On macOS/Linux
   source venv/bin/activate
   
   # On Windows
   venv\Scripts\activate
   ```

3. Install dependencies (if not already installed):
   ```
   pip install -r requirements.txt
   ```

## Running the App

To run the Marimo app locally:

```
python -m marimo run surface_plot_app.py
```

Or simply:

```
marimo run surface_plot_app.py
```

## Online Demo

You can also access the online WebAssembly version of this app through GitHub Pages at:

```
https://<your-github-username>.github.io/<repository-name>/
```

The WebAssembly version allows you to interact with the app directly in your browser without needing Python installed.

## Deploying to GitHub Pages

This repository includes a GitHub Actions workflow that automatically deploys the app to GitHub Pages whenever changes are pushed to the main branch.

### Important: Enable GitHub Pages First

Before the GitHub Action will work, you must first enable GitHub Pages in your repository:

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to the "GitHub Pages" section (or click on "Pages" in the sidebar)
4. Under "Source", select "GitHub Actions" from the dropdown menu
5. Click "Save"

If you try to run the workflow before enabling Pages, you'll see an error like this:
```
Error: Failed to create deployment (status: 404) [...] Ensure GitHub Pages has been enabled
```

### Troubleshooting GitHub Pages Deployment

If you encounter errors with the GitHub Pages deployment:

1. Verify GitHub Pages is enabled as described above
2. Make sure your repository has the correct permissions set (these are configured in the workflow file)
3. Check if your organization has any restrictions on GitHub Pages deployment
4. Try running the workflow manually through the Actions tab on GitHub

After fixing these settings and your first successful push to the main branch, the app will be automatically built and deployed.

## Usage

After launching the app, you'll see a 3D surface plot with several UI controls:
- **X Start/End**: Adjust the range of the X-axis
- **Y Start/End**: Adjust the range of the Y-axis
- **Resolution**: Control the detail level of the plot (higher values show more detail but may be slower)
- **Color Map**: Select different color schemes for the visualization
- **Reset Button**: Return all controls to their default values

Adjust these controls to see the surface plot update in real-time.

## Requirements

- Python 3.7+
- marimo
- numpy
- matplotlib

## License

MIT 