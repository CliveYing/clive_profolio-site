import React from 'react';
import clivePic from '../assets/images/clivePic.jpg';
import githubPic from '../assets/images/githubPic.png';
import USYDpic from '../assets/images/USYDpic.png';
import Card from './Card';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';


class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state = {

            items:[
                {
                    id:0,
                    title: "Skills",
                    subTitle: "	PMP certificated. Project coordinating with the principles of project management technics and tools."+
                    " \n 	Mobile application development in Android Studio with local DaoDB and online Firebase .Web development in MVC frameworks with React.js, Node.js, RESTful API and MongoDB."+
                    " \n	Data modeling with machine learning and deep learning technics."+
                    " \nNatural language processing with word embedding, S2S model, and attention mechanism. Table extraction method from pdf. "+
                    "\n	Multimedia information retrieval for videos and graphics with OpenCV, data-driven analysis in R studio. \n	Confidence with public speech and demonstration. Proactive participant for team events (as a dancer, speaker or coordinator).",
                    imgSrc: githubPic,
                    link: "https://github.com/cliveying",
                    selectec:false
                },
                {
                    id: 1,
                    title: "Clive Ying",
                    subTitle: "Majored in Master of IT at the University of Sydney, having an average mark at 74 for awarded credits.\n --- \n Solid academic knowledge and pragmatic hands-on experience on software development in Java, web development in JS & HTML & CSS, and data processing and modeling in Python, mobile application in Android Studio. A natural positive communicator with welcoming person skills and proven ability to work independently and within a team. 4 years of engineering project coordinator experience in a natural gas plant. PMP (Project Management Professional) certificated.",
                    imgSrc: clivePic,
                    link:"https://www.linkedin.com/in/clive-ying/",
                    selected: false
                },
                {
                    id: 2,
                    title: "Education and Career",
                    subTitle: "The University of Sydney -- master of IT 2018-2020"+
                    "\n Chevron Corporation -- maintenance mechanical planner 2015-2018"+
                    "\n China University of Geoscience -- bachelor of petro engineering 2014",
                    imgSrc: USYDpic,
                    link:"https://www.linkedin.com/in/clive-ying/",
                    selected: false
                }
            ]

        }
    }

    handleCardClick = (id,card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;
        items.forEach(item =>{
            if(item.id !== id){
                item.selected =false;
            }
        });
        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item=>{
            return <Card item = {item} click = {(e => this.handleCardClick(item.id, e))} key = {item.id}/>
        })
    }


    render(){
        return(
            <Container  className = "justify-content-center heroFrame" fluid = {true} >
                <Row className="justify-content-around" >
                    {this.makeItems(this.state.items)}

                </Row>
            </Container>
        );
    }

}

export default Carousel;