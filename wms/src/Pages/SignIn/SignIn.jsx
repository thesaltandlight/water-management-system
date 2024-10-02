import Form from "./Form";

function SignIn(){
    return (
        <div className="flex h-screen">
            {/* logo */}
            <div className="w-full">
                <img src="/assets/logo.png" alt="logo" className="h-16 w-auto"/>
            </div>

            {/* form */}
            <div className="w-1/2 flex flex-col items-left justify-center p-6 fixed left-0 top-0 h-full">
                <div className="w-full max-w-lg">
                <Form/>
                </div>
            </div>

            {/* image */}
            <div className="w-1/2 flex flex-col items-center justify-center fixed right-0 top-0 h-full">
            <img src="/assets/signup.png" alt="signIn" className="h-full w-auto"/>
            </div>

            
            
        </div>
    )
}

export default SignIn;
