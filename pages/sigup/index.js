import React from 'react';
import Link from 'next/link';

import Logo from '../../components/Logo';

// Ant design import
import 'antd/dist/antd.css';
import {
    Input,
    Radio,
    Button
} from 'antd';
import {
    EyeTwoTone,
    EyeInvisibleOutlined,
    UnlockOutlined
} from '@ant-design/icons';


const Sigup = () => {
    return (
    <div className="mt-32 lg:flex place-content-center">
        <div className="lg:w-1/2 xl:max-w-screen-sm">
            <div className="py-12 bg-white lg:bg-white flex flex-row justify-center lg:px-12">
                <Logo></Logo>
            </div>

            <div className="mt-6 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-6 xl:px-24 xl:max-w-2xl">
                <div className="w-80 h-11 flex flex-row lg:text-left">
                    <Link href="/">
                    <h2 className="cursor-pointer text-base text-black hover:text-[#1890ff] font-display font-semibold xl:text-base
                    xl:text-bold sm:mr4 md:mr-10 xl:mr-16">Log in</h2>
                    </Link>
                    <Link href="/sigup">
                    <h2 className="cursor-pointer text-base text-[#1890ff]  font-display font-semibold xl:text-base
                    xl:text-bold">Sign Up</h2>
                    </Link>
                </div>

            <div className="mt-6 flex flex-col">
                <form>
                    <Input.Group>
                        <Input className="mt-6"
                            type="email" name="email" id="email" size="large" placeholder="Email" />
                    <Input.Password className="mt-6"
                        size="large"
                        placeholder="Password(6 digits at least, case sensitive)"
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
                    <Input.Password className="mt-6"
                        size="large"
                        placeholder="Comfirm password"
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
                    </Input.Group>
                    <div className="mt-6">
                        <div className="flex justify-left items-center mb-8">
                        <Radio.Group name="type user" defaultValue='user'>
                        <Radio value='admin'>Admin</Radio>
                        <Radio value='user'>User</Radio>
                        </Radio.Group>
                        </div>
                        <div className="flex justify-left items-center">
                            <a className="text-base font-display font-semibold text-[#1890ff] hover:text-indigo-800
                            cursor-pointer">
                                Forgot your password?
                            </a>
                        </div>
                    </div>
                    <div className="w-44 h-10 mt-6 text-base hover:shadow-inner focus:outline-none transition duration-500
                    ease-in-out transform hover:-translate-x hover:scale-105">
                        <Link href="/monitor">
                        <Button type="primary" size='large'>Register</Button>
                        </Link>
                    </div>
                </form>
            </div>
                
            </div>
        </div>
    </div> 
    );
}

export default Sigup;
