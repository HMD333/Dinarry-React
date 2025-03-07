function socialmedia({ url, img }) {
  return (
    <a
      className="opacity-30 hover:opacity-100 focus:opacity-100 transition-opacity duration-200"
      href={url}
    >
      <img className="p-1 w-[50px]" src={img} />
    </a>
  );
}
export default socialmedia;
