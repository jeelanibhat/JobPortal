import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ViewAll from "../components/ViewAll"
import Spinner from "../components/Spinner";
import { FaMapMarker } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const JobPage = ({ deleteJob }) => {
    const navigate = useNavigate();
    const [jobData, setJobData] = useState(null); // Initialize as null to check if data is loaded
    const { id } = useParams(); // Get 'id' from URL params
    const [loading, setLoading] = useState(true);

    // Convert the id from URL to an integer
    // const adjustedId = parseInt(id, 10); // Specify radix to avoid NaN

    useEffect(() => {
        const getJobDetails = async () => {
            try {
                const fetchJobData = await fetch(`http://localhost:3100/jobs/${id}`);
                const response = await fetchJobData.json();
                setJobData(response);
            } catch (error) {
                console.log("error:", error.message)
            } finally {
                setLoading(false)
            }

        }
        getJobDetails();
    }, []);


    // If jobData is null, return a fallback message
    if (!jobData) {
        return <Spinner loading={loading} />
    }

    // Delete Job

    const handleDelete = (jobId) => {
        const confirm = window.confirm("Are you sure you want to Delete this Job ?");
        if (!confirm) return

        deleteJob(jobId);
        navigate("/jobs")

    }

    return (
        <>
            <section>
                <div className="container m-auto py-6 px-6">
                    <Link
                        to="/jobs"
                        className="text-indigo-500 hover:text-indigo-600 flex items-center"
                    >
                        <i className="fas fa-arrow-left mr-2"></i> Back to Job Listings
                    </Link>
                </div>
            </section>

            <section className="bg-indigo-50">
                <div className="container m-auto py-10 px-6">
                    <div className="flex gap-6">
                        <main>
                            <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                                <div className="text-gray-500 mb-4">{jobData.type || "Job Type"}</div>
                                <h1 className="text-3xl font-bold mb-4">
                                    {jobData.title || "Job Title"}
                                </h1>
                                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                                    <FaMapMarker className="text-orange-700 mr-2" />
                                    <p className="text-orange-700">{jobData.location || "Location"}</p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                <h3 className="text-indigo-800 text-lg font-bold mb-6">Job Description</h3>
                                <p className="mb-4">
                                    {jobData.description || "Job description goes here."}
                                </p>
                                <h3 className="text-indigo-800 text-lg font-bold mb-2">Salary</h3>
                                <p className="mb-4">${jobData.salary || "Salary info"}</p>
                            </div>
                        </main>

                        <aside>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold mb-6">Company Info</h3>
                                <h2 className="text-2xl">{jobData?.company?.name || "Company Name"}</h2>
                                <p className="my-2">
                                    {jobData?.company?.description || "Company Description"}
                                </p>
                                <hr className="my-4" />
                                <h3 className="text-xl">Contact Email: {jobData?.company?.contactEmail || "Contact Email"}</h3>
                                <h3 className="text-xl">Contact Phone:{jobData?.company?.contactPhone}</h3>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                                <a
                                    href="/add-job.html"
                                    className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                                >
                                    Edit Job
                                </a>
                                <button
                                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                                    onClick={() => { handleDelete(jobData.id) }}
                                >
                                    Delete Job
                                </button>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <ViewAll />
        </>
    );
};

export default JobPage;
