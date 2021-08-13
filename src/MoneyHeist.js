import React, {useEffect, useState} from 'react';
import SamplePage from './SamplePage';
import axios from 'axios';
const MoneyHeist=()=>{
    const charList=['Sergio', 'Tokyo', 'Berlin', 'Rio', 'Nairobi'];
    const [list, setList]=useState();
    const images=['https://cdn.blocktoro.com/wp-content/uploads/2020/06/Money-Heist-Season-5-Plot-Spoilers-and-Storyline-.jpg',
     'https://wallpapercave.com/wp/wp6112875.jpg',
      'https://wallpaperaccess.com/full/3036167.jpg',
       'https://im.indiatimes.in/content/2020/Aug/RIO1_5f2ba5b149f97.jpg?w=725&h=543https://im.indiatimes.in/content/2020/Aug/RIO1_5f2ba5b149f97.jpg?w=725&h=543',
    'https://wallpapercave.com/wp/wp5996997.jpg'];
    const pageName='Money Heist';
useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{
        console.log(res.data);
        setList(res.data)
    })
    .catch(err=>{
        console.log(err);
    });
}, []);
return(<>
<SamplePage charList={charList} pageName={pageName} images={images} list={list}/>
</>);
};
export default MoneyHeist;