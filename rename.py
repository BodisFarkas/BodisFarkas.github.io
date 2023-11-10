import os

folder = input('In which folder are the pictures: ')

path = os.path.join('./img/', folder + '/')
valid_extensions = ['.jpeg']
i = 1

for filename in os.listdir(path):
    for ext in valid_extensions:
        if filename.endswith(ext):
            os.rename(os.path.join(path, filename), os.path.join(path, str(i) + '.jpeg'))
            i += 1
            break
else:
    print('Haha, I succesfully renamed your files and changed their extensions to .jpeg!')

