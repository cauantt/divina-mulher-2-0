import React from 'react';


interface GradeProps {
  text: string; 
}

const Grade: React.FC<GradeProps> = ({ text }) => {
  return (
    <div className='border-white     border h-14 w-[540px] bg-vermelho flex items-center  pl-2 rounded-md  md:w-[330px]'>
      <p className='text-white '>{text}</p>
    </div>
  );
};

export default Grade;
