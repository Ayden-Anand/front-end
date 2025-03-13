"use client";
import { useState } from "react";


import React from "react";

const exampleData = [
    {
        id: 1,
        firstname: "Ayden-anand",
        lastname: "An",
        school: "NIT",
        job: "Model",
        alive: "true",
        items: [
            { id: 10, name: "keyboard" },
            { id: 11, name: "mouse" }
        ],
        height: 185,
        image: "https://i.pinimg.com/736x/65/85/91/658591bc7dbc8d77074e0ae4f097effb.jpg",
        Information:"guygsyesuhdfhsbhskefsyksdh"
    },
    {
        id: 2,
        firstname: "Chinguun",
        lastname: "Toivgoo",
        school: "NIT",
        job: "Gang leader(In prison)",
        alive: "true",
        items:[
            { id: 12, name: "Weed"},
            { id: 13, name: "Vape"}
        ],
        height: 190,
        image:"https://w0.peakpx.com/wallpaper/426/583/HD-wallpaper-walter-white-jesse-pinkman-breaking-bad-jesse-pinkman-meth-walter-white-thumbnail.jpg",
        Information:"guygsyesuhdfhsbhskefsyksdh"
    },
    {
        id: 3,
        firstname: "Anduul",
        lastname: "Altankhaich",
        school: "NIT",
        job: "Unemployed",
        alive: "true",
        items:[
            { id: 14, name: "Cocai"},
            { id: 15, name: "phone"}
        ],
        height: 190,
        image:"https://scontent.fuln1-2.fna.fbcdn.net/v/t1.15752-9/482312043_1779296655979997_1295815958185656706_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_ohc=QCxfIPNOv7IQ7kNvgHpuK0a&_nc_oc=Adgo-1ILkbZb2k25NN4jpyx7nqp6NmtrkK7PYhw6tfBqE_BxDEdXBx9PSKxrQB1wvPE&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fuln1-2.fna&oh=03_Q7cD1wECTLQDJ6HCqR3md41A-oh_BPPcHZ246wvEUjmU-s85sA&oe=67F146D4",
        Information:"guygsyesuhdfhsbhskefsyksdh"
    },
    {
        id: 4,
        firstname: "Anar",
        lastname: "Batsukh",
        school: "NIT",
        job: "Developer",
        alive: "true",
        items:[
            { id: 16, name: "bag"},
            { id: 17, name: "phone"}
        ],
        height: 190,
        image:"https://scontent.fuln1-2.fna.fbcdn.net/v/t1.15752-9/482081762_1182062486893757_813753046136776087_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=by4SLLy4HGoQ7kNvgEGRyDB&_nc_oc=AdiBl23gawhvTnJdSexw9lJncAjZ89YgloAs5Z28B_9C6o7lPhATUxo7GfeesAT7KQY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fuln1-2.fna&oh=03_Q7cD1wHijiq8SZUte6ybgBzQ9-QlhZYD0sCCDmWZdkdmm31QwA&oe=67F14E4E",
        Information:"guygsyesuhdfhsbhskefsyksdh"
    },
    {
        id: 5,
        firstname: "Audaulet",
        lastname: "Nurbulsin",
        school: "NIT",
        job: "Pro software engineer",
        alive: "true",
        items: [
            { id: 10, name: "keyboard" },
            { id: 11, name: "mouse" }
        ],
        height: 185,
        image: "https://scontent.fuln1-1.fna.fbcdn.net/v/t1.15752-9/481887946_637857152333557_1176717618357575866_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_ohc=4AqFAZ_zc1wQ7kNvgG9NKCx&_nc_oc=Adgmtw4qvKCDFcr0hMmatl6pCTH3QSpUOxnq5q46ZhhFCY8F1ZDWAwV4NaSabhK1rKU&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fuln1-1.fna&oh=03_Q7cD1wH9pW20RTJgPt4KI11B9y1-QRP2_lleTeQE3AIQmVE2zw&oe=67F15395",
        Information:"guygsyesuhdfhsbhskefsyksdh"
    },
    {
        id: 6,
        firstname: "Khulan",
        lastname: "Spongebob",
        school: "NIT",
        job: "Pro roblox player",
        alive: "true",
        items:[
            { id: 12, name: "bag"},
            { id: 13, name: "phone"}
        ],
        height: 190,
        image:"https://scontent.fuln1-1.fna.fbcdn.net/v/t1.15752-9/481985129_643599998270360_6386462967577279544_n.jpg?stp=dst-jpg_p480x480_tt6&_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=8qALu-JrRqkQ7kNvgGIXPl7&_nc_oc=AdjHGFMwukZdp9ZLadNC-kAUIXRd87mauFU0O2pv_c2sLlxUW-1pZLxeIpvJ1W8F5-4&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fuln1-1.fna&oh=03_Q7cD1wEIDed6r3a8RlOLcz4HFbnA21mMRn-m3xE6MAvjIkkR3Q&oe=67F1685D",
        Information:"guygsyesuhdfhsbhskefsyksdh"
    },
    {
        id: 7,
        firstname: "Ysiu",
        lastname: "Byldampurev",
        school: "NIT",
        job: "Unemployed",
        alive: "true",
        items:[
            { id: 14, name: "bag"},
            { id: 15, name: "phone"}
        ],
        height: 190,
        image:"https://scontent.fuln1-2.fna.fbcdn.net/v/t1.15752-9/482787571_1331448308098131_8177112748134767176_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Q4T1QxE8LdsQ7kNvgGhLvv4&_nc_oc=Adgt_l4rKb5_YJIE9a2t5Li1VxjHLBjB5veDgyWjDtKCO7ZGxfzm9dlQ9Vza2Lg_8hE&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fuln1-2.fna&oh=03_Q7cD1wH-lbBcXgEEuy8evQUV9SZrKK40e_kqYrJeTr0Kx7IjyA&oe=67F133CD",
        Information:"guygsyesuhdfhsbhskefsyksdh"
    },
    {
        id: 8,
        firstname: "Naran-erdene",
        lastname: "Hourglass",
        school: "NIT",
        job: "Model",
        alive: "true",
        items:[
            { id: 16, name: "bag"},
            { id: 17, name: "phone"}
        ],
        height: 190,
        image:"https://scontent.fuln1-2.fna.fbcdn.net/v/t1.15752-9/482736141_657972979982494_5305451320902101748_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=A54o8XXQFYEQ7kNvgGI1Sey&_nc_oc=Adhc6pNjePSqY2a2QqS9mbkLtsQjLJBHy42nLmRsmy3eQwIUSYAiRfewdNgzKAccPAE&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fuln1-2.fna&oh=03_Q7cD1wFbCEOR5XmEhFElV_hP4e2ndYajD3kOBaW-V6XCF1rMqQ&oe=67F142E8",
        Information:"guygsyesuhdfhsbhskefsyksdh"
    },
    {
        id: 9,
        firstname: "Batpurev",
        lastname: "Batmunkh",
        school: "NIT",
        job: "Software Engineer",
        alive: "true",
        items:[
            { id: 14, name: "bag"},
            { id: 15, name: "phone"}
        ],
        height: 190,
        image:"https://scontent.fuln1-1.fna.fbcdn.net/v/t1.15752-9/482306167_971089751825907_4456575847427830375_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_ohc=m8TzVSda_NgQ7kNvgEaSHhl&_nc_oc=Adjlj6fBDvtEfaEtsewFbl5jsQyl3-BtAwqQza2P2UGQXLGIBYI7Zy7JYeWW8NsvP2I&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fuln1-1.fna&oh=03_Q7cD1wHY3PWutdU3OZ0D3eDWYmQcGIscDBx48Kudlm9OY9fDjA&oe=67F13E07",
        Information:"guygsyesuhdfhsbhskefsyksdh"
    },
    {
        id: 10,
        firstname: "Soyombo",
        lastname: "Chinguunjav",
        school: "NIT",
        job: "Locker Boxer",
        alive: "true",
        items:[
            { id: 16, name: "bag"},
            { id: 17, name: "phone"}
        ],
        height: 190,
        image:"https://instagram.fuln1-1.fna.fbcdn.net/v/t1.15752-9/482451310_647979671156189_5979796682525527731_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=SrALtyDZWDkQ7kNvgGaJ0nS&_nc_oc=AdiG1Sv-92D9lpmK4iJdEx4t4UmHFjC8jqw1UFR8JI-bqZJR9qn5n6BiN0tNVpWLu5I&_nc_zt=23&_nc_ht=instagram.fuln1-1.fna&oh=03_Q7cD1wH62yJctDV9FNaEGLCU3jOufOzGz_VxKh8wKM2jpoVd5A&oe=67F15BB1",
        Information:"guygsyesuhdfhsbhskefsyksdh"
    },
        {
            id: 11,
            firstname: "Anand",
            lastname: "Doe",
            school: "NIT",
            job: "Developer",
            alive: "true",
            items: [
                { id: 20, name: "Laptop" },
                { id: 21, name: "Book" }
            ],
            height: 190,
            image: "https://randomuser.me/api/portraits/men/1.jpg",
            Information:"Some Info about John"
        },
        {
            id: 12,
            firstname: "Khantushig",
            lastname: "Doe",
            school: "NIT",
            job: "Developer",
            alive: "true",
            items: [
                { id: 20, name: "Laptop" },
                { id: 21, name: "Book" }
            ],
            height: 190,
            image: "https://randomuser.me/api/portraits/men/1.jpg",
            Information:"Some Info about John"
        },
        {
            id: 13,
            firstname: "Oyunbileg",
            lastname: "Doe",
            school: "NIT",
            job: "Developer",
            alive: "true",
            items: [
                { id: 20, name: "Laptop" },
                { id: 21, name: "Book" }
            ],
            height: 190,
            image: "https://randomuser.me/api/portraits/men/1.jpg",
            Information:"Some Info about John"
        },
        {
            id: 14,
            firstname: "Serjmydag",
            lastname: "Doe",
            school: "NIT",
            job: "Developer",
            alive: "true",
            items: [
                { id: 20, name: "Laptop" },
                { id: 21, name: "Book" }
            ],
            height: 190,
            image: "https://randomuser.me/api/portraits/men/1.jpg",
            Information:"Some Info about John"
        },
        {
            id: 15,
            firstname: "Minori",
            lastname: "Doe",
            school: "NIT",
            job: "Developer",
            alive: "true",
            items: [
                { id: 20, name: "Laptop" },
                { id: 21, name: "Book" }
            ],
            height: 190,
            image: "https://randomuser.me/api/portraits/men/1.jpg",
            Information:"Some Info about John"
        },
        {
            id: 16,
            firstname: "Gunsen",
            lastname: "Doe",
            school: "NIT",
            job: "Developer",
            alive: "true",
            items: [
                { id: 20, name: "Laptop" },
                { id: 21, name: "Book" }
            ],
            height: 190,
            image: "https://randomuser.me/api/portraits/men/1.jpg",
            Information:"Some Info about John"
        },
        {
            id: 17,
            firstname: "Tsolmon",
            lastname: "Doe",
            school: "NIT",
            job: "Developer",
            alive: "true",
            items: [
                { id: 20, name: "Laptop" },
                { id: 21, name: "Book" }
            ],
            height: 190,
            image: "https://randomuser.me/api/portraits/men/1.jpg",
            Information:"Some Info about John"
        },
        {
            id: 18,
            firstname: "Telmuun",
            lastname: "Doe",
            school: "NIT",
            job: "Developer",
            alive: "true",
            items: [
                { id: 20, name: "Laptop" },
                { id: 21, name: "Book" }
            ],
            height: 190,
            image: "https://randomuser.me/api/portraits/men/1.jpg",
            Information:"Some Info about John"
        },
        {
            id: 19,
            firstname: "Azzaya",
            lastname: "Doe",
            school: "NIT",
            job: "Developer",
            alive: "true",
            items: [
                { id: 20, name: "Laptop" },
                { id: 21, name: "Book" }
            ],
            height: 190,
            image: "https://randomuser.me/api/portraits/men/1.jpg",
            Information:"Some Info about John"
        },
        {
            id: 20,
            firstname: "Erkhes",
            lastname: "Doe",
            school: "NIT",
            job: "Developer",
            alive: "true",
            items: [
                { id: 20, name: "Laptop" },
                { id: 21, name: "Book" }
            ],
            height: 190,
            image: "https://randomuser.me/api/portraits/men/1.jpg",
            Information:"Some Info about John"
        }
    ];

    function SearchBar({ onSearch }) {
        const [query, setQuery] = useState("");
      
        const handleSearch = (e) => {
          setQuery(e.target.value);
          onSearch(e.target.value);
        };
      
        return (
          <input
            type="text"
            placeholder="Search users..."
            value={query}
            onChange={handleSearch}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        );
      }
      
      export default function Lab() {
        const [filteredData, setFilteredData] = useState(exampleData);
      
        const handleSearch = (query) => {
          const filtered = exampleData.filter((user) =>
            `${user.firstname} ${user.lastname}`.toLowerCase().includes(query.toLowerCase())
          );
          setFilteredData(filtered.length > 0 ? filtered : []);
        };
      
        return (
          <div className="p-10 bg-blue-100 min-h-screen">
            <div className="max-w-md mx-auto mb-6">
              <SearchBar onSearch={handleSearch} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
              {filteredData.length > 0 ? (
                filteredData.map((element) => (
                  <div
                    key={element.id}
                    className="flex flex-col p-5 rounded-xl text-black shadow-lg bg-white w-80 h-[600px] border border-gray-300 transition-transform transform hover:scale-105 hover:shadow-xl"
                  >
                    <img
                      src={element.image}
                      className="w-full h-80 object-cover rounded-lg mb-4"
                      alt={element.firstname}
                    />
                    <div className="text-center">
                      <p className="text-gray-800 text-xl font-bold">
                        {element.firstname} {element.lastname}
                      </p>
                      <p className="text-gray-600 text-lg mt-1">{element.school}</p>
                      <p className="text-blue-500 text-lg font-medium">{element.job}</p>
                      <p className="text-gray-700 mt-2 text-sm">{element.Information}</p>
      
                      <div className="mt-4">
                        <h4 className="text-gray-800 font-semibold">Items:</h4>
                        <ul className="list-disc list-inside mt-2 text-gray-700 text-sm">
                          {element.items.map((item) => (
                            <li key={item.id}>{item.name}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-red-500 text-center text-xl col-span-full">Can't find the user</p>
              )}
            </div>
          </div>
        );
      }
