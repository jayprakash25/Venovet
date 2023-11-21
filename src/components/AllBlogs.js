import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../Firebase";
import { collection, getDocs, query } from "firebase/firestore";

export default function AllBlogs() {
  const navigate = useNavigate();

  const [Blogs, setBlogs] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(db, "BLOGS"));
        const querySnapshot = await getDocs(q);
        const blogsData = [];
        querySnapshot.forEach((doc) => {
          blogsData.push(doc.data());
          console.log(doc.data());
        });
        setBlogs(blogsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      {Blogs?.map((_, index) => {
        return (
          <React.Fragment key={index}>
            <div
              onClick={() => {
                navigate(`/ReadFull/${_.Tittle1}`);
              }}
              className="flex flex-col justify-start gap-5 p-6 shadow-md cursor-pointer lg:max-w-4xl lg:flex-row md:items-center"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div>
                <img
                  src={_.Blogimage}
                  alt={_.Blogimage + index}
                  className="rounded-lg"
                />
              </div>
              <div className="space-y-3 text-justify">
                <h1 className="text-[#ff602b] font-semibold text-lg">
                  {_.Tittle1}
                </h1>
                <h2 className="text-[#777777] font-bold text-justify">
                  {_.Tittle2}
                </h2>
                <p className="text-[#777777] text-justify">{_.Para1}</p>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
