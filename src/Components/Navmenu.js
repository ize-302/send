import { ChevronDown, Logo } from './Icon';
import { NavLink, useLocation } from 'react-router-dom'
import { firstMenuSet, secondMenuSet, thirdMenuSet } from '../menus';


const Navmenu = () => {
  const location = useLocation();

  return (
    <div className='navmenu'>
      {/* // */}
      <div>
        <div className='logo'><Logo /></div>

        {/* // */}
        <div className='menus'>
          <div>
            {/* first set */}
            {firstMenuSet.map((menu, index) => (
              <NavLink key={index} className="menu-link" to={menu.path}>
                <menu.icon active={location.pathname === menu.path ? true : false} />
                {menu.name}</NavLink>
            ))}
            {/* second set */}
            <div className='divider' />
            {secondMenuSet.map((menu, index) => (
              <NavLink key={index} className="menu-link" to={menu.path}>
                <menu.icon active={location.pathname === menu.path ? true : false} />
                {menu.name}</NavLink>
            ))}
          </div>
          <div>
            {/* third sets */}
            {thirdMenuSet.map((menu, index) => (
              <NavLink key={index} className="menu-link" to={menu.path}>
                <menu.icon active={location.pathname === menu.path ? true : false} />
                {menu.name}</NavLink>
            ))}
          </div>
        </div>
      </div>
      {/* // */}
      <div className="navmenu__profile">
        <div className="navmenu__profile-photo"></div>
        <div className='navmenu__content'>
          <div className="navmenu__content-name">Mati Industries</div>
          <div className="navmenu__content-email">Lanremati@gmail.com</div>
        </div>
        <div>
          <ChevronDown />
        </div>
      </div>
    </div>
  );
}

export default Navmenu;