import React,{useRef, useState} from 'react'
import {ImageKitProvider, IKUpload, IKVideo, IKImage} from "imagekitio-next"
import Image from "next/image"
import {toast} from "@/hooks/use-toast"
import { Button } from './ui/button'
import {cn} from "../lib/utils"
import axios from "axios"
import { env } from '../env'
const FileUpload = ({type, placeholder, variant,folder, accept, onFileChange}) => {
  const uploadRef=useRef()

  const [progress, setProgress]=useState(0)
  const [file, setFile]=useState(null)

  const styles={
    button: variant==='dark'?'bg-dark-300':'bg-white border-gray-100 border',
    placeholder: variant==='dark'?'text-white':'text-slate-500',
    text: variant==='dark'?'text-white':'text-dark-400'
  }

  const authenticator=async()=>{
    try{
      const response=axios.get(`${env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}.api/auth/imagekit`)
      console.log(response,"imagekit response")

      if(!response.ok){
        const errorText=await response.text();
        throw new Error(`Request failed with status ${response.status}`)
      }
      const data=await response.json()


    }catch(error){
      throw new Error(`Authentication request failed: ${error.message}`)
    }
  }

  const onError=(error)=>{
    console.log(error)
    toast({
      title:`${type} upload failed`,
      description: `Your ${type} could not be uploaded. Please try again.`,
      variant:'destructive'
    })
  }

  const onSuccess=(res)=>{
      setFile(res)
      onFileChange(res.filePath)
      toast({
        title:`${type} uploaded successfully`,
        description: `${res.filePath} uploaded successfully`
      })
    }

    const onValidate=()=>{
      if(type==='image'){
        if(file.size>20*1024*1024){
          toast({
            title:'File size too large',
            description: 'Please upload a file that is less than 20MB in size',
            variant:'destructive'
          });

          return false
        }
      }
    }
  return (
    <ImageKitProvider
      publicKey={env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY}
      urlEndpoint={env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
      authenticator={authenticator}
    >
      <IKUpload
        ref={uploadRef}
        onError={onError}
        onSuccess={onSuccess}
        validateFile={onValidate}
        useUniqueFileName={true}
        onUploadStart={()=>setProgress(0)}
        onUploadProgress={({loaded, total})=>{
          const percent=Math.round((loaded/total)*100);
          setProgress(percent);
        }}
        folder={folder}
        accept={accept}
        className="hidden"
      />
      <Button className={cn('upload-btn', styles.button)} onClick={(e)=>{
        e.preventDefault()
        if(uploadRef.current){
          uploadRef.current?.click()
        }
      }}>
        <Image src="/assets/upload.svg" alt="upload-icon" width={20} height={20} className="object-contain"/>
        <p className={cn('text-base', styles.placeholder)}>{placeholder}</p>
        {file&&(
          <p className={cn('upload-filename', styles.text)}>{file.filePath}</p>
        )}
      </Button>
      {progress>0&&progress!==100&&(
        <div className="w-full rounded-full bg-green-200">
          <div className="" style={{width:`${progress}%`}}>{progress}%</div>
        </div>
      )}

      {file&&(
        <IKImage alt={file.filePath} path={file.filePath} width={500} height={500}/>
      )}
    </ImageKitProvider>
  )
}

export default FileUpload