import os
import random
import shutil

# Define directories
source_dir = "./images"
train_dir = "./train"
test_dir = "./val"

# Ensure destination directories exist, create them if necessary
os.makedirs(train_dir, exist_ok=True)
os.makedirs(test_dir, exist_ok=True)

# Function to split the data for each folder
def split_data(folder):
    files = os.listdir(os.path.join(source_dir, folder))
    random.shuffle(files)
    split_index = int(0.8 * len(files))
    train_files = files[:split_index]
    test_files = files[split_index:]
    return train_files, test_files

# Iterate through each folder in the source directory
for folder in os.listdir(source_dir):
    train_files, test_files = split_data(folder)

    # Remove the first half of the folder name up to and including the '-'
    new_folder_name = folder.split('-')[1]

    # Create train and test directories for the current folder
    train_folder_path = os.path.join(train_dir, new_folder_name)
    test_folder_path = os.path.join(test_dir, new_folder_name)
    os.makedirs(train_folder_path, exist_ok=True)
    os.makedirs(test_folder_path, exist_ok=True)

    # Move train files
    for file in train_files:
        src = os.path.join(source_dir, folder, file)
        dst = os.path.join(train_folder_path, file)
        shutil.move(src, dst)

    # Move test files
    for file in test_files:
        src = os.path.join(source_dir, folder, file)
        dst = os.path.join(test_folder_path, file)
        shutil.move(src, dst)

print("Splitting complete.")