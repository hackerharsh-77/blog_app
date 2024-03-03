import React from 'react'

import { Link } from 'react-router-dom'
import service from '../appwrite/config'

function PostCard({
    $id, title, featuedImage
}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className="w-full bg-gray-100 rounded-xl p-4">
            <div className='w-full justify-center mb-4'>
                <img src={service.getFilePreview(featuedImage)} alt={title}
                className='rounded-xl' />
            </div>
            <h2
            className='text-xl fond-bold'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard