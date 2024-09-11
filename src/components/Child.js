import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateSize, updateStart } from '../utils/sizeSlice';

const Child = (props) => {
    const dispatch = useDispatch();
    const [listView,setListView]=useState(true);
    const [gridView,setGridView]=useState(false);

    const start = useSelector(store=>store.size);
    // console.log(props);
    const handleChange=(e)=>{
        //console.log(e.target.value);
        //setSize(e.target.value);
        //console.log(size);
        dispatch(updateSize(e.target.value));
        dispatch(updateStart(0));
        
    }

    const handleClick=()=>{
        const temp= Number(start.start)+Number(start.initSize);
        dispatch(updateStart(temp));
    }

    const handleClickPrev=()=>{
        dispatch(updateStart(Number(start.start)-Number(start.initSize)));
    }

  return (
    <div>
        <div className="flex justify-end m-2 p-2">
            <button className='border-2 border-black mx-4'>List View</button>
            <button className='border-2 border-black mx-4'>Grid View</button>
            <h1 className='mx-2'>Select size for Pagination</h1>
            <select onChange={(e)=>handleChange(e)} className='w-20 border-2 border-black' name="" id="">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
            </select>
        </div>
        <div className="flex flex-wrap w-1/2">
        {
            props.item?.slice(start.start,Math.min(props.item.length,Number(start.start)+Number(start.initSize))).map((item,index)=>{
                return <props.func item={item} key={index} />
            })
        }
        </div>
        <div className='flex justify-end'>
        {start.start>0?
        <button onClick={handleClickPrev} className='border-2 border-black m-4'>
            Prev
        </button>:<div/>}
        <button onClick={handleClick} className='border-2 border-black m-4'>
            Next
        </button>
      </div>
    </div>
  )
}

export default Child

// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { updateSize, updateStart } from '../utils/sizeSlice';

// const Child = (props) => {
//     const dispatch = useDispatch();
//     const [listView, setListView] = useState(true);
//     const [gridView, setGridView] = useState(false);

//     const start = useSelector(store => store.size);

//     const handleChange = (e) => {
//         dispatch(updateSize(e.target.value));
//         dispatch(updateStart(0));
//     }

//     const handleClick = () => {
//         const temp = Number(start.start) + Number(start.initSize);
//         dispatch(updateStart(temp));
//     }

//     const handleClickPrev = () => {
//         dispatch(updateStart(Number(start.start) - Number(start.initSize)));
//     }

//     const toggleView = (viewType) => {
//         if (viewType === 'list') {
//             setListView(true);
//             setGridView(false);
//         } else {
//             setListView(false);
//             setGridView(true);
//         }
//     }

//     return (
//         <div>
//             <div className="flex justify-end m-2 p-2">
//                 <button
//                     className={`border-2 border-black mx-4 ${listView ? 'bg-gray-200' : ''}`}
//                     onClick={() => toggleView('list')}
//                 >
//                     List View
//                 </button>
//                 <button
//                     className={`border-2 border-black mx-4 ${gridView ? 'bg-gray-200' : ''}`}
//                     onClick={() => toggleView('grid')}
//                 >
//                     Grid View
//                 </button>
//                 <h1 className='mx-2'>Select size for Pagination</h1>
//                 <select onChange={(e) => handleChange(e)} className='w-20 border-2 border-black'>
//                     <option value="5">5</option>
//                     <option value="10">10</option>
//                     <option value="15">15</option>
//                     <option value="20">20</option>
//                 </select>
//             </div>
//             <div className={`flex ${listView ? 'flex-col' : 'flex-wrap'} ${gridView ? 'grid grid-cols-2 gap-4' : ''} `}>
//                 {
//                     props.item?.slice(start.start, Math.min(props.item.length, Number(start.start) + Number(start.initSize)))
//                         .map((item, index) => {
//                             return <props.func item={item} key={index} />
//                         })
//                 }
//             </div>
//             <div className='flex justify-end'>
//                 {start.start > 0 ?
//                     <button onClick={handleClickPrev} className='border-2 border-black m-4'>
//                         Prev
//                     </button> : <div />}
//                 <button onClick={handleClick} className='border-2 border-black m-4'>
//                     Next
//                 </button>
//             </div>
//         </div>
//     )
// }

// export default Child;
