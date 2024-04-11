import { BottomWarning } from "../components/BottomWarning"
import { Header } from "../components/Header"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { Signup } from "./Signup"

export const Signin=()=>{
    return <>


    
    <div className="bg-gray-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4"> 

            <Header label={"Sign in"}></Header>
            <SubHeading label={"Enter your credentials to access your account"}></SubHeading>

            <InputBox label={"Email"} placeholder={"rahul@gmail.com"}></InputBox>
            <InputBox label={"Password"}></InputBox>

            <button type="button" class="w-64 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-4">Sign in</button>

            <BottomWarning label={"Don't have an account?"} next={"Sign Up"} to={"../Signup"}></BottomWarning>



            </div>
        </div>
    </div>
    </>
}