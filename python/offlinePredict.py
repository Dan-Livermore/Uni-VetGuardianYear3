import numpy as np
from ultralytics import YOLO

# Load the model (If not being trained)
model = YOLO('./runs/classify/train3/weights/last.pt')

# Run the model on an image (From the dataset because on colab)
results = model('./images/n02107683_673.jpg')

pet_names = results[0].names
probs = results[0].probs.data.tolist()

# Display prediction
predicition = pet_names[np.argmax(probs)]
confidence = np.round(probs[np.argmax(probs)] * 100, 2)

print("Prediction: ", predicition)  
print("Confidence ", f"{confidence:.2f}%")