'use client';
import {useForm} from "@mantine/form";
import { Button, Checkbox, Group, TextInput, PasswordInput, Select } from '@mantine/core';
import isStrongPassword from 'validator/lib/isStrongPassword';
import {create} from "zustand";
import {persist} from "zustand/middleware";
import {useEffect} from "react";
import {z} from "zod";

const useStore = create(
    persist(
        (set) => ({
            email: '',
            password: '',
            confirmPassword: '',
            terms: false,
            mood: null,
            _hasHydrated: false,
            setHasHydrated: (state) => set({ _hasHydrated: state }),

            setField: (field, value) => set({[field]: value}),
        }),
        {
            name: 'register-storage',
            onRehydrateStorage: () => (state) => {
                state?.setHasHydrated(true)
            },
        }
    )
)

const savedEmail ='', savedMood ='', hasHydrated = false, setField = () => {}
export default function Register () {
    // const setField = useStore(state => state.setField);
    // const savedState = useStore(state => state);
    //
    //
    // const savedEmail = useStore(state => state.email);
    // const savedMood = useStore(state => state.mood);
    // const hasHydrated = useStore((state) => state._hasHydrated)


    console.log('render')

    const form = useForm<>({
        mode: 'uncontrolled',
       // validateInputOnBlur: true,
        initialValues: {
            email: savedEmail || '',
            password: '',
            confirmPassword: '',
            terms: false,
            mood: savedMood || null
        },

        // validate: {
        //     email: (value) => (z.email(value) ? null : 'Invalid email'),
        //     password: (value) => isStrongPassword(value) ? null : 'Too weak password: Add uppercase, digits and symbols',
        //     confirmPassword: (value, values) =>
        //         value !== values.password ? 'Passwords did not match' : null,
        // }
    })

    useEffect(() => {
        if (hasHydrated && savedEmail) {
            form.setFieldValue('email', savedEmail);
        }
        if (hasHydrated && savedMood) {
            form.setFieldValue('mood', savedMood);
        }
    }, [hasHydrated]);

    return (
        <form
            onSubmit={form.onSubmit(
                (values) => console.log(values),
                (errors) => {
                    const firstErrorPath = Object.keys(errors)[0];
                    form.getInputNode(firstErrorPath)?.focus();
                })
            }
        >
            <TextInput
                label="Email"
                placeholder="your@email.com"
                key={form.key('email')}
                {...form.getInputProps('email')}
                onBlur={(e) => {
                    form.getInputProps('email').onBlur(e);
                    setField('email', e.currentTarget.value);
                }}
                required
            />
            <PasswordInput
                required
                label="Password"
                placeholder="Password"
                key={form.key('password')}
                {...form.getInputProps('password')}
            />
            <PasswordInput
                required
                mt="sm"
                label="Confirm password"
                placeholder="Confirm password"
                key={form.key('confirmPassword')}
                {...form.getInputProps('confirmPassword')}
            />
            <Select
                label="How are you today?"
                placeholder="Choose your mood:"
                data={['Good', 'Fine', 'Bad']}
                key={form.key('mood')}
                comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}

                {...form.getInputProps('mood')}
                onBlur={(e) => {
                    form.getInputProps('mood').onBlur(e);
                    setField('mood', e.currentTarget.value);
                }}
            />
            {console.log(form.getInputProps('mood'))}
            <Checkbox
                mt="md"
                label="I agree to terms"
                key={form.key('terms')}
                {...form.getInputProps('terms', { type: 'checkbox' })}
            />
            <Group justify="flex-start" mt="md">
                <Button type="submit">Submit</Button>
            </Group>
        </form>
    );
}
