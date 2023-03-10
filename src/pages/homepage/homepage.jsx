import { GoogleLogin } from '/src/service/googleAuth.jsx'
import '/src/styles/toggleTheme.css'
import { ToggleThemeButton } from '/src/components/toggleThemeButton.jsx'


export const HomePage = () => {
    return (
        <div className="bg-white-theme-1 dark:bg-dark-theme-1 h-screen">
            <div className="main max-w-7xl my-0 mx-auto h-screen ">
                <nav className='flex justify-between dark:text-white'>
                    <div className="flex items-center">
                        <img className="w-16" src="/src/assets/justdoit.png" alt="justdoit" />
                        <span className='font-black dark:text-white'>JustDoIt</span>
                    </div>
                    <div className="flex items-center gap-16">
                        <a className='font-bold' href=''>Feature</a>
                        <a className='font-bold' href=''>Solution</a>
                        <a className='font-bold' href=''>About Us</a>
                        <a className='font-bold' href=''>Blog</a>
                    </div>
                    <div className="flex items-center">
                        <ToggleThemeButton />
                    </div>
                    <div className="flex items-center">
                        <GoogleLogin />
                    </div>
                </nav>
            </div>
        </div>
    )
}