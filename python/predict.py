from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from PIL import Image
import tensorflow as tf
import numpy as np
from ultralytics import YOLO

# Initialize Flask app
app = Flask(__name__)
cors = CORS(app, resources={r"/predict": {"origins": "http://localhost:3001"}})

# Load the model (If not being trained)
model = YOLO('./runs/classify/train3/weights/best.pt')

# Define a route for predictions
@app.route('/', methods=['GET'])
def hello_world():
    return render_template('index.html')

def getImage():
    imagefile = request.files['imagefile']
    image_path = "./images/" + imagefile.filename
    imagefile.save(image_path)
    print(image_path)
    return image_path

def predictImage(img):
    # Run the model on an image (From the dataset because on colab)
    results = model(img)
    
    pet_names = results[0].names
    probs = results[0].probs.data.tolist()

    # Get prediction and confidence
    prediction = pet_names[np.argmax(probs)]
    confidence = np.round(probs[np.argmax(probs)] * 100, 2)

    # Prepare response in JSON format
    response = {
        "prediction": prediction,
        "confidence": confidence
    }
    print(response)
    return jsonify(response)

@app.route('/predict', methods=['POST'])
def predict():
    img = getImage()
    output = predictImage(img)
    return output

if __name__ == '__main__':
    app.run(port=3002, debug=True)
