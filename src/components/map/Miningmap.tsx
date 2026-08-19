import { ZoomIn, Expand } from "lucide-react";

const MiningMap = () => {
  return (
    <div
      style={
        {
          // backgroundImage: "url('../../assets/Styled topographical map.png')",
        }
      }
      className="
      relative
      overflow-hidden

      rounded-2xl

      border
      border-[#172848]

      h-[420px]

      p-6
    "
    >
      {/* Background image */}

      <img
        src="./images/Styled topographical map.png"
        alt="Mining map"
        className="
        absolute
        inset-0

        w-full
        h-full

        object-cover
      "
      />

      {/* Black overlay */}

      <div
        className="
        absolute
        inset-0

        bg-black/50
      "
      />

      {/* Content */}

      <div
        className="
        relative
        z-10

        h-full

        flex
        flex-col
        justify-between
      "
      >
        {/* Top */}

        <div>
          <h2
            className="
            text-white
            font-semibold
            text-lg
          "
          >
            Regional Operations
          </h2>

          <p
            className="
            text-gray-300
            text-sm
          "
          >
            3 active extraction zones • Western Australia
          </p>

          {/* Toggles */}

          <div className="flex gap-3 mt-5">
            <button
              className="
              bg-emerald-400

              text-black

              px-4
              py-2

              rounded-full

              text-xs
            "
            >
              Satellite
            </button>

            <button
              className="
              bg-black/40

              backdrop-blur-sm

              px-4
              py-2

              rounded-full

              text-white

              text-xs
            "
            >
              Terrain
            </button>
          </div>
        </div>

        {/* Markers */}

        <div>
          <div
            className="
            absolute

            top-[45%]
            left-[50%]
          "
          >
            <span
              className="
              block

              w-4
              h-4

              rounded-full

              bg-emerald-400

              shadow-lg
              shadow-emerald-500/80
            "
            />
          </div>

          <div
            className="
            absolute

            top-[65%]
            left-[70%]
          "
          >
            <span
              className="
              block

              w-4
              h-4

              rounded-full

              bg-sky-400

              shadow-lg
            "
            />
          </div>
        </div>

        {/* Bottom */}

        <div
          className="
          flex
          justify-between
          items-end
        "
        >
          <div>
            <h3
              className="
              text-white
              text-xl
              font-semibold
            "
            >
              Pilbara Basin
            </h3>

            <p
              className="
              text-gray-300
              text-sm
            "
            >
              Iron Ore • 12 active licenses
            </p>
          </div>

          {/* Controls */}

          <div className="flex gap-3">
            <button
              className="
              bg-black/40

              backdrop-blur-sm

              p-3

              rounded-xl
            "
            >
              <ZoomIn
                size={18}
                className="text-white"
              />
            </button>

            <button
              className="
              bg-black/40

              backdrop-blur-sm

              p-3

              rounded-xl
            "
            >
              <Expand
                size={18}
                className="text-white"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiningMap;
