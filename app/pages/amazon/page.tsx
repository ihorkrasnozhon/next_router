"use client";
import './styles.css';
import CustomAddressForm from "@/app/components/rhf-form/address";
import CustomInstructionsForm from "@/app/components/rhf-form/instructions";
import {useForm} from "react-hook-form";
import FormWrapper from "@/app/components/rhf-form/form-wrapper";

export default function Amazon() {
    const methods = useForm();
    const { register } = methods;

    const onSubmit = (data: any) => console.log(data)

    return (
        <FormWrapper onSubmit={onSubmit} methods={methods} className={'min-w-150'}>
            <CustomAddressForm register={register}/>
            <CustomInstructionsForm register={register}/>
            <button type="submit"> Save changes </button>
        </FormWrapper>
    );
}
