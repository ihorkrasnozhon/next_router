import {useFormContext} from "react-hook-form";
import CustomInputError from "@/app/components/rhf-input/error";
import {BaseProps} from "@/app/components/rhf-input/base-props";

interface props extends BaseProps {
}

export default function CustomAddressInput({label, name, validation, styles = '', required}: props) {

    const {register, formState: {errors}} = useFormContext();

    const defaultValidation = {
        pattern: {
            value: /^[a-zA-Zа-яА-ЯёЁіІїЇєЄ0-9\s.,/\\№'’-]+$/,
            message: "invalid characters"
        },
        minLength: {value: 5, message: 'Too short'},
        maxLength: {value: 120, message: 'Too long'},

    }


    return (
        <div className={styles}>
            <label>{label}:</label>
            <input type={'text'} {...register(name, {
                required,
                ...defaultValidation,
                ...validation,
            })}/>

            <CustomInputError name={name}/>
        </div>
    );
}

