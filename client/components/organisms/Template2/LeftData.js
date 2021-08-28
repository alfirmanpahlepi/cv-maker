import { motion } from "framer-motion";
import TextareaAutosize from "react-textarea-autosize";

export const LeftData = ({ l, isEdit, data, setData, index, setCurrentData }) => {
  const handleChange = (e) => {
    data.leftData[index][e.target.name] = e.target.value;
    setData({ ...data, leftData: data.leftData });
  };

  const onDelete = () => {
    const allExceptSeletedData = data.leftData.filter(
      (el) => el !== data.leftData[index]
    );
    setCurrentData({ ...data, leftData: allExceptSeletedData });
  };

  return (
    <div className="space-y-4 mb-10 relative group">
      {!isEdit ? (
        <>
          <h4 className="uppercase text-xl font-bold text-center tracking-widest px-5">
            {l.title}
          </h4>
          <p className="w-3/4 mx-auto text-sm">{l.text}</p>
        </>
      ) : (
        <>
          <TextareaAutosize
            name="title"
            value={l.title}
            className="hover:ring uppercase text-xl font-bold text-center tracking-widest overflow-hidden w-full resize-none bg-transparent px-5"
            onChange={(e) => handleChange(e)}
            onBlur={()=>setCurrentData(data)}
          />
          <TextareaAutosize
            name="text"
            value={l.text}
            className="hover:ring w-3/4 mx-auto text-sm overflow-hidden resize-none bg-transparent block"
            onChange={(e) => handleChange(e)}
            onBlur={()=>setCurrentData(data)}
          />
          <motion.span
            onClick={onDelete}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.3 }}
            className="opacity-0 group-hover:opacity-100 absolute -top-2 right-3 font-bold text-lg text-red-500 hover:text-red-600 cursor-pointer"
          >
            x
          </motion.span>
        </>
      )}
    </div>
  );
};
