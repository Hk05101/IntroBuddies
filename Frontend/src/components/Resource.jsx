import React from 'react'
import Cards from './Cards'
import list from '../public/list.json'
import { Link } from 'react-router-dom'

function Resource() {
  return (
    <>
    <div className='max-w-screen-2xl container pt-20 mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white'>
        <div className='mt-28 items-center justify-center text-center '>
            <h1 className='text-2xl font-semibold md:text-4xl '>We're delighted to have you <span className='text-red-700 '>Here :)</span></h1>
            <p className='mt-12 '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia corporis beatae ducimus libero blanditiis omnis obcaecati eius! Expedita consectetur quis excepturi. Harum libero itaque dolores debitis cupiditate numquam consectetur? Ad laudantium, pariatur non tenetur in fuga numquam suscipit, expedita obcaecati, soluta mollitia! Non temporibus reiciendis mollitia quis corporis sed dicta, corrupti quos iste? Aut ex quidem culpa officia ipsa ut fuga laudantium?
            </p>
            <Link to='/'>
            <button className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 duration-300 mt-6'>Back</button>
            </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4 '>
            {
                list.map((item) => (
                    <Cards item={item} key={item.id}></Cards>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default Resource