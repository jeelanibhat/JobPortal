import Hero from "../components/Hero"
import JobListings from "../components/JobListings"
import JobType from "../components/JobType"
import ViewAll from "../components/ViewAll"

const HomePage = () => {
  return (
    <div>
        <Hero />
        <JobType />
        <JobListings isHome={true} />
        <ViewAll />
    </div>
  )
}

export default HomePage