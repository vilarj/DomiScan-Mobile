from flask import Flask, render_template, request
import os
import Image

app = Flask(__name__)

@app.route('/')
def index():
   return render_template('upload.html')
	
@app.route('/uploader', methods = ['POST'])
def upload_file():
   if request.method == 'POST':
      f = request.files['file']
      path = 'tmp/%s' % (f.filename)
      
      f.save(path)
      dotCount = Image.countDots(path)
      os.remove(path)

      return str(dotCount)
		
if __name__ == '__main__':
   app.run(debug = True)