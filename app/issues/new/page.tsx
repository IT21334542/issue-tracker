'use client';   
import { Button, TextArea, TextFieldInput, TextFieldRoot } from '@radix-ui/themes'
import axios from 'axios';
import "easymde/dist/easymde.min.css";
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

interface NewIssue
{
    title:String,
    description : String
}


const NewIssuePage = () => {

    const router = useRouter();
    const {register,handleSubmit} =useForm<NewIssue>()
  return (
    
    <form className=' max-w-xl space-y-3' onSubmit={handleSubmit((data)=>{
        axios.post('/api/issues',data);
        router.push('/issues');
    })}>
        <TextFieldRoot>
            <TextFieldInput placeholder='Issue title...' {...register('title')}/>
        </TextFieldRoot>
        <TextArea placeholder='Issue Description' {...register('description')}/>
        <Button>Create new Issue</Button>
    </form>
  )
}

export default NewIssuePage
