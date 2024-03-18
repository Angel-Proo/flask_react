from flask import Flask,jsonify

app=Flask(__name__)

@app.route('/api')
def index():
    return jsonify([{'id':'1','content':'prueba'}])

if __name__ == '__main__':
    app.run(debug=True)