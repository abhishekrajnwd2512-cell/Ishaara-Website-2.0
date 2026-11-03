import React from 'react';
import Vivek from './../../assets/Vivek.jpg';
import Rehan from './../../assets/Rehan.jpg';
import Rohit from './../../assets/Rohit.jpg';
import Nishi from './../../assets/Nishi.jpg';

import './../../css/card.css';

const About = () => {
  return (
    <>
    <div className="about_heading">
      About us
    </div>
    <div className="about-container">
      <div className="about-media">
        <div className="about-media-content-1">
          <p className='p'>Over 63 million people in India, or about 6.3% of the population, are hard of hearing. This group is expected to grow due to factors such as aging. Though they do not regard their hearing loss as a disability, but rather a different way of life, their social interactions can be significantly limited</p>
          <p className='p'>To prevent isolation within the often exclusive deaf community, we, the students of MH Saboo Siddik College of Engineering, affiliated with the University of Mumbai’s Computer Engineering Department, aim to bridge this communication gap using machine learning and computer vision techniques.</p>
        </div>
        
      </div>
      <div className="about-media">
      
        <div className="about-media-content-2">
          <p className='p'>Our project focuses on creating a robust, scalable system to predict, interpret, and translate Indian Sign Language (ISL) in real-time, without requiring specialized hardware. ISL combines actions, facial expressions, and body language, differing from other sign languages like American Sign Language (ASL), which may use single-hand gestures; ISL usually uses both hands. This complexity presents challenges in developing an accurate machine learning model for ISL interpretation.</p>
          <p className='p'>For our third-year Mini Project, we began our research with a visit to the Bombay Institution For Deaf & Mutes. We initially gathered information about commonly used actions and words through the institution's teachers and developed a sequence-to-sequence model using GRU and Bidirectional GRU to capture the semantic meaning of actions. Our model worked well with a set of six actions, utilizing real-time data collected through landmarks from deaf and mute students.</p>
        </div>
      </div>
      <div className="about-media">
        <div className="about-media-content-1">
          <p className='p'>Subsequently, we explored various models including a 3D convolutional model working on video data, and a Time Distributed Conv model that processes multiple image frames to predict a single action. We also tested a ConvLSTM model, a combination of convolutional and LSTM networks, which showed high accuracy on the training set. However, these models were computationally intensive, required GPUs, and had difficulties distinguishing between similar actions like 'hello' and 'morning'.</p>
          <p className='p'>To create a more accessible solution, we started from scratch, building a new dataset of static actions frequently used in digital communication. We annotated these images and trained them using the MS COCO model. With the help of Roboflow, we were able to deploy our solution, ensuring real-time translation with low latency.</p>
          <p className='p'>Moving forward, we plan to enhance our model by integrating alphabets with actions to facilitate even smoother communication between hard-of-hearing individuals and others. This enhancement aims to make everyday interactions more accessible and inclusive, leveraging the power of web applications, which can be easily accessed from anywhere via the internet.</p>
        </div>
        
      </div>
      <div className="about-media">
      <div className="media-illustration-2">
        <img src="https://i.ibb.co/Ny78szP/nicholas.jpg"/>
        </div>
        <div className="about-media-content-2">
          <p className='p'>I would like to extend my heartfelt thanks to Nicholas Renotte for his invaluable contributions to the field of artificial intelligence. His insightful videos on YouTube have been an integral part of my project journey, providing me with clear explanations and practical demonstrations. I've had the pleasure of implementing his models, and they have proven to be of great quality and utility. Moreover, his guidance through complex AI concepts has been superb, making difficult topics accessible and understandable. I am truly grateful for his dedication to educating and empowering aspiring AI enthusiasts like myself. For those interested, you can find his work and contributions on his GitHub account: <a href='https://github.com/nicknochnack'>Nicholas Renotte's GitHub.</a></p>
        </div>
      </div>
    </div>
    
</>
  );
}

export default About;
