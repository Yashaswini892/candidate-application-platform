// import React, { useEffect, useState } from 'react';

// function JobList() {
//   const [jobs, setJobs] = useState([]);
//   const [totalCount, setTotalCount] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const myHeaders = new Headers();
//         myHeaders.append("Content-Type", "application/json");

//         const body = JSON.stringify({
//           "limit": 10,
//           "offset": 0
//         });

//         const requestOptions = {
//           method: "POST",
//           headers: myHeaders,
//           body
//         };

//         const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
//         const data = await response.json();

//         if (data && data.jdList && Array.isArray(data.jdList)) {
//           setJobs(data.jdList);
//           setTotalCount(data.jdList.length);
//         } else {
//           console.error("Invalid data format:", data);
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array ensures useEffect runs only once, equivalent to componentDidMount
// }

// export default jobs;


// src/data/index.js

// Fetch data and store it in the `jobs` variable
const fetchJobs = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      const body = JSON.stringify({
        "limit": 947,
        "offset": 0
      });
  
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body
      };
  
      const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
      const data = await response.json();
  
      if (data && data.jdList && Array.isArray(data.jdList)) {
        console.log("Invalid data format:", data);
        return data.jdList;
      } else {
        console.error("Invalid data format:", data);
        return [];
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };
  
  // Export only the `jobs` variable
  export default fetchJobs;
  