import {CustomSelect} from "@/app/components/rhf-input/select";
import CustomInput from "@/app/components/rhf-input/input";
import CustomPhoneInput from "@/app/components/rhf-input/phone";
import CustomPostcodeInput from "@/app/components/rhf-input/postcode";

export default function CustomAddressForm ({register}: props) {
    const countries = ['Poland','Ukraine', 'Germany','USA', 'US'];

    return (
        <div>
            <h1>Edit your address</h1>
            <CustomSelect label={'Country/Region'} options={countries} name="country"/>
            <CustomInput label={'Full name'} type={'text'} name={'fullname'} validation={{required: 'Required'}}/>
            <CustomPhoneInput label={'Phone number'} name="phone"/>
            <CustomPostcodeInput label={'Postcode'} name={'postcode'}/>
            <CustomInput label={'Address Line 1'} type={'text'} name={'address1'}/>
            <CustomInput label={'Address Line 2'} type={'text'} name={'address2'}/>
            <CustomInput label={'Town/City'} type={'text'} name={'town'}/>
            <CustomInput label={'County'} type={'text'} name={'county'}/>
        </div>

    );
}
