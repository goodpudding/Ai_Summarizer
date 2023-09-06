import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => window.open("https://github.com/goodpudding")}
          className="black_btn"
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden"/>
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summize, a free and open-source tool that summarizes articles using OpenAI's GPT-4, a state-of-the-art language model.
      </h2>
    </header>
  );
};

export default Hero;
