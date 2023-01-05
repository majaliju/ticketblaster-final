<p align="center"> 
  <p align="center">
  <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="ERD.gif" display="inline-block" width="90%" height="80%">
</p>
</p>
<h1 align="center">TICKETBLASTER </h1>
<h3 align="center">"What if Ticketmaster and Craigslist had a baby?"</h3>  
<h5 align="center">(because we're all sick of Ticketmaster's monopoly) </h5>  

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)


<!-- TABLE OF CONTENTS -->
<h2 id="table-of-contents">Table of Contents</h2>
<p align="center">
  <!-- <img src="images/Human Activity.gif" alt="Human Activity.gif" display="inline-block" width="60%" height="50%"> -->
</p>
<details open="open">
  <summary>Where Is Everything?</summary>
  <ul>
    <li><a href="#what-is-this">🎫 What Is This?</a></li>
    <li><a href="#what-do-I-need">✨ What Do I Need?</a></li>
    <li><a href="#how-to-install">🚀 How To Install</a></li>
    <li><a href="#erd-and-relationships">🏠 The ERD and Relationships</a></li>
    <li><a href="#seed-info">🌱 Seed Info</a></li>
    <li><a href="#results-and-discussion"> ➤ Results and Discussion</a></li>
    <li><a href="#references"> ➤ References</a></li>
    <li><a href="#contributors"> ➤ Contributors</a></li>
  </ul>
</details>



<!-- WHAT IS THIS -->
<h2 id="what-is-this">🎫 What Is This?</h2>
<p align="center">
  <!-- <img src="images/Human Activity.gif" alt="Human Activity.gif" display="inline-block" width="60%" height="50%"> -->
</p>

<p align="justify"> 
  This project aims to classify human activities using data obtained from accelerometer and gyroscope sensors from phone and watch. The raw data will be preprocessed using two
  different approaches such as topological data analysis and statistical features extraction from segmented time series. The goal is to compare and evaluate the performance of
  different classifiers (Decision Tree, k Nearest Neighbors, Random Forest, SVM and CNN) which are trained on the two sets of preprocessed data.
</p>

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<!-- WHAT'S IT RUNNING -->
<h2 id="what-do-I-need">✨ What Do I Need?</h2>
<p align="center">
  <!-- <img src="images/Human Activity.gif" alt="Human Activity.gif" display="inline-block" width="60%" height="50%"> -->
</p>

<p> 
  The WISDM (Wireless Sensor Data Mining) dataset includes raw time-series data collected from accelerometer and gyroscope sensors of a smartphone and smartwatch with their corresponding labels for each activity. The sensor data was collected at a rate of 20 Hz (i.e., every 50ms). Weiss et.al., collected this dataset from 51 subjects who performed 18 different activities listed in Table 2, each for 3 minutes, while having the smartphone in their right pant pocket and wearing the smartwatch in their dominant hand. Each line of the time-series sensor file is considered as input.

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<!-- HOW TO INSTALL -->
<h2 id="how-to-install">🚀 How To Install</h2>
<p align="center">
  <!-- <img src="images/Human Activity.gif" alt="Human Activity.gif" display="inline-block" width="60%" height="50%"> -->
</p>

<p> 
  The WISDM (Wireless Sensor Data Mining) dataset includes raw time-series data collected from accelerometer and gyroscope sensors of a smartphone and smartwatch with their corresponding labels for each activity. The sensor data was collected at a rate of 20 Hz (i.e., every 50ms). Weiss et.al., collected this dataset from 51 subjects who performed 18 different activities listed in Table 2, each for 3 minutes, while having the smartphone in their right pant pocket and wearing the smartwatch in their dominant hand. Each line of the time-series sensor file is considered as input.


![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)



<!-- THE ERD AND RELATIONSHIPS -->
<h2 id="erd-and-relationships">🏠 The ERD and Relationships</h2>
<p align="center">
  <img src="https://i.imgur.com/478wfru.png" alt="ERD.gif" display="inline-block" width="90%" height="80%">
</p>

<p align="justify"> 
  These are the four models used on the backend, and their relationships to each other. All relevant ActiveRecord methods, validations, etc can be used in relation to this knowledge.
  <ul>
    <li>Users</li>
    <ul>
    <li align="justify">has many Posts</li>
    <li align="justify">has many Concerts, through Posts</li>
    </ul>
    <li>Posts</li>
      <ul>
     <li align="justify">belongs to a User</li>
     <li align="justify"> belongs to a Concert</li>
      </ul>
    <li>Concerts</li>
      <ul>
     <li align="justify"> has many Posts</li>
     <li align="justify"> has many Users, through Posts</li>
     <li align="justify"> belongs to an Artist</li>
      </ul>
    <li>Artists</li>
      <ul>
     <li align="justify"> has many Concerts</li>
     <li align="justify"> has many Posts, through Concerts</li>
      </ul>
   </ul>

</p>


![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<!-- THE ERD AND RELATIONSHIPS -->
<h2 id="seed-info">🌱 Seed Info</h2>
<p align="center">
  <!-- <img src="https://i.imgur.com/478wfru.png" alt="ERD.gif" display="inline-block" width="90%" height="80%"> -->
</p>

<p align="justify"> 
  The site is seeded with 33 Users, 20 Artists, and at least 1 Concert per Artist, and at least 1 Post per Concert.
</p>


![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

