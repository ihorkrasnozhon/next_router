import {useFormContext} from "react-hook-form";
import CustomInputError from "@/app/components/rhf-input/error";
import {BaseProps} from "@/app/components/rhf-input/base-props";

interface props extends BaseProps {}

export default function CustomSecurityInput({label, name, validation, styles = '', required}: props) {

    const {register, formState: {errors}} = useFormContext();

    const defaultValidation = {
        pattern: {
            value: /^[a-zA-Z0-9#*]+$/,
            message: "Use only numbers, #, * or letters"
        },
        minLength: {value: 4, message: 'Too short'},
        maxLength: {value: 20, message: 'Too long'},
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

