import React, {useContext, useState} from 'react';

import { PostcodeContext } from '../../context/PostcodeContext';



function PostcodeForm() {
  const [postcode, setPostcode] = useState('')

  const { findPostcodeData } = useContext(PostcodeContext)

  const handleInputChange = (e) => {
    setPostcode(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    findPostcodeData(postcode)
  }


  return (
     <>
      <form onSubmit={handleSubmit}>
        <input placeholder='Search...' className='border-2 searchName-input text' value={postcode} onChange={handleInputChange}/>
        <button type='submit'>search</button>
      </form>
     </>
  );
}

export default PostcodeForm;
