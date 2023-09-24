import { background } from "../constants";

const BackgroundCarousel = () => {
	return (
		<div className="carousel w-full text-center h-40 border rounded-md">
			{background.map((job, idx) => {
				return (
					<div key={idx} id={`slide${idx}`} className="carousel-item relative w-full flex flex-col">
						<p className="w-full">{job.company}</p>
						<p className="w-full">{job.position}</p>
						<p className="w-full">{job.dates}</p>
						<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
							<a
								href={`${idx == 0 ? `#slide${background.length - 1}` : `#slide${idx - 1}`}`}
								className="btn btn-circle">
								❮
							</a>
							<a
								href={`${idx == background.length - 1 ? `#slide${0}` : `#slide${idx + 1}`}`}
								className="btn btn-circle">
								❯
							</a>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default BackgroundCarousel;
