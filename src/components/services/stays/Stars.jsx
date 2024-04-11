import starIcon from "../../../assets/icons/star.svg";

const Stars = ({ rating }) => {
  return (
    <div className="stars">
      {rating === 5 ? (
        <>
          <img src={starIcon} alt="Star Icon" />
          <img src={starIcon} alt="Star Icon" />
          <img src={starIcon} alt="Star Icon" />
          <img src={starIcon} alt="Star Icon" />
          <img src={starIcon} alt="Star Icon" />
        </>
      ) : rating === 4 ? (
        <>
          <img src={starIcon} alt="Star Icon" />
          <img src={starIcon} alt="Star Icon" />
          <img src={starIcon} alt="Star Icon" />
          <img src={starIcon} alt="Star Icon" />
        </>
      ) : rating === 3 ? (
        <>
          <img src={starIcon} alt="Star Icon" />
          <img src={starIcon} alt="Star Icon" />
          <img src={starIcon} alt="Star Icon" />
        </>
      ) : rating === 2 ? (
        <>
          <img src={starIcon} alt="Star Icon" />
          <img src={starIcon} alt="Star Icon" />
        </>
      ) : (
        <p>unrated</p>
      )}
    </div>
  );
};

export default Stars;
