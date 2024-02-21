from ultralytics import YOLO

model = YOLO('yolov8n-cls.pt')  # load a pretrained model (recommended for training)

model.train(data='./dataset',
            epochs=20, imgsz=224)