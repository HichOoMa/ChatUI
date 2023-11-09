import NotificationsIcon from '@mui/icons-material/Notifications';

function Navbar() {
  return (
    <div className="navbar bg-base-200 shadow-lg">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end mr-4">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <NotificationsIcon />
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-200 shadow">
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Fpng%2F19896008-male-user-avatar-icon-in-flat-design-style-person-signs-illustration&psig=AOvVaw1ryJt6SwbMYpKMWjhHcPFu&ust=1699569591982000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKjqnqC8tYIDFQAAAAAdAAAAABAE" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
