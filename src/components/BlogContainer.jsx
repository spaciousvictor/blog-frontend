// import { React, useEffect, useState, } from "react";
// import BlogCard from "./BlogCard";
// import axios from "axios";

// const BlogContainer = () => {
//   const [blogs, setBlogs] = useState ([]);
//   const [Loading, setloading] = useState (true)

//   useEffect(() => {
//     axios.get("http//127.0.0.1:8003/blogs/recent")
//      .then(res => {
//        console.log(res.data)
//        setBlogs(res.data)
//        setloading(false)
//       })
//      .catch(err => console.Console.log(err.message));
//   }, []);

//   return (
//     <div className="container mx-auto mt-8 mb-8 px-4 flex flex-wrap justify-evenly">
//       {blogs.map(blog => (
//         <BlogCard key={blog.id} blog={blog} />
//       ))}
//     </div>
//   );
// };

// export default BlogContainer;


import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import axios from "axios";
import Spinner from "./spinner";

const BlogContainer = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://127.0.0.1:8003/blogs/recent")
      .then(res => {
        console.log(res.data);
        setBlogs(res.data);
        setLoading(false);
      })
      .catch(err => console.log(err.message));
  }, []);

  return (
    <div className="container mx-auto mt-8 mb-8 px-4 flex flex-wrap justify-evenly">
      <Spinner loading={loading} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        blogs.map(blog => (
          <BlogCard key={blog.id} blog={blog} />
        ))
      )}
    </div>
  );
};

export default BlogContainer;
