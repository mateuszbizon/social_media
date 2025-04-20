import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'

type ImageHolderProps = {
    onChangeImage: (e: React.ChangeEvent<HTMLInputElement>) => void
    deleteImage: () => void
    imageUrl: string | null
    isAvatar?: boolean
}

function ImageHolder({ onChangeImage, imageUrl, isAvatar = true, deleteImage }: ImageHolderProps) {
  return (
    <div>
        <Button type='button' variant={"outline"} size={"sm"} className='mb-3' onClick={deleteImage}>
            Remove image
        </Button>
        <label htmlFor='image' className={`block ${isAvatar ? "size-[170px]" : "w-full aspect-video"} rounded-2xl cursor-pointer overflow-hidden`}>
            <input id='image' type='file' className='hidden' onChange={onChangeImage} />
            {imageUrl ? (
                <div className='group relative size-full'>
                    <Image src={imageUrl} alt='User avatar' fill className='object-cover' />
                    <div className={`absolute inset-0 bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                        <span>+ Change image</span>
                    </div>
                </div>
            ) : (
                <div className='size-full bg-primary/20 text-black-2 flex items-center justify-center'>
                    <span>+ Add image</span>
                </div>
            )}
        </label>
    </div>
  )
}

export default ImageHolder