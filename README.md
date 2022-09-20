<div id="top"> </div>

<!---- PROJECT LOGO ----> 
<div align="center">

  <h2 align="center"> 
    Feedback Widget - Mobile App Version 
  </h2>
  
  <p align="center">
    A feedback widget to capture feedback from your app's users, developed with Expo and React Native. <br/>
    Explore <a href="https://docs.expo.dev/">Expo</a> or <a href="https://reactnative.dev/docs/getting-started">React Native</a> docs &#187; <br/> <br/>
    <a href="https://github.com/vihugoos/feedback-widget-mobile-app/issues"> Report Bug </a> &nbsp;•&nbsp;
    <a href="https://github.com/vihugoos/feedback-widget-mobile-app/issues"> Request Feature </a>
  </p>
</div>


<!---- TABLE OF CONTENTS ----> 
<details>
  <summary> Table of Contents </summary>
  <ol>
    <li>
      <a href="#about-the-project"> About The Project </a>
      <ul>
        <li><a href="#built-with"> Built With </a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started"> Getting Started </a>
      <ul>
        <li><a href="#prerequisites"> Prerequisites </a></li>
        <li><a href="#installation"> Installation </a></li>
      </ul>
    </li>
    <li><a href="#usage"> Usage </a></li>
    <li><a href="#contributing"> Contributing </a></li>
    <li><a href="#contact"> Contact </a></li>
  </ol>
</details>


<!---- THE PROJECT ---->
## About The Project

<div align="center">
  <img src="https://user-images.githubusercontent.com/44311634/178615280-dd27ae33-9798-419c-8df7-6a863d199d3e.gif" align="center" height="500" alt="Project Home Page">
  <br/> <br/> 
</div>
A widget where customers can send feedback to the app admin about bugs, ideas, etc. The feedback is saved in the database and an email with complete information about the feedback is sent to the administrator.


### Built With 

<div style="display: inline_block">
    <!-- Icon Node.js --> 
    <a href="https://nodejs.org/en/"> 
      <img align="center" alt="Icon-Node.js" height="35" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"> 
    </a> &nbsp;
    <!-- Icon TypeScript --> 
    <a href="https://www.typescriptlang.org/"> 
      <img align="center" alt="Icon-TypeScript" height="35" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"> 
    </a> &nbsp;
    <!-- Icon Expo --> 
    <a href="https://expo.dev/"> 
      <img align="center" alt="Icon-Expo" height="35" src="https://user-images.githubusercontent.com/44311634/178088819-374d1241-cef7-4f68-b400-4a33ccec45e2.png"> 
    </a> &nbsp;
    <!-- Icon React -->
    <a href="https://reactjs.org/"> 
      <img align="center" alt="Icon-React" height="35" src="https://user-images.githubusercontent.com/44311634/178088844-02a9c9ba-28b9-4ef6-87f0-d12d52ceaf0b.png"> 
    </a> &nbsp;
    <!-- Icon Axios -->
    <a href="https://axios-http.com/"> 
      <img align="center" alt="Icon-Axios" height="55" src="https://user-images.githubusercontent.com/44311634/178089407-0176462e-7e60-4f4f-9ad8-5429a22b2c5c.png"> 
    </a>
</div>

<br/>
<br/>


<!---- GETTING STARTED ----> 
## Getting Started

To get started, you need to have <strong>Node.js 16+</strong> installed on your machine, for more information visit <a href="https://nodejs.org/en/download/"> Node.js Downloads</a>. You will also need to have <strong>Expo</strong> installed on your mobile phone, for more information visit <a href="https://play.google.com/store/apps/details?id=host.exp.exponent">Expo to Google Play</a> or <a href="https://apps.apple.com/app/expo-go/id982107779">Expo to App Store</a>. 


### Prerequisites 

First of all, we need to ensure that the <strong>server is running</strong>, to do so, visit my <a href="https://github.com/vihugoos/feedback-widget-server">@feedback-widget-server</a> repository and follow the install and run guide. 


### Installation 

1. Clone the repo 
   ```bash
   git clone https://github.com/vihugoos/feedback-widget-mobile-app.git
   ```
2. Open cmd terminal and install expo cli globally 
   ```cmd
   npm install -g expo-cli
   ```
3. Inside the project root directory install all project dependencies 
   ```cmd
   npm install
   ```
4. Capture your machine's `IPv4 Address`
   ```cmd
   ipconfig
   ```
   <img align="center" alt="print-ipconfig" src="https://user-images.githubusercontent.com/44311634/178123996-7183d436-2bd2-4f5e-b8ac-2ecd8f3d0737.jpg">
   <br/> <br/> 
5. Change the baseURL in `.\src\libs\api.ts`, with your IP, keeping the door `:3333` 
   ```ts
    export const api = axios.create({
      baseURL: 'http://192.168.1.9:3333'
    })
   ```
 

<!---- USAGE EXAMPLES ----> 
## Usage

With the installation complete, we can start the project.

1. Starting the project 
   ```bash
   expo start --clear 
   ```


2. Open the <strong>Expo</strong> app on your mobile and scan the <strong>QR Code</strong> displayed on the terminal and wait for the project to build. On IOS use the camera app to scan the QR Code. 

<br/>

You can also create an account at Expo and in the terminal log in with your account, the running projects will automatically be displayed in the Expo app.

* Expo login CLI
   ```bash
   expo signin -u yourUserName -p yourPassword 
   ```
<br/> 


<!---- CONTRIBUTING ---->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
<br/> 


<!---- LICENSE ----> 
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.
<br/> <br/> 


<!---- CONTACT ----> 
## Contact

Developer @vihugoos - victorhugoos@live.com 

<p align="right"><a href="#top"> &#129045; back to top </a></p> 
