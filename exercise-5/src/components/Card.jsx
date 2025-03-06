export default function Card({ image, alt, title, description }) {
  return (
    <div className="w-[250px] overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 rounded-lg">
      <img className="w-full h-48 object-cover" src={image} alt={alt} />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer , transition-colors">
          Detail
        </button>
      </div>
    </div>
  );
}
