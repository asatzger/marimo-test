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
    import matplotlib.cm as cm
    from mpl_toolkits.mplot3d import Axes3D
    return

@app.cell
def _():
    # Create UI elements for controlling the 3D surface plot
    
    # Range controls
    x_start = mo.ui.number(value=-5, label="X Start", min=-20, max=0, step=0.5)
    x_end = mo.ui.number(value=5, label="X End", min=0, max=20, step=0.5)
    y_start = mo.ui.number(value=-5, label="Y Start", min=-20, max=0, step=0.5)
    y_end = mo.ui.number(value=5, label="Y End", min=0, max=20, step=0.5)
    
    # Visualization controls
    resolution = mo.ui.slider(10, 150, value=50, label="Resolution", step=5)
    colormap = mo.ui.dropdown(
        options=["viridis", "plasma", "inferno", "magma", "cividis", 
                 "Reds", "Blues", "Greens", "Purples", "jet"],
        value="viridis",
        label="Color Map"
    )
    
    # Button to reset to default values
    def reset_values(_):
        x_start.set(-5)
        x_end.set(5)
        y_start.set(-5)
        y_end.set(5)
        resolution.set(50)
        colormap.set("viridis")
    
    reset_button = mo.ui.button(label="Reset to Defaults", on_click=reset_values)
    
    # Organize UI elements into groups
    range_controls = mo.hstack([
        mo.vstack([mo.md("### X Range"), x_start, x_end]),
        mo.vstack([mo.md("### Y Range"), y_start, y_end])
    ])
    
    visual_controls = mo.vstack([
        mo.md("### Appearance"),
        mo.hstack([resolution, colormap]),
        reset_button
    ])
    
    # Display all UI control groups
    mo.vstack([range_controls, visual_controls], gap=2)
    return

@app.cell
def _():
    # Add descriptive text explaining the app
    mo.md("""
    # Interactive 3D Surface Plot
    
    This application visualizes a 3D surface plot of the function:
    
    $z = \sin(\sqrt{x^2 + y^2})$
    
    This function creates a "ripple" effect that radiates outward from the origin.
    
    ## How to use the controls:
    
    - **X Start/End**: Adjust the range of the X-axis
    - **Y Start/End**: Adjust the range of the Y-axis
    - **Resolution**: Control the detail level of the plot (higher values show more detail but may be slower)
    - **Color Map**: Change the color scheme of the 3D surface
    - **Reset Button**: Return all controls to their default values
    
    As you adjust the controls, the plot will update in real-time.
    
    Try setting X and Y ranges to similar values for a symmetrical view, or experiment with different ranges to see how the surface changes!
    """)
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
    surf = ax.plot_surface(x, y, z, cmap=colormap.value)
    fig.colorbar(surf, ax=ax, shrink=0.5, aspect=5)
    ax.set_title('3D Surface Plot')
    ax.set_xlabel('X axis')
    ax.set_ylabel('Y axis')
    ax.set_zlabel('Z axis')
    plt.gca()
    return

if __name__ == "__main__":
    app.run() 