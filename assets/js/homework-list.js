// Replace with your Canvas API endpoint and access token
const baseUrl = 'https://cors-anywhere.herokuapp.com/https://poway.instructure.com/api/v1/';
const authToken = 'Bearer 2573~Sxb6kJC3JFZjEqAdFdC1nmo5DwmD1gOdsEpOyEOb9HFQ0J3xH1lJoKkUEGhlXTDl';

// Create a function to fetch assignments
async function fetchAssignments() {
  try {
    const response = await fetch(baseUrl + 'courses/141645/assignments', {
      method: 'GET',
      headers: {
        'Authorization': authToken,
      },
    });

    if (response.ok) {
      const assignments = await response.json();
      assignments.forEach(assignment => {
        console.log(`Assignment Name: ${assignment.name}`);
        console.log(`Due Date: ${assignment.due_at}`);
        console.log(`Description: ${assignment.description}`);
        console.log("-----");
      });
    } else {
      console.log(`Failed to retrieve assignments. Status code: ${response.status}`);
    }
  } catch (error) {
    console.error(`An error occurred: ${error.message}`);
  }
}

// Call the function to fetch assignments
fetchAssignments();
