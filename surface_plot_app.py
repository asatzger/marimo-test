# /// script
# [tool.marimo.runtime]
# auto_instantiate = false
# ///

import marimo

__generated_with = "ai"
app = marimo.App(width="medium")

@app.cell
def _():
    import marimo as mo
    import numpy as np
    import matplotlib.pyplot as plt
    from mpl_toolkits.mplot3d import Axes3D
    return

@app.cell
def _():
    # Create UI elements for controlling the 3D surface plot
    x_start = mo.ui.number(value=-5, label="X Start")
    x_end = mo.ui.number(value=5, label="X End")
    y_start = mo.ui.number(value=-5, label="Y Start")
    y_end = mo.ui.number(value=5, label="Y End")
    resolution = mo.ui.slider(10, 100, value=50, label="Resolution")
    
    # Display UI elements in a vertical stack
    mo.vstack([x_start, x_end, y_start, y_end, resolution])
    return

@app.cell
def _():
    # Generate data for the 3D surface plot based on UI inputs
    x = np.linspace(x_start.value, x_end.value, resolution.value)
    y = np.linspace(y_start.value, y_end.value, resolution.value)
    x, y = np.meshgrid(x, y)
    z = np.sin(np.sqrt(x**2 + y**2))
    return

@app.cell
def _():
    # Create the 3D surface plot
    fig = plt.figure(figsize=(10, 7))
    ax = fig.add_subplot(111, projection='3d')
    surf = ax.plot_surface(x, y, z, cmap='viridis')
    ax.set_title('3D Surface Plot')
    ax.set_xlabel('X axis')
    ax.set_ylabel('Y axis')
    ax.set_zlabel('Z axis')
    plt.gca()
    return

if __name__ == "__main__":
    app.run() 