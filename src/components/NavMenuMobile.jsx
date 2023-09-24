const NavMenuMobile = () => {
	return (
		<details className="dropdown dropdown-bottom dropdown-end">
			<summary className="m-1 btn bg-transparent border-none">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					className="inline-block w-5 h-5 stroke-current">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M4 6h16M4 12h16M4 18h16"></path>
				</svg>
			</summary>
			<ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-48 text-center">
				<li>
					<a>About</a>
				</li>
				<li>
					<a>Projects</a>
				</li>
			</ul>
		</details>
	);
};

export default NavMenuMobile;
