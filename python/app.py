from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import tensorflow as tf
from PIL import Image
from tensorflow.keras.preprocessing import image as keras_image
import numpy as np

app = Flask(__name__)
CORS(app, resources={r"/predict": {"origins": "http://localhost:3001"}})

@app.route('/', methods=['GET'])
def hello_world():
    return render_template('index.html')


model = tf.keras.models.load_model('Model.h5')
class_names = [
    'Abyssian','American Shorthair','African Grey Parrot','Boxer','Bulldog','British Shorthair','Beagle','Budgerigar',"Bourke's Parakeet",
    'Cockatoo','Canary','Cocker Spaniel','Dachsund','Cockatiel','Chinchillas','Burmese','Egyptian Mau','Gerbils','Devon Rex','Finch',
    'German Shepard','French Bulldog','Horses','Hedgehogs','Himalayan','Golden Retriever','Guinea Pigs','Great Dane','Hamsters','Mice',
    'Parrotlet','Miniature Schanauzer','Lovebird','Labrador Retriever','Pionus Parrot','Maine Coon','Persian','Ragdoll','Rottweiler',
    'Quaker Parrot','Rats','Rabbits','Poodle','Russain Blue','Serval Cats','Shih Tzu','Sphynx','Siamese','Scottish Fold','Yorkshire Terrier']

def prepareImage():
    imagefile = request.files['imagefile']
    image_path = "./images/" + imagefile.filename
    imagefile.save(image_path)
    img = tf.io.read_file(image_path)
    img = tf.image.decode_image(img, channels=3)
    img = tf.image.resize(img, size=[150, 150])
    img = tf.cast(img, tf.float32) / 255.0
    return img

def predictImage(img, model, class_names):
    predictions = model.predict(tf.expand_dims(img, axis=0))
    pred_class = class_names[predictions.argmax()]
    return pred_class

@app.route('/predict', methods=['POST'])
def predict():
    img = prepareImage()
    output = predictImage(img, model, class_names)
    return jsonify({'prediction': output})

if __name__ == '__main__':
    app.run(port=3002, debug=True)

if __name__ == '__main__':
    app.run(port=3002, debug=True)