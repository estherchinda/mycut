import { motion } from "framer-motion";
import ConfirmationList from "./ConfirmationList";
import DealActions from "./DealActions";
import WorkspaceLinks from "./WorkspaceLinks";

export default function ConfirmationSidebar() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: 20 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="border-l-3 border-[#E4E2DC] h-full pl-4 space-y-6 bg-white p-6"
    >
      <motion.div variants={item}>
        <ConfirmationList />
      </motion.div>

      <motion.div variants={item}>
        <DealActions />
      </motion.div>

      <motion.div variants={item}>
        <WorkspaceLinks />
      </motion.div>
    </motion.div>
  );
}