import blogImage1 from "../../assets/images/blog-img1.png";
import blogImage2 from "../../assets/images/blog-img2.png";
import blogImage3 from "../../assets/images/blog-img3.png";

const Blogs = () => {
  return (
    <>
      <h1 className="blogs-title">Blogs</h1>
      <div className="cards">
        <Blog image={blogImage3} description="Interesting Tibetan Traditions" />
        <Blog image={blogImage2} description="Are There Volcanos In Hawaii?" />
        <Blog image={blogImage1} description="Winter in Iceland" />
        <Blog image={blogImage3} description="Interesting Tibetan Traditions" />
        <Blog image={blogImage2} description="Are There Volcanos In Hawaii?" />
        <Blog image={blogImage1} description="Winter in Iceland" />
      </div>
    </>
  );
};

const Blog = ({ image, description }) => {
  return (
    <div className="card">
      <img src={image} alt="Blog Image" className="card-img" />
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Blogs;
