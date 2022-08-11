/* eslint-disable react/display-name */
import Link from "next/link";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import Typical from 'react-typical'
import React from "react";

import GithubIcon from "../components/icons/Github"; 
import LinkedinIcon from "../components/icons/Linkedin";
import TwitterIcon from "../components/icons/Twitter";


const TypingAnimation = React.memo(
  ()=>{
    return (
      <Typical
      loop= {3}
      wrapper="p"
      steps={[
        "React Developer",
        2000,
        "Software Engineer",
        2000,
        "Youtuber",
        2000,
      ]}
      />
    )
  },
  (props,prevProps) => true
)


export default function Home() {
  return (
    <Layout title={"Portfolio"} description={"My portfolio"}>
      
      <motion.img
        src="/images/ball-2.svg"
        alt="ball1"
        className="hidden md:block h-auto absolute top-38 right-10 z-[1]"
        whileHover={{ y: -10, rotate: -90, transition: { duration: 0.3 } }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      ></motion.img>
      <motion.img
        src="/images/ball-1.svg"
        alt="ball2"
        className="hidden md:block h-auto absolute bottom-20 left-10 z-[1]"
        whileHover={{ y: -10, rotate: 180, transition: { duration: 0.4 } }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      ></motion.img>
      <main className="w-full h-full">
        <section className="h-full max-w-5xl mx-auto pt-16 md:pt-8">
            <div className="flex flex-col items-center justify-center md:items-start">
              <h4 className="text-lg text-gray-800 dark:text-white">
                <span className="text-xl font-normal">Hello,</span>I'm
              </h4>
              <h1 className="mt-5 text-7xl font-extrabold tracking-normal text-gray-800 uppercase md: text-4xl md:mt-3 dark:text-white">
                Elif Emre
              </h1>
              <div className="mt-5 text-xl font-normal text-transparent bg-gradient-to-r from-pink-500 via-indigo-400 to-purple-700 bg-clip-text md:mt-3"> 
              <TypingAnimation />
               </div>

               <div className="flex item-center mt-8 space-x-6 md:mt-4"> 
               <motion.a href="https://github.com/elselif" target={"_blank"} rel="noopener noreferrer" className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200" whileHover={{scale:1.1}}> 
                <GithubIcon className={"h-8 w-8 fill-current"}></GithubIcon> 
              </motion.a> 
               <motion.a href="https://twitter.com/elifeemr" target={"_blank"} rel="noopener noreferrer" className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200" whileHover={{scale:1.1}}> 
                <TwitterIcon className={"h-8 w-8 fill-current"}></TwitterIcon> 
              </motion.a> 
               <motion.a href="https://www.linkedin.com/in/elifemr/" target={"_blank"} rel="noopener noreferrer" className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200" whileHover={{scale:1.1}}> 
                <LinkedinIcon className={"h-8 w-8 fill-current"}></LinkedinIcon> 
              </motion.a> 
              </div>

            </div>


          {/* Code Area */}
          <article className="mt-3 prose md:mt-4 md:prose-lg dark:prose-dark">
            <div>
              <pre>
                <code className="language-js">
                  <div className="flex items-center py-0 my-0 space-x-4 text-gray-500">
                    <span>// Portfolio.js </span>
                  </div>
                  <p>
                    <span className="text-gray-500">//</span>{" "}
                    <span className="text-purple-300">Todo:</span> You can drag
                    these balloons I'm really in love with them 🎈🎈
                  </p>

                  <div className="flex items-center space-x-4">
                    <img
                      src="https://media-exp1.licdn.com/dms/image/C4D03AQGmKDlZu2B7dA/profile-displayphoto-shrink_400_400/0/1648229387938?e=1665619200&v=beta&t=pj1WKnsC-QNsnRWcDSTVKgYXxuctauQIRQo0s1NuJbw"
                      alt="Me"
                      className="w-10 h-10 rounded-full"
                    />

                    <div className="">
                      <p className="text-sm">
                        <span className="text-pink-300"> {">"} </span> const
                        techWeb
                        <span className="font-bold text-pink-300">2</span> =
                        ["Reactjs", "Nextjs", "Graphql", "Nodejs"];{" "}
                      </p>
                      <p className="text-sm">
                        <span className="text-pink-300"> {">"} </span> const
                        techWeb
                        <span className="font-bold text-pink-300">3</span> =
                        ["Solidity", "Web3.js", "Ethers.js"];{" "}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-8">
                    <Link href="/projects">
                      <a className="transition duration-300">Projects</a>
                    </Link>

                    <a
                      href="https://www.youtube.com/channel/UCyvnHggf5yl8k2mbRjQyLeQ"
                      target={"_blank"}
                      rel="noopener noreferrer"
                      className="transition duration-300"
                    >
                      Youtube
                    </a>
                  </div>
                </code>
              </pre>
            </div>
          </article>
            
        </section>
      </main>
      
    </Layout>
  );
}
