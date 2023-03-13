import { HomePageNavbar } from '/src/pages/homepage/components/homeNavbar.jsx'
import { observer } from '/src/utils/checkIntersection.js'
import '/src/styles/animation.css'
import { useEffect } from 'react'


export const HomePage = () => {

    useEffect(() => {
        const hiddenElementLeft = document.querySelectorAll('.hidden-fade-left')
        const hiddenElementRight = document.querySelectorAll('.hidden-fade-right')
        const hiddenElementUp = document.querySelectorAll('.hidden-fade-up')
        const hiddenElementDown = document.querySelectorAll('.hidden-fade-down')

        hiddenElementLeft.forEach((element) => {
            observer('on-start-fade-left').observe(element)
        })
        hiddenElementRight.forEach((element) => {
            observer('on-start-fade-right').observe(element)
        })
        hiddenElementUp.forEach((element) => {
            observer('on-start-fade-up').observe(element)
        })
        hiddenElementDown.forEach((element) => {
            observer('on-start-fade-down').observe(element)
        })

    }, [])

    return (
        <>
            <div className="bg-white-theme-1 dark:bg-dark-theme-1 max-w-full max-sm:text-xs">
                <div className="max-w-7xl my-0 mx-auto dark:bg-dark-theme-1">
                    <HomePageNavbar />
                </div>
            </div>
            <div className="flex items-center justify-center bg-white-theme-1 dark:bg-dark-theme-1 h-screen max-w-full first-section" id='main-page'>
                <div className="main max-w-7xl my-0 mx-auto max-sm:text-xs">
                    <div className="flex items-center justify-center max-sm:mx-1">
                        <div className="flex flex-col dark:text-white hidden-fade-left">
                            <span className='text-9xl max-sm:text-4xl'>Just Do It!</span>
                            <span className="text-base dark:text-white-theme-1 break-words max-sm:text-xs">Welcome to JustDoIt Planner, the app that helps you organize your tasks and projects with ease. Whether you work alone or with a team, JustDoIt Planner lets you create plans, assign tasks, set deadlines. </span>
                        </div>
                        <img className='w-96 h-auto art-img max-sm:w-40 hidden-fade-right' src="https://res.cloudinary.com/yato-confession/image/upload/v1678453843/Yato-Confession/planner_art_no_bg_dkqx56.png" alt="art" />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center bg-white-theme-2 dark:bg-dark-theme-2 h-screen max-w-full first-section" id='feature'>
                <div className="main max-w-7xl my-0 mx-auto max-sm:text-xs">
                    <div className="flex items-center justify-center max-sm:mx-1">
                        <div className="flex flex-col dark:text-white hidden-fade-up">
                            <span className='text-9xl max-sm:text-4xl'>Feature</span>
                            <span className="text-base dark:text-white-theme-1 break-words max-sm:text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, voluptatum! Ipsum iste perspiciatis ad cum, magnam aperiam quos, deleniti beatae voluptas optio temporibus, labore illum officiis? Atque facilis praesentium sint.</span>
                        </div>
                        <img className='w-96 h-auto art-img max-sm:w-40 hidden-fade-down' src="https://res.cloudinary.com/yato-confession/image/upload/v1678453843/Yato-Confession/planner_art_no_bg_dkqx56.png" alt="art" />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center bg-white-theme-1 dark:bg-dark-theme-1 h-screen max-w-full first-section" id='solution'>
                <div className="main max-w-7xl my-0 mx-auto max-sm:text-xs">
                    <div className="flex items-center justify-center max-sm:mx-1">
                        <div className="flex flex-col dark:text-white hidden-fade-left">
                            <span className='text-9xl max-sm:text-4xl'>Solution</span>
                            <span className="text-base dark:text-white-theme-1 break-words max-sm:text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem unde enim illum dolores architecto explicabo soluta animi vel, exercitationem, modi error nostrum est qui placeat odit, dicta delectus eum consectetur.</span>
                        </div>
                        <img className='w-96 h-auto art-img max-sm:w-40 hidden-fade-right' src="https://res.cloudinary.com/yato-confession/image/upload/v1678453843/Yato-Confession/planner_art_no_bg_dkqx56.png" alt="art" />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center bg-white-theme-2 dark:bg-dark-theme-2 h-screen max-w-full first-section" id='about'>
                <div className="main max-w-7xl my-0 mx-auto max-sm:text-xs">
                    <div className="flex items-center justify-center max-sm:mx-1">
                        <div className="flex flex-col dark:text-white hidden-fade-up">
                            <span className='text-9xl max-sm:text-4xl'>About us</span>
                            <span className="text-base dark:text-white-theme-1 break-words max-sm:text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, voluptatum! Ipsum iste perspiciatis ad cum, magnam aperiam quos, deleniti beatae voluptas optio temporibus, labore illum officiis? Atque facilis praesentium sint.</span>
                        </div>
                        <img className='w-96 h-auto art-img max-sm:w-40 hidden-fade-down' src="https://res.cloudinary.com/yato-confession/image/upload/v1678453843/Yato-Confession/planner_art_no_bg_dkqx56.png" alt="art" />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center bg-white-theme-1 dark:bg-dark-theme-1 h-screen max-w-full first-section" id='blog'>
                <div className="main max-w-7xl my-0 mx-auto max-sm:text-xs">
                    <div className="flex items-center justify-center max-sm:mx-1">
                        <div className="flex flex-col dark:text-white hidden-fade-left">
                            <span className='text-9xl max-sm:text-4xl'>Blog</span>
                            <span className="text-base dark:text-white-theme-1 break-words max-sm:text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem unde enim illum dolores architecto explicabo soluta animi vel, exercitationem, modi error nostrum est qui placeat odit, dicta delectus eum consectetur.</span>
                        </div>
                        <img className='w-96 h-auto art-img max-sm:w-40 hidden-fade-right' src="https://res.cloudinary.com/yato-confession/image/upload/v1678453843/Yato-Confession/planner_art_no_bg_dkqx56.png" alt="art" />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center bg-white-theme-1 dark:bg-dark-theme-1  max-w-full first-section h-8">
                <div className="main max-w-7xl my-0 mx-auto max-sm:text-xs">
                <span className="text-base dark:text-white-theme-1 break-words max-sm:text-xs">Yato God All Right Reserved.</span>
                </div>
            </div>
        </>
    )
}