import React, { useEffect, useState } from 'react';
import { Navbar, TextInput, Button, Dropdown, Avatar } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useSelector , useDispatch} from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';
import { signoutSuccess } from '../redux/user/userSlice';
export default function Header() {
  const path = useLocation().pathname;
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {currentUser} = useSelector(state =>state.user) 
  const {theme} = useSelector(state=>state.theme)
  const [searchTerm, setSearchTerm] = useState('');
  console.log(searchTerm);
  useEffect(()=>{
    const urlParams = new  URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if(searchTermFromUrl){
      setSearchTerm(searchTermFromUrl);
    }

  }, [location.search]);
  const handleSignout = async () => {
    try {
        const res = await fetch('/api/user/signout', {
            method : 'POST',
        })
        const data = res.json();
        if(!res.ok){
            console.log(data.message)
        }else{
            dispatch(signoutSuccess())
        }
    } catch (error) {
        console.log(error.message);
    }
}
const handleSubmit = (e) => {
  e.preventDefault();
  const urlParams = new URLSearchParams(location.search);
  urlParams.set('searchTerm', searchTerm);
  const searchQuery = urlParams.toString();
  navigate(`/search?${searchQuery}`);

}
  return (
    <Navbar className='border-b-2'>
      <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span className='px-2 py-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg text-white'>Sidharth's Blog</span>
      </Link>
      <form onSubmit={handleSubmit}>
        <TextInput
          type='text'
          placeholder='Search...'
          icon={AiOutlineSearch}
          className='hidden lg:inline'
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
        />
      </form>
      <Button className='w-12 h-10 lg:hidden' color='gray'>
        <AiOutlineSearch />
      </Button>
      <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 hidden sm:inline' color='gray' pill 
        onClick={()=>dispatch(toggleTheme())}>
          {theme === 'light' ? <FaSun /> : <FaMoon/>}
          
        </Button>
        {currentUser ? (
          <Dropdown
            arrowIcon = {false}
            inline
            label={
              <Avatar 
              alt='user'
              img={currentUser.profilePicture}
              rounded
              />
            }>
              <Dropdown.Header>
                <span>@{currentUser.username}</span>
              </Dropdown.Header>
              <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item>Profile</Dropdown.Item>
              </Link>
              <Dropdown.Divider/>
              <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
          </Dropdown>

        ) : (
           <Link to='/sign-in'>
          <Button gradientDuoTone='redToYellow'>
            Sign In
          </Button>
        </Link>
        )}
       
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={'div'}>
          <Link to='/'>
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={'div'}>
          <Link to='/about'>
            About
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={'div'}>
          <Link to='/projects'>
            Projects
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
