import Form from "./Form";

function SignUp(){
    return (
        <div className="flex h-screen">
            {/* logo */}
            <div className="w-full">
                <img src="/assets/logo.png" alt="logo" className="h-16 w-auto"/>
            </div>

             {/* image */}
             <div className="w-auto flex flex-col items-center justify-center fixed left-0 top-0 h-full">
            <img src="/assets/signup.png" alt="signUp" className="h-full w-auto"/>
            </div>

            {/* form */}
            <div className="w-1/2 flex flex-col items-left justify-center p-6 fixed right-0 top-0 h-full">
                <div className="w-full max-w-lg">
                <Form/>
                </div>
            </div>

           

            
            
        </div>
    )
}

export default SignUp;
