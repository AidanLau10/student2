from flask import Flask, render_template
import requests
from datetime import datetime, timezone

app = Flask(__name__)

# Replace with your Canvas API endpoint and access token
base_url = 'https://poway.instructure.com/api/v1/'
headers = {
    'Authorization': 'Bearer 2573~mbqfLD2yTcQr8StVbsAHhSC695LjGUSw9SCeRd0x8qysh1uJ5Jvo77uu9IRez34d'
}

@app.route('/')
def homework_list():
    try:
        response = requests.get(base_url + 'courses/141645/assignments', headers=headers)

        if response.status_code == 200:
            assignments = response.json()
            
            # Get the current date and time in UTC timezone
            current_date = datetime.now(timezone.utc)

            # Filter assignments with due dates in the future
            future_assignments = [assignment for assignment in assignments if assignment.get('due_at') and datetime.fromisoformat(assignment['due_at']) > current_date]
            
            return render_template('homework-list.html', assignments=future_assignments)
        else:
            return "Failed to retrieve assignments. Status code: " + str(response.status_code)
    except Exception as e:
        return "An error occurred: " + str(e)

if __name__ == '__main__':
    app.run(debug=True)
