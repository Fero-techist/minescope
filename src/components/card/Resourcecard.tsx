type Resource = {
  name: string;
  percentage: number;
};

const resources: Resource[] = [
  {
    name: "Iron Ore",
    percentage: 65,
  },

  {
    name: "Lithium",
    percentage: 22,
  },

  {
    name: "Copper",
    percentage: 13,
  },
];

const ResourceCard = () => {
  return (
    <div
      className="
bg-[#0D1831]

rounded-3xl

border
border-[#172848]

p-6

"
    >
      <h2
        className="
text-white
font-semibold
"
      >
        Resource Distribution
      </h2>

      <p
        className="
text-gray-500
text-sm
"
      >
        Quarterly extraction output
      </p>

      <div className="mt-10 space-y-7">
        {resources.map((item) => (
          <div>
            <div
              className="
flex
justify-between
"
            >
              <span
                className="
text-gray-400
"
              >
                {item.name}
              </span>

              <span
                className="
text-white
"
              >
                {item.percentage}%
              </span>
            </div>

            <div
              className="
bg-[#1A2944]

h-2

rounded-full

mt-2
"
            >
              <div
                style={{
                  width: `${item.percentage}%`,
                }}
                className="
bg-emerald-400

h-full

rounded-full
"
              />
            </div>
          </div>
        ))}

        <div className="pt-5 mx-auto w-max">
          <button className="bg-emerald-400  text-black px-4 py-2 rounded-xl font-medium">
            View Full Resource Report
          </button>
        </div>
      </div>
    </div>
  );
};
export default ResourceCard;
