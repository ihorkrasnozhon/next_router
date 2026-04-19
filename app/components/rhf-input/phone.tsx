import PhoneInput from 'react-phone-number-input'
import {useFormContext, Controller} from "react-hook-form";
import 'react-phone-number-input/style.css'
import CustomInputError from "@/app/components/rhf-input/error";
import {BaseProps} from "@/app/components/rhf-input/base-props";

interface props extends BaseProps {

}

export default function CustomPhoneInput({label, name, validation, styles = ''}: props) {
//TODO ask errors!!!!!!!!!!
    const {control, formState:{errors}} = useFormContext();

    const defaultValidation = {
        minLength: {value: 6, message: 'Too short'},
        maxLength: {value: 15, message: 'Too long'},

    }

    return (
        <div className={styles}>
            <label>{label}:</label>
            <Controller
                name={name} control={control} rules={{...validation, ...defaultValidation}}
                render={({field: {onChange, value}})=> (
                <PhoneInput
                    placeholder="Enter phone number"
                    value={value}
                    defaultCountry="PL"
                    onChange={onChange}
                />
            )}
            />
            <CustomInputError name={name}/>
        </div>
    );
}
