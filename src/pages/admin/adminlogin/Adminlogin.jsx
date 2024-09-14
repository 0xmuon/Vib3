import React, { useContext, useState } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import myContext from "../../../context/data/myContext";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/FirebaseConfig";


export default function AdminLogin() {
    const context = useContext(myContext);
    const { mode } = context;

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //* Login Function
    const login = async () => {
        if(!email || !password) {
            return toast.error("Fill all required fields")
        }
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            toast.success('Welcome Back Senpai!')
            localStorage.setItem('admin', JSON.stringify(result));
            navigate('/dashboard');
        } catch (error) {
            toast.error('Are you new to this town? We cant recognise you!')
            console.log(error)
        }
    }

    return (
        <div>
            <div>
                    <a href="./">
                            {/* Logo Image  */}
                            <img
                                className=' w-10 h-10 '
                                src='https://gcdnb.pbrd.co/images/VHJfkiB8UqNF.png?o=1'
                            />
                    </a>
            </div>
            <div className="flex justify-center items-center h-screen">
                    
                {/* Card  */}
                <Card
                    className="w-full max-w-[24rem]"
                    style={{
                        background: mode === 'dark'
                            ? 'rgb(0, 226, 226)'
                            : 'rgb(226, 226, 226)'
                    }}
                >
                {/* CardHeader */}
                <CardHeader
                    color="blue"
                    floated={false}
                    shadow={false}
                    className="m-0 grid place-items-center rounded-b-none py-8 px-4 text-center"
                    style={{
                        background: mode === 'dark'
                            ? 'rgb(226, 232, 240)'
                            : 'rgb(0, 0, 0)'
                    }}
                >
                    <div className="mb-4 rounded-full border border-white/10 bg-white/10 p-2 text-white">
                        <div className=" flex justify-center">
                            {/* Image  */}
                            <img src="https://i.pinimg.com/564x/87/2e/da/872eda2fad3aae10a6114c23b5b08691.jpg" className="h-20 w-20"
                            />
                        </div>
                    </div>

                    {/* Top Haeding  */}
                    <Typography variant="h4" style={{
                        color: mode === 'dark'
                            ? 'rgb(0, 0, 0)'
                            : 'rgb(226, 226, 226)'
                    }}>
                        Verify yourself Ninja
                    </Typography>
                </CardHeader>

                {/* CardBody */}
                <CardBody>
                    <form className=" flex flex-col gap-4">
                        {/* First Input  */}
                        <div>
                            <Input
                                type="email"
                                label="Enter your identity Code:"
                                name="email"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                        </div>
                        {/* Second Input  */}
                        <div>
                            <Input
                                type="password"
                                label="Type in the secret code:"
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                            />
                        </div>
                    {/* Login Button  */}
                    <Button
                    onClick={login}
                        style={{
                            background: mode === 'dark'
                                ? 'rgb(226, 226, 226)'
                                : 'rgb(0, 0, 0)',
                            color: mode === 'dark'
                                ? 'rgb(0, 0, 0)'
                                : 'rgb(226, 226, 226)'
                        }}>
                        Let me in!
                    </Button>
                </form>
            </CardBody>
        </Card>
    </div>
</div>
);
}
        
        