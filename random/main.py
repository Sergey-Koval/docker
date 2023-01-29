from flask import Flask, request, jsonify, abort
import json
import random

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return jsonify('Hello from Py')

@app.route('/data', methods=['GET'])
def data():
    data = request.get_json()
    print(data)
    number = data['number']
    result = number ** 2
    return json.dumps({'number': result})

@app.route('/random', methods=['GET'])
def rand():
    return json.dumps({'number': random.randint(0,10)})


if __name__ == '__main__':
    print('Ready')
    app.run(host='0.0.0.0')
