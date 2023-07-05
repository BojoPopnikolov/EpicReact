import React from "react"

type Props = {
    buttonText: string,
    onSubmit: any,
}

const LoginForm: React.FC<Props> = ({
    buttonText,
    onSubmit,
}) => {
    function handleSubmit(event: any) {
        event.preventDefault()

        console.log(event.target.elements)

        const {username, password} = event.target.elements
        
        onSubmit({
            username: username.value,
            password: password.value,
        })
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-2">
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" placeholder=""/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="" />
            </div>
            <div className="text-center">
                <button type="submit" className="border-2 px-2 border-black">{buttonText}</button>
            </div>
        </form>
    )
}

export default LoginForm