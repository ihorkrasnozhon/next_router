import {useFormContext} from "react-hook-form";
import CustomInputError from "@/app/components/rhf-input/error";

interface props {
    label: string;
    name: string;
    styles?: string;
    validation?: object;
}

export default function CustomPostcodeInput ({ label, validation, name, styles=''}: props) {
//TODO ask errors
    const { register, formState:{errors} } = useFormContext();
    return (
        <div className={styles}>
            <label>{label}:</label>
            <input
                className='uppercase'
                type="text"
                {...register(name, {
                    ...validation,
                    pattern: {
                        value: /^[a-zA-Z0-9\s-]+$/,
                        message: "letters, numbers, spaces and dash allowed"
                    },
                    onChange: (e) => {
                        e.target.value = e.target.value.toUpperCase();
                    }
                })}
            />
            <CustomInputError name={name}/>
        </div>
    );
}
