import { Button, TextArea, TextFieldInput, TextFieldRoot } from '@radix-ui/themes'
import "easymde/dist/easymde.min.css";
import SimpleMDE from "react-simplemde-editor";



const NewIssuePage = () => {
  return (
    <div className=' max-w-xl space-y-3'>
        <TextFieldRoot>
            <TextFieldInput placeholder='Issue title...'/>
        </TextFieldRoot>
        <TextArea placeholder='Issue Description'/>
        <Button>Create new Issue</Button>
    </div>
  )
}

export default NewIssuePage
