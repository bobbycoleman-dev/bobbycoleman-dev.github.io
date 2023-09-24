import { useEffect, useState } from "react";
import portraitColor from "../assets/portrait-color.jpeg";
import portraitBw from "../assets/portrait-bw.jpg";
import BackgroundCarousel from "./BackgroundCarousel";

const ImageCard = () => {
	return (
		<div className="card lg:card-side bg-base-100 shadow-lg shadow-primary">
			<figure>
				<img className="w-80" src={portraitColor} alt="portrait-color" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">I'm Bobby, and I'm a Software Developer</h2>
				<p>Click the button to listen on Spotiwhy app.</p>
				<BackgroundCarousel />
				<div className="card-actions justify-center">
					<button className="btn btn-primary">Resume</button>
				</div>
			</div>
		</div>
	);
};

export default ImageCard;
