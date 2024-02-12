import React, {useState, useContext} from 'react';

import { PostcodeContext } from '../../context/PostcodeContext';



function Content() {
    const [viewTable, setViewTable] = useState(true)
  const { crimeData } = useContext(PostcodeContext)

  return (
     <>
        <div className='flex flex-col items-start'>
            <button onClick={() => {setViewTable(true)}}>table view</button>
            <button onClick={() => setViewTable(false)}>map view</button>
        </div>
        {!crimeData && <p className='pt-2'>please provide a UK postcode above</p>}
        {crimeData && viewTable && <p>we got data table</p>}
        {crimeData && !viewTable && <p>we got data map</p>}
     </>
  );
}

export default Content;
