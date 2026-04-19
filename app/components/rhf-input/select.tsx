import {useFormContext} from "react-hook-form";
import {BaseProps} from "@/app/components/rhf-input/base-props";

interface props extends BaseProps{
    options: string[];
}

export const CustomSelect = ({label, options, validation, name, styles=''}: props) => {
    const {register, formState:{errors}} = useFormContext()
    //@ts-ignore
    return (
        <div className={styles}>
            <label>{label}</label>
            <select {...register(name, validation)}>
                {options.map(o => (
                    <option key={o} value={o}>{o}</option>
                ))}
            </select>
            {!!errors && (
                <span className="text-red-600 text-xs mt-1">
                    {errors[name]?.message as string}
                </span>
            )}
        </div>
    );
}
