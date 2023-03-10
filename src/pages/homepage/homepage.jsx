import { HomePageNavbar } from '/src/pages/homepage/components/homeNavbar.jsx'
import '/src/styles/animation.css'

export const HomePage = () => {
    return (
        <div className="bg-white-theme-1 dark:bg-dark-theme-1 h-screen max-w-full first-section">
            <div className="main max-w-7xl my-0 mx-auto max-sm:text-xs">
                <HomePageNavbar />
                <div className="flex items-center my-64 max-sm:mx-1">
                    <div className="flex flex-col dark:text-white on-start-fade-left">
                        <span className='text-9xl max-sm:text-4xl'>Just Do It!</span>
                        <span className="text-base dark:text-white-theme-1 break-words max-sm:text-xs">Welcome to JustDoIt Planner, the app that helps you organize your tasks and projects with ease. Whether you work alone or with a team, JustDoIt Planner lets you create plans, assign tasks, set deadlines. </span>
                    </div>
                    <img className='w-96 h-auto art-img max-sm:w-40 on-start-fade-right' src="https://res.cloudinary.com/yato-confession/image/upload/v1678453843/Yato-Confession/planner_art_no_bg_dkqx56.png" alt="art" />
                </div>
            </div>
        </div>
    )
}