from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import tensorflow as tf
from PIL import Image
import numpy as np

app = Flask(__name__)
CORS(app, resources={r"/predict": {"origins": "http://localhost:3001"}})

@app.route('/', methods=['GET'])
def hello_world():
    return render_template('index.html')


model = tf.keras.models.load_model('Model.h5')
class_names = [
    'Abyssinian','African Dwarf Frog','African Grey Parrot','American Shorthair','American Toad','Axolotls','Beagle','Bearded Dragon',
    'Bengal' "Bourke's Parakeet" 'Boxer','British Shorthair','Budgerigar','Bulldog','Burmese','Canary','Chameleon','Chinchillas','Cockatiel',
    'Cockatoo','Cocker Spaniel','Crested Gecko','Dachshund','Degus','Devon Rex','Eastern Newt','Egyptian Mau','Ferrets','Finch','Fox',
    'French Bulldog','Frogs with Tadpoles','Gerbils','German Shepherd','Golden Retriever','Great Dane','Green Iguana','Guinea Pigs','Hamsters',
    'Hedgehogs','Himalayan','Horned Toads','Horses','Hyacinth Macaws','Labrador Retriever','Leopard Gecko','Lovebird','Maine Coon','Mice',
    'Miniature Schnauzer','Monitor Lizards','Parrotlet','Persian','Pionus Parrot','Poison Dart Frogs','Poodle','Prairie Dogs',
    'Quaker Parrot','Rabbits','Ragdoll','Rats','Red-eyed Tree Frog','Rottweiler','Russian Blue','Salamander','Scottish Fold','Serval Cats',
    'Shih Tzu','Siamese','Sphynx','Sugar Gliders','Wallabies',"White's Tree Frog",'Yorkshire Terrier']

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
      # Get the predicted class
    # Check if predictions list is empty
    
    # Get the predicted class
    if len(predictions[0]) > 1: # check for multi-class
        pred_class = class_names[predictions.argmax()] # if more than one output, take the max
    else:
        pred_class = class_names[int(tf.round(predictions))[0][0]]
    return pred_class

@app.route('/predict', methods=['POST'])
def predict():
    img = prepareImage()
    output = predictImage(img, model, class_names)
    return jsonify({'prediction': output})

if __name__ == '__main__':
    app.run(port=3002, debug=True)
