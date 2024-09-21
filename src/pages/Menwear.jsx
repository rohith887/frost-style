import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import { data } from "../Mendata";
import Itemcard from "../components/Itemcard";
import { PropagateLoader } from "react-spinners";
import Cart from "../components/Cart";
import Emptypage from "../components/Emptypage";



const Menwear = () => {
  var mini = 999999;
  var maxi = 0;
  for (var i = 0; i < data.length; i++) {
    if (data[i].price > maxi) {
      maxi = data[i].price;
    }
    if (data[i].price < mini) {
      mini = data[i].price;
    }
  }
  const [category, setCategory] = useState("Jackets");
  const [loading, setLoading] = useState(false);
  //const [searchInput, setSearchInput] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [sliderinput, setsliderinput] = useState(500);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, [category]);

  const handleSearchInputChange = (value) => {
    //setSearchInput(value);
    const filtered = data.filter((item) =>
      item.desc.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredItems(filtered);
  };
  const handlecategory = (e) => {
    setLoading(false);
    setCategory(e.target.id);
  };

  const handlesliderinput = (e) => {
    setsliderinput(e.target.value);
  };

  return (
    <div className="w-full h-screen bg-white">
      <Navbar />
      <Search onInputChange={handleSearchInputChange} />
      <Cart/>
      <div className="flex flex-wrap justify-center gap-1 mt-10 md:gap-2">

        <div className="flex gap-1 md:gap-2">
        <button
          id="Jackets"
          onClick={handlecategory}
          className={`w-20 h-10 text-sm text-center border-black rounded-md md:w-40 md:h-10 border-1 ${
            category === "Jackets"
              ? "bg-black text-white"
              : "bg-slate-200 hover:text-white hover:bg-black"
          }`}
        >
          Jackets
        </button>
        <button
          id="Sweaters"
          onClick={handlecategory}
          className={`w-20 h-10 text-sm text-center border-black rounded-md md:w-40 md:h-10 border-1 ${
            category === "Sweaters"
              ? "bg-black text-white"
              : "bg-slate-200 hover:text-white hover:bg-black"
          }`}
        >
          Sweaters
        </button>
        <button
          id="Sweatshirt"
          onClick={handlecategory}
          className={`w-20 h-10 text-sm text-center border-black rounded-md md:w-40 md:h-10 border-1 ${
            category === "Sweatshirt"
              ? "bg-black text-white"
              : "bg-slate-200 hover:text-white hover:bg-black"
          }`}
        >
          Sweatshirts
        </button>
        </div>

            <div className="flex items-center gap-4 ml-5">
        <input
  onChange={handlesliderinput}
  className="h-[8px] rounded-full appearance-none bg-slate-200 range-thumb-black"
  type="range"
  defaultValue={50}
  max={maxi}
  min={mini}
  style={{
    WebkitAppearance: 'none',
    
  }}
/>
        <p>₹{sliderinput}</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-10 ml-4 mr-4 md:ml-10">
        {
          loading ?(
                
            filteredItems.length===0 ? (
              //if the search input is empty
                category===""?(
                 //if the category is empty
                      
                    //displaying the data based on the price  
                    data.filter((item)=>item.price<=sliderinput).length>0 ? (
                         data.filter((item)=>item.price<=sliderinput).map((item) => (
                          <Itemcard
                            key={item.id}
                            id={item.id}
                            url={item.url}
                            name={item.name}
                            price={item.price}
                            des={item.desc}
                            tag={item.tags}
                          />
                        ))
                    ):(
                      <Emptypage/>
                    )
                    ):(
                      // if the user selected some caretory but the search is empty

                      data.filter((item)=>item.tags===category && item.price<=sliderinput).length>0 ?(
                        data.filter((item)=>item.tags===category && item.price<=sliderinput).map((item) => (
                          <Itemcard
                            key={item.id}
                            id={item.id}
                            url={item.url}
                            name={item.name}
                            price={item.price}
                            des={item.desc}
                            tag={item.tags}
                          />
                        ))
                          
                      ):(
                        <Emptypage/>

                      )
                    )
                    
                    )
  
                
            :(
              //if the search input is not empty

              category==="" ?(
                 //if the category is empty
                 filteredItems.filter((item)=>item.price<=sliderinput).length>0 ?(
                  filteredItems.filter((item)=>item.tags===category && item.price<=sliderinput).map((item) => (
                    <Itemcard
                      key={item.id}
                      id={item.id}
                      url={item.url}
                      name={item.name}
                      price={item.price}
                      des={item.desc}
                      tag={item.tags}
                    />
                  ))
                 ):
                 (
                    <Emptypage/>
                 )

              ):(
                //if the categoty is not empty
                filteredItems.filter((item)=>item.tags===category && item.price<=sliderinput).length>0 ?(
                  filteredItems.filter((item)=>item.tags===category && item.price<=sliderinput).map((item) => (
                    <Itemcard
                      key={item.id}
                      id={item.id}
                      url={item.url}
                      name={item.name}
                      price={item.price}
                      des={item.desc}
                      tag={item.tags}
                    />
                  ))
                 ):
                 (
                    <Emptypage/>
                 )

              )
               
            )
          ) : 
          (
            
          <PropagateLoader color="#000" className="flex justify-center" />

          )
        }
        {/* {loading ? (
          //if the search is not empty
          filteredItems.length===0 ? (
            searchInput.length!==0 ? <Emptypage/>:(
            category === "" ? (
              sliderinput === mini ? (
                //printwholedata
                data.map((item) => (
                  <Itemcard
                    key={item.id}
                    id={item.id}
                    url={item.url}
                    name={item.name}
                    price={item.price}
                    des={item.desc}
                    tag={item.tags}
                  />
                ))
              ) : (
                
                data
                  .filter((item) => item.price <= sliderinput).length>0?(
                  data
                  .filter((item) => item.price <= sliderinput).map((item) => (
                    <Itemcard
                      key={item.id}
                      id={item.id}
                      url={item.url}
                      name={item.name}
                      price={item.price}
                      des={item.desc}
                      tag={item.tags}
                    />
                  ))):<Emptypage/>
              )
            ) : sliderinput === "" ? (
              //filter by category
              data
                .filter((item) => item.tags === category).length>0 ?(
                  data
                  .filter((item) => item.tags === category).map((item) => (
                  <Itemcard
                    key={item.id}
                    id={item.id}
                    url={item.url}
                    name={item.name}
                    price={item.price}
                    des={item.desc}
                    tag={item.tags}
                  />
                ))):<Emptypage/>
            ) : (
              //filterbyprice and category
              data
                .filter(
                  (item) => item.price <= sliderinput && item.tags === category
                )
                .map((item) => (
                  <Itemcard
                    key={item.id}
                    id={item.id}
                    url={item.url}
                    name={item.name}
                    price={item.price}
                    des={item.desc}
                    tag={item.tags}
                  />
                ))
            )
          )) : (
            //if the search is not empty
              category === "" ? (
                sliderinput === mini ? (
                  //printwholedata
                  filteredItems.map((item) => (
                    <Itemcard
                      key={item.id}
                      id={item.id}
                      url={item.url}
                      name={item.name}
                      price={item.price}
                      des={item.desc}
                      tag={item.tags}
                    />
                  ))
                ) : (
                  filteredItems
                    .filter((item) => item.price <= sliderinput)
                    .map((item) => (
                      <Itemcard
                        key={item.id}
                        id={item.id}
                        url={item.url}
                        name={item.name}
                        price={item.price}
                        des={item.desc}
                        tag={item.tags}
                      />
                    ))
                )
              ) : sliderinput === "" ? (
                //filter by category
                filteredItems
                  .filter((item) => item.tags === category)
                  .map((item) => (
                    <Itemcard
                      key={item.id}
                      id={item.id}
                      url={item.url}
                      name={item.name}
                      price={item.price}
                      des={item.desc}
                      tag={item.tags}
                    />
                  ))
              ) : (
                //filterbyprice and category
                filteredItems
                  .filter(
                    (item) => item.price <= sliderinput && item.tags === category
                  )
                  .map((item) => (
                    <Itemcard
                      key={item.id}
                      id={item.id}
                      url={item.url}
                      name={item.name}
                      price={item.price}
                      des={item.desc}
                      tag={item.tags}
                    />
                  ))
              )
            

            
          )
        ) : (
          <PropagateLoader color="#36d7b7" className="flex justify-center" />
        )} */}
      </div>
    </div>
  );
};

export default Menwear;
