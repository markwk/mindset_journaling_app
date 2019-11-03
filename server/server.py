from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/api/', methods=['GET']) 
def get_stores():
	return "hello API"

# POST /store/<string:name>/item {name;, price:}}
@app.route('/api/<string:name>' , methods=['POST'])
def api_command(name):
  request_data = request.get_json()
  text_input = request_data['name']
  return text_input

app.run(port=5000)