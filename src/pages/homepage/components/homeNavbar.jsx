import { GoogleLogin } from '/src/service/googleAuth.jsx'
import { ToggleThemeButton } from '/src/components/toggleThemeButton.jsx'
import '/src/styles/toggleTheme.css'


export const HomePageNavbar = () => {
    return (
        <nav className='flex justify-between dark:text-white '>
            <div className="flex items-center">
                <img className="w-16 max-sm:w-8" src="https://res.cloudinary.com/yato-confession/image/upload/v1678445189/Yato-Confession/rlfkzmgbr78atdv1oxo8.png" alt="justdoit" />
                <span className='font-black dark:text-white max-sm:hidden'>JustDoIt</span>
            </div>
            <div className="flex items-center gap-16 max-sm:gap-4">
                <a className='font-bold' href=''>Feature</a>
                <a className='font-bold' href=''>Solution</a>
                <a className='font-bold' href=''>About us</a>
                <a className='font-bold' href=''>Blog</a>
            </div>
            <div className="flex items-center">
                <ToggleThemeButton />
            </div>
            <div className="flex items-center select-none">
                <GoogleLogin />
            </div>
        </nav>
    )
}