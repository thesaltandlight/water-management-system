import Form from "./Form";

function SignUp(){
    return (
        <div className="flex h-screen">

            <div className="w-1/2 flex flex-col items-center justify-center bg-[#7BA5C9] fixed left-0 top-0 h-full">
            <img src="/assets/logo.png" alt="logo" className="h-28 w-auto mt-20"/>
            <img src="/assets/signUp.jpg" alt="wms" className="h-30 w-auto mb-20"/>
            </div>

            <div className="w-1/2 flex flex-col items-left justify-center p-6 fixed right-0 top-0 h-full">
            <div className="w-full max-w-lg"><Form/></div>
            </div>
            
            <div className='w-1/2 flex flex-col items-center justify-end p-6 fixed right-0 top-0 h-full' >
            <div className="mb-12 text-center">
                <span className="text-[#24619D] font-serif font-semibold">Already have an account?</span>
            </div>
            </div>
        </div>
    )
}

export default SignUp;