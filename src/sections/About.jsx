import Card from "../components/Card"
import { useRef } from "react"
import { Globe } from "../components/Globe";
import EmailButton from "../components/EmailButton"
import { Frameworks } from "../components/Frameworks";

const About = () => {
    const grid2Container = useRef();

  return (
   <section className='c-spcae section-spacing'>
    <h2 className="text-heading">About Me</h2>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
            <img 
            src="src/assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3]
            md:left-50 md:inset-y-10 large:scale-[2.5]"
            />
            <div className="z-10">
                <p className="headtext">Hi, I'm Hammad</p>
                <p className="subtext">
                    I am first year Computer Science student, and over the past few years
                    I have honed my Web-Development skills. And right now I am focusing on
                    AI Engineering and Machine Learning Modeling.
                </p>
            </div>
            <div className="absolute inset-x-0 pointer-events-none -bottom-4
            h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* grid 2 */}
        <div className="grid-default-color grid-2">
            <div ref={grid2Container} className="flex items-center justify-center w-full h-full">
                <p className="flex items-end text-5xl text-gray-500">
                    Algorithms that learn
                </p>

            <Card 
            style={{ rotate: "75deg", top: "30%", left: "20%"}}
            text="GRASP"
            containerRef={grid2Container}
            />
            <Card 
            style={{ rotate: "-30deg", top: "60%", left: "45%"}}
            text="SOLID"
            containerRef={grid2Container}
            />
            <Card 
            style={{ rotate: "90deg", bottom: "30%", left: "70%"}}
            text="Design Patterns"
            containerRef={grid2Container}
            />
            <Card 
            style={{ rotate: "-45deg", top: "55%", left: "0%"}}
            text="Train Models"
            containerRef={grid2Container}
            />
            <Card 
            style={{ rotate: "20deg", top: "10%", left: "38%"}}
            text="Enhance AI"
            containerRef={grid2Container}
            />
            <Card 
            style={{ rotate: "30deg", top: "70%", left: "70%"}}
            image="src/assets/logos/csharp-pink.png"
            containerRef={grid2Container}
            />
            <Card 
            style={{ rotate: "-45deg", top: "70%", left: "25%"}}
            image="src/assets/logos/dotnet-pink.png"
            containerRef={grid2Container}
            />
            <Card 
            style={{ rotate: "-45deg", top: "5%", left: "10%"}}
            image="src/assets/logos/blazor-pink.png"
            containerRef={grid2Container}
            />
            
            </div>
        </div>

        {/* grid 3 */}
        <div className="grid-black-color grid-3">
            <div className="z-10 w-[50%]">
                <p className="headtext">Time Zone</p>
                <p className="subtext">I'm based in Malaysia, and available for work world-wide.</p>
            </div>
            <figure className="absolute left-[30%] top-[10%]"> 
                <Globe />

            </figure>
        </div>

        {/* grid 4 */}
        <div className="grid-special-color grid-4">
            <div className="flex flex-col items-center justify-center gap-4 size-full">
                <p className="text-center headtext">Let's connect and build projects together!</p>
                <EmailButton />
            </div>
        </div>

        {/* grid 5 */}
        <div className="grid-default-color grid-5">
            <div className="z-10 w-[50%]">
                <p className="headtext">
                    Tech Stack
                </p>
                <p className="subtext">
                    I specialise in a variety of languages, frameworoks, and tools that
                    allow me to build robust and scalable applications.

                </p>

            </div>


            <div className="absolute inset-y-0 md:inset-y-9 w-full h-full
            start-[50%] md:scale-125 ">
                <Frameworks />

            </div>
        </div>

    </div>

   </section>
  )
}

export default About
  