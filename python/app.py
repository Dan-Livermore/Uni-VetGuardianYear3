from flask import Flask, render_template, request, jsonify
import jsonpickle
import json
import tensorflow as tf
from PIL import Image
#from tensorflow.keras.preprocessing import image as keras_image
import numpy as np
import matplotlib.pyplot as plt

app = Flask(__name__)

@app.route('/', methods=['GET'])
def hello_world():
    return render_template('index.html')

@app.route('/', methods=['POST'])
def load_and_prep_image():
    imagefile= request.files['imagefile']
    image_path = "./images/" + imagefile.filename
    imagefile.save(image_path)
    img = tf.io.read_file(image_path)
    img = tf.image.decode_image(img, channels=3)
    img = tf.image.resize(img, size = [150,150])
    img = img/255.
    return img

def pred_and_plot(model, class_names):
    img = load_and_prep_image()
    pred = model.predict(tf.expand_dims(img, axis=0))
    if len(pred[0]) > 1:
        pred_class = class_names[pred.argmax()]
    else:
        pred_class = class_names[int(tf.round(pred)[0][0])]
    return str(pred_class)

class_names = [
    'Abyssinian','African Grey Parrot','American Shorthair','Beagle',"Bourke's Parakeet" 'Boxer','British Shorthair','Budgerigar','Bulldog',
    'Burmese','Canary','Chinchillas','Cockatiel','Cockatoo','Cocker Spaniel','Dachshund','Devon Rex','Egyptian Mau','Finch','French Bulldog',
    'Gerbils','German Shepherd','Golden Retriever','Great Dane','Guinea Pigs','Hamsters','Hedgehogs','Himalayan','Horses','Labrador Retriever',
    'Lovebird','Maine Coon','Mice','Miniature Schnauzer','Parrotlet','Persian','Pionus Parrot','Poodle','Quaker Parrot','Rabbits','Ragdoll',
    'Rats','Rottweiler','Russian Blue','Scottish Fold','Serval Cats','Shih Tzu','Siamese','Sphynx','Yorkshire Terrier']

@app.route('/', methods=['POST'])
def modelling():
    model = tf.keras.models.load_model('Model.h5')
    print('Model Loaded!')
    pred = pred_and_plot(model, class_names)
    return render_template('index.html', predictions=json.dumps(pred))

if __name__ == '__main__':
    app.run(port=3000, debug=True)