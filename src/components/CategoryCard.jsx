import React from 'react'

function CategoryCard({product}) {
  return (
    <div className='flex gap-2 justify-start items-center w-fit'>
        <img src={product.image} alt="" className='shadow-md drop-shadow-md rounded-lg' />
        <div className='flex flex-col h-full justify-between items-start px-4'>
            <span className='text-wrap truncate'>{product.name}</span>
            <span className='text-wrap'>{product?.rating}</span>
            <span className='font-bold'>{product.price}</span>
        </div>
    </div>
  )
}

export default CategoryCard