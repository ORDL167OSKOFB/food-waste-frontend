from flask import Flask, render_template
# from flask_cors import CORS
app = Flask(__name__)
# CORS(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/test')
def test():
    return 'Hello World!'

if __name__ == '__main__': 
    app.run(host='0.0.0.0', port=5001, debug=True)