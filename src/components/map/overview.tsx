// DashboardOverview.tsx

import { motion } from "framer-motion";
import { geologicalData, compositionData } from "../../data/dataset";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const DashboardOverview = () => {
  return (
    <section
      className="
      w-full
      min-h-screen

           text-white

      

      font-Manrope
    "
    >
      {/* HERO SECTION */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      ></motion.div>

      {/* ANALYTICS SECTION */}

      <div
        className="
        grid
        grid-cols-[1.7fr_0.8fr]

        gap-8
      "
      >
        {/* GEOLOGICAL CHART */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="
          bg-[#111C32]

          border
          border-white/5

          rounded-[34px]

          p-8
        "
        >
          {/* HEADER */}

          <div
            className="
            flex
            items-start
            justify-between

            mb-10
          "
          >
            <div>
              <h2
                className="
                text-3xl
                font-semibold

                mb-2
              "
              >
                Geological Activity
              </h2>

              <p
                className="
                text-slate-400
                text-lg
              "
              >
                Seismic & density readings (Last 30 days)
              </p>
            </div>

            {/* FILTERS */}

            <div
              className="
              flex
              items-center
              gap-2
            "
            >
              <button
                className="
                px-5
                py-2

                rounded-full

                bg-[#1A2744]

                text-white
                text-sm
              "
              >
                30D
              </button>

              <button
                className="
                px-5
                py-2

                rounded-full

                text-slate-500
                text-sm
              "
              >
                90D
              </button>
            </div>
          </div>

          {/* LIVE AREA CHART */}

          <div className="h-[320px]">
            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <AreaChart data={geologicalData}>
                <defs>
                  <linearGradient
                    id="activity"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor="#4FFFB0"
                      stopOpacity={0.5}
                    />

                    <stop
                      offset="95%"
                      stopColor="#4FFFB0"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>

                <XAxis
                  dataKey="day"
                  tickLine={false}
                  axisLine={false}
                  tick={{
                    fill: "#53627C",
                    fontSize: 12,
                  }}
                />

                <YAxis hide />

                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#4FFFB0"
                  strokeWidth={4}
                  fill="url(#activity)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* RESOURCE COMPOSITION */}

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="
          bg-[#1A233A]

          border
          border-white/5

          rounded-[34px]

          p-8

          relative
        "
        >
          {/* ADD BUTTON */}

          <button
            className="
            absolute
            top-8
            right-8

            w-14
            h-14

            rounded-2xl

            bg-gradient-to-br
            from-emerald-400
            to-cyan-400

            text-black

            flex
            items-center
            justify-center
          "
          >
            +
          </button>

          {/* TITLE */}

          <h2
            className="
            text-3xl
            font-semibold

            mb-10
          "
          >
            Resource <br /> Composition
          </h2>

          {/* DONUT CHART */}

          <div className="relative h-[250px]">
            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <PieChart>
                <Pie
                  data={compositionData}
                  dataKey="value"
                  innerRadius={80}
                  outerRadius={110}
                  stroke="none"
                >
                  {compositionData.map((item, index) => (
                    <Cell
                      key={index}
                      fill={item.color}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>

            {/* CENTER */}

            <div
              className="
              absolute
              inset-0

              flex
              flex-col
              items-center
              justify-center
            "
            >
              <h3
                className="
                text-5xl
                font-bold
              "
              >
                70%
              </h3>

              <p
                className="
                text-slate-400
                uppercase
                tracking-widest
                text-sm
              "
              >
                Lithium
              </p>
            </div>
          </div>

          {/* LEGEND */}

          <div className="space-y-5 mt-10">
            {compositionData.map((item) => (
              <div
                key={item.name}
                className="
                flex
                items-center
                justify-between
              "
              >
                <div
                  className="
                  flex
                  items-center
                  gap-3
                "
                >
                  <div
                    className="
                    w-3
                    h-3

                    rounded-full
                  "
                    style={{
                      background: item.color,
                    }}
                  />

                  <p className="text-slate-300">{item.name}</p>
                </div>

                <p className="font-semibold">{item.value}%</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardOverview;
