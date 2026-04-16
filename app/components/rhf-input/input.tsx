interface props {
    label: string;
    type: string;
    register: any;
    styles?: string;
}

const CustomInput = ({ label, type, register, styles=''}: props ) => {

    return (
        <div className={styles}>
            <label>{label}:</label>
            <input type={type} {...register}/>
        </div>
    );
};

export default CustomInput;
