import React from 'react'

export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'> 
        <div className="div">
          <h1 className='text-3xl text-center font-bold'>About My Blogs</h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
            Hello! I'm Sidharth Verma from Faridabad, and I'm passionate about the MERN stack and Data Structures & Algorithms (DSA). Welcome to my blog, a place where you can find insightful articles and tutorials on Data Science, DSA, and Web Development.
            </p>
            <h2 className='font-bold'>My Journey</h2>
            <p>
            I am from IIIT Sonepat, With a deep interest in technology and coding, I've dedicated myself to mastering the MERN stack, which comprises MongoDB, Express.js, React, and Node.js. These powerful tools enable me to build dynamic and responsive web applications. My fascination with problem-solving and algorithmic thinking drives my enthusiasm for DSA, where I continuously seek to optimize and innovate solutions.</p>
            <h2 className='font-bold'>
            What you'll find here

            </h2>
            <p>
            On this blog, you'll discover a wealth of knowledge and resources related to:

Data Science: Explore the latest trends, techniques, and tools in the field of data science. From machine learning to data visualization, you'll find content that helps you harness the power of data.
Data Structures & Algorithms (DSA): Whether you're preparing for coding interviews or just looking to improve your problem-solving skills, my DSA articles will provide you with in-depth explanations and practical examples.
Web Development: Learn about the intricacies of web development using the MERN stack. From building robust backends to creating seamless user interfaces, my tutorials and guides will help you become a proficient web developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
