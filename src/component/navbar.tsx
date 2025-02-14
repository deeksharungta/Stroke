import { AiFillGithub } from 'react-icons/ai';
import { MdOutlineDarkMode } from 'react-icons/md';
import { MdOutlineLightMode } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { TbLayoutSidebarRightExpand } from 'react-icons/tb';
import { useThemeProvider } from '../state/themeProvider';

type SidebarType = {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Navbar({ setIsOpen }: SidebarType) {
    const { toggleTheme, setToggleTheme } = useThemeProvider();

    const handleLightmode = () => {
        setToggleTheme(false);
        localStorage.setItem("dark", '');
    };

    const handleDarkmode = () => {
        setToggleTheme(true);
        localStorage.setItem("dark", "true");
    };

    const handleSidebarToggle = () => {
        setIsOpen(true);
    };

    return (
        <nav className={`flex h-full border-b border-b-[#686C76] border-opacity-30 items-center justify-between ${toggleTheme ? 'bg-[#1D1D1D] text-white' : 'bg-white text-black'}`}>
            <div className="ml-8">
                <h1 className="text-xl font-medium">Stroke</h1>
            </div>
            <div className="mr-[4.5%] flex items-center justify-around">
                <div className='mr-6 cursor-pointer'>
                    {toggleTheme ? <MdOutlineLightMode size='1.4rem' onClick={handleLightmode} /> : <MdOutlineDarkMode size='1.4rem' onClick={handleDarkmode} />}
                </div>
                <div className='mr-6'>
                    <button className="border px-4 py-1 rounded-md font-medium">save</button>
                </div>
                <Link to='https://github.com/Davidthecode/Stroke' className='cursor-pointer' target="_blank">
                    <AiFillGithub size='1.3rem' />
                </Link >
                <div className='largeTablet:block hidden ml-6 cursor-pointer'>
                    <TbLayoutSidebarRightExpand size='1.5rem' onClick={handleSidebarToggle} />
                </div>
            </div>
        </nav>
    )
};