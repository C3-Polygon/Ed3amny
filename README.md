<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Ed3amny</h3>
  <a href="https://github.com/github_username/repo_name">
  </a>



  <p align="center">
    Developed in 2021, Ed3amny is a social fundraising platform. Its' mission is to help people fundraise for personal, business, and charitable causes.
    Note: Ed3amny is a clone of the massive Gofundme, we are students and we will NOT publish this website, it is simpley a project.
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Images and links

(https://ed3amny.herokuapp.com/)
(https://imgur.com/a/9044ePL)

<img src="ed/screencapture-localhost-3000-2021-10-28-16_13_34.png" alt="MainPage" width="80" height="80">
<img src="ed/screencapture-localhost-3000-Contributions-Contributions-Contributions-Contributions-2021-10-28-19_50_33.png" alt="Contributions" width="80" height="80">
<img src="ed/screencapture-localhost-3000-Drop-Blood-BloodPost-Create-2021-10-28-19_52_55.png" alt="Bloodpost" width="80" height="80">
<img src="ed/screencapture-localhost-3000-Drop-YourFundraisers-2021-10-28-19_50_57.png" alt="YourFundraisers" width="80" height="80">
<img src="ed/screencapture-localhost-3000-fundraiser-2021-10-28-19_51_38.png" alt="CreateAnewFundraiser" width="80" height="80">


<p align="right">(<a href="#top">back to top</a>)</p>



### Built With


* [React.js](https://reactjs.org/)
* [React-Bootstrap](https://react-bootstrap.github.io/)
* [React-Redux](https://react-redux.js.org/)
* [Socket-io](https://socket.io/)
* [Microsoft Visual Studio Code](https://code.visualstudio.com/)
* [NodeJS](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [MySQL](https://www.mysql.com/)
* [Stripe](https://stripe.com/en-gb-us)
* [Firebase](https://firebase.google.com/)
* [Heroku](https://dashboard.heroku.com/)
* [Socket-io](https://socket.io/)

<p align="right">(<a href="#top">back to top</a>)</p>

### The problem and the Solution

We live in a closed-minded society where asking for help is considered to be begging so that we have decided to develop Ed3amny to eliminate the fear of asking for help because everybody needs help. Ed3amny is here to help people in need, starter companies, students, families, the sick, and the poor.

## Usage

You can use this app to create fundraisers, set goals and share them on social media platforms to fulfill your dreams!

## Getting Started

The project was built using VS Code ver 1.60.1, ran and tested on Chrome Version 93.0.4577.82.
The project was built on Windows 10 64bit.
To get a local copy up and running follow these simple example steps.


### Prerequisites

There are no special prerequisites, I only need to note that you MAY need to manually install react-toastify package in the client/ path. 

Executing program

Open a terminal on the path ...\MERAKI_Academy_Project_5\
Open a terminal on the path ...\MERAKI_Academy_Project_5\client
Excecute the commands bellow and wait for the project to run...

npm run dev in the main folder.
npm start in the client folder.


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/C3-Polygon/MERAKI_Academy_Project_5.git
   ```
2. Install NPM packages
   ```sh
   npm install : "Client/Frontend"
    "@ckeditor/ckeditor5-build-classic": "^30.0.0",
    "@ckeditor/ckeditor5-react": "^3.0.3",
    "@sendgrid/mail": "^7.5.0",
    "@stripe/react-stripe-js": "^1.6.0",
    "@stripe/stripe-js": "^1.19.1",
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "aes256": "^1.1.0",
    "axios": "^0.22.0",
    "bootstrap": "^5.1.1",
    "firebase": "^9.1.3",
    "jsonwebtoken": "^8.5.1",
    "mdb-ui-kit": "^3.9.0",
    "moment": "^2.29.1",
    "node-sass": "^6.0.1",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-rc.0",
    "react-dom": "^17.0.2",
    "react-facebook-login": "^4.1.1",
    "react-icons": "^4.3.1",
    "react-journey": "^1.1.7",
    "react-moment": "^1.1.1",
    "react-redux": "^7.2.5",
    "react-router-dom": "^5.3.0",
    "react-scripts": "4.0.3",
    "react-share": "^4.4.0",
    "react-shepherd": "^3.3.3",
    "react-toastify": "^8.0.3",
    "redux": "^4.1.1",
    "redux-persist": "^6.0.0",
    "semantic-ui-css": "^2.4.1",
    "semantic-ui-react": "^2.0.4",
    "socket.io-client": "^4.2.0",
    "web-vitals": "^1.1.2"
    
    
   npm install: "server/backend"
    "@ckeditor/ckeditor5-build-classic": "^30.0.0",
    "@ckeditor/ckeditor5-react": "^3.0.3",
    "@sendgrid/mail": "^7.5.0",
    "@socket.io/admin-ui": "^0.2.0",
    "bcrypt": "^5.0.1",
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "jsonwebtoken": "^8.5.1",
    "mysql2": "^2.3.0",
    "node": "^16.10.0",
    "nodemon": "^2.0.13",
    "socket.io": "^4.2.0",
    "stripe": "^8.179.0"
   ```
   
   ```sh
5. Or simpley:
   
  Run NPM I in the terminal before you execute the run commands
  NPM i to install the required libraries in both the client and the server respected folders
  
  <p align="right">(<a href="#top">back to top</a>)</p>
 

<!-- ROADMAP -->
## Roadmap

- [Login] Feature 1
    - [Login with Facebook] Nested Feature
- [Signup] Feature 2
- [Search] Feature 3
- [DropDown] Feature 4
    - [AccountSettings] Nested Feature
       - [Edit user avatar] Nested of a nested Feature
       - [Edit user firstName] Nested of a nested Feature
       - [Edit user lastName] Nested of a nested Feature
       - [Edit user age] Nested of a nested Feature
       - [Edit user country] Nested of a nested Feature
       - [Edit user phonenumber] Nested of a nested Feature
    - [Donations You've Made] Nested Feature
    - [View Your Fundraisers] Nested Feature
       - [Manage Fundraiser] Nested of a nested Feature
            - [Edit Title] Nested of a nested Feature       
            - [Edit Phone Number] Nested of a nested Feature
            - [Edit Country] Nested of a nested Feature
            - [Edit Goal] Nested of a nested Feature
            - [Edit Photo] Nested of a nested Feature
            - [Edit Story] Nested of a nested Feature
            - [Delete Fundraiser] Nested of a nested Feature
    - [Donations You've Made] Nested Feature
    - [Start a Fundraiser] Nested Feature
        - [Share Fundraiser on social media] Nested of a nested Feature
        - [Donate for a fundraiser via stripe] Nested of a nested Feature
        - [View Donnors] Nested of a nested Feature
    - [Ask for a Blood Donation] Nested Feature
    - [Logout] Nested Feature
- [Categories] Feature 5
    - [Education] Nested Feature
    - [Family] Nested Feature
    - [Sport] Nested Feature
    - [Travel] Nested Feature
    - [See All] Nested Feature
- [How the website works(video)] Feature 6
- [View Top 3 Fundraisers] Feature 7
- [View Blood Posts] Feature 8
- [View Success Stories] Feature 9
- [View Random Fundraisers] Feature 10
- [Chat-Technical Support] Feature 11
- [View Success Stories] Feature 12

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- LICENSE -->
## License

Open Source.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

[Ahmad Mraish]        -   [https://github.com/AhmadMraish](https://github.com/AhmadMraish)               - ahmadmraish59@gmail.com
[Omar hushki]         -   [https://github.com/hushki94](https://github.com/hushki94)                     - Omarhushki94@gmail.com
[Maamoun Al-Ksiwani]  -   [https://github.com/MaamounAksiwani](https://github.com/MaamounAksiwani)       - Omarhushki94@gmail.com
[Obada Amarneh]       -   [https://github.com/ObadaAmarneh](https://github.com/ObadaAmarneh)             - obada.amarneh20@gmial.com

Project Link: [https://github.com/C3-Polygon/MERAKI_Academy_Project_5](https://github.com/C3-Polygon/MERAKI_Academy_Project_5)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Ayman M.Hariri](https://github.com/engaymanh)
* [Batool Maali](https://github.com/batoolmaali)
* [Mai Al-Shagarin](https://github.com/maialshagarin)
* [Mohammed Farhan](https://github.com/Mohamad-Farhan)
* [Mohammad Jouza](https://github.com/MohammadJouza)
* [MERAKI_Academy](https://github.com/MERAKI-Academy)



<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
