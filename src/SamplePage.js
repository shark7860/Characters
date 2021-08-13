import React, {useState} from 'react';
import axios from 'axios';
const SamplePage=(props)=>{
const [counter, setCounter]=useState(0);
const updateCounter=()=>{
if(counter===props.charList.length-1) {
setCounter(0);
} else {
    setCounter(counter+1);
}
};
const submitHandler=()=>{
axios.post('https://jsonplaceholder.typicode.com/posts', {userId:'shark',body:'body',title:'post req'}).then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
});
};
    return(<>
    <div>{props.pageName}</div>
    <button className='btn' onClick={updateCounter}>Change Character</button>
    <div className='char-name'>{props.charList[counter]}</div>
    <img className='char-img' src={props.images[counter]} alt={props.charList[counter]}></img>
    {/* {props.list&& props.list.map((item)=>{
        return(<div>{item.title}</div>)
        })} */}
        <button onClick={submitHandler}>post</button>
    </>);
};
export default SamplePage;