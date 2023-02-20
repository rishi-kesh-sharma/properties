const ImageField = ({ imageHandler, checkFile, selectedFile }) => {
  return (
    <>
      <div className="">
        <div className=" grid gap-2">
          <div className="h-[10rem] cursor-pointer relative flex justify-start items-center border-2 rounded-md bg-gray-200">
            <input
              type="file"
              name="file"
              onChange={imageHandler}
              className="z-20 opacity-0 cursor-pointer h-full w-full"
            />
            <div className="absolute flex justify-start items-center gap-[2rem]">
              <img
                className={`h-[10rem] w-[20rem] rounded ${
                  checkFile ? "opacity-1" : "opacity-0"
                }`}
                src={selectedFile ? URL.createObjectURL(selectedFile) : null}
              />
              <span className="text-[18px] w-56 text-gray-600 truncate">
                {checkFile ? selectedFile.name : "choose a file"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ImageField;
