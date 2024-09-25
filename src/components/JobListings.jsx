import SingleJob from "./SingleJob";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";


const JobListings = ({ isHome = false }) => {
 
  //  const recentJobs = isHome ? jobs.slice(0,3) : jobs ;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const url = isHome ? 'http://localhost:3100/jobs?_limit=3' : 'http://localhost:3100/jobs';
  useEffect(() => {

    const getJobsData = async () => {
      try {
        const fetchJobs = await fetch(url);
        const response = await fetchJobs.json();
        console.log("response", response)
        setData(response)
      } catch (error) {
        console.log("Error:", error.message)
      } finally {
        setLoading(false);
      }

    }

    getJobsData();
  }, [])

  if (loading) {
    return (
      <Spinner loading={loading} />
    )
  }

  return (

    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {data?.map((jobItem) => {
            return (
              <SingleJob key={jobItem.id} jobItem={jobItem} />
            )
          })}




        </div>
      </div>
    </section>
  )
}

export default JobListings