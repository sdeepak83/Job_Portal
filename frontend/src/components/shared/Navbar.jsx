import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { Avatar } from '../ui/avatar'
import { AvatarImage } from '@radix-ui/react-avatar'
import { LogOut, User2 } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { USER_END_POINT } from '@/utils/constant'
import axios from 'axios'
import { setUser } from '@/redux/authSlice'
import { toast } from 'sonner'


const Navbar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { user } = useSelector(store => store.auth)

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${USER_END_POINT}/logout`,
                { withCredentials: true })
            if (res.data.success) {
                dispatch(setUser(null));
                navigate("/")
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error)
            toast.error(error.responce.data.message);
        }
    }
    return (
        <div className='bg-white '>
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
                <div>
                    <h1 className='text-2xl font-bold'>Job <span className=' text-red-700'>Portal</span></h1>
                </div>
                <div className='flex item-center gap-5'>
                    <ul className=' flex items-center font-medium gap-5'>
                        {
                            user && user.role === "recruiter" ? (
                                <>
                                    <li><Link to='/admin/companies'>Companies</Link></li>
                                    <li><Link to='/admin/jobs'>Jobs</Link></li>
                                </>
                            ) : (
                                <>
                                    <li><Link to='/'>Home</Link></li>
                                    <li><Link to='/jobs'>Jobs</Link></li>
                                    <li><Link to='/browse'>Browse</Link></li>
                                </>
                            )
                        }

                    </ul>
                    {
                        (!user) ?
                            <div className='flex items-center gap-3'>
                                <Link to='/login'>
                                    <Button variant="outline">Login</Button>
                                </Link>
                                <Link to='/signup'>
                                    <Button className="bg-purple-600 hover:bg-purple-800" >Signup</Button>
                                </Link>


                            </div>
                            : (


                                <Popover >
                                    <PopoverTrigger asChild>
                                        <Avatar className="cursor-pointer">
                                            <AvatarImage src="https://github.com/shadcn.png" alt='@shadcn' />
                                        </Avatar>

                                    </PopoverTrigger>
                                    <PopoverContent className="w-80">
                                        <div
                                            initial={{ opacity: 0, x: 100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -100 }}
                                            transition={{ duration: 0.3 }}

                                            className='flex gap-4 space-y-2'>
                                            <Avatar className="cursor-pointer">
                                                <AvatarImage src="https://github.com/shadcn.png" alt='@shadcn' />
                                            </Avatar>
                                            <div>
                                                <h4 className=' font-medium'>{user?.fullname}</h4>
                                                <p className=' text-sm text-muted-foreground'>{user?.profile?.bio}</p>
                                            </div>
                                        </div>
                                        <div className=' flex flex-col text-gray-600'>
                                            {
                                                user && user.role === 'student' && (
                                                    <div className=' flex items-center gap-4 w-fit  cursor-pointer py-3'>
                                                        <User2 />
                                                        <Button variant="link" className=" border-none"><Link to='/profile'>view Profile</Link></Button>
                                                    </div>
                                                )
                                            }

                                            <div className=' flex items-center gap-4 w-fit  cursor-pointer'>
                                                <LogOut />
                                                <Button variant="link" onClick={logoutHandler}>Logout</Button>
                                            </div>

                                        </div>
                                    </PopoverContent>
                                </Popover>
                            )}
                </div>

            </div>

        </div>
    )
}

export default Navbar