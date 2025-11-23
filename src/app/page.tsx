import React from 'react';
import Hero from './hero/page';
import About from './components/about/page';
import Category from './components/category/page';
import ChoiceUs from './components/choiceus/page';
import NewBlogs from './components/NewBlogs/page'
import Subscribe from './components/subscribe/page'
import HowWeStart from './components/howwestart/page'
import Card from './components/card/page.jsx'
import Testimonial from './components/testimonialcard/page'
import Courses from './course/coursecomponent/Courses'

const page = async() => {
  

  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Category></Category>
      <ChoiceUs></ChoiceUs>
      <Courses></Courses>
      <Card></Card>
      <Testimonial></Testimonial>
      <HowWeStart></HowWeStart>
      <Subscribe></Subscribe>
      <NewBlogs></NewBlogs>
    </div>
  );
};

export default page;