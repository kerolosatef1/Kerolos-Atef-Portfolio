import { motion, useScroll } from "framer-motion"
export default function GlobalScrollIndicator() {
    const { scrollYProgress } = useScroll()
    return (
        <motion.div
            style={{
                scaleX: scrollYProgress,
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                height: "10px",
                transformOrigin: "0%",
                background: "red",
                zIndex: 49
            }}
        />
    )
}