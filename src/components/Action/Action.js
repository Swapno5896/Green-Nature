import React from "react";
import "./Action.css";
const Action = () => {
  return (
    <div className="action-container">
      <div class="p-10">
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <div class="px-6 py-4">
            <h2></h2>

            <div class="font-bold text-xl mb-2">Make Donation Your</div>
            <h3 class="font-bold text-xl mb-1"> money can cure this earth</h3>
            <p class="text-gray-700 text-base">
              We are a larhge froup of people who powered movement fighting for
              a green and peaceful future for your land, forest, ocenas, foods,
              climate and pass the green earth to our children. Each one of us
              can make small changes in our lives, but together we can change
              the world.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <button>Donate Now</button>
          </div>
        </div>
      </div>
      <div class="p-10">
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <div class="px-6 py-4">
            <h2></h2>

            <div class="font-bold text-xl mb-2">
              Stop Drilling, Need Action!
            </div>
            <h3 class="font-bold text-xl mb-1">Your voice does matter</h3>
            <p class="text-gray-700 text-base">
              The Obama administration just granted Shell’s final permit to
              drill in the Alaskan Arctic this summer despite overwhelming
              global public opposition and the obvious risks to Arctic
              communities, wildlife, and our climate. But this isn’t over. The
              President knows what’s at stake: his climate legacy.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <button>Act Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Action;
