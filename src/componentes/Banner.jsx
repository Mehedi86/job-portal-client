import React from 'react';
import { motion } from "motion/react"

const Banner = () => {
    return (
        <div className="hero bg-base-200">
            <div className="flex p-8 items-center flex-col lg:flex-row-reverse justify-center">
                <div>
                    <motion.div
                        animate={{ y: [0, 50, 0] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className='w-40 h-40 bg-amber-400 rounded-t-[40px] rounded-br-[40px] border-l-8 border-b-8 border-blue-600'>
                    </motion.div>
                    <motion.div
                        animate={{ x: [0, 50, 0] }}
                        transition={{ duration: 10, delay: 5, repeat: Infinity }}
                        className='w-40 h-40 bg-amber-400 rounded-t-[40px] rounded-br-[40px] border-l-8 border-b-8 border-blue-600'>
                    </motion.div>
                </div>
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold">The way to get Your new Job!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;