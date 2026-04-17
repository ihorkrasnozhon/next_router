import CustomInput from "@/app/components/rhf-input/input";


export default function CustomInstructionsForm() {

    return (
        <div>
            <h1>Add delivery instructions</h1>
            <CustomInput type={'textarea'} label={'Do we need additional instructions?'} name={'info'}/>
            <CustomInput type={'text'} label={'Do we need a security code?'} name={'code'}/>
            <h2>Weekend delivery</h2>
            <p>I can receive packages on</p>
            <div className='flex flex-row gap-4'>
                <CustomInput styles={'flex flex-row-reverse'} label={'Saturday'} type={'checkbox'} name={'saturday'}/>
                <CustomInput styles={'flex flex-row-reverse'} label={'Sunday'} type={'checkbox'} name={'sunday'} />
            </div>
        </div>
    )
}
