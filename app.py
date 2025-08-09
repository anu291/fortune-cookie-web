from flask import Flask, render_template

# Create a Flask application instance
app = Flask(__name__)

# Define a route for the home page
@app.route('/')
def index():
    """Renders the main page."""
    return render_template('index.html')

# This allows you to run the app directly from the script
if __name__ == '__main__':
    app.run(debug=True)