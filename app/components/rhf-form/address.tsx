import {CustomSelect} from "@/app/components/rhf-input/select";
import CustomInput from "@/app/components/rhf-input/input";

export default function CustomAddressForm ({register}) {
    const countries = ['Poland','Ukraine', 'Germany','USA', 'US'];

    return (
        <div>
            <h1>Edit your address</h1>
            <CustomSelect label={'Country/Region'} options={countries} register={register('country')}/>
            <CustomInput label={'Full name'} type={'text'} register={register('fullname')}/>
            <CustomInput label={'Phone number'} type={'number'} register={register('phone')}/>
            <CustomInput label={'Postcode'} type={'text'} register={register('postcode')}/>
            <CustomInput label={'Address Line 1'} type={'text'} register={register('address1')}/>
            <CustomInput label={'Address Line 2'} type={'text'} register={register('address2')}/>
            <CustomInput label={'Town/City'} type={'text'} register={register('town')}/>
            <CustomInput label={'County'} type={'text'} register={register('county')}/>
        </div>

    );
}
