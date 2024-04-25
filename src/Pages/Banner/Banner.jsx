import { TypeAnimation } from 'react-type-animation';
import './Banner.css'

const Banner = () => {
    return (
        <div className="">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-24">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-6xl">
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed once, initially
                                'Welcome To Jk Elite Securities',
                                2000,
                                'A security product warehouse of Jk Elite Securities.',
                                1500,
                                'Only for the authorized officials of Jk Elite Securities',
                                5000,
                            ]}
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <div className=''>
                        <p className="mt-6 text-lg font-semibold leading-8 text-center text-gray-300">
                            Explore JK Elite Securities Products, where cutting-edge security solutions meet unrivaled expertise, ensuring safety and peace of mind for every need.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;