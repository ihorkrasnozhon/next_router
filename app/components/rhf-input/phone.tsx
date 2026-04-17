import PhoneInput from 'react-phone-number-input'
import {useFormContext, Controller} from "react-hook-form";
import 'react-phone-number-input/style.css'
import CustomInputError from "@/app/components/rhf-input/error";

interface props {
    label: string;
    name: string;
    styles?: string;
    validation?: any;
}

export default function CustomPhoneInput({label, name, validation, styles = ''}: props) {
//TODO ask errors!!!!!!!!!!
    const {control, formState:{errors}} = useFormContext();
    return (
        <div className={styles}>
            <label>{label}:</label>
            <Controller
                name={name} control={control} rules={validation}
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
