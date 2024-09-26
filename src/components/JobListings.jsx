import SingleJob from "./SingleJob";
import Spinner from "./Spinner";
import fetchJobHook from "../hooks/useJobFetch";


const JobListings = ({ isHome = false }) => {

  const {data, loading} = isHome ? fetchJobHook("http://localhost:3100/jobs?_limit=3") : fetchJobHook('http://localhost:3100/jobs')

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