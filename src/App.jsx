import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFound from "./pages/NotFound";
import JobPage from "./pages/JobPage";
import AddJob from "./pages/AddJob";
import EditJobPage from "./pages/EditJobPage";



function App() {
  const url = 'http://localhost:3100/jobs';

  // Add New Job
  const addNewJob = async (job) => {
    const fetchNewJob = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(job)
    });
    return;
  }

  // Delete Job

  const deleteJob = async (id) => {
    const fetchJobData = await fetch(`http://localhost:3100/jobs/${id}`, {
      method: "DELETE"
    });
    return
  }

  // Edit Job
  const updateJob = (job) =>{
    const fetchJobData = fetch(`http://localhost:3100/jobs/${job.id}`, {
      method: "PUT", 
      headers: {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(job)
    })
    return
  }



  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/addjob" element={<AddJob submitNewJob={addNewJob} />} />
        <Route path="/editjob/:id" element={<EditJobPage  updateJob={updateJob} />} />
        <Route path="/jobDetails/:id" element={<JobPage deleteJob={deleteJob} />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
