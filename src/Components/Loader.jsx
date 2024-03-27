import { RingLoader } from "react-spinners";


const Loader = () => {
    return (
        <div className="flex items-center mt-60   justify-center flex-col min-h-[calc(100vh - 148px)]">
            <RingLoader size={100} color="#4834d4"></RingLoader>
        </div>
    );
};

export default Loader;