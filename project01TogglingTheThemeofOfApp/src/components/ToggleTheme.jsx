import { useEffect, useState } from "react"

const ToggleTheme = () => {
    const [theme, setTheme] = useState('auto');

    useEffect( () => {
        const root = document.documentElement;
        if (theme === 'auto'){
            const predersDarkScheme = window.matchMedia('(prefers-colors-scheme: dark)');
            root.setAttribute('data-theme', predersDarkScheme.matches ? 'dark' : 'light');
        }else{
            root.setAttribute('data-theme', theme);
        }
    },[theme] )

    const ToggleTheme = () => {
        let newTheme;
        switch (theme) {
            case 'auto':
                newTheme = 'light';
                break;
            case 'light':
                newTheme = 'dark';
                break;
            case 'dark':
                newTheme = 'auto';
                break;
        }
        setTheme(newTheme);
    }

    const renderText = () => {
        switch(theme) {
            case 'auto':
                return 'A';
            case 'light':
                return 'L'
            case 'dark':
                return 'D'
        }
    }

    return (
        <div 
            onClick={ToggleTheme}
            style={{ cursor:'pointer' }}
        >
            {renderText()}
        </div>
    )
}

export default ToggleTheme;