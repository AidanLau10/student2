from flask import Flask, render_template
import requests
from datetime import datetime, timezone

app = Flask(__name__)


base_url = 'https://poway.instructure.com/api/v1/'
headers = {
    'Authorization': 'Bearer 2573~mbqfLD2yTcQr8StVbsAHhSC695LjGUSw9SCeRd0x8qysh1uJ5Jvo77uu9IRez34d'
}

@app.route('/')
def tester():
            return render_template('tester.html')
if __name__ == '__main__':
    app.run(debug=True)
