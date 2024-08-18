import sqr from "../../assets/sqr.png";

export const History = () => {
  return (
    <div class="bg-purple-300 flex items-center justify-center min-h-screen">
      <div class="max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <div class="flex items-start mb-10">
          <div class="flex items-center mr-4">
            <div class="bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
              <img src={sqr} alt="Purple Blocks" class="h-12 w-12 mr-2" />
              <div class="text-center text-purple-600 font-bold text-2xl">
                2023
              </div>
            </div>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-purple-700">
              Resilience and Future Horizons
            </h3>
            <p class="text-gray-600">
              Adapting to new challenges, we remained committed to our mission
              of providing an exceptional early education...
            </p>
          </div>
        </div>
        <div class="flex items-start mb-10">
          <div>
            <h3 class="text-lg font-semibold text-purple-700">
              Innovation An Technology
            </h3>
            <p class="text-gray-600">
              Adapting to new challenges, we remained committed to our mission
              of providing an exceptional early education...
            </p>
          </div>
          <div class="flex items-center mr-4">
            <div class="bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
              <img src={sqr} alt="Purple Blocks" class="h-12 w-12 mr-2" />
              <div class="text-center text-purple-600 font-bold text-2xl">
                2017
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-start mb-10">
          <div class="flex items-center mr-4">
            <div class="bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
              <img src={sqr} alt="Purple Blocks" class="h-12 w-12 mr-2" />
              <div class="text-center text-purple-600 font-bold text-2xl">
                2012
              </div>
            </div>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-purple-700">
              Expansion And Recognition
            </h3>
            <p class="text-gray-600">
              Adapting to new challenges, we remained committed to our mission
              of providing an exceptional early education...
            </p>
          </div>
        </div>
        <div class="flex items-start mb-10">
          <div>
            <h3 class="text-lg font-semibold text-purple-700">
              Inception And Growth
            </h3>
            <p class="text-gray-600">
              Adapting to new challenges, we remained committed to our mission
              of providing an exceptional early education...
            </p>
          </div>
          <div class="flex items-center mr-4">
            <div class="bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
              <img src={sqr} alt="Purple Blocks" class="h-12 w-12 mr-2" />
              <div class="text-center text-purple-600 font-bold text-2xl">
                2005
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
