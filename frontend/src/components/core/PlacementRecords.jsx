import React, { useEffect, useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import axios from 'axios';
import { Chart, registerables } from 'chart.js';
import logo from '../../assets/images/logo.jpeg';

Chart.register(...registerables);

const PlacementRecords = () => {
  const handlePlacementRecordsClick = () => {
    window.open('https://www.akgec.ac.in/placements/placement-records/', '_blank');
  };

  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/dashboard/dashboard-stats`);
        setStats(response.data.data);
      } catch (error) {
        console.error('Error fetching placement stats:', error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const preprocessPlacementData = (data) => {
    const startYear = 2024;
    const currentYear = new Date().getFullYear();
    const yearsRange = Array.from({ length: currentYear - startYear + 1 }, (_, i) => startYear + i);

    const dataMap = new Map(data.map(item => [item._id, item.totalPlaced || item.totalApplications || 0]));

    return yearsRange.map(year => ({
      _id: year,
      count: dataMap.get(year) || 0,
    }));
  };

  const processedPlacementData = preprocessPlacementData(stats?.studentPlacedPerYear || []);

  const linedChartData = {
    labels: processedPlacementData.map(item => item._id),
    datasets: [
      {
        label: 'Students Placed',
        data: processedPlacementData.map(item => item.count),
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        tension: 0.3,
      },
    ],
  };

  const linedChartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          precision: 0,
          callback: value => (Number.isInteger(value) ? value : null),
        },
      },
      x: {
        title: {
          display: true,
          text: 'Year',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    maintainAspectRatio: false,
  };

  const jobApplicationsChartData = {
    labels: stats?.studentJobEnrollments.map(item => item.studentName),
    datasets: [
      {
        label: 'Jobs Enrolled',
        data: stats?.studentJobEnrollments.map(item => item.jobCount),
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const jobApplicationsChartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          precision: 0,
          callback: value => (Number.isInteger(value) ? value : null),
        },
        title: {
          display: true,
          text: 'Number of Jobs Enrolled',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Students',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    maintainAspectRatio: false,
  };

  const barChartData = {
    labels: stats?.companyData?.map(item => item.companyName) || [],
    datasets: [
      {
        label: 'Number of Jobs',
        data: stats?.companyData?.map(item => item.jobCount) || [],
        backgroundColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: { display: true, text: 'Company' },
        ticks: { maxRotation: 90, minRotation: 0 },
      },
      y: {
        title: { display: true, text: 'Number of Jobs' },
      },
    },
  };

  return (
    <div className="p-4 md:p-10">

      {loading ? (
        <div className="w-full h-screen flex flex-col items-center justify-center">
          <img src={logo} alt="logo" className="w-32 h-32 md:w-48 md:h-48" />
          <p className="font-semibold text-xl md:text-2xl mt-6 text-center">
            Please wait while the page is loading...
          </p>
        </div>
      ) : (
        <>
          <h1 className="text-center text-2xl md:text-4xl font-bold mb-8">Placement Records</h1>
          <div className="flex flex-col gap-8 items-center">
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg w-full max-w-[90%] md:max-w-[60%] h-[350px] hover:scale-105 hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-center">Students Placed per Year</h3>
              <div className="h-[250px]">
                <Line data={linedChartData} options={linedChartOptions} />
              </div>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg w-full max-w-[90%] md:max-w-[60%] h-[350px] hover:scale-105 hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-center">Job Applications per Year</h3>
              <div className="h-[250px]">
                <Line data={jobApplicationsChartData} options={jobApplicationsChartOptions} />
              </div>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg w-full max-w-[90%] md:max-w-[60%] h-[350px] hover:scale-105 hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-center">Jobs Posted by Each Company</h3>
              <div className="h-[250px]">
                <Bar data={barChartData} options={barChartOptions} />
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-3 text-center">
            <p className="text-sm md:text-base">Want to see our past Placement Records?</p>
            <button
              onClick={handlePlacementRecordsClick}
              className="hover:bg-customDarkBlue text-customDarkBlue rounded hover:text-white px-4 py-2 border border-customDarkBlue transition-all duration-300 hover:scale-105"
            >
              Past Placement Records
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PlacementRecords;
