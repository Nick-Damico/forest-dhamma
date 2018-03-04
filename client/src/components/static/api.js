import React from 'react';

const Api = () => {
  return (
    <section className="api-documentation--main">
      <section className="api-header">
        <h2>Forest Dhamma API Documentation</h2>
      </section>
      <section className="api-documentation--body">
        <h3>Documentation</h3>
        <section className="api-documentation--intro">
          <h3>Introduction</h3>
          <p className="api-introduction">
            Welcome to the <i>ForestDhamma API</i>, the following documentation
            should help you with familiarizing yourself with the resoureces
            available and utilize that information in your own projects, and even
            contribute to the information stored in the database. <i>Let's get started!</i>
          </p>
        </section>
        <section className="api-getting-started">
          <h3>Getting started</h3>

          <p>
            You can make a request using a utility like <a href="https://www.getpostman.com/">Postman</a>,
            but to keep things simple we can just use <i>curl</i> or <i>httpie</i>.
            I'll be using <a href="https://httpie.org/">httpie</a> going forward because
            it gives us the information provided by the API in a nicely formatted response.
          </p>

        </section>

        <section className="api-base-url">
          <h3>Base URL</h3>
          <p>
            The <b>Base URL</b> is the root URL for all the API resourece requests
            to <i>ForestDhamma API</i>, currently the API is in <code>V1</code> which
            is version 1 of the API.
          </p>

          <h4 id="base-url">ForestDhamma Base URL V1</h4>
          <pre><code>http://localhost:3001/api/v1</code></pre>

          <p>
             Any major changes to the API response will be
            moved to a newer version. This will insure that any sites or apps utilizing the resoureces
            of an older version will continue without error.
          </p>



        </section>

        <section className="api-resource--monasteries">
          <h3>Resource: Monasteries</h3>
          <p>With all that out of the way. Let's make our first API request to the <i>ForestDhamma API</i>.</p>

          <p>
            Using the base URL from <a href="#base-url">above</a>. We will make a
            <b>index</b> request for all monasteries in the database by appending <i>/monasteries </i>
            to the <i>base URL</i>.
          </p>

          <h4>Index action Monasteries</h4>
          <pre><code>http://localhost:3001/api/v1/monasteries</code></pre>

          <p>Request response</p>
          <pre>
            <code>
{`{
  monasteries: [
    {
      id: 1,
      name: "Amaravati",
      address: "St Margarets, Hemel Hempstead HP1 3BZ, England",
      site_url: "https://www.amaravati.org",
      img_url: "https://cd1.amaravati.org/wp-content/uploads/2016/10/04/Amaravati_157-2.jpg",
      talks: [],
      teachers: []
    },

    {
      id: 2,
      name: "Abhayagiri",
      address: "Redwood Valley, CA",
      site_url: "http://www.abhayagiri.org/",
      img_url: "https://forestsangha-163c.kxcdn.com/images/abhayagiri%20view%20.jpg",
      talks: [],
      teachers: []
    },

    {
      id: 3,
      name: "Aruna Ratanagiri",
      address: "Belsay Northumberland, UK",
      site_url: "https://ratanagiri.org.uk/",
      img_url: "https://upload.wikimedia.org/wikipedia/en/f/f2/Dhamma_Hall.jpg",
      talks: [],
      teachers: []
    }
  ]
}`}
            </code>
          </pre>

          <p>
            The example above for readability has been limited to (3) resoureces.
            Whereas your response will contain many Monasteries.
          </p>
          <p>
             If we inspect the Monasteries
            response we will see they have collections of associated models, e.g.
            'teachers, talks'. This info gives us access to the teachers and talks that <i>'belong_to' </i>
            the monastery using the ORM <i>ActiveRecord</i> and <i>ActiveRecord Model Serializer</i>.
          </p>


          <h4>Show action Monasteries</h4>
          <pre><code>http://localhost:3001/api/v1/monasteries/:id</code></pre>

          <p>
            Above we made a request for all monasteries in the database lets now
            make a request using the above URL for an individual resource. You will
            notice its the same URL as before but this time at the end we have a
            <i> /:id </i> which is a dynamic parameter.
          </p>

          <p>
            We can replace the dynamic parameter at the end of the url with a number
            that will match the 'monasteries.id' in the database and return just
            that individual resource. Let's give it a try.
          </p>

          <h4>Show action Request</h4>
          <pre><code>http://localhost:3001/api/v1/monasteries/2</code></pre>

          <h4>Request Response</h4>

          <pre>
            <code>
{`{
  monastery: {
    id: 2,
    name: "Abhayagiri",
    address: "Redwood Valley, CA",
    site_url: "http://www.abhayagiri.org/",
    img_url: "https://forestsangha-163c.kxcdn.com/images/W1siZiIsIjIwMTUvMDgvMjgvNm5kbjlteXA4Z19hYmhheWFnaXJpX3ZpZXdfLmpwZyJdLFsicCIsInRodW1iIiwiNDkweDI1OSMiXSxbInAiLCJlbmNvZGUiLCJqcGciLCItcXVhbGl0eSA4NSJdXQ/a609da901ccc36c1/abhayagiri%20view%20.jpg",
    talks: [],
    teachers: []
  }
}`}
          </code>
        </pre>

        <p>
          As we can see by the server response, we get back an instance of the
          monastery with the matching :id of '2', Abhayagiri Monastery.
        </p>
        </section>

      </section>
    </section>
  )
}

export default Api;
