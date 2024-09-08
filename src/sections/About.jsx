import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'

const About = () => {
    const  [hasCopied , setHasCopied] = useState(false)
    const handleCopy = ()=>{
        navigator.clipboard.writeText("r@k1.com")
        setHasCopied(true)
        setTimeout(() => {
            setHasCopied(false)
        }, 2000);
    }
    return (
        <section className="c-space my-20" id='about'>
            <div className="grid xl:grid-cols-3 xl:grid-rows-3 md:grid-cols-2grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid-1" className='w-full sm:h-[276px] h-fit object-contain' />
                        <div className="">
                            <p className="grid-headtext">Hi , I am Rajkumar</p>
                            <p className="grid-subtext">With 5 years of experience , I have honed my skills in fromtend and backend development with a focus on animated 3d website</p>
                        </div>
                    </div>

                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid2.png" alt="grid-2" className='w-full sm:h-[276px] h-fit object-contain' />
                        <div className="">
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">I specialized in javascript/typescript with a focus on react and nextjs ecosystem</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe height={326} width={326} backgroundColor="rgba(0,0,0,0)" backgroundImageUrl={0.5} showAtmosphere showGraticules
                            globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}/>
                        </div>
                        <div className="">
                            <p className="grid-headtext">I work remotely accross most timezones</p>
                            <p className="grid-subtext">I am based in India , with remote work available</p>
                            <Button name="Contact Me" isBeam={true} containerClass="w-full mt-10"/>
                        </div>
                    </div>

                </div>
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                    <img src="/assets/grid3.png" alt="grid-3" className='w-full sm:h-[266px] h-fit object-contain' />
                    <div className="">
                            <p className="grid-headtext">My passion for coding</p>
                            <p className="grid-subtext">I love solving problems and building things through code . Coding is not just my profession - it is my passion</p>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                    <img src="/assets/grid4.png" alt="grid-4" className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top' />
                    <div className="space-y-2">
                        <p className="grid-subtext text-center">Contact me</p>
                        <div className="copy-container" onClick={handleCopy}>
                            <img src={hasCopied ? "assets/tick.svg" :"assets/copy.svg"} alt="copy" />
                            <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">r@k1.com</p>
                        </div>

                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
