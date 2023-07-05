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
            <div className="fixed top-[50%] bot-[50%] left-0 right-0 z-10">
                {children}
            </div>
        )
    } else {
        return null
    }
}

export default Dialog;