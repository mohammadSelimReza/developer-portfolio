import { techStack } from "../constants";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
const Skills = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <motion.div
          >
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              Technologies and Tools
            </h4>
            <p
              className={"mt-4 text-xl text-justify text-white"
              }
            >
              Using a combination of cutting-edge technologies and reliable
              open-source software I build user-focused, performant apps and
              websites for smartphones, tablets, and desktops.
            </p>
          </motion.div>
          <motion.div className="flex flex-wrap mt-8  justify-between  ">
            {techStack.map((el, index) => (
              <motion.div
                initial="hidden"
                whileInView={"visible"}
                variants={{
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                    },
                  },
                  hidden: { opacity: 1, y: 80 },
                }}
                className="py-2 px-4 blue-violet-gradient  md:m-4 mx-2 mt-6 rounded-lg flex items-center cursor-pointer md:w-48 w-40"
              >
                <img alt="" src={el.link} className="w-12" />
                <h6 className="text-md ml-4 text-bl">{el.name}</h6>
              </motion.div>
            ))}
          </motion.div>            
        </div>
    );
};

export default SectionWrapper(Skills, "skills");
