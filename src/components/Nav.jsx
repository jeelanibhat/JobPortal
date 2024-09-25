import jbLogo from '../assets/jb-logo.png'
import { NavLink } from 'react-router-dom'

const Nav = () => {

    const linkClass = ({isActive}) =>
        isActive ? 'text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
    

    return (
        <nav className="bg-blue-900 border-b border-white-100">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div
                        className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
                    >
                        <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
                        {/* <span className="hidden md:block text-white text-2xl font-bold ml-2"
                            >React Jobs</span> */}
                            <img
                                className="h-10 w-auto"
                                src={jbLogo}
                                alt="React Jobs"
                            />

                        </NavLink>
                        <div className="md:ml-auto">
                            <div className="flex space-x-2">
                                <NavLink
                                    to="/"
                                    className={linkClass}
                                >Home</NavLink>
                                <NavLink
                                    to="/jobs"
                                    className={linkClass}
                                >Jobs</NavLink>
                                <NavLink
                                    to="/addJob"
                                    className={linkClass}
                                >Add Job</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav