import { useContext } from "react";
import cameraIcon from "../assets/icons/camera.svg";
import { AuthContext } from "../context/features/auth";

const Photo = () => {
  const { setImage, image } = useContext(AuthContext);

  const handleFile = (file) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="photo">
      <input
        type="file"
        id="input-file"
        accept="image/*"
        onChange={(e) => handleFile(e.target.files[0])}
      />
      <label htmlFor="input-file">
        <img src={image ? image : cameraIcon} alt="icon" />
      </label>
    </div>
  );
};

export default Photo;
