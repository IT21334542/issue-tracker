'use client';   
import { Button, CalloutRoot, CalloutText, TextArea, TextFieldInput, TextFieldRoot } from '@radix-ui/themes'
import axios from 'axios';
import "easymde/dist/easymde.min.css";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface NewIssue
{
    title:String,
    description : String
}


const NewIssuePage = () => {

    const [error,SetError] = useState('');
    const router = useRouter();
    const {register,handleSubmit} =useForm<NewIssue>()
  return (
    <div className='max-w-xl'>
        {error&&
            <>
            <CalloutRoot className=' mb-5' color='red'>
                <CalloutText>{error}</CalloutText>
            </CalloutRoot>
            </>

        }

    <form className=' space-y-3' onSubmit={handleSubmit(async (data)=>{
        await axios.post('/api/issues',data).then((value)=>
        {
            //console.log(value.data);
            router.push('/issues');

        }).catch((err:Error)=>
        {
            SetError("Unexpected Error occured");
        })
       
    })}>
        <TextFieldRoot>
            <TextFieldInput placeholder='Issue title...' {...register('title')}/>
        </TextFieldRoot>
        <TextArea placeholder='Issue Description' {...register('description')}/>
        <Button>Create new Issue</Button>
    </form>
    </div>
  )
}

export default NewIssuePage
