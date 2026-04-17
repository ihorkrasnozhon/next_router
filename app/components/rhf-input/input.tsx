import {useFormContext} from "react-hook-form";
import CustomInputError from "@/app/components/rhf-input/error";

interface props {
    label: string;
    type: string;
    name: string;
    styles?: string;
    validation?: object;
}

const CustomInput = ({ label, type, name, validation, styles=''}: props ) => {

    const {register, formState:{errors}} = useFormContext();

    return (
        <div className={styles}>
            <label>{label}:</label>
            <input type={type} {...register(name, validation)}/>

            <CustomInputError name={name}/>
        </div>
    );
};

export default CustomInput;
