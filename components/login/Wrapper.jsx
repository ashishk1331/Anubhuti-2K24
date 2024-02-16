import { motion } from "framer-motion";

export default function (props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ delay: 0.3 }}
		>
			{props.children}
		</motion.div>
	);
}
