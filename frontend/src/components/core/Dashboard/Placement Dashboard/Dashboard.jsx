import React, { useEffect, useState } from 'react';
import { FaBell } from 'react-icons/fa';
import { Line, Bar } from 'react-chartjs-2';
import axios from 'axios';
import { Chart, registerables } from 'chart.js';
import { useSelector } from 'react-redux';
import logo from "../../../../assets/images/logo.jpeg";
import { MdAdminPanelSettings } from "react-icons/md";


// Register the necessary components
Chart.register(...registerables);

const DashboardLayout = () => {
  const [loading , setLoading] = useState(false) 
  const [stats, setStats] = useState(null);
  const [salaryStats, setSalaryStats] = useState(null);;
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  const { user } = useSelector((state) => state.profile)

  useEffect(() => {
    // Fetch the dashboard data
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/dashboard/dashboard-stats`);
        setStats(response.data.data);
      } catch (error) {
        console.error('Error fetching dashboard stats:', error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Fetch the dashboard data
    const fetchSalaryData = async () => {
      setLoading(true);
      try {
        // const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/dashboard/averageSalary`);
        const response = [
          {
              "year": 2000,
              "averagePackage": 220000
          },
          {
              "year": 2001,
              "averagePackage": 225000
          },
          {
              "year": 2002,
              "averagePackage": 210000
          },
          {
              "year": 2003,
              "averagePackage": 230000
          },
          {
              "year": 2004,
              "averagePackage": 245000
          },
          {
              "year": 2005,
              "averagePackage": 250000
          },
          {
              "year": 2006,
              "averagePackage": 260000
          },
          {
              "year": 2007,
              "averagePackage": 270000
          },
          {
              "year": 2008,
              "averagePackage": 280000
          },
          {
              "year": 2009,
              "averagePackage": 275000
          },
          {
              "year": 2010,
              "averagePackage": 290000
          },
          {
              "year": 2011,
              "averagePackage": 310000
          },
          {
              "year": 2012,
              "averagePackage": 320000
          },
          {
              "year": 2013,
              "averagePackage": 330000
          },
          {
              "year": 2014,
              "averagePackage": 340000
          },
          {
              "year": 2015,
              "averagePackage": 350000
          },
          {
              "year": 2016,
              "averagePackage": 370000
          },
          {
              "year": 2017,
              "averagePackage": 380000
          },
          {
              "year": 2018,
              "averagePackage": 400000
          },
          {
              "year": 2019,
              "averagePackage": 420000
          },
          {
              "year": 2020,
              "averagePackage": 410000
          },
          {
              "year": 2021,
              "averagePackage": 430000
          },
          {
              "year": 2022,
              "averagePackage": 440000
          },
          {
              "year": 2023,
              "averagePackage": 450000
          },
          {
              "year": 2024,
              "averagePackage": 460000
          }
      ]
      
        console.log(response?.data)
        // setSalaryStats(response?.data)
        setSalaryStats(response)
    } catch (error) {
        console.error("Error fetching average package data", error);
    }
      setLoading(false);
    };
    fetchSalaryData();
  }, []);

  // Line Chart Options for integer-only y-axis
  const lineChartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          precision: 0, // Ensure no decimal values are shown
          callback: function(value) {
            if (Number.isInteger(value)) {
              return value;
            }
          }
        }
      },
      x: {
        title: {
          display: true,
          text: 'Year',
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'top'
      }
    },
    maintainAspectRatio: false
  };
  
  // Line Chart Data with preprocessing for 2024 as the starting year
  const preprocessStudentData = (data) => {
    const startYear = 2023;
    const currentYear = new Date().getFullYear();
    const yearsRange = Array.from({ length: currentYear - startYear + 1 }, (_, i) => startYear + i);
  
    const dataMap = new Map(data.map(item => [item._id, item.count]));
    
    return yearsRange.map(year => ({
      _id: year,
      count: dataMap.get(year) || 0,
    }));
  };
  
  // Apply preprocessing to stats.studentData before setting up chart data
  const processedStudentData = preprocessStudentData(stats?.studentData || []);
  
  const lineChartData = {
    labels: processedStudentData.map(item => item._id),
    datasets: [
      {
        label: 'Students Enrolled',
        data: processedStudentData.map(item => item.count),
        fill : true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        tension: 0.3,
      },
    ],
  };

  // Preprocess student placed per year data for the line chart
  const preprocessPlacementData = (data) => {
    // console.log(data)
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

  // Line chart data for students placed per year
  const linedChartData = {
    labels: processedPlacementData.map(item => item._id),
    datasets: [
      {
        label: 'Students Placed',
        data: processedPlacementData.map(item => item.count),
        fill : true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        tension: 0.3,
      },
    ],
  };

  // Line Chart Options for integer-only y-axis
  const linedChartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          precision: 0,
          callback: function(value) {
            if (Number.isInteger(value)) {
              return value;
            }
          }
        }
      },
      x: {
        title: {
          display: true,
          text: 'Year',
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'top'
      }
    },
    maintainAspectRatio: false
  };

  // Job Applications per Year Chart Data
  const jobApplicationsChartData = {
    labels: stats?.studentJobEnrollments.map(item => item.studentName), // Student names
    datasets: [
      {
        label: 'Jobs Enrolled',
        data: stats?.studentJobEnrollments.map(item => item.jobCount), // Job counts per student
        fill : true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        // tension: 0.3,
      },
    ],
  };
  
  // Chart Options for Integer Y-Axis
  const jobApplicationsChartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          precision: 0, // Ensure integer values only on y-axis
          callback: function(value) {
            if (Number.isInteger(value)) {
              return value;
            }
          }
        },
        title: {
          display: true,
          text: 'Number of Jobs Enrolled'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Students'
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'top'
      }
    },
    maintainAspectRatio: false
  };
  
 
  

  // Bar Chart Data for jobs posted by each company
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

  // Bar Chart Options
  const barChartOptions = {
    responsive: true,  // Ensures responsiveness
    maintainAspectRatio: false,  // Allows the chart to fill the container
    scales: {
      x: {
        title: { display: true, text: 'Company'},
        ticks: { maxRotation: 90, minRotation: 0 },
      },
      y: {
        title: { display: true, text: 'Number of Jobs' },
      }
    }
  };

   // Prepare data for Average Salary line chart
   console.log(salaryStats)
   const averageSalaryChartData = {
    labels: salaryStats?.map(data => data?.year) || [],
    datasets: [
      {
        label: 'Average Salary Per Year',
        data: salaryStats?.map(data => data?.averagePackage) || [],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  // Define chart options (customize as needed for consistency)
  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          precision: 0, // Ensure integer values only on y-axis
          callback: function(value) {
            if (Number.isInteger(value)) {
              return value;
            }
          }
        },
        title: {
          display: true,
          text: 'Average Salary'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Year'
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'top'
      }
    },
    maintainAspectRatio: false
  };
  

  return (
    <>
      {
        loading ? (
          <div className='w-full h-screen flex flex-col items-center justify-center'>
            <img src={logo} alt="logo"/>
            <p className='font-semibold text-2xl mt-6'>Please Wait while the page is loading...</p>
          </div>
        ) : (
          <div className="flex flex-col p-6">
            {/* Header */}
            <header className="flex p-4 rounded-xl shadow-lg bg-white items-center justify-between mb-6">
              
              <img src = {logo} alt = 'logo' className='w-[150px] '/>
              
              <div className='text-xl flex text-gray-700 items-center gap-2 '>
                <MdAdminPanelSettings className='text-4xl'/>
                {
                  user?.firstName + " " + user?.lastName
                }
              </div>
              
              {/* Date and Notification */}
              <div className="flex items-center gap-4">
                <p>{currentDate}</p>
                <FaBell className="text-xl text-gray-500 cursor-pointer" />
              </div>
            </header>

            {/* Charts Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Line Chart for Students Enrolled per Year */}
              <div className="bg-white p-6 rounded-xl shadow-lg h-[300px]">
                <h3 className="text-xl font-semibold mb-4">Students Enrolled per Year</h3>
                <div className="h-[200px]">
                  {/* <Line data={lineChartData} options={{ maintainAspectRatio: false }} /> */}
                  <Line data={lineChartData} options={lineChartOptions} />
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg h-[300px]">
                <h3 className="text-xl font-semibold mb-4">Students Placed per Year</h3>
                <div className="h-[200px]">
                  <Line data={linedChartData} options={linedChartOptions} />
                </div>
              </div>
            </section>
            {/* Line Chart for Job Applications per Year */}
            <div className="bg-white mt-6 p-6 rounded-xl shadow-lg h-[300px]">
              <h3 className="text-xl font-semibold mb-4">Job Applications per Year</h3>
              <div className="h-[200px]">
              {/* <Line data={jobApplicationsChartData} options={{ maintainAspectRatio: false }} /> */}
              <Line data={jobApplicationsChartData} options={jobApplicationsChartOptions} />
              </div>
            </div>

            {/* Bar Chart for Jobs Posted by Companies */}
            <section className="bg-white p-6 rounded-xl shadow-lg h-[300px] mt-6">
              <h3 className="text-xl font-semibold mb-4">Jobs Posted by Each Company</h3>
              <div className="h-[200px]">
                <Bar data={barChartData} options={barChartOptions} className='h-full w-full'/>
              </div>
            </section>
            
            <section className="bg-white p-6 rounded-xl shadow-lg h-[300px] mt-6">
              <h3 className="text-xl font-semibold mb-4">Average Salary Offered per Year</h3>
              <div className="h-[200px]">
                <Line data={averageSalaryChartData} options={chartOptions} />
              </div>
            </section>

          </div>
        )
      }
    </>
    
  );
};

export default DashboardLayout;
