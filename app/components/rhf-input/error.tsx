import {useFormContext} from "react-hook-form";

interface props {
    name: string;
}

export default function CustomInputError({name}: props) {
    const {formState: {errors}} = useFormContext();

    const error = errors[name];

    if (!error) return null;

    return (
        <span className="text-red-600 text-xs mt-1 block">
            {error.message as string || 'Required field'}
        </span>
    );
}
