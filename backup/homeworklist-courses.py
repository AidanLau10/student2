import requests

# Replace with your Canvas API endpoint, user ID, and access token
base_url = 'https://poway.instructure.com/api/v1/'
user_id = '23302'  # Replace with the Canvas user ID
access_token = '2573~mbqfLD2yTcQr8StVbsAHhSC695LjGUSw9SCeRd0x8qysh1uJ5Jvo77uu9IRez34d'
headers = {
    'Authorization': f'Bearer {access_token}',
}

# Make a GET request to list assignments for the user 184117
response = requests.get(f'{base_url}users/{user_id}/courses?include[]=term&exclude[]=enrollments&sort=nickname', headers=headers)

if response.status_code == 200:
    assignments = response.json()
    # Process assignments here
    print(assignments)
else:
    print(f"Failed to retrieve assignments. Status code: {response.status_code}")
