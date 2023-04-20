import AboutImg from "../assets/images/sushi-mix.jpg";

const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="image col-span-1">
        <img
          src={AboutImg}
          alt="about"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="col-span-1">
        <h2 className="text-3xl font-extrabold text-gray-900">About Us</h2>
        <br />
        <p className="text-lg mb-4 mr-8">
          Welcome to{" "}
          <span className="text-orange-700 font-bold">Yukari Sushi House</span>,
          where we serve the freshest and most delicious sushi in town. Our
          restaurant is a family-owned business that has been serving the
          community for over a decade. We take pride in our authentic Japanese
          cuisine, using only the finest ingredients to create unique and
          flavorful dishes that will tantalize your taste buds.
        </p>
        <p className="text-lg mb-4 mr-8">
          At{" "}
          <span className="text-orange-700 font-bold">Yukari Sushi House</span>,
          we believe that dining should be an experience, not just a meal.
          That's why we strive to create a warm and welcoming atmosphere for our
          guests. Whether you're here for a romantic date night, a family
          dinner, or a business lunch, we want you to feel at home.
        </p>
      </div>
    </div>
  );
};

export default About;
