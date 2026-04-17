import {FormProvider, UseFormReturn} from "react-hook-form";
import {ReactNode} from "react";

interface props {
    children: ReactNode;
    methods: UseFormReturn;
    onSubmit: (data: any)=> void;
    className?: string;
}

export default function FormWrapper ({children, methods, onSubmit, className=''}: props) {
    //@ts-ignore
    return (
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className={className || ''}>
            {children}
        </form>
      </FormProvider>
    );
}
