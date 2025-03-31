import { ChevronRight, Home } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { LogOutButton } from "./Buttons";

const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

type Item = { name: string; url: string; Icon: any; bgColor: string };

const MenuItem = ({ item }: { item: Item }) => {
  return (
    <motion.li
      className="flex items-center justify-items-start p-0 m-0 mb-[20px] list-none cursor-pointer w-full"
      variants={itemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {item.name === "Sign Out" ? (
        <LogOutButton item={item} />
      ) : (
        <Link
          href={item.url}
          className="w-full flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div
              className={`flex justify-center items-center bg-${item.bgColor}-100 w-[40px] h-[40px] rounded-full`}
            >
              <item.Icon size={23} />
            </div>
            <p>{item.name}</p>
          </div>
          <div>
            <ChevronRight />
          </div>
        </Link>
      )}
    </motion.li>
  );
};

export const Navigation = ({ navList }: { navList: Item[] }) => (
  <motion.ul
    className="list-none p-[25px] m-0 absolute top-[80px] w-[300px]"
    variants={navVariants}
  >
    {navList.map((item) => (
      <MenuItem item={item} key={item.name} />
    ))}
  </motion.ul>
);
