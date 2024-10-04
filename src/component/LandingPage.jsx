"use client";

import React, { useState } from "react";

import { Dialog, DialogPanel } from "@headlessui/react";
import { motion, useInView } from "framer-motion";

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
import logo from "../image/logo1.jpg";
import About from "./About";
import Blog from "./Blog";

const navigation = [
	{ name: "About", href: "#about" },
	{ name: "Blog Post", href: "#blog" },
	{ name: "Photos", href: "#photos" },
	{ name: "Contact", href: "#footer" },
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
const ParallaxSection = ({ children, className }) => {
	const ref = React.useRef(null);
	const isInView = useInView(ref, { once: false, amount: 0.3 });

	return (
		<motion.section
			ref={ref}
			initial={{ opacity: 0, y: 50 }}
			animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
			transition={{ duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.section>
	);
};

const LandingPage = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<div className="bg-white">
			{/* Header */}
			<header className="absolute inset-x-0 top-0 z-50">
				<nav
					aria-label="Global"
					className="flex items-center justify-between p-6 lg:px-20"
				>
					<motion.div
						className="flex lg:flex-1"
						initial={{ x: -200 }}
						animate={{ x: 0 }}
						transition={{ duration: 1.5, ease: "easeOut" }}
					>
						<a href="/#" className="-m-1.5 p-1.5">
							<span className="sr-only">Your Company</span>
							<img alt="" src={logo} className="h-12 w-auto rounded-full" />
						</a>
					</motion.div>
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
					<motion.div
						className="hidden lg:flex lg:gap-x-12"
						initial="hidden"
						animate="visible"
						variants={{
							hidden: { opacity: 0, y: 20 },
							visible: {
								opacity: 1,
								y: 0,
								transition: {
									staggerChildren: 0.3, // Delay each child by 0.3s
								},
							},
						}}
					>
						{navigation.map((item) => (
							<motion.a
								key={item.name}
								href={item.href}
								className="text-sm font-bold leading-6 text-white hover:bg-[#de39ff] px-5 py-2 rounded-full"
								variants={{
									hidden: { opacity: 0, y: 20 },
									visible: { opacity: 1, y: 0 },
								}}
								transition={{ duration: 0.6, ease: "easeOut" }}
							>
								{item.name}
							</motion.a>
						))}
					</motion.div>
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
								<img alt="" src={logo} className="h-8 w-auto" />
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
				<ParallaxSection>
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
								<motion.div
									className="text-center bg-gray-500/30 py-10 rounded-lg "
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.8, ease: "easeOut" }}
								>
									<motion.h1
										className="text-balance text-4xl font-serif font-bold tracking-tight sm:text-8xl bg-gradient-to-r from-cyan-600 via-rose-500 to-amber-900 bg-clip-text text-transparent"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 1.2, duration: 1.2, ease: "easeOut" }}
									>
										WELCOME TO MY PERSONAL WEBSITE
									</motion.h1>
									<motion.p
										className="mt-10 text-lg leading-8 text-gray-200 mx-32"
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 2.5, duration: 1, ease: "easeOut" }}
									>
										I am positive thinker and independent woman. I accept
										challenges and battles of my life. However I constantly
										setting goals for myself. I always choose to unwind to have
										a peace of mind
									</motion.p>
									<motion.div
										className="mt-10 flex items-center justify-center gap-x-6"
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 3, duration: 0.8, ease: "easeOut" }}
									>
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
									</motion.div>
								</motion.div>
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
				</ParallaxSection>
				{/* About section */}
				<About />
				{/* About section */}

				{/* blog section */}
				<Blog />
				{/* blog section */}

				{/* photos */}
				<ParallaxSection>
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
				</ParallaxSection>
			</main>

			{/* Footer */}
			<Footer />
		</div>
	);
};

export default LandingPage;
