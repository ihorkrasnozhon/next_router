import {useFormContext} from "react-hook-form";

interface props {
    label: string;
    options: string[];
    name: string;
    validation?: object;
    styles?: string;
}

export const CustomSelect = ({label, options, validation, name, styles=''}: props) => {
    const {register, formState:{errors}} = useFormContext()
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
