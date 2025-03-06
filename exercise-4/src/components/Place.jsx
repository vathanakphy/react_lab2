export default function Place({key,image,alt,title}) {
  return (
    <li key= {key} className="place-item">
      <button>
        <img src={image} alt={alt} />
        <h3>{title}</h3>
      </button>
    </li>
  );
}
