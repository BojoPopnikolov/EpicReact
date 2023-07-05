import React from "react";

type Props = {
    isOpen: Boolean,
    children: JSX.Element | JSX.Element[],
}

const Dialog: React.FC<Props> = ({
    isOpen,
    children,
}) => {

    if(isOpen){
        return (
            <div className="fixed left-0 top-0 bg-slate-950/60 w-screen h-screen z-10">
                <div className="bg-white relative top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] z-11 w-max px-6 py-6">
                    {children}
                </div>
            </div>
        )
    } else {
        return null
    }
}

export default Dialog;