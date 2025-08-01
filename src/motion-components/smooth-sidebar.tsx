import { useState } from "react";
import { motion } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Wrench,
  UserRound,
  AppWindow
} from "lucide-react";

const sidebarTabs = [
  { label: "Home", route: "/home", icon: Home },
  { label: "Profile", route: "/profile", icon: UserRound },
  { label: "Projects", route: "/projects", icon: AppWindow },
  { label: "Settings", route: "/settings", icon: Wrench },
];

const sidebarVariant = {
    open: {
        width: "250px"
    },
    close: {
        width: "60px"
    }
}

const innerTabParent = {
    open: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.05
        }
    }, 
    close: {
            transition: {
            staggerChildren: 0.1,
            delayChildren: 0.01
        }
    }
}

const innerTabVariant = {
    open: {
         opacity: 1,
         y: 0
    },
    close: {
        opacity: 0,
        y: -10
    }
}


const SmoothSidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <motion.div 
      initial={false}
      animate={isSidebarOpen? "open" : "close"}
      className={`h-full`}
    >

     <motion.nav variants={sidebarVariant} className="flex flex-col p-3 py-5">
        <div className="w-full flex justify-between items-center gap-3 mb-5 min-h-12">
            {isSidebarOpen  && <h1 className="text-2xl">Dashboard</h1>}

            <button
              onClick={() => setSidebarOpen(!isSidebarOpen)}
              className="ml-1 cursor-pointer"
             >
             {isSidebarOpen ? <ChevronLeft size={25} /> : <ChevronRight size={25} />}
           </button>
        </div>
      

      <motion.ul variants={innerTabParent} className="flex flex-col gap-2">
        {sidebarTabs.map((tab, index) => {
          const Icon = tab.icon;
          return (
            <motion.li
              variants={innerTabVariant}
              key={index}
              className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 cursor-pointer"
            >
              <Icon size={20} />
              {isSidebarOpen && <span className="text-md">{tab.label}</span>}
            </motion.li>
          );
        })}
      </motion.ul>
      </motion.nav>
    </motion.div>
  );
};

export default SmoothSidebar;