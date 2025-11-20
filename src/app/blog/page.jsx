import React from 'react';
import BlogHero from './blogdetails/BlogHero';
import BlogCard from './blogdetails/BlogCard';

const page = () => {
    return (
        <div>
           <BlogHero></BlogHero>
           <BlogCard></BlogCard>
        </div>
    );
};

export default page;