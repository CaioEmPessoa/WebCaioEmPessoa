import os
import json

# Get the current directory
current_directory = os.path.dirname(os.path.abspath(__file__))

# List all files in the current directory
files = [f for f in os.listdir(current_directory) if os.path.isfile(os.path.join(current_directory, f))]

# Save the file list to info.json
with open(os.path.join(current_directory, 'index.html'), 'w') as json_file:
    json.dump(files, json_file, indent=4)

print("File list saved to info.json")