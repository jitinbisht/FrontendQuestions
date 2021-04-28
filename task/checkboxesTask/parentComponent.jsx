import React, {useState, useEffect} from 'react';
import CheckBox from './CheckedComponent';
const MyApp = (props) => {
    const [count, setCount] = useState(0);
    const [checked, setChecked] = useState(false);
    const [listItems, setListItems] = useState([
        {value: 1,
        name: 'Child One',
        isChecked: false
        },
        {value: 2,
         name: 'Child Two',
         isChecked: false
        },
        {value: 3,
         name: 'Child Three',
         isChecked: false
        }
    ])
    const handleCheckChildElement = (event, item, index) => {
        setListItems(prevValue=> [...prevValue.slice(0,index), {...item, isChecked: event.target.checked }, ...prevValue.slice(index+1)]);
     }
    const onSelectAll = (e) => {
        setChecked(e.target.checked);
        //check all the checkboxes once select all
        listItems.forEach(item => item.isChecked = e.target.checked);
        setListItems(listItems);
    }

    // for individual checkbox
    useEffect(()=>{
     const selectedItemCount = listItems.filter(item=> item.isChecked === true).reduce((arr,curr)=> arr + curr.value, 0);
     setCount(selectedItemCount);
     //check-uncheck the parent check box if any of the child checkbox is unchecked
     const isAllChecked = listItems.every(item=> item.isChecked === true);
     setChecked(isAllChecked);
    },[listItems])

// for select all checkboxes
    useEffect(() => {
        if(checked){
            setCount(listItems.reduce((acc, curr)=> acc + curr.value, 0));
        } else {
            const selectedItemCount = listItems.filter(item=> item.isChecked === true).reduce((arr,curr)=> arr + curr.value, 0);
            setCount(selectedItemCount)
        }
       
    }, [checked])
    return (
        <div>
            <input type="checkbox" checked={checked} onChange={(e)=>onSelectAll(e)}/>  Parent Count - {count}
            {listItems.map((item, index) => (
                 <CheckBox handleCheckChieldElement={(e)=>handleCheckChildElement(e, item, index)}  {...item} id={index}/>
            ))}
        </div>
    )
} 
export default MyApp;
