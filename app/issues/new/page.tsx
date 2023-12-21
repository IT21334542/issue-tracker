'use client';   
import { IssueCreationObj } from '@/app/ValidationSchema';
import { Button, CalloutRoot, CalloutText, Text, TextArea, TextFieldInput, TextFieldRoot } from '@radix-ui/themes'
import axios from 'axios';
import "easymde/dist/easymde.min.css";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import  {zodResolver} from '@hookform/resolvers/zod'
import { z } from 'zod';
import ErrorMessage from '@/app/component/ErrorMessage';
import {SyncLoader} from "react-spinners"

type NewIssue = z.infer<typeof IssueCreationObj>;


const NewIssuePage = () => {

    const [error,SetError] = useState('');
    const [isSubmitting,SetSubmitting] = useState(false);
    const router = useRouter();
    const {register,handleSubmit,formState:{errors}} =useForm<NewIssue>({resolver:zodResolver(IssueCreationObj)})

    const OnSubmit = handleSubmit(async (data)=>{
        SetSubmitting(true);
        await axios.post('/api/issues',data).then((value)=>
        {
            //console.log(value.data);
            SetSubmitting(false);
            router.push('/issues');

        }).catch((err:Error)=>
        {
            SetSubmitting(false);
            SetError("Unexpected Error occured");
        })
       
    })





  return (
    <div className='max-w-xl'>
        {error&&
            <>
            <CalloutRoot className=' mb-5' color='red'>
                <CalloutText>{error}</CalloutText>
            </CalloutRoot>
            </>

        }

    <form className=' space-y-3' onSubmit={OnSubmit}>
        <TextFieldRoot>
            <TextFieldInput placeholder='Issue title...' {...register('title')}/>
        </TextFieldRoot>
            <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <TextArea placeholder='Issue Description' {...register('description')}/>
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Button disabled={isSubmitting}>Create new Issue{isSubmitting&&<SyncLoader color='#ffffff' size={3}/>}</Button>
    </form>
    </div>
  )
}

export default NewIssuePage
