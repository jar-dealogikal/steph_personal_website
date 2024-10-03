"use client";

import { useState } from "react";

import { Dialog, DialogPanel } from "@headlessui/react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import img1 from "../image/img1.jpg";
import img3 from "../image/img3.jpg";
import img6 from "../image/img6.jpg";
import img2 from "../image/img2.jpg";
import img4 from "../image/img4.jpg";
import img5 from "../image/img5.jpg";
import img7 from "../image/img7.jpg";
import img8 from "../image/img8.jpg";
import img9 from "../image/img9.jpg";
import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";
import Footer from "./Footer";

const navigation = [
	{ name: "About", href: "#about" },
	{ name: "Blog Post", href: "#blog" },
	{ name: "Photos", href: "#photos" },
	{ name: "Contact", href: "#footer" },
];
const posts = [
	{
		id: 1,
		imageUrl: img3,
	},
	{
		id: 2,
		imageUrl: img5,
	},
	{
		id: 3,
		imageUrl: img2,
	},
];

const photos1 = [
	{
		id: 1,
		img: img1,
	},
	{
		id: 2,
		img: img2,
	},
	{
		id: 3,
		img: img3,
	},
	{
		id: 4,
		img: img4,
	},
	{
		id: 5,
		img: img5,
	},
	{
		id: 6,
		img: img6,
	},
	{
		id: 7,
		img: img7,
	},
	{
		id: 8,
		img: img8,
	},
	{
		id: 9,
		img: img9,
	},
];

