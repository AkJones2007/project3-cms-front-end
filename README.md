# project3-cms-front-end
<p>This is a Content Management System Front end created by Scott Davidson, Grace Kamau and Alex Jones.
  <br>
  In this app, a user can create, edit and delete a blog and a web page.
</p>

<h2>Technologies used are:</h2>
<ul>
  <li> <h3> Node modules:</h3>
      <li> Node.js is an open-source application for developing server-side web applications. Node apps are written in JavaScript. </li>
      <li>A large percentage of the basic modules are written in JavaScript. </li>
      <li>Node.js contains a built-in library to allow applications to act as a stand-alone web server. </li>
    </ul>
  </li>

<li> <h3> Express: </h3>
  <ul>
    <li>EXPRESS is a standard data modeling language for product data.</li>
    <li>EXPRESS is a data modeling language defined in ISO 10303-11. </li>
  </ul>
</li>

<li> <h3> Passport </h3>
  <ul>
    <li>Passport is authentication middleware for Node.js.  </li>
    <li>Passport delegates all other functionality to the application. This separation of concerns keeps code clean and maintainable, and makes Passport extremely easy to integrate into an application. </li>
    <li>Passport recognizes that each application has unique authentication requirements. Authentication mechanisms, known as strategies, are packaged as individual modules. Applications can choose which strategies to employ(e.g. username and password, Facebook, Twitter, and more.), without creating unnecessary dependencies. </li>
  </ul>
</li>

<li> <h3> Bootstrap </h3>
  <ul>
    <li>Bootstrap, originally named Twitter Blueprint, was developed by Mark Otto and Jacob Thornton at Twitter as a framework to encourage consistency across internal tools.</li>
  </ul>

</li>

<li> <h3> Handlebars </h3>
  <ul>
    <li>Handlebars is a semantic web template system, started by Yehuda Katz in 2010.</li>
    <li>Handlebars.js is a superset of Mustache, and can render Mustache templates in addition to Handlebars templates.</li>
    <li>While Mustache is a logicless templating language, Handlebars adds extensibility and minimal logic, such as #if, #unless, #with, and #each helpers.</li>
  </ul>
</li>

<li> <h3> Mongoose </h3>
  <ul>
    <li>Mongoose is used for elegant mongodb object modeling for node.js </li>
    <li>Mongoose provides a straight-forward, schema-based solution to model application data.</li>
    <li>It includes built-in type casting, validation, query building, business logic hooks etc. </li>
  </ul>
</li>

<li> <h3>mongo DB</h3>
  <ul>
    <li>It is a cross-platform document-oriented database.</li>
    <li>Classified as a NoSQL database, MongoDB eschews the traditional table-based relational database structure in favor of JSON-like documents with dynamic schemas (MongoDB calls the format BSON), making the integration of data in certain types of applications easier and faster. </li>
    <li>MongoDB is free and open-source software. </li>
  </ul>
</li>

<li> <h3> jQuery</h3>
  <ul>
    <li>jQuery is a cross-platform JavaScript library designed to simplify the client-side scripting of HTML. </li>
    <li>jQuery's syntax is designed to make it easier to navigate a document, select DOM elements, create animations, handle events, and develop Ajax applications. </li>
    <li> jQuery is free, open-source software licensed under the MIT License.</li>
  </ul>
</li>

<li> <h3>Java Script</h3>
  <ul>
    <li>JavaScript is a high-level, dynamic, untyped, and interpreted programming language.</li>
    <li>Alongside HTML and CSS, it is one of the three essential technologies of World Wide Web content production; the majority of websites employ it and it is supported by all modern web browsers without plug-ins. </li>
    <li>JavaScript is prototype-based with first-class functions, making it a multi-paradigm language, supporting object-oriented, imperative, and functional programming styles.</li>
  </ul>
</li>
</ul>

<h2>Approach taken when workig on this project</h2>
<p>
  <ul>
    <li>Our team first focused on creating the user module and made sure that the Register, login and logout code works for the user module. </li>
    <li>Next we created the blogs routes and made sure all the routes were working using postman. </li>
    <li> </li>
  </ul>
</p>

<h2> Unsolved problems or major hurdles your team had to overcome </h2>
<p>We worked really well as a team, and were able to meet all the project requirements.</p>

<h2>Installation instructions for any dependencies.</h2>
<p> This app is deployed online and no installation is required.</p>

<h2> user stories</h2>
<p>
  BASIC USER STORIES
Pages
As an admin: (Person who can edit and add pages)
Use generic template to create a new page
Add text content to the page
add a photo to the page
add a navigation menu to the page
specify a page as a plog
Edit a page
Delete a page
View or list a page
See when a page was last edited.


Blog Posts
As an admin: I can:
Use a generic template to create a new post
Create a new post
Add text comment to the post
Add photos to the post
Format the text
Add limits to the post
Edit a post
Delete Post
View a list of posts
See when a post was created/edited

STRETCH GOAL USER STORIES
As an admin, I can:
Create a stylesheet
Change the background color
Add a background image
set the typography
Have a way to to make a blog part of a page.
add a carousel to the page
select a text font

</p>
<h2> ERD - data models used in this app</h2>
<p>
  <ul>
    <li>MongoDB uses Document Oriented Storage in JSON-style documents. </li>
    <li>Mongoose is an object relational modeling (ORM) system that bridges Node.js and MongoDB.  </li>
  </ul>
  <ul>
    <li>User: A user can author many posts and create many pages. </li>
    <li>Post: A post has a single author, a single main image, and is placed into a single category. </li>
    <li>Page: A page has a single author, a single main image, and is placed into a single category. </li>
  </ul>
</p>

<h2> Wireframes </h2>
<p>

</p>
<p> A link to the deployed front-end app: </p>
<p> A link to the repository of this app's back-end:
  https://github.com/gracenjambi/project3-cms-back-end
</p>
