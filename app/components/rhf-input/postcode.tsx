import {useFormContext} from "react-hook-form";
import CustomInputError from "@/app/components/rhf-input/error";
import {BaseProps} from "@/app/components/rhf-input/base-props";

interface props extends BaseProps{

}

export default function CustomPostcodeInput ({ label, validation, name, styles=''}: props) {
//TODO ask errors
    const { register, formState:{errors} } = useFormContext();

    const defaultValidation = {
        pattern: {
            value: /^[a-zA-Z0-9\s-]+$/,
            message: "letters, numbers, spaces and dash allowed"
        },
        minLength: {value: 3, message: 'Too short'},
        maxLength: {value: 10, message: 'Too long'},

    }

    return (
        <div className={styles}>
            <label>{label}:</label>
            <input
                className='uppercase'
                type="text"
                {...register(name, {
                    ...defaultValidation,
                    ...validation,
                    onChange: (e) => {
                        e.target.value = e.target.value.toUpperCase();
                    }
                })}
            />
            <CustomInputError name={name}/>
        </div>
    );
}
