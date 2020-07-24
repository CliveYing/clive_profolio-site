import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props){

    return(
       <div>

           <Hero title = {props.title}></Hero>
           <Content>
               <p>Dear Viewer,</p>
               <p>I am writing to apply for an intern opportunity of working as a junior front-end/full-stack developer. I just graduated from Master of IT in USYD and I have an unlimited 2 years work visa as a PR pathway. My work availability can be ASAP and I’m open to unpaid internships that allow potential employers to test if I can quickly grow into a competent programmer.</p>
               <p>During my Master of IT study, I practiced a full process of Usability Engineering for application prototyping (mainly focus on UI and UX design). I finished a Node.js website project with my team by using a traditional MVC/RESTful architect, which can perform queries from MongoDB. I have been self-learning React.js and managed to create several simple applications that can query dynamic information from public free APIs. Meanwhile, I am learning on a Front-End Pathway with Scrimba, which is a reputable online learning platform for coding, daily. Therefore, I believe that can improve my React.js expertise while working for a real commercial organization.  I also have experience in Android Studio for mobile development and use Firebase for data storage and notification. For data analytics, I can use Rstudio to process and visualize survey data. I use Github to share and manage all the code with my teammates. And for my capstone project, Table Information Extraction from PDF file, we performed Agile methodologies since the requirements and development tools were constantly changing weekly. Our team received HD for this project with an AI solution that combines image recognition and natural language process techniques.</p>
               <p>I also had 4 years of work experience for Chevron in a natural gas plant as a Mechanical Maintenance Planner with PMP certification. Therefore, I have a strong sense of finishing engineering tasks with project management principles and tools.</p>
               <p>Thank you for your time in reviewing my profolio and please feel free to contact me via the Contact page.</p>
           </Content>

       </div>
    );

}

export default AboutPage;