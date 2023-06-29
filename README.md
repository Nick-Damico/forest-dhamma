# Forest Dhamma

Forest Dhamma is an application designed to manage talks given by the international community of monks and nuns in the Thai Forest Tradition, as well as the teachings of the late Ajahn Chah. This app was developed as my final project at Flatiron School's online developer boot camp, utilizing Ruby on Rails 5 in API-only mode with ActiveModelSerializer gem, along with a client-side React and Redux frontend. It allows users to upload their favorite talks from Dhamma teachers worldwide, which can be favorited, commented on, and tagged.

## Key Features
- Upload and explore talks from Dhamma teachers worldwide
- Favorite talks to save for later
- Leave comments on talks to share insights and reflections
- Add tags to categorize and organize talks
- Search for talks by selecting a monastery or specific teacher
- Audio player with a list of all talks from a selected teacher
- Descriptions and tags associated with each talk

## Technologies Used
- Ruby on Rails API backend
- React and Redux frontend
- ActiveModelSerializer for JSON serialization
- PostgreSQL database for data storage
- Authentication and authorization using Devise and Omniauth
- Audio player integration for playing talks
- Search functionality for finding talks by monastery or teacher
- HTML, CSS, and JavaScript for frontend design and interactivity

## Usage

The Forest Dhamma app enables users to search for talks by monastic teachers by selecting a monastery. Users can then choose a specific teacher or select the most recently uploaded or most favored talk.

On the audio player page, users can see a list of all talks from the selected teacher, a description of the currently playing talk, and a list of category tags associated with the talk. The form in the tags section can be used to add or edit tags for better labeling of talks.

Talks can be uploaded through the form under the 'upload' link in the navigation or by making a 'POST' request to '/talks' using the API. Please note that the file path needs to be a link to an already-hosted file. In future updates, the app will support direct '.mp3' file uploads.

# Screenshot
![Forest Dhamma](https://github.com/Nick-Damico/forest-dhamma/assets/19657584/d03f56be-6025-429e-8f0d-7c22eff4b55b)

## Installation

To run the app locally, follow these steps:

1. Clone the repository

2. Navigate to the project directory
`cd forest-dhamma`

3. Install dependencies
`bundle install`

4. Create database:
`rails db:create forest-dhamma-app`

5. Migrate schema
`rails db:migrate`

6. Seed database
`rails db:seed`

7. Install Frontend dependencies
` cd client; npm install`

8. Start Servers
`rake start`

# License
The app is available as open source under the terms of the MIT License.
