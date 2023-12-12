import Image from "next/image";
import Link from "next/link";
import componentsImg from "./assets/components.svg";
import { DownArrow, RightArrow } from "./icons";
import "./home.css";

export default function Home() {
	return (
		<main className="">
			<article className="grid lg:grid-cols-2">
				<div className="px-8 py-20 md:px-20 lg:py-48">
					<h1 className="text-5xl font-semibold text-transparent md:text-6xl gradient">
						Let me try something weird...
					</h1>
					<div className="flex gap-2 mt-8">
						<Link
							href="/dashboard"
							className="flex content-center gap-2 px-4 py-2 font-semibold text-white transition-colors duration-200 rounded-lg bg-primary-600 hover:bg-primary-700"
						>
							Dashboard
							<div className="m-auto">
								<RightArrow />
							</div>
						</Link>
						<Link
							className="flex gap-2 px-4 py-2 font-semibold text-gray-600 transition duration-100 rounded-lg hover:text-gray-800"
							href="/semipublic"
						>
							Semipublic
						</Link>
					</div>
				</div>
			</article>
		</main>
	);
}
