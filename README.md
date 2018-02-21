# README
# Forest Dhamma APP
  App to manage talks given by the international community of monks and nuns in the Thai Forest Tradition and the teachings of the late Ajahn Chah.

  Built as my final project at Flatiron School online developer bootcamp using Rails 5 in --api only mode and leveraging `ActiveModelSerializer` gem with a client side React and Redux front end. It allows a users to upload their favorite talks from Dhamma Teachers all over the world where they can be favorited, commented on, and tagged.

# About
* Ruby version
 `ruby 2.4.1p111`
* Rails version
  `Rails 5.1.4`

# Usage
This app allows users to search for talks by monastic teachers by selecting a monastery, then you can
either choose a teacher or select the most recently uploading talk or most favorited talk.

On the audio player page you can see a list of all talks from the selected teacher, a description of the talk currently playing, and clicking on 'tags' will display a list of category tags associated with the
current talk. You can use the form in the tags section to help better label talks with tags.

Uploading talks can be done from the form under the 'upload' link in the navigation or using
the API and making a 'POST' request to '/talks'. Note, the file path needs to be a link to be
an address to a already hosted file. In future updates you will be able to upload '.mp3' files
directly.

# Installation
* How to run the test suite
  - `git clone https://github.com/Nick-Damico/forest-dhamma.git`
  - `cd forest-dhamma`
  - `bundle install`
  - `createdb forest-dhamma-app_development`
  - `rails db:migrate`
  - `rails db:seed` <- MAKE SURE TO DO THIS STEP
  - `cd client`
  - `npm install`
  Then `rake start` to start both servers.
