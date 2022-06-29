import React from 'react';


const CondimentsList  = (props) => {
  return (
   <>
      <section className="">
         <div className="">
         {props.children}
         </div>
      </section>
   </>
  );
};

export default CondimentsList