export default function Example() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<div className="bg-white">
			{/* Header */}
			<header className="absolute inset-x-0 top-0 z-50">
				<nav
					aria-label="Global"
					className="flex items-center justify-between p-6 lg:px-8"
				>
					<div className="flex lg:flex-1">
						<a href="/#" className="-m-1.5 p-1.5">
							<span className="sr-only">Your Company</span>
							<img
								alt=""
								src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
								className="h-8 w-auto"
							/>
						</a>
					</div>
					<div className="flex lg:hidden">
						<button
							type="button"
							onClick={() => setMobileMenuOpen(true)}
							className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
						>
							<span className="sr-only">Open main menu</span>
							<Bars3Icon aria-hidden="true" className="h-6 w-6" />
						</button>
					</div>
					<div className="hidden lg:flex lg:gap-x-12">
						{navigation.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="text-sm font-bold leading-6 text-white hover:bg-[#de39ff] px-5 py-2 rounded-full"
							>
								{item.name}
							</a>
						))}
					</div>
				</nav>
				<Dialog
					open={mobileMenuOpen}
					onClose={setMobileMenuOpen}
					className="lg:hidden"
				>
					<div className="fixed inset-0 z-50" />
					<DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
						<div className="flex items-center justify-between">
							<a href="/#" className="-m-1.5 p-1.5">
								<span className="sr-only">Your Company</span>
								<img
									alt=""
									src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
									className="h-8 w-auto"
								/>
							</a>
							<button
								type="button"
								onClick={() => setMobileMenuOpen(false)}
								className="-m-2.5 rounded-md p-2.5 text-gray-700"
							>
								<span className="sr-only">Close menu</span>
								<XMarkIcon aria-hidden="true" className="h-6 w-6" />
							</button>
						</div>
						<div className="mt-6 flow-root">
							<div className="-my-6 divide-y divide-gray-500/10">
								<div className="space-y-2 py-6">
									{navigation.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
										>
											{item.name}
										</a>
									))}
								</div>
							</div>
						</div>
					</DialogPanel>
				</Dialog>
			</header>

			<main>
				{/* Hero section */}
				<div className="relative isolate overflow-hidden pb-16 pt-14 sm:pb-20">
					<img
						alt=""
						src={img3}
						className="absolute inset-0 -z-10 h-full w-full object-cover"
					/>
					<div
						aria-hidden="true"
						className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
					>
						<div
							style={{
								clipPath:
									"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
							}}
							className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
						/>
					</div>
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="mx-auto py-32 sm:py-48 lg:py-56 ">
							<div className="text-center bg-gray-500/30 py-10 rounded-lg ">
								<h1 className="text-balance text-4xl font-serif font-bold tracking-tight sm:text-8xl bg-gradient-to-r from-cyan-600 via-rose-500 to-amber-900 bg-clip-text text-transparent">
									WELCOME TO MY PERSONAL WEBSITE
								</h1>
								<p
									className="mt-10 text-lg leading-8 text-gray-200 mx-32
                "
								>
									I am positive thinker and independent woman. I accept
									challenges and battles of my life. However I constantly
									setting goals for myself. I always choose to unwind to have a
									peace of mind
								</p>
								<div className="mt-10 flex items-center justify-center gap-x-6">
									<a
										href="https://www.facebook.com/stephanie.rosales.1088"
										target="_blank"
										rel="noopener noreferrer"
										className="cursor-pointer"
									>
										<FaFacebook className="h-7 w-7 text-[#de39ff] hover:text-pink-500" />
									</a>
									<a
										href="https://www.instagram.com/stephaniedianrosales/?fbclid=IwY2xjawFrDplleHRuA2FlbQIxMAABHWf1elYNYrwOlE6LROizCKANOgHIBg653gjPGbzPI96F90_PslAfQwMaqQ_aem_6CXdHMDoBPBs1XWUHbxiGA"
										target="_blank"
										rel="noopener noreferrer"
										className="cursor-pointer"
									>
										<FaInstagram className="h-7 w-7 text-[#de39ff] hover:text-pink-400" />
									</a>
									<a
										href="mailto:rosalesstephaniedian@gmail.com"
										className="cursor-pointer"
									>
										<FaEnvelope className="h-7 w-7 text-[#de39ff] hover:text-pink-500" />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div
						aria-hidden="true"
						className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
					>
						<div
							style={{
								clipPath:
									"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
							}}
							className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
						/>
					</div>
				</div>

				{/* Testimonial section */}

				<div
					id="about"
					className="relative z-10 mt-32 bg-pink-900 pb-20 sm:mt-56 sm:pb-24 xl:pb-0"
				>
					<div aria-hidden="true" className="absolute inset-0 overflow-hidden">
						<div className="absolute left-[calc(50%-19rem)] top-[calc(50%-36rem)] transform-gpu blur-3xl">
							<div
								style={{
									clipPath:
										"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
								}}
								className="aspect-[1097/1023] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25"
							/>
						</div>
					</div>
					<div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
						<div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
							<h1 className="text-white text-center text-5xl font-serif font-bold">
								About Me
							</h1>
							<figure className="relative isolate pt-6 sm:pt-12">
								<svg
									fill="none"
									viewBox="0 0 162 128"
									aria-hidden="true"
									className="absolute left-0 top-0 -z-10 h-32 stroke-white/20"
								>
									<path
										d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
										id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
									/>
									<use x={86} href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" />
								</svg>
								<blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
									<p>
										I am positive thinker and independent woman. I accept
										challenges and battles of my life. However I constantly
										setting goals for myself. I always choose to unwind to have
										a peace of mind
									</p>
								</blockquote>
								<figcaption className="mt-8 text-base">
									<div className="font-semibold text-white">
										Stephanie Dian Rosales
									</div>
									<div className="mt-1 text-gray-400">Production Operator</div>
								</figcaption>
							</figure>
						</div>
						<div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
							<div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
								<img
									alt=""
									src={img6}
									className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
								/>
							</div>
						</div>
					</div>
				</div>

				{/* blog section */}
				<section id="blog" className="bg-white py-24 sm:py-32">
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="mx-auto max-w-2xl text-center">
							<h2 className="text-3xl font-serif font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-amber-500 via-violet-600 to-purple-500 bg-clip-text text-transparent">
								Blogs Post
							</h2>
							<p className="mt-2 text-lg leading-8 text-gray-600">
								Look for my latest blog together with my friends.
							</p>
						</div>
						<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
							{posts.map((post) => (
								<article
									key={post.id}
									className="flex flex-col items-start justify-between"
								>
									<div className="relative w-full">
										<img
											alt=""
											src={post.imageUrl}
											className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/3]"
										/>
										<div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
									</div>
								</article>
							))}
						</div>
					</div>
				</section>

				{/* photos */}
				<section id="photos">
					<div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
						<h1 className="text-center py-10 text-xl sm:text-8xl font-serif bg-gradient-to-r from-cyan-600 via-rose-500 to-amber-900 bg-clip-text text-transparent">
							Photos
						</h1>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
							{photos1.map((item) => (
								<div
									key={item.id}
									className={`${item.span} h-auto md:h-full flex flex-col`}
								>
									<div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
										<img
											src={item.img}
											alt={item.title}
											className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
										/>
										<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
										<h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
											{item.title}
										</h3>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
				{/* <div id="photos" className="relative overflow-hidden bg-white">
					<div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
						<div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
							<div className="sm:max-w-lg">
								<h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
									Photos
								</h1>
							</div>
							<div>
								<div className="mt-10">
									<div
										aria-hidden="true"
										className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
									>
										<div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
											<div className="flex items-center space-x-6 lg:space-x-8">
												<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
													{photos1.map((photo, index) => (
														<div
															key={index.id}
															className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100"
														>
															<img
                                src={photo.img}
                                alt=""
																className="h-full w-full object-cover object-center"
															/>
														</div>
													))}
												</div>
												<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
													{photos1.map((photo, index) => (
														<div
															key={index.id}
															className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100"
														>
															<img
																src={photo.img}
                                 alt=""
																className="h-full w-full object-cover object-center"
															/>
														</div>
													))}
												</div>

												<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
													{photos2.map((photo, index) => (
														<div
															key={index.id}
															className="h-64 w-44 overflow-hidden rounded-lg"
														>
															<img
																src={photo.img}
																alt=""
																className="h-full w-full object-cover object-center"
															/>
														</div>
													))}
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div> */}
			</main>

			{/* Footer */}
			<Footer />
		</div>
	);
}
