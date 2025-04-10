"use client";
import { MenuToggle } from "@/components/MenuToggle";
import { Navigation } from "@/components/Navigation";
import { userNavList } from "@/data";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Header = ({ title, imgUrl }: { title: string; imgUrl?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [zIndex, setZIndex] = useState(0);
  const [navHeight, setNavHeight] = useState(120);
  const containerRef = useRef<HTMLDivElement>(null);
  const { height } = useDimensions(containerRef);

  const sidebarVariants = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      backgroundColor: "#f1f9fa",
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(14px at 85% 40px)",
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const toggleMenu = () => {
    if (isOpen) {
      setIsOpen(false);

      var time = setTimeout(() => {
        setZIndex(0);
        setNavHeight(120);
        clearTimeout(time);
      }, 500);
    } else {
      setZIndex(1);
      setNavHeight(400);
      setIsOpen(true);
    }
  };

  return (
    <div style={{ zIndex: 999 }} className="pb-[20px] sticky top-0">
      <div
        className={`relative flex content-center justify-between bg-turquoise-50 ${
          imgUrl ? "py-3" : "py-5"
        } px-[20px]`}
      >
        <div className="flex items-center gap-3">
          {imgUrl && (
            <div className="flex justify-center items-center bg-turquoise-100 w-[45px] h-[45px] rounded-full">
              <Image
                className=""
                src={imgUrl}
                height={35}
                width={35}
                alt={title}
              />
            </div>
          )}
          <span className="font-mono font-semibold text-turquoise-900 text-xl">
            {title}
          </span>
        </div>{" "}
        <div style={{ zIndex }} className="absolute -top-1 -right-1">
          <div
            className={`relative flex justify-end items-stretch flex-1 rounded-[20px] h-[${navHeight}px] w-[500px] max-w-full overflow-hidden`}
          >
            <motion.nav
              initial={false}
              animate={isOpen ? "open" : "closed"}
              custom={height}
              ref={containerRef}
              className="w-[300px]"
            >
              <div className="absolute top-4 right-6 w-[44px] h-[46px] rounded-2xl bg-white border shadow-lg shadow-turquoise-500 border-turquoise-200 rounded-2xl "></div>
              <motion.div
                className="w-[300px] absolute top-0 bottom-0 right-0 bg-white"
                variants={sidebarVariants}
              >
                <div className="absolute top-3 right-4 w-[60px] h-[60px] flex place-items-center">
                  <MenuToggle toggle={() => toggleMenu()} />
                </div>
              </motion.div>
              <Navigation navList={userNavList} />
            </motion.nav>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Header;

const useDimensions = (ref: React.RefObject<HTMLDivElement | null>) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
  }, [ref]);

  return dimensions.current;
};
