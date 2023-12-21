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

type NewIssue = z.infer<typeof IssueCreationObj>;


const NewIssuePage = () => {

    const [error,SetError] = useState('');
    const router = useRouter();
    const {register,handleSubmit,formState:{errors}} =useForm<NewIssue>({
        resolver:zodResolver(IssueCreationObj)
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
            {errors.title && <Text as='p' color='red'>{errors.title.message}</Text>}   
        <TextArea placeholder='Issue Description' {...register('description')}/>
            {errors.description&& <Text as='p' color='red'>{errors.description.message}</Text>}
        <Button>Create new Issue</Button>
    </form>
    </div>
  )
}

export default NewIssuePage
