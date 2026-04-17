interface props {
    label: string;
    options: string[];
    register: any;
}

export const CustomSelect = ({label, options, register}: props) => {
    return (
        <div className={styles}>
            <label>{label}</label>
            <select {...register}>
                {options.map(o => (
                    <option key={o} value={o}>{o}</option>
                ))}
            </select>
            <CustomInputError name={name}/>
        </div>
    );
}
