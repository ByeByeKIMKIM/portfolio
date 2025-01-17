import { useState, useEffect } from 'react'
import './App.css'
import TextScramble from './TextScramble'
import friends from './images/friends.png'
import mclaren from './images/p1.png'
import anime from './images/anime.png'
import workout from './images/workout.png'
import pic5 from './images/pic5.png'
import face from './images/faceshot.jpg'
import portfolio from './images/portfolio.png'
import morse from './images/morsecode.png'
import crop from './images/crop.png'
import recipe from './images/recipeapp.png'
import log from './images/log.png'
import scheduler from './images/schedulerapp.png'
import ImageComponent from './ImageComponent'
import Technologies3DComponent from './Technologies3DComponent'
import ProjectsComponent from './ProjectsComponent'

import javalogo from './images/logos/javalogo.png'
import  htmllogo from './images/logos/htmllogo.png'
import  csslogo from './images/logos/csslogo.png'
import  javascriptlogo from './images/logos/javascriptlogo.png'
import  pythonlogo from './images/logos/pythonlogo.png'
import swiftlogo from './images/logos/swiftlogo.png'
import  typescriptlogo from './images/logos/typescriptlogo.png'
import  reactlogo from './images/logos/reactlogo.png'
import  nodejslogo from './images/logos/nodejslogo.png'
import expressjslogo from './images/logos/expressjslogo.png'
import  firebaselogo from './images/logos/firebaselogo.png'
import opencvlogo from './images/logos/opencvlogo.png'

