import Form from "./Form";

function SignIn(){
    return (
        <div className="flex h-screen">

            <div className="w-1/2 flex flex-col items-center justify-center bg-[#ACCEE9] fixed left-0 top-0 h-full">
            <img src="/assets/logo.png" alt="logo" className="h-28 w-auto mt-20"/>
            <img src="/assets/signin.jpg" alt="signIn" className="h-30 w-auto mb-20"/>
            </div>

            <div className="w-1/2 flex flex-col items-left justify-center p-6 fixed right-0 top-0 h-full">
                <div className="w-full max-w-lg">
                <Form/>
                </div>
            </div>

            
            
        </div>
    )
}

export default SignIn;
