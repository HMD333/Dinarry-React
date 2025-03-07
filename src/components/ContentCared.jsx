function Cared({ context, url }) {
  return (
    <div className="relative self-center m-5 h-[70vh] w-full">
      <img
        className="absolute transition-all duration-1000 max-h-[500px] max-w-[400px] m-10 left-0 rounded-[20px]"
        src={url}
        alt="image"
      />
      <p className="absolute m-5 text-[1.2em] font-semibold right-0 top-[220px] w-[30%] transition-all duration-1000">
        {context}
      </p>
    </div>
  );
}

export default Cared;
