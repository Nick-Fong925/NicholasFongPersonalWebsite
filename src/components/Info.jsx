import NicholasFongPhoto from "../assets/MyPhoto/NicholasFong.jpg"
function Info() {
  return (
    <div className=" mt-28 mx-auto max-w-screen-lg flex items-center justify-center">
      <div className="flex flex-col md:flex-row">
        {/* Rounded Picture (Assuming you have an image URL) */}
        <div className="w-full md:w-1/2 rounded-full overflow-hidden">
          <img src={NicholasFongPhoto} alt="Profile" className="w-60 h-40 object-cover" />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl font-semibold mb-2">Your Title</h2>
          <p className="text-gray-700">
            Your text content goes here. You can add as much text as needed.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Info;
