import {CustomSelect} from "@/app/components/rhf-input/select";
import CustomInput from "@/app/components/rhf-input/input";
import CustomPhoneInput from "@/app/components/rhf-input/phone";
import CustomPostcodeInput from "@/app/components/rhf-input/postcode";
import CustomFullnameInput from "@/app/components/rhf-input/fullname";
import CustomAddressInput from "@/app/components/rhf-input/address";

export default function CustomAddressForm () {

    const countries = ['Poland','Ukraine', 'Germany','USA', 'US'];


    return (
        <div>
            <h1>Edit your address</h1>
            <CustomSelect label={'Country/Region'} required options={countries} name="country"/>
            <CustomFullnameInput label={'Full name'} type={'text'} name={'fullname'} required/>
            <CustomPhoneInput label={'Phone number'} required name="phone"/>
            <CustomPostcodeInput label={'Postcode'} required name={'postcode'}/>
            <CustomAddressInput label={'Address Line 1'} required name={'address1'}/>
            <CustomAddressInput label={'Address Line 2'} name={'address2'}/>
            <CustomInput label={'Town/City'} type={'text'} name={'town'}/>
            <CustomInput label={'County'} type={'text'} name={'county'}/>
        </div>

    );
}
