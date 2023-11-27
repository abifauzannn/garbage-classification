import { FaImage } from 'react-icons/fa';
import { useContext } from 'react';
import { AppContext } from '../../../context/app-context';

export default function ImageInput() {
  const context = useContext(AppContext);
  const {
    classify,
    imageUploadHandler,
  } = context;

  return (
    <label htmlFor="input-image">
      <div className="h-72 border border-dark border-dashed overflow-hidden rounded-lg flex items-center cursor-pointer bg-gray-800">
        <div className="w-full text-primary text-center">
          <FaImage className="w-full text-8xl text-white" />
          <h3 className="w-full font-medium text-lg text-white">
            {classify.blankImage}
          </h3>
        </div>
        <input
          onChange={imageUploadHandler}
          type="file" 
          id="input-image"
          accept="image/,.jpg,.jpeg,.png,.svg,.webp"
          hidden 
        />
      </div>
      <button
        className="w-full min-h-[44px] min-w-[44px] border border-dark bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 text-white rounded-md mt-2 p-3 hover:brightness-110 hover:shadow-md hover:bg-dark 90 transition-all duration-200 ease-in-out block text-center cursor-pointer"
        title="Tombol Upload Gambar"
        aria-label="Tombol Upload Gambar"
        onClick={() => document.getElementById('input-image').click()}
      >
        {classify.buttonUpload}
      </button>
    </label>
  )
}