import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import img3 from "../image/img3.jpg";
import img5 from "../image/img5.jpg";
import img2 from "../image/img2.jpg";

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

const Blog = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: false, amount: 0.3 });
	return (
		<section ref={ref} id="blog" className="bg-white py-24 sm:py-40">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<motion.h2
						className="text-3xl font-serif font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-amber-500 via-violet-600 to-purple-500 bg-clip-text text-transparent"
						initial={{ opacity: 0, y: -100 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
					>
						Blogs Post
					</motion.h2>
					<motion.p
						className="mt-2 text-lg leading-8 text-gray-600"
						initial={{ opacity: 0 }}
						animate={isInView ? { opacity: 1 } : {}}
						transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
					>
						Look for my latest blog together with my friends.
					</motion.p>
				</div>
				<motion.div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{posts.map((post) => (
						<motion.article
							key={post.id}
							className="flex flex-col items-start justify-between"
							initial="hidden"
							animate="visible"
							variants={
								isInView
									? {
											hidden: { opacity: 0, y: 20 },
											visible: {
												opacity: 1,
												y: 0,
												transition: {
													staggerChildren: 0.3, // Delay each child by 0.3s
												},
											},
									  }
									: {}
							}
						>
							<motion.div
								className="relative w-full"
								variants={{
									hidden: { opacity: 0, y: 20 },
									visible: { opacity: 1, y: 0 },
								}}
								transition={{ duration: 0.6, ease: "easeOut" }}
							>
								<img
									alt=""
									src={post.imageUrl}
									className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/3]"
								/>
								<div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
							</motion.div>
						</motion.article>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Blog;
