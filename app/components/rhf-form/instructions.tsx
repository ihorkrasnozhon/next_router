import CustomInput from "@/app/components/rhf-input/input";

export default function CustomInstructionsForm ({register}) {
    return (
        <div>
            <h1>Add delivery instructions</h1>
            <CustomInput type={'textarea'} label={'Do we need additional instructions?'} register={register('info')}/>
            <CustomInput type={'text'} label={'Do we need a security code?'} register={register('code')}/>
            <h2>Weekend delivery</h2>
            <p>I can receive packages on</p>
            <CustomInput label={'Saturday'} type={'checkbox'} register={register('saturday')}/>
            <CustomInput label={'Sunday'} type={'checkbox'} register={register('sunday')}/>
        </div>
    )
}
