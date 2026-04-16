import CustomInput from "@/app/components/rhf-input/input";
import {FieldValues, UseFormRegister} from "react-hook-form";

interface props {
    register: UseFormRegister<FieldValues>;
}

export default function CustomInstructionsForm({register}: props) {
    return (
        <div>
            <h1>Add delivery instructions</h1>
            <CustomInput type={'textarea'} label={'Do we need additional instructions?'} register={register('info')}/>
            <CustomInput type={'text'} label={'Do we need a security code?'} register={register('code')}/>
            <h2>Weekend delivery</h2>
            <p>I can receive packages on</p>
            <div className='flex flex-row gap-4'>
                <CustomInput styles={'flex flex-row-reverse'} label={'Saturday'} type={'checkbox'} register={register('saturday')}/>
                <CustomInput styles={'flex flex-row-reverse'} label={'Sunday'} type={'checkbox'} register={register('sunday')}/>
            </div>
        </div>
    )
}
