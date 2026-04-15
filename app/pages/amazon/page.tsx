"use client";
import './styles.css';
import CustomAddressForm from "@/app/components/rhf-form/address";
import CustomInstructionsForm from "@/app/components/rhf-form/instructions";
import {useForm} from "react-hook-form";

export default function Amazon() {
    const { register, handleSubmit } = useForm();

    return (
        <form onSubmit={handleSubmit(data => console.log(data))} >
            <CustomAddressForm register={register}/>
            <CustomInstructionsForm register={register}/>
            <button type="submit"> Submit </button>
        </form>
    );
}
