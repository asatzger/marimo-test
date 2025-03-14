# 3D Surface Plot Marimo App

This is an interactive 3D surface plot visualization created using Marimo, a Python library for creating reactive notebooks.

## Features

- Interactive UI to control the X and Y range of the plot
- Adjustable resolution slider
- Real-time updates of the 3D surface plot
- Visualization of the sine function of the Euclidean distance from the origin

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

To run the Marimo app:

```
python -m marimo run surface_plot_app.py
```

Or simply:

```
marimo run surface_plot_app.py
```

## Usage

After launching the app, you'll see a 3D surface plot with several UI controls:
- X Start and X End sliders to control the X-axis range
- Y Start and Y End sliders to control the Y-axis range
- Resolution slider to adjust the detail level of the plot

Adjust these controls to see the surface plot update in real-time.

## Requirements

- Python 3.7+
- marimo
- numpy
- matplotlib

## License

MIT 