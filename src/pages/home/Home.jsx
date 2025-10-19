import React, { useState } from 'react';
import { logoutUser } from '../../reduxToolKit/userSlice'
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Home = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");

  const logoutHandler = () => {
    dispatch(logoutUser())
    navigate("/login")
    toast.success("User Logout Successfully")
  }

  // 🔹 1. Button click se file input khul jaye
  const handleButtonClick = () => {
    document.getElementById("fileInput").click();
  };

  // 🔹 2. File select hone ke baad state update
  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;
    setFile(selectedFile);
    setFileName(selectedFile.name);

    // Optional: confirmation
    toast.info("Uploading file to Cloudinary...");

    // 🔹 3. Upload file to Cloudinary
    const data = new FormData();
    data.append("file", selectedFile);
    data.append("upload_preset", "heakathone"); // Cloudinary preset
    data.append("cloud_name", "diiftodnk");

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/diiftodnk/image/upload",
        data
      );

      const imageUrl = res.data.secure_url;
      console.log("Cloudinary URL:", imageUrl);
      toast.success("Uploaded successfully!");

      // 🔹 4. Send image URL to backend (MongoDB me save karne ke liye)
      // await axios.post("http://localhost:5000/api/upload", { imageUrl });

    } catch (err) {
      console.log("Upload Error:", err);
      toast.error("Upload failed!");
    }
  };

  return (
    <div className="flex h-[calc(100vh-60px)] bg-[#f8fafc]">

      {/* ===== Sidebar ===== */}
      <aside className="w-[250px] bg-[#1e293b] text-white flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold text-center py-4 border-b border-gray-600">
            Dashboard
          </h2>

          <ul className="mt-4 flex flex-col gap-2 px-4">
            <li className="py-2 px-3 rounded-md hover:bg-[#334155] transition-all cursor-pointer">
              📄 My Reports
            </li>
            <li className="py-2 px-3 rounded-md hover:bg-[#334155] transition-all cursor-pointer">
              📤 Upload Report
            </li>
            <li className="py-2 px-3 rounded-md hover:bg-[#334155] transition-all cursor-pointer">
              💬 AI Insights
            </li>
            <li className="py-2 px-3 rounded-md hover:bg-[#334155] transition-all cursor-pointer">
              ⚙️ Settings
            </li>
          </ul>
        </div>

        <div className="text-center mb-4">
          <button onClick={logoutHandler} className="cursor-pointer px-4 py-2 rounded-md bg-gradient-to-r from-[#3b82f6] to-[#38bdf8] shadow-[0_0_8px_rgba(59,130,246,0.5)] hover:shadow-[0_0_15px_rgba(59,130,246,0.8)] transition-all duration-300 hover:-translate-y-0.5">
            Logout
          </button>
        </div>
      </aside>

      {/* ===== Main Content ===== */}
      <main className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-2xl font-bold text-[#1e293b] mb-4">
          Welcome to HealthMate Dashboard 👋
        </h1>

        {/* ===== Overview Cards ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-gray-500 text-sm">Reports Uploaded</h2>
            <p className="text-3xl font-semibold text-[#3b82f6] mt-2">12</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-gray-500 text-sm">AI Insights Generated</h2>
            <p className="text-3xl font-semibold text-[#38bdf8] mt-2">8</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-gray-500 text-sm">Pending Reports</h2>
            <p className="text-3xl font-semibold text-[#f59e0b] mt-2">3</p>
          </div>
        </div>

        {/* ===== Upload Section ===== */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-[#1e293b] mb-3">
            Upload New Report
          </h2>
          <p className="text-gray-600 mb-4">
            Upload your medical report to get instant AI-powered insights in English & Roman Urdu.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 items-center">
            {/* Hidden file input */}
            <input
              type="file"
              id="fileInput"
              accept="image/*, .pdf"
              className="hidden"
              onChange={handleFileChange}
            />

            {/* Visible text field (optional display filename) */}
            <input
              type="text"
              readOnly
              value={fileName}
              placeholder="No file selected"
              className="border border-gray-300 rounded-md px-3 py-2 w-full sm:w-[70%] text-sm cursor-default bg-gray-50"
            />

            {/* Upload button */}
            <button
              onClick={handleButtonClick}
              className="px-4 py-2 w-full cursor-pointer sm:w-auto rounded-md text-[#e2e8f0] bg-gradient-to-r from-[#3b82f6] to-[#38bdf8] shadow-[0_0_8px_rgba(59,130,246,0.5)] hover:shadow-[0_0_15px_rgba(59,130,246,0.8)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Upload & Analyze
            </button>
          </div>

        </div>

        {/* ===== Recent Reports ===== */}
        <div className="bg-white p-6 rounded-xl shadow-md mt-6">
          <h2 className="text-xl font-semibold text-[#1e293b] mb-3">
            Recent Reports
          </h2>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-2">#</th>
                <th className="py-2">Report Name</th>
                <th className="py-2">Date</th>
                <th className="py-2">AI Summary</th>
                <th className="py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-2">1</td>
                <td className="py-2">CBC Report</td>
                <td className="py-2">18 Oct 2025</td>
                <td className="py-2 text-gray-500">Hemoglobin slightly low...</td>
                <td className="py-2 text-center">
                  <button className="px-3 py-1 rounded-md text-[#e2e8f0] bg-gradient-to-r from-[#3b82f6] to-[#38bdf8] text-sm shadow hover:shadow-lg transition">
                    View
                  </button>
                </td>
              </tr>

              <tr className="border-b hover:bg-gray-50">
                <td className="py-2">2</td>
                <td className="py-2">Lipid Profile</td>
                <td className="py-2">10 Oct 2025</td>
                <td className="py-2 text-gray-500">Cholesterol normal range...</td>
                <td className="py-2 text-center">
                  <button className="px-3 py-1 rounded-md text-[#e2e8f0] bg-gradient-to-r from-[#3b82f6] to-[#38bdf8] text-sm shadow hover:shadow-lg transition">
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>

    </div>
  );
};

export default Home;
