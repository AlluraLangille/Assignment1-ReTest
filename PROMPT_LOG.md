# Prompt Log

A record of all prompts asked in Ask, Edit, and Agent Modes for this project.

---

## Prompts
1. Project Scope
2. Request to create core deliverables
3. Request for more legend API data
4. Installing required modules for app.ts file
5. Identified and fixed missing npm scripts and dependencies
6. Fixed TypeScript and Express type issues
7. Created a Project Requirements Document for the frontend
8. Built a basic HTML/CSS/JS frontend with forms to add, edit, delete, and display legends
9. Debugged frontend/backend connection issues (API URL, CORS, server not running)
10. Ensured backend routes match frontend expectations (`/api/legends`)
11. Updated frontend to display legends below the add form
12. Updated frontend so the edit form appears below the legend being edited



Prompt 1 (Ask):
You will build a backend-only REST API for a web application of your choice.
The API must support full CRUD operations and be structured for future frontend integration. You will create the entire file structure to support this. The theme I have chosen is an Urban Legends Index, featuring at least 15 well known urban legend monsters.
Core Deliverables:
Project Requirements Document – clearly defines API endpoints, data models, and expected behaviours
Source Code – Implements a working RESTful API with full CRUD operations + add a README.md file with setup instructions
Prompt Log – A record of all prompts asked in Ask, Edit, and Agent Modes.
API Documentation and Deployment – Documentation with Swagger + App deployment (Render, Vercel, Github Pages)


Output Reflection:
Seemed to have no problem creating the file structure for what was needed – Including the README.md file with appropriate instructions. didn’t want to start with the code yet so I thought this would be a good first step. Though it seems to have ignored the PRD and any other info I listed – probably because it was in Ask Mode.



Prompt 2 (Agent):
Create these Core deliverables:
Project Requirements Document – clearly defines API endpoints, data models, and expected behaviours
Source Code – Implements a working RESTful API with full CRUD operations
Prompt Log – A record of all prompts asked in Ask, Edit, and Agent Modes.
API Documentation and Deployment – Documentation with Swagger + App deployment (Render, Vercel, Github Pages)

Output Reflection:
Reiterating the necessary deliverables in Agent Mode worked as intended, adding in most of the required data and criteria for the backend API. Will need to request more legends to be added before moving forward, but so far the output seems solid.



Prompt 3 (Agent):
Please add at least 10 more legends to the data to start with and include image URLs for the corresponding legends.

Output Reflection:
All asked for data was added.



Prompt 4 (Ask):
Please define the module issues in the app.ts file regarding “express”, “process” and “body-parser”, then proceed to correct them in a straightforward manner that still adheres to the project outline.

Output Reflection:
I would definitely be able to design the prompts better for this API if I had a better understanding of what actually went into creating a small API such as this one and was able to do some troubleshooting on my own.



Prompt 5 + 6 (Agent):
Output Reflection:
These were simple debugging requests, and having to download certain packages to make sure that all the files connected and worked as intended.



Prompt 8 (Agent):
You will now create a Project Requirements Document that clearly defines a front-end app for the Legends API we built.
You will then create a basic front-end interface using HTML, CSS, and Javascript that interacts with the API.
It must include:
	-Form to add data
	-Form to edit data
	-Delete Data
	-Display retrieved data
With a basic styling and layout we will enhance later.

Prompt Reflection:
An interface and both its forms were created to fill out on the webpage in a clean and organized manner, but the legend data was unable to be added to the API (“Failed to add Legend”). Missing the proper connect from backend to frontend. Should have specifically stated to also form that connection in the prompt.



Prompt 9 + 10(Ask/Agent):
Once again, these were debugging requests: ensure that the package.json file contained the right script paths and that starting up the sever with npm start was functional. It has become very clear that knowing the process to creating something like this would be incredibly helpful in knowing what to ask for.



Prompt 11 + 12(Ask):
Edit the index.html file to output the currently stored legend data below the "Add Legend" form, while also moving the "Edit" form to be below the legend you are currently editing.

Prompt Reflection:
This was just some minor visual changes to make the front end design more streamline and intuitive, all of which were successfully changed.



FINAL REFLECTION:
My final thoughts on Assignment 1 were mixed: using the Github co-pilot features certainly can get things up and running fast, and all things considered it performed this with only a dozen prompts - some of which were simple debugging methods. But my main takeaway from this is that having a good grasp on the material you are wanting co-pilot to create for you is imperative. If I was already well versed in creating a backend API such as this, I would have been able to make my requests much more specific and detailed, making sure to guide the AI in the way it was built and perhaps not have to spend so much time debugging code I am mostly unfamiliar with. 


