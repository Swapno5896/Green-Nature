import React from "react";
import "./Services.css";
import saveForest from "../../images/save forest.jpg";
import rescykel from "../../images/rescykel.png";
import water from "../../images/save water.jpg";
const Services = () => {
  return (
    <div>
      {" "}
      <h2 className="service-title">Our Services . . </h2>
      <div className="service-container">
        <div class="p-10">
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" src={saveForest} alt="Mountain" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Save Forest </div>
              <p class="text-gray-700 text-base">
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Cras mattis consectetur purus sit amet fermentum. Nulla vitae
                elit libero. Nullam quis risus eget urna mollis ornare vel eu
                leo.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Read more
              </span>
            </div>
          </div>
        </div>
        <div class="p-10">
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" src={rescykel} alt="Mountain" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Recycling is A Must</div>
              <p class="text-gray-700 text-base">
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Cras mattis consectetur purus sit amet fermentum. Nulla vitae
                elit libero. Nullam quis risus eget urna mollis ornare vel eu
                leo.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Read more{" "}
              </span>
            </div>
          </div>
        </div>
        <div class="p-10">
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" src={water} alt="Mountain" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Save our water </div>
              <p class="text-gray-700 text-base">
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Cras mattis consectetur purus sit amet fermentum. Nulla vitae
                elit libero. Nullam quis risus eget urna mollis ornare vel eu
                leo. Egestas Dolor Risus.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Read more{" "}
              </span>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Services;
