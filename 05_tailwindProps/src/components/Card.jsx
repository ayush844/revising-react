import React from 'react'

export function CardOne(props) {

    console.log("props",props);
    // {} => empty object

    console.log(props.myobj)


  return (
    <div className="relative h-[400px] w-[300px] rounded-md m-4">
      <img
        src={props.image}
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{props.name}</h1>
        <p className="mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, facilis, voluptatum voluptatem saepe sunt ut aspernatur officiis qui praesentium vel, fugiat laudantium labore! Dolorum tenetur eveniet officiis? Ipsa, quo quae!
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          View Profile &rarr;
        </button>
      </div>
    </div>
  )
}
