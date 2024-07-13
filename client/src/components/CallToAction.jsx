// import { Button } from 'flowbite-react';
// import React from 'react';

// export default function CallToAction() {
//   return (
//     <div className='flex flex-col border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center max-w-md mx-auto p-4'>
//         <div className='flex flex-col justify-center items-center'>
//             <h1 className='text-xl mb-1'>
//                 Have a look at my Github Profile
//             </h1>
//             <h1 className='text-xl mb-2'>
//                 Check Out my projects
//             </h1>
//             <Button gradientDuoTone='pinkToOrange' className='rounded-tl-xl rounded-bl-none mb-3'>
//                 <a href="https://github.com/SidharthVerma-tech" target='_blank' rel='noopener noreferrer'>
//                 Learn More</a>
//             </Button>
//         </div>
//         <div className='p-4'>
//             <img src="https://www.webfx.com/wp-content/uploads/2022/08/github-logo.png" alt="Github Logo" className='max-w-full h-20' />
//         </div>
//     </div>
//   );
// }
import { Button } from 'flowbite-react';
import React from 'react';

export default function CallToAction() {
  return (
    <div className='flex flex-col md:flex-row border border-teal-500 justify-between items-center rounded-tl-3xl rounded-br-3xl text-center w-full mx-auto p-4'>
      <div className='flex flex-col justify-center items-center md:items-start md:pr-4 w-full md:w-1/2'>
        <h1 className='text-xl md:text-2xl mb-1'>
          Have a look at my Github Profile
        </h1>
        <h1 className='text-xl md:text-2xl mb-2'>
          Check Out my projects
        </h1>
        <Button gradientDuoTone='pinkToOrange' className='rounded-tl-xl rounded-bl-none mb-3 text-lg md:text-xl'>
          <a href="https://github.com/SidharthVerma-tech" target='_blank' rel='noopener noreferrer'>
            Learn More
          </a>
        </Button>
      </div>
      <div className='p-4 w-full md:w-1/2 flex justify-center md:justify-start'>
        <img src="https://www.webfx.com/wp-content/uploads/2022/08/github-logo.png" alt="Github Logo" className='max-w-full h-20 md:h-32' />
      </div>
    </div>
  );
}
