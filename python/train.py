from ultralytics import YOLO

model = YOLO('yolov8n-cls.pt')  # load the smallest size model

model.train(data='./dataset',
            epochs=30, imgsz=512)