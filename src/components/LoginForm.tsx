import React from "react"

type Props = {
    buttonText: string,
    onSubmit: Function,
}

const LoginForm: React.FC<Props> = ({
    buttonText,
    onSubmit,
}) => {
    function handleSubmit(event: React.SyntheticEvent) {
        event.preventDefault()

        const target = event.target as typeof event.target & {
            username: { value: string };
            password: { value: string }
        }

        const username = target.username;
        const password = target.password;
        
        onSubmit ({
            username: username.value,
            password: password.value,
        })
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-2">
            <div className="">
                <label htmlFor="username" className="w-[50%] float-left">Username</label>
                <input type="text" id="username" className="w-[50%] float-right" />
            </div>
            <div className="">
                <label htmlFor="password" className="w-[50%] float-left">Password</label>
                <input type="password" id="password" className="w-[50%] float-right" />
            </div>
            <div className="text-center">
                <button type="submit" className="border-2 px-2 border-black mt-2">{buttonText}</button>
            </div>
        </form>
    )
}

export default LoginForm