const toggleTheme = () => {
    const themeSwitchClass = document.querySelector('.theme-switch')
    // we remove class if it exists, otherwise we add it
    // that's how toggle function works
    themeSwitchClass.classList.toggle('light-theme')
    
    const darkClass = document.querySelector('#root')
    darkClass.classList.toggle('dark')
}

export const ToggleThemeButton = () => {
    return (
        <div onClick={toggleTheme} className="theme-switch">
            <div className="switch"></div>
        </div>
    )
}