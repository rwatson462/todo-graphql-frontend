import { PropsWithChildren } from "react";

export function FormGroup({children}: PropsWithChildren) {
    return (
        <p className={'flex flex-col'}>
            {children}
        </p>
    )
}