from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/calculate", methods=["POST"])
def calculate():
    data = request.json
    a = float(data["num1"])
    b = float(data["num2"])
    op = data["operation"]

    if op == "add":
        res = a + b
    elif op == "sub":
        res = a - b
    elif op == "mul":
        res = a * b
    
    else:
        return jsonify({"error": "Invalid"})

    return jsonify({"result": res})

app.run(host="0.0.0.0", port=5000)