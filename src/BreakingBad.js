import React from 'react';
import SamplePage from './SamplePage';
const BreakingBad=()=>{
    const charList=['Walter', 'Gus', 'Pinkman', 'Mike', 'Hank'];
    const images=['http://nerdreactor.com/wp-content/uploads/2013/08/walterwhitebreakingbad.jpg',
     'https://vignette2.wikia.nocookie.net/breakingbad/images/a/ab/BCS_S3_GusFringe.jpg/revision/latest?cb=20170327185354',
      'https://i.pinimg.com/originals/2e/43/4c/2e434cf1a99aa3f3b9c493b2231d5db3.jpg',
       'https://vignette.wikia.nocookie.net/breakingbad/images/0/0f/Mike_-_BCS_T2.png/revision/latest?cb=20160109130328&path-prefix=es',
    'https://i.pinimg.com/originals/ff/88/38/ff88380622d8948da6eebca2b928e9d7.jpg' ];
    const pageName='Breaking Bad';
return(<>
<SamplePage charList={charList} pageName={pageName} images={images}/>
</>);
};
export default BreakingBad;