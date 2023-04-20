import leaderBoardImg from "../assets/images/chopstick.jpg";

const LeaderBoard = () => {
  return (
    <div className="w-full h-[500px] mx-auto flex items-center-justify-between">
      <div className="banner-description pt-44 pl-24">
        <h3 className="text-2xl font-medium">
          Satisfy Your Favorite Japanese Dishes Cravings Today!
        </h3>
        <br />
        <p className="text-lg">
          Look no further than{" "}
          <span className="text-orange-700 font-bold">Yukari Sushi House</span>,
          the best japanese restaurant in town. Get started today!
        </p>
        <div className="btn-container pt-8 pl-8">
          <button className="bg-yellow-500 text-white  font-bold rounded-3xl hover:bg-orange-500 py-4 px-8">
            <a href="/menu">See Menu</a>
          </button>
        </div>
      </div>
      <div className="col-span-2">
        <img
          src={leaderBoardImg}
          alt=""
          className="w-[700px] h-[600px] object-cover flex justify-end"
        />
      </div>
    </div>
  );
};

export default LeaderBoard;
