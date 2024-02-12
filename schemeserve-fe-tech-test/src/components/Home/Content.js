import React, { useContext} from 'react';

import { PostcodeContext } from '../../context/PostcodeContext';



function Content() {
    const { crimeData } = useContext(PostcodeContext)

  return (
     <>
       {/* map crime data and display acordingly */}
     </>
  );
}

export default Content;