function App() {
  useEffect(() => {
    const phrases = [
      'Ethan Kim',
      '김지훈',
      'a programmer',
      'a weightlifter',
      'an eager learner'
    ]

    const el = document.querySelector('.text');
    const fx = new TextScramble(el);

    let counter = 0;
    let timeoutId;

    const next = () => {
        fx.setText(phrases[counter]).then(() => {
          timeoutId = setTimeout(next, 1500);
        });
        counter = (counter + 1) % phrases.length;
    };

    next();
  }, [])

  return (
    <>
      <div className="section landing">
        <div className="content">
          <div className="intro">
            <h1>Hi, I'm&nbsp;</h1>
            <h1 className="text"></h1>
          </div>
          <p>First year university student studying CS</p>

          <svg className="blob" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4A2574" stopOpacity="1" />
                <stop offset="100%" stopColor="#9E72C3" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path id="blob" fill="url(#gradient)">
              <animate
                attributeName="d"
                dur="5s"
                repeatCount="indefinite"
                values="M433.5,286.5Q401,323,384.5,360.5Q368,398,332,425Q296,452,254,434Q212,416,156,427Q100,438,96.5,382Q93,326,76.5,288Q60,250,50.5,199.5Q41,149,86,125Q131,101,163.5,56.5Q196,12,240.5,55Q285,98,315.5,113.5Q346,129,392.5,144Q439,159,452.5,204.5Q466,250,433.5,286.5Z;
                M476.47608,302.18069Q466.84323,354.36138,427.717,389.17493Q388.59078,423.98848,345.19309,449.96456Q301.79539,475.94065,254.01816,458.04871Q206.24092,440.15677,160.19885,430.12046Q114.15677,420.08415,106.81355,371.20461Q99.47032,322.32507,84.97032,286.16253Q70.47032,250,59.58415,201.58415Q48.69797,153.16829,93.68645,132.18069Q138.67493,111.19309,176.29539,102.44641Q213.91585,93.69972,250.5,90.38042Q287.08415,87.06111,328.40922,93.68157Q369.73429,100.30203,415.72276,124.19309Q461.71124,148.08415,473.91009,199.04207Q486.10894,250,476.47608,302.18069Z;
                M447.77636,297.75377Q447.9535,345.50753,414.69974,380.41519Q381.44597,415.32285,338.50753,433.2996Q295.56909,451.27636,247.59987,461Q199.63065,470.72364,163.68468,436.90013Q127.7387,403.07662,92.04584,373.18468Q56.35297,343.29273,33.3605,296.64637Q10.36803,250,61.68468,216.95416Q113.00132,183.90832,120.13131,139.96169Q127.2613,96.01506,162.63818,58.76064Q198.01506,21.50621,252.09234,13.75998Q306.16962,6.01374,340.86182,49.6683Q375.55403,93.32285,416.59234,121.75377Q457.63065,150.18468,452.61493,200.09234Q447.59921,250,447.77636,297.75377Z;
                M407.5,289Q411,328,378,348.5Q345,369,324,425.5Q303,482,259,443.5Q215,405,174.5,400.5Q134,396,93.5,370.5Q53,345,39,297.5Q25,250,28,197.5Q31,145,85,128Q139,111,169,69.5Q199,28,243.5,55.5Q288,83,339.5,78Q391,73,405.5,120.5Q420,168,412,209Q404,250,407.5,289Z;
                M433.5,286.5Q401,323,384.5,360.5Q368,398,332,425Q296,452,254,434Q212,416,156,427Q100,438,96.5,382Q93,326,76.5,288Q60,250,50.5,199.5Q41,149,86,125Q131,101,163.5,56.5Q196,12,240.5,55Q285,98,315.5,113.5Q346,129,392.5,144Q439,159,452.5,204.5Q466,250,433.5,286.5Z;"
              ></animate>
            </path>
          </svg>

        </div>
      </div>
      <div className="section aboutMe">
        <div className='aboutMeText'>
            <h1 >About Me</h1>
            <p>My name is Ethan Kim and I'm a freshman at Cornell University studying computer science. 
              I'm a Korean-American and originally from Boston MA. 
              When it comes to programming, I'm interested in webapp development. I'm also facinated by machine learning and AI.
              When I'm not programming, I enjoy working out and watching anime.
              Hover over each image to learn more. </p>
            <p>
              <a href="https://www.linkedin.com/in/ethan-kim-7a7912254/" target="_blank">LinkedIn</a>
              <a> </a>
              <a href="https://github.com/ByeByeKIMKIM" target="_blank">Github</a>
            </p>
        </div>
        <div className="slider">
          <div className="list">
            <ImageComponent url={friends} className={"item pic1"} title={"Friends"} desc={"(That's me in the middle left!) along with some of my closest friends. I can't imagine life without them. They are hard working yet composed and know how to have fun. They are some of the most motivating people in my life."}/>
            <ImageComponent url={mclaren} className={"item pic2"} title={"Cars"} desc={"I've recently been getting into cars. My absolute dream car is the Mclaren P1, then probably the 765LT. I'm also starting to appreciate some older JDM stuff, and the older C63 AMG models are appealing to me as a project car option."}/>
            <ImageComponent url={anime} className={"item pic3"} title={"Anime"} desc={"I absolutely love watching anime and reading manga. I have watched over 1300 episodes of anime and have probably read over 2-3000 chapters of manga. Pictured here are some of my favorite titles."}/>
            <ImageComponent url={workout} className={"item pic4"} title={"Workout"} desc={"I enjoy working out. <br />BW:~155lbs<br/> Squat:315lbs<br/> Bench:225lbs<br/> Deadlift:340lbs<br/> If I can get my diet straight, these numbers are about to skyrocket to the moon."}/>
            <ImageComponent url={pic5} className={"item pic5"} title={"Dog"} desc={"Me dog"}/>
          </div>
        </div>
      </div>
      <div className="section projects">
        <h1 className="sectionTitle">Projects</h1>
        <div className="projectContainer">
          <ProjectsComponent title={"This Portfolio Website"} desc={"This portfolio website. This is the first website that I deployed. The elements might be positioned weird depending on the size of the viewing screen. Dynamically resuzing my application is something I have to learn."} tech={"ReactJs, HTML, CSS, Js, Jsx"} img={portfolio}/>
          <ProjectsComponent title={"Morse Code Hand Detector"} desc={"This is my second project using OpenCV. It allows users to essetially sign morse code with their hands. I use a pre-built OpenCV library for hand landmark detection and I created functions that checked for certain landmark positions which would indicate dots(.) dashes(-) and spaces. The next thing I want to do with this is create my own object detection model."} tech={"Python, OpenCV"} img={morse}/>
          <ProjectsComponent title={"Intelligent Image Cropper"} desc={"This is one of the assignments that I had for my CS class at university. It was a multi-part project with the final result being a program that could intelligently crop objects out of images based on color similarity. It uses Dijkstra's to determine the cutting path."} tech={"Java, Java Swing"} img={crop}/>
        </div>
        <div className="projectContainer">
          <ProjectsComponent title={"Recipe App"} desc={"This is my final project for my web development course that I took at university. It is a dumbed down version of pintrest where users can share recipes with other users. First time starting and finishing a fullstack web application."} tech={"ReactJs, HTML, CSS, Ts, Tsx, NodeJs, ExpressJs, Firebase, OpenAI API"} img={recipe}/>
          <ProjectsComponent title={"Console Workout Log"} desc={"One of my first more functional rather than practice Java projects. Users log their workouts in the console and data is stored on a text file. I want to maybe make a full stack web application version of this."} tech={"Java"} img={log}/>
          <ProjectsComponent title={"Scheduling App"} desc={"Scheduling app that uses AI to manage your schedule (in process)"} tech={"ReactJs, HTML, CSS, Js, Jsx, NodeJs, ExpressJs, Firebase"} img={scheduler}/>
        </div>
      </div>
      <div className="section technologies">
        <div className="techslider">
          <div className="techlist">
            <img src={javalogo} className="techitem logo1" width='100px'/>
            <img src={htmllogo} className="techitem logo2" width='100px'/>
            <img src={csslogo}className="techitem logo3"  width='100px'/>
            <img src={javascriptlogo}className="techitem logo4"  width='100px'/>
            <img src={pythonlogo}className="techitem logo5"  width='100px'/>
            <img src={swiftlogo}className="techitem logo6"  width='100px'/>
            <img src={typescriptlogo}className="techitem logo7"  width='100px'/>
            <img src={reactlogo}className="techitem logo8"  width='100px'/>
            <img src={nodejslogo}className="techitem logo9"  width='100px'/>
            <img src={expressjslogo}className="techitem logo10"  width='100px'/>
            <img src={firebaselogo}className="techitem logo11"  width='100px'/>
            <img src={opencvlogo}className="techitem logo12"  width='100px'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App