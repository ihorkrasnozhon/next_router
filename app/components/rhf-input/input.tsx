interface props {
    label: string;
    type: string;
    register: any;
}

const CustomInput = ({ label, type, register}: props ) => {
    return (
        <div style={{ marginBottom: '10px' }}>
            <label>{label}:</label>
            <input type={type} {...register}/>
        </div>
    );
};

export default CustomInput;
