import heroImg from "../assets/header-img1.png";

const Hero = () => {
	return (
		<div className="hero min-h-screen" style={{ backgroundImage: `url(${heroImg})` }}>
			{/* <div className="hero-overlay"></div> */}
			<div className="hero-content text-center text-neutral-content">
				<div className="max-w-md text-white -translate-y-20">
					<h1 className="mb-2 text-6xl font-bold">Bobby Coleman</h1>
					<p className="mb-2">certified nerd. coffee lover. software developer</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;